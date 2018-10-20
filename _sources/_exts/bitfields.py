# -*- coding: utf-8 -*-
"""
    bitfields
    ~~~~~~~~~~~~~~~~~~~~~~~
    Bit-fields image converter extension for Sphinx, based on the bitfields_sphinx extension
    :copyright: Copyright 2007-2018 by the Sphinx team, see AUTHORS.
    :license: BSD, see LICENSE for details.
"""

import re
import codecs
import posixpath
from os import path, remove
from subprocess import Popen, PIPE
from hashlib import sha1

from six import text_type

from docutils import nodes
from docutils.parsers.rst import Directive, directives
from docutils.statemachine import ViewList

import sphinx
from sphinx.errors import SphinxError
from sphinx.locale import _, __
from sphinx.util import logging
from sphinx.util.i18n import search_image_for_language
from sphinx.util.osutil import ensuredir, ENOENT, EPIPE, EINVAL

if False:
    # For type annotation
    from typing import Any, Dict, List, Tuple  # NOQA
    from sphinx.application import Sphinx  # NOQA

logger = logging.getLogger(__name__)


class BitfieldsError(SphinxError):
    category = 'Bitfields error'


class bitfields(nodes.General, nodes.Inline, nodes.Element):
    '''Base class for bitfields node'''
    pass


def figure_wrapper(directive, node, caption):
    # type: (Directive, nodes.Node, unicode) -> nodes.figure
    figure_node = nodes.figure('', node)
    if 'align' in node:
        figure_node['align'] = node.attributes.pop('align')

    parsed = nodes.Element()
    directive.state.nested_parse(ViewList([caption], source=''),
                                 directive.content_offset, parsed)
    caption_node = nodes.caption(parsed[0].rawsource, '',
                                 *parsed[0].children)
    caption_node.source = parsed[0].source
    caption_node.line = parsed[0].line
    figure_node += caption_node
    return figure_node


def align_spec(argument):
    # type: (Any) -> bool
    return directives.choice(argument, ('left', 'center', 'right'))


class Bitfields(Directive):
    """
    Directive to insert HDL symbol.
    """
    has_content = True
    required_arguments = 0
    optional_arguments = 1
    final_argument_whitespace = False
    option_spec = {
        'alt': directives.unchanged,
        'align': align_spec,
        'caption': directives.unchanged,
        'bitfields_cmd': directives.unchanged,
        'vspace': directives.unchanged,
        'hspace': directives.unchanged,
        'lanes': directives.unchanged,
        'bits': directives.unchanged,
        'bigendian': directives.unchanged,
    }

    def run(self):
        # type: () -> List[nodes.Node]
        env = self.state.document.settings.env
        argument = search_image_for_language(self.arguments[0], env)
        rel_filename, filename = env.relfn2path(argument)
        env.note_dependency(rel_filename)
        node = bitfields()
        node['filename'] = filename
        node['options'] = {}
        if 'bitfields_cmd' in self.options:
            node['options']['bitfields_cmd'] = self.options['bitfields_cmd']
        if 'alt' in self.options:
            node['alt'] = self.options['alt']
        if 'align' in self.options:
            node['align'] = self.options['align']

        if 'vspace' in self.options:
            node['options']['vspace'] = self.options['vspace']
        if 'hspace' in self.options:
            node['options']['hspace'] = self.options['hspace']
        if 'lanes' in self.options:
            node['options']['lanes'] = self.options['lanes']
        if 'bits' in self.options:
            node['options']['bits'] = self.options['bits']
        if 'bigendian' in self.options:
            node['options']['bigendian'] = self.options['bigendian']
            
        if 'name' in self.options:
          node['options']['name'] = self.options['name']

        caption = self.options.get('caption')
        if caption:
            node = figure_wrapper(self, node, caption)

        self.add_name(node)
        return [node]



def render_symbol(self, filename, options, prefix='symbol', format='svg'):
    # type: (nodes.NodeVisitor, unicode, Dict, unicode, unicode) -> Tuple[unicode, unicode]
    """Render bitfields code into a PNG or SVG output file."""

    bitfields_cmd = options.get('bitfields_cmd', self.builder.config.bitfields_cmd)
    hashkey = (filename + str(options) + str(bitfields_cmd) +
               str(self.builder.config.bitfields_cmd_args)).encode('utf-8')

    # Use name option if present otherwise fallback onto SHA-1 hash
    name = options.get('name', sha1(hashkey).hexdigest())
    fname = '%s-%s.%s' % (prefix, name, format)
    relfn = posixpath.join(self.builder.imgpath, fname)
    outfn = path.join(self.builder.outdir, self.builder.imagedir, fname)

    if path.isfile(outfn):
        return relfn, outfn

    if (hasattr(self.builder, '_bitfields_warned_cmd') and
       self.builder._bitfields_warned_cmd.get(bitfields_cmd)):
        return None, None

    ensuredir(path.dirname(outfn))

    cmd_args = [bitfields_cmd]
    cmd_args.extend(self.builder.config.bitfields_cmd_args)
    cmd_args.extend(['--input', filename])
    if 'vspace' in options: cmd_args.extend(['--vspace', options['vspace']])
    if 'hspace' in options: cmd_args.extend(['--hspace', options['hspace']])
    if 'lanes' in options: cmd_args.extend(['--lanes', options['lanes']])
    if 'bits' in options: cmd_args.extend(['--bits', options['bits']])
    if 'bigendian' in options: cmd_args.extend(['--bigendian', 'true'])
    else: cmd_args.extend(['--bigendian', 'false'])
    try:
        if format == 'png':
            tempfile = outfn + ".svg"

            with open(tempfile, 'w') as outfd:
                p = Popen(cmd_args, stdout=outfd, stdin=PIPE, stderr=PIPE)
                p.wait()
                if p.returncode != 0:
                    raise BitfieldsError('bitfields exited with error %s' % p.stderr.read())
            convertCmd = ['convert', '-resize', str(options['hspace'] if 'hspace' in options else 640)+'x',tempfile, outfn]
            p = Popen(convertCmd, stdin=PIPE, stderr=PIPE)
            p.wait()
            remove(tempfile)
        elif format == 'pdf':
            tempfile = outfn + ".svg"

            with open(tempfile, 'w') as outfd:
                p = Popen(cmd_args, stdout=outfd, stdin=PIPE, stderr=PIPE)
                p.wait()
                if p.returncode != 0:
                    raise BitfieldsError('bitfields exited with error %s' % p.stderr.read())
            convertCmd = ['rsvg-convert', '-f', 'pdf', '-o', outfn, tempfile]
            p = Popen(convertCmd, stdin=PIPE, stderr=PIPE)
            p.wait()
            remove(tempfile)
        else:
            with open(outfn, 'w') as outfd:
                p = Popen(cmd_args, stdout=outfd, stdin=PIPE, stderr=PIPE)
                p.wait()
                if p.returncode != 0:
                    raise BitfieldsError('bitfields exited with error %s' % p.stderr.read())
    except OSError as err:
        if err.errno != ENOENT:   # No such file or directory
            raise
        logger.warning('bitfields command %r cannot be run (needed for bitfields '
                       'output), check the bitfields_cmd setting', bitfields_cmd)
        if not hasattr(self.builder, '_bitfields_warned_cmd'):
            self.builder._bitfields_warned_cmd = {}
        self.builder._bitfields_warned_cmd[bitfields_cmd] = True
        return None, None
    if p.returncode != 0:
        raise BitfieldsError('exited with error %s' % p.stderr.read())
    if not path.isfile(outfn):
        raise BitfieldsError('bitfields did not produce an output file')
    return relfn, outfn


def render_symbol_html(self, node, filename, options, prefix='symbol',
                    imgcls=None, alt=None):
    # type: (nodes.NodeVisitor, bitfields, unicode, Dict, unicode, unicode, unicode) -> Tuple[unicode, unicode]  # NOQA
    try:
        fname, outfn = render_symbol(self, filename, options, prefix, 'svg')
    except BitfieldsError as exc:
        logger.warning('bitfields filename %r: ' % filename + str(exc))
        raise nodes.SkipNode

    if fname is None:
        raise BitfieldsError('no file passed to bitfield')
    else:
        imgcss = imgcls and 'class="%s"' % imgcls or ''
        if 'align' in node:
            self.body.append('<div align="%s" class="align-%s">' % (node['align'], node['align']))
        self.body.append('<img src="%s" alt="%s" %s/>\n' % (fname, alt, imgcss))
        if 'align' in node:
            self.body.append('</div>\n')

    raise nodes.SkipNode


def html_visit_bitfields(self, node):
    # type: (nodes.NodeVisitor, bitfields) -> None
    render_symbol_html(self, node, node['filename'], node['options'])


def render_symbol_latex(self, node, filename, options, prefix='symbol'):
    # type: (nodes.NodeVisitor, bitfields, unicode, Dict, unicode) -> None
    try:
        fname, outfn = render_symbol(self, filename, options, prefix, 'pdf')
    except BitfieldsError as exc:
        logger.warning('bitfields filename %r: ' % filename + str(exc))
        raise nodes.SkipNode

    is_inline = self.is_inline(node)
    if is_inline:
        para_separator = ''
    else:
        para_separator = '\n'

    if fname is not None:
        post = None  # type: unicode
        if not is_inline and 'align' in node:
            if node['align'] == 'left':
                self.body.append('{')
                post = '\\hspace*{\\fill}}'
            elif node['align'] == 'right':
                self.body.append('{\\hspace*{\\fill}')
                post = '}'
        self.body.append('%s\\includegraphics[width=\\textwidth]{%s}%s' %
                         (para_separator, fname, para_separator))
        if post:
            self.body.append(post)

    raise nodes.SkipNode


def latex_visit_bitfields(self, node):
    # type: (nodes.NodeVisitor, bitfields) -> None
    render_symbol_latex(self, node, node['filename'], node['options'])


def render_symbol_texinfo(self, node, filename, options, prefix='symbol'):
    # type: (nodes.NodeVisitor, bitfields, unicode, Dict, unicode) -> None
    try:
        fname, outfn = render_symbol(self, filename, options, prefix, 'svg')
    except BitfieldsError as exc:
        logger.warning('bitfields filename %r: ' % filename + str(exc))
        raise nodes.SkipNode
    if fname is not None:
        self.body.append('@image{%s,,,[bitfields],svg}\n' % fname[:-4])
    raise nodes.SkipNode


def texinfo_visit_bitfields(self, node):
    # type: (nodes.NodeVisitor, bitfields) -> None
    render_symbol_texinfo(self, node, node['filename'], node['options'])


def text_visit_bitfields(self, node):
    # type: (nodes.NodeVisitor, bitfields) -> None
    if 'alt' in node.attributes:
        self.add_text(_('[symbol: %s]') % node['alt'])
    else:
        self.add_text(_('[symbol]'))
    raise nodes.SkipNode


def man_visit_bitfields(self, node):
    # type: (nodes.NodeVisitor, bitfields) -> None
    if 'alt' in node.attributes:
        self.body.append(_('[symbol: %s]') % node['alt'])
    else:
        self.body.append(_('[symbol]'))
    raise nodes.SkipNode


def setup(app):
    # type: (Sphinx) -> Dict[unicode, Any]
    app.add_node(bitfields,
                 html=(html_visit_bitfields, None),
                 latex=(latex_visit_bitfields, None),
                 texinfo=(texinfo_visit_bitfields, None),
                 text=(text_visit_bitfields, None),
                 man=(man_visit_bitfields, None))
    app.add_directive('bitfields', Bitfields)
    app.add_config_value('bitfields_cmd', 'bitfields', 'html')
    app.add_config_value('bitfields_cmd_args', ['-t'], 'html')
    return {'version': '1.0', 'parallel_read_safe': True}


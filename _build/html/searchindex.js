Search.setIndex({docnames:["cpu","cpu/isa","cpu/isa/add","cpu/isa/addi","cpu/isa/and","cpu/isa/andi","cpu/isa/beq","cpu/isa/beqal","cpu/isa/div","cpu/isa/divu","cpu/isa/f","cpu/isa/j","cpu/isa/jal","cpu/isa/jali","cpu/isa/ji","cpu/isa/l16","cpu/isa/l16s","cpu/isa/l32","cpu/isa/l32s","cpu/isa/l8","cpu/isa/l8s","cpu/isa/lui","cpu/isa/lw","cpu/isa/mul","cpu/isa/mulu","cpu/isa/nor","cpu/isa/nori","cpu/isa/or","cpu/isa/ori","cpu/isa/s16","cpu/isa/s32","cpu/isa/s8","cpu/isa/sgt","cpu/isa/sgti","cpu/isa/sgtiu","cpu/isa/sgtu","cpu/isa/sll","cpu/isa/slli","cpu/isa/slt","cpu/isa/slti","cpu/isa/sltiu","cpu/isa/sltu","cpu/isa/sra","cpu/isa/srai","cpu/isa/srl","cpu/isa/srli","cpu/isa/sub","cpu/isa/subi","cpu/isa/sw","cpu/isa/syscall","cpu/isa/xor","cpu/isa/xori","cpu/modules","cpu/modules/commit","cpu/modules/de_badDetect","cpu/modules/de_canonicalize","cpu/modules/debug_control","cpu/modules/decode","cpu/modules/ex_advint","cpu/modules/ex_advint_s1","cpu/modules/ex_alu","cpu/modules/ex_alu_s1","cpu/modules/ex_branch","cpu/modules/ex_memory","cpu/modules/fetch","cpu/modules/ff_sync","cpu/modules/jtag_reg","cpu/modules/jtag_state_machine","cpu/modules/jtaglet","cpu/modules/memory_map","cpu/modules/pipeline","cpu/modules/raisin64","cpu/modules/ram","cpu/modules/regfile","cpu/modules/schedule","index","modules","nexysddr","software","tools"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["cpu.rst","cpu/isa.rst","cpu/isa/add.rst","cpu/isa/addi.rst","cpu/isa/and.rst","cpu/isa/andi.rst","cpu/isa/beq.rst","cpu/isa/beqal.rst","cpu/isa/div.rst","cpu/isa/divu.rst","cpu/isa/f.rst","cpu/isa/j.rst","cpu/isa/jal.rst","cpu/isa/jali.rst","cpu/isa/ji.rst","cpu/isa/l16.rst","cpu/isa/l16s.rst","cpu/isa/l32.rst","cpu/isa/l32s.rst","cpu/isa/l8.rst","cpu/isa/l8s.rst","cpu/isa/lui.rst","cpu/isa/lw.rst","cpu/isa/mul.rst","cpu/isa/mulu.rst","cpu/isa/nor.rst","cpu/isa/nori.rst","cpu/isa/or.rst","cpu/isa/ori.rst","cpu/isa/s16.rst","cpu/isa/s32.rst","cpu/isa/s8.rst","cpu/isa/sgt.rst","cpu/isa/sgti.rst","cpu/isa/sgtiu.rst","cpu/isa/sgtu.rst","cpu/isa/sll.rst","cpu/isa/slli.rst","cpu/isa/slt.rst","cpu/isa/slti.rst","cpu/isa/sltiu.rst","cpu/isa/sltu.rst","cpu/isa/sra.rst","cpu/isa/srai.rst","cpu/isa/srl.rst","cpu/isa/srli.rst","cpu/isa/sub.rst","cpu/isa/subi.rst","cpu/isa/sw.rst","cpu/isa/syscall.rst","cpu/isa/xor.rst","cpu/isa/xori.rst","cpu/modules.rst","cpu/modules/commit.rst","cpu/modules/de_badDetect.rst","cpu/modules/de_canonicalize.rst","cpu/modules/debug_control.rst","cpu/modules/decode.rst","cpu/modules/ex_advint.rst","cpu/modules/ex_advint_s1.rst","cpu/modules/ex_alu.rst","cpu/modules/ex_alu_s1.rst","cpu/modules/ex_branch.rst","cpu/modules/ex_memory.rst","cpu/modules/fetch.rst","cpu/modules/ff_sync.rst","cpu/modules/jtag_reg.rst","cpu/modules/jtag_state_machine.rst","cpu/modules/jtaglet.rst","cpu/modules/memory_map.rst","cpu/modules/pipeline.rst","cpu/modules/raisin64.rst","cpu/modules/ram.rst","cpu/modules/regfile.rst","cpu/modules/schedule.rst","index.rst","modules.rst","nexysddr.rst","software.rst","tools.rst"],objects:{},objnames:{},objtypes:{},terms:{"0x0":2,"0x00000000_00000000":0,"0x00003fff_ffffffff":0,"0x00004000":78,"0x00004000_00000000":0,"0x00007fff_ffffffff":[],"0x00008000":78,"0x00008000_00000000":[],"0x00040000":78,"0x0f":78,"0x1":46,"0x2":3,"0x3":47,"0x4":49,"0x5":11,"0x6":12,"0x80":2,"0x81":46,"0x84":38,"0x85":41,"0x86":32,"0x87":35,"0x88":36,"0x89":42,"0x8a":44,"0x8c":4,"0x8d":25,"0x8e":27,"0x8f":50,"0x9":78,"0x90":23,"0x91":24,"0x92":8,"0x93":9,"0x9c":49,"0x9e":11,"0x9f":12,"0xa":78,"0xa0":3,"0xa1":47,"0xa4":39,"0xa5":40,"0xa6":33,"0xa7":34,"0xa8":37,"0xa9":43,"0xaa":45,"0xac":5,"0xad":26,"0xae":28,"0xaf":51,"0xb0":22,"0xb1":17,"0xb2":15,"0xb3":19,"0xb5":18,"0xb6":16,"0xb7":20,"0xb8":48,"0xb9":30,"0xba":29,"0xbb":31,"0xbc":6,"0xbd":7,"0xc":78,"0xc0":2,"0xc1":46,"0xc4":38,"0xc5":41,"0xc6":32,"0xc7":35,"0xc8":[36,44],"0xc9":42,"0xcc":4,"0xcd":25,"0xce":27,"0xcf":50,"0xd0":23,"0xd1":24,"0xd2":8,"0xd3":9,"0xdc":49,"0xdd":10,"0xde":11,"0xdf":12,"0xe":78,"0xe0":3,"0xe1":47,"0xe4":39,"0xe5":40,"0xe6":33,"0xe7":34,"0xe8":37,"0xe9":43,"0xea":45,"0xec":5,"0xed":26,"0xee":28,"0xef":51,"0xf":78,"0xf0":22,"0xf1":17,"0xf2":15,"0xf3":19,"0xf4":21,"0xf5":18,"0xf6":16,"0xf7":20,"0xf8":48,"0xf9":30,"0xfa":29,"0xfb":31,"0xfc":6,"0xfd":7,"0xfe":14,"0xff":13,"0xff00000000000000":[13,14],"0xffff":78,"0xffff7fff_ffffffff":[],"0xffff8000_00000000":[],"0xffffbfff_ffffffff":0,"0xffffc000":78,"0xffffc000_00000000":0,"0xffffc000_00004000":77,"0xffffc000_00008000":77,"0xffffc000_00040000":77,"0xffffc000_0004xxxx":78,"0xffffdfff_ffffffff":0,"0xffffe000_00000000":0,"0xffffffff_ffffffff":0,"16bit":72,"16kb":0,"1csg324c":77,"32bit":72,"32i":55,"32r":[0,55],"47th":69,"63x64":75,"64bit":72,"64j":[13,14],"8bit":72,"break":[0,53],"byte":[72,78],"case":[0,1,53,54,55,56,59,61,63,67,68,71,72],"char":78,"default":[63,68,77],"final":[0,78,79],"function":[67,78,79],"long":[0,53,75],"new":[0,79],"null":78,"return":[0,7,12,13,78],"short":53,"super":1,"switch":[0,55,77],"throw":63,"true":[55,65],"while":[0,1,78,79],AND:[1,61],ANDs:[4,5],And:[1,62,66,74,78],Being:79,Bus:[64,70,77,79],For:[1,53,59,71],L8S:[1,57],NOT:56,Not:79,ORs:[27,28],One:[],Ops:55,The:[0,1,7,13,14,53,56,66,74,75,77,78,79],There:[0,1],These:[0,1,59,77],Used:77,Using:[77,79],With:[1,77,79],_build:75,_valid:53,abort:0,abov:78,academ:[0,78],acceler:[],accept:0,access:[0,71,77,79],accomplish:[0,6,7],accord:68,accumul:0,across:79,act:0,actual:[0,64,79],adapt:[0,77],add:[0,1,55,57,61,78],adder:0,addi:[1,55,78],adding:0,addit:[0,1,49,78],addr:[69,71,72,77,79],addr_lsb:72,address:[0,1,7,12,13,14,15,16,17,18,19,20,22,29,30,31,48,69,77,78],adjac:79,advanc:[1,58,59],advance_pc:[2,3,4,5,6,7,8,9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],advantag:[0,59],advint:58,advint_busi:[66,70,74],advint_en:[66,70,74],advint_result2:[53,70],advint_result:[53,70],advint_rn2:[53,70],advint_rn:[53,70],advint_stal:[53,70],advint_typ:[66,74],advint_valid:[53,70],affect:[0,53],after:[0,53,78],again:0,aggress:77,agre:[56,65,67,68],ahead:64,algorithm:0,align:[0,6,7,13,14,77,78],all:[0,1,53],alloc:78,allow:[0,1,58,60,66,74],along:[0,79],alreadi:[0,62],also:[0,1,77,78],altern:1,although:[0,77,79],alu1_busi:[66,70,74],alu1_en:[66,70,74],alu1_result:[53,70],alu1_rn:[53,70],alu1_stal:[53,70],alu1_valid:[53,70],alu2_busi:[66,70,74],alu2_en:[66,70,74],alu2_result:[53,70],alu2_rn:[53,70],alu2_stal:[53,70],alu2_valid:[53,70],alu:[0,58,59,60,61],alu_typ:[66,74],alwai:[0,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,77],an235:0,analysi:0,ancillari:0,andi:[1,78],ani:[0,56,64,65,67,68,79],anoth:[0,77],anticip:0,apach:[56,65,67,68],apart:56,appeal:1,applic:[56,65,67,68],approach:[0,79],appropri:[0,1,55,56,68,75],arbitrari:0,architect:0,architectur:[0,75,77,79],area:0,aren:[58,60,66,74],argument:79,arithmet:[0,1],arm:[0,1],arm_toc13:0,around:0,arrai:78,arrang:0,arriv:0,artix:77,ascii:[77,78,79],asciz:78,aspect:78,assembl:[0,78],assign:[53,54,55,56,57,58,59,60,61,62,63,64,66,67,68,69,70,71,72,74,77],assist:0,associ:[0,63,64],assum:[0,75],async_reg:65,attempt:0,attrib_byt:78,attribut:[77,78],avail:[0,1,13,14,75,77,78,79],avoid:[0,1],b0001:68,b000xx:57,b001x0:57,b0x:64,b1000:68,b1001:68,b10:64,b10xxx:57,b110xx:57,b1110:68,b1110x:57,b1111:68,b11:64,back:0,bad:54,badopcod:[54,57],badopcode_pr:54,base:[0,63,70,77,78],basi:[56,65,67,68],basic:[1,61],becam:79,becaus:[0,71,77],becom:68,becuas:64,been:0,befor:[0,1,6,7,13,14,79],begin:[53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,77],behind:64,beign:[58,60],being:[0,1,79],below:[0,1],benefit:0,beq:[1,57,78],beqal:[1,57,78,79],best:0,between:[0,1],beyond:0,big:75,bin:79,binutil:[75,79],bit:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,21,23,24,25,26,27,28,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,55,57,63,68,69,75,76,77,79],bitwis:[1,61],blaster:[77,79],blob:[78,79],block:[0,59,77],board:78,bootstrap:[0,79],borrow:1,both:0,bother:78,bottom_64bit:[23,24],boundari:[6,7,13,14],branch:[1,62,66,74,75],branch_busi:[66,70,74],branch_en:[66,70,74],branch_result:[53,70],branch_stal:[53,70],branch_typ:[66,74],branch_valid:[53,70],buffer:[0,78],built:[],bus:[0,71,78],busi:[0,58,60,66,74],bypass:68,bypass_op:68,bypass_reg:68,bypass_tdo:68,cach:[71,75,77],calcul:0,call:[1,78],can:[0,6,7,66,74,77,78,79],cancel:[0,57,66,70,74],cancel_now:70,cannot:0,canon:[0,1],canonic:[0,55],canoninst:57,capabl:0,capiabl:[66,74],capture_dr:67,capture_ir:67,care:0,carri:[56,77],casex:[57,64],caus:0,cell:[77,78],certain:0,cfg:79,chang:[0,71,78],charact:[77,78],chargen:77,chosen:77,chrispvil:[75,77,78,79],christoph:[56,65,67,68],clean:0,clear:78,cleardisp:78,cleardisp_don:78,cleardisp_loop:78,clk:[53,56,57,58,60,62,63,64,65,66,70,71,72,73,74],clk_dig:77,clock:[0,53,56,57,58,60,62,64,66,70,71,72,73,74],clone:77,code:[68,75],col:78,collect:[0,79],color:[77,78],color_b:78,color_g:78,color_i:78,color_r:78,color_w:78,com:[0,75,77,78,79],combin:[0,1,77],come:71,comfort:[],command:79,commit1:70,commit:[52,58,60,62,63,70,76],commun:79,compact:[0,1,55,78],compar:[0,1,6,7,61,75],compat:[77,79],compil:0,complement:[8,23],complet:[0,77,78,79],complex:0,complianc:[56,65,67,68],complic:[0,77],compromis:1,comput:[0,79],concept:1,concurr:[0,70],condit:[56,65,66,67,68,71,74],configur:[0,77,79],confus:0,connect:[0,77],consequ:0,consid:0,consist:0,constrain:0,constraint:0,construct:79,contain:[0,1,77,78,79],content:[0,36,37,42,43,44,45,56,79],context:0,continu:[0,78],control:[1,53,54,56,57,58,59,60,61,62,63,64,66,70,71,73,74,77,78,79],convei:0,conveni:[0,1],convent:79,convention:0,convers:0,convert:[0,55,79],copi:[56,65,67,68],copiou:77,copyright:[56,65,67,68],core:[71,79],could:[0,1],count:[0,53],counter:[0,13,14],cours:0,coursework:0,cover:1,cpu:[56,71,75,77,79],cpu_clk:[56,71],cpu_debug_to_dmem_data:[56,71],cpu_debug_to_imem_data:[56,71],cpu_dmem_addr:[56,71],cpu_dmem_c:[56,71],cpu_dmem_to_debug_data:[56,71],cpu_dmem_to_debug_data_readi:[56,71],cpu_dmem_w:[56,71],cpu_halt_cpu:[56,71],cpu_imem_addr:[56,71],cpu_imem_c:[56,71],cpu_imem_to_debug_data:[56,71],cpu_imem_to_debug_data_readi:[56,71],cpu_imem_w:[56,71],cpu_resetn_cpu:[56,71],cpu_rst_n:71,cpu_userdata:56,cpu_userop_readi:56,cpu_userop_ready_last:56,creat:[0,71,75,78,79],critic:0,current:[0,13,14,53,77,78,79],custom:[77,79],customarili:0,cycl:[0,53,58,60,64,66,72,74],d63:53,dai0235c:0,data:[0,1,53,54,55,56,57,58,59,60,61,62,63,64,66,68,70,71,73,74,77,78,79],data_in:[71,72],data_in_shift:72,data_out:[71,72],dbg_dmem_addr:71,dbg_dmem_c:71,dbg_dmem_to_ram:71,dbg_dmem_w:71,dbg_halt_cpu:71,dbg_imem_addr:71,dbg_imem_c:71,dbg_imem_to_ram:71,dbg_imem_w:71,dbg_resetn_cpu:71,ddr:78,de_:0,de_baddetect:[52,57,76],de_baddetect_1:57,de_cancel:70,de_canonic:[52,57,76],de_canonicalize_1:57,de_imm_data:70,de_isa_def:[54,55],de_next_pc:70,de_op:70,de_r1_rn:70,de_r2_rn:70,de_rd2_rn:70,de_rd_rn:70,de_rs1_rn:70,de_rs2_rn:70,de_typ:70,de_unit:70,debug:[56,71,73],debug_control:[0,52,71,76],debug_if:71,debugop_cpuflags_reg:56,debugop_cpuhalt_op:56,debugop_cpureset_op:56,debugop_cpuresume_op:56,debugop_daddr_reg:56,debugop_ddata_reg:56,debugop_iaddr_reg:56,debugop_idata_reg:56,debugop_noop_op:56,debugop_readdmem_op:56,debugop_readimem_op:56,debugop_writedmem_op:56,debugop_writeimem_op:56,decid:[0,1,57,79],decis:0,decod:[1,52,54,55,66,70,74,76,77],decode1:70,decoupl:1,decrement:1,dedic:0,deep:79,deeper:0,defer:0,defin:[78,79],definit:79,delai:[0,70,78],demo:0,demonstr:78,densiti:0,depend:[0,75,79],describ:[1,75],design:[0,1,59,75,78,79],desir:0,dest:79,destin:[0,1,13,14,53,66,74,79],detail:[0,78],detect:54,detector:[0,54],determinist:0,develop:[0,79],devic:77,diagram:77,dictat:77,did:[0,79],differ:[78,79],direct:0,directori:[77,79],disabl:0,disassembl:79,dispatch:[58,60,62,63],displac:[0,1,6,7],displai:[71,78],dissimilar:79,distil:0,distribut:[0,56,65,67,68,77],div:[1,59],divid:1,divis:0,divu:[1,59],dmem:[71,79],dmem_addr:[63,70,71],dmem_cycle_complet:[63,70,71],dmem_din:[63,70,71],dmem_dout:[63,70,71],dmem_from_ram:71,dmem_init:71,dmem_rstrob:[63,70,71],dmem_to_cpu:71,dmem_to_ram:71,dmem_width:[63,70],dmem_write_width:[70,71],dmem_wstrob:[63,70,71],do_jump:[0,62,64,70],doc:[0,75],document:0,doe:[0,75],domain:56,don:[0,77,78],done:[0,79],down:[0,78],download:77,dr_datain:68,dr_dataout:68,dr_dataoutreadi:68,dr_len:68,drain:0,drama:79,dramat:71,draw:[1,77,78],drew:78,dsp48e1:77,dsp:[0,59,77],dual:[0,73],due:[0,13,14,77],dump:79,dure:[0,70],each:[0,1,77,78],earli:79,easi:0,easier:[0,1,78,79],easili:[0,78,79],edg:68,educ:75,effect:[0,1,53,56,79],effective_dmem_addr:71,effective_dmem_to_ram:71,effective_imem_addr:71,effective_imem_data_to_cpu:71,effici:1,effort:[0,79],either:[0,56,65,67,68,77],element:0,elf:79,elimin:0,els:[6,7,32,33,34,35,38,39,40,41,53,54,55,56,57,58,60,62,63,64,65,66,67,68,70,71,73,74,77],emploi:75,empti:0,emul:0,enabl:[58,59,60,61,72,77],encod:1,encount:1,end:[53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,77],endcas:[53,54,55,56,57,59,61,63,64,67,68,72],endgener:72,endian:75,endm:78,endmodul:[53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74],engin:0,ensur:0,entir:[0,1,79],entri:0,enumer:1,envis:0,equal:[0,1],equival:[],error:[58,60],etc:[0,75,78,79],evalu:0,eventu:[0,79],everi:0,evict:0,ex_advint:[52,70,76],ex_advint_rd2_rn:70,ex_advint_rd_rn:70,ex_advint_result2:70,ex_advint_result:70,ex_advint_s1:[52,58,76],ex_advint_s1_1:58,ex_advint_stal:70,ex_advint_valid:70,ex_alu1:70,ex_alu1_rd_rn:70,ex_alu1_result:70,ex_alu1_stal:70,ex_alu1_valid:70,ex_alu2:70,ex_alu2_rd_rn:70,ex_alu2_result:70,ex_alu2_stal:70,ex_alu2_valid:70,ex_alu:[52,70,76],ex_alu_s1:[52,60,76],ex_alu_s1_1:60,ex_branch1:70,ex_branch:[52,70,76],ex_branch_r63:70,ex_branch_r63_upd:70,ex_branch_stal:70,ex_busi:[0,58,60,62,63,70],ex_en:[0,58,60,62,63,70],ex_memori:[52,70,76],ex_memory1:70,ex_memunit_rd_rn:70,ex_memunit_result:70,ex_memunit_stal:70,ex_memunit_valid:70,ex_unitname_:0,exact:0,exactli:0,examin:79,exampl:[0,1,56,59,75,77,78,79],except:[0,1,53,56,57,63,65,67,68],execuserop:56,execut:[53,58,59,60,61,62,63,66,70,71,74,75],exercis:78,exist:[1,79],exit1_dr:67,exit1_ir:67,exit2_dr:67,exit2_ir:67,exit:79,expand:[0,1,55],expect:0,experi:0,experiment:0,explicitli:[58,60],explor:79,expos:0,express:[1,56,65,67,68],extend:[0,1,3,42,43,47,55,63,69,78],extern:[53,56,71,78,79],extract:79,extran:0,fall:0,famili:0,familiar:79,fast:77,faster:0,fastest:[],fe_:0,fe_cancel:70,fe_inst:70,fe_next_pc:70,featur:[75,79],feedback:57,fetch1:70,fetch:[52,57,70,76],few:[0,78],ff_sync:[52,56,76],field:[0,1,33,34,37,39,40,43,45,55,57],figur:0,file:[53,56,65,67,68,70,72,73,75,79],fill:[0,78],fin_loop:78,finish:[0,53,71],first:[0,1],fit:1,fix:[0,53,77,78],flag:[54,77],flip:77,flop:77,flush:0,fn_enter:78,fn_exit:78,focus:0,follow:0,forget:77,form:[0,1],format:[0,13,14,55,75,76,78,79],forward:0,fpga:0,fpu:1,frag:78,free:[0,66,74,75,78,79],friendly_print:78,from:[0,1,13,14,15,16,17,18,19,20,22,42,43,46,47,56,69,77,78],fsy:75,full:[0,1,55,79],fulli:0,further:0,gather:0,gcc:79,gdb:79,gener:[0,1,72,77,79],genvar:72,get:[0,53,62,77,78],github:[75,77,78,79],given:[0,78,79],gnu:[78,79],goal:[0,79],going:[0,67],good:[0,1],govern:[56,65,67,68],gracious:1,graduat:53,greater:1,greet:78,greet_str:78,ground:0,grow:[1,78],grown:79,guarante:0,h0000:68,h000:68,h00:[56,72],h01:56,h02:56,h035:56,h03:56,h04:56,h05:56,h06:56,h07:56,h100000001:69,h100000002:69,h10000001:69,h8000:72,h80:56,h81:56,h82:56,h83:56,h84:56,had:[],half:[69,78],halt:[0,79],handl:[0,53,57,71],happen:0,hard:[0,59],hardwar:[0,78],hardwir:[0,1],harvard:[0,75],has:[0,1,58,60],hasn:0,have:[0,1,56,59],hc000:72,hcafe:56,heavili:1,hell:53,hello:78,hello_str:78,help:[0,79],here:[0,62,66,74,75,78,79],hex:[72,79],hf000:72,hff00:72,hffffffffffffffff:72,hierarchi:77,high:[0,53],higher:0,highli:0,home:79,hope:0,host:75,how:[57,78],html:0,http:[0,56,65,67,68,75,77,78,79],hundr:79,id_manf:[56,68],id_partnum:[56,68],id_partv:[56,68],idcod:68,idcode_op:68,idcode_reg:68,idcode_tdo:68,identif:68,identifi:0,ignor:[55,56],illusori:0,imem:[71,79],imem_addr:[64,70,71],imem_addr_valid:[64,70,71],imem_data:[64,70,71],imem_data_readi:71,imem_data_valid:[64,70,71],imem_init:71,imm:[3,5,6,7,13,14,15,16,17,18,19,20,21,22,26,28,29,30,31,33,34,37,39,40,43,45,47,48,51,55,57,62,70],imm_data:[57,70],immedi:[0,6,7,15,16,17,18,19,20,22,29,30,31,48,55,78],immens:0,impact:0,implement:[0,1,53,78,79],implemt:53,impli:[56,65,67,68],implic:0,in1:[0,58,59,60,61,62,70],in2:[0,58,59,60,61,62,70],in_async:[56,65],includ:[0,54,55,63,72,75,77],incom:[63,66,74],increment:[1,78],independ:0,index:0,indic:[1,57],infocent:0,inform:[0,77],infrastructur:79,inhibit:0,init:79,init_fil:[71,72],initi:[0,58,60,68,72,73,79],input:[0,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,77,79],insert:[],inspect:0,inspir:[0,75,78],inst:57,inst_data:[64,70],instal:79,instead:[0,1,71,75,78,79],instin:[55,57,70],instissu:[66,74],instopbytein:[54,57],instout:[55,57],instout_pr:55,instruct:[0,6,7,11,12,13,14,53,54,55,57,63,66,68,70,71,74,75,76,78,79],integ:[1,53,58,59,60,61,73,75],integr:0,intention:0,interact:77,interest:78,interfac:[0,56,71,73,77,79],interlock:75,intern:[0,1,71],interrupt:49,intrins:59,introduc:75,introduct:77,invalid:[0,54,55],invok:79,io_def:[63,72],io_hadr:78,io_spac:71,ir_len:68,ir_opcod:68,ir_reg:68,ir_tdo:68,is16:54,is32:54,is64:54,isa:[0,78,79],issu:[0,53,66,74,75],iter:78,its:[0,77,78],itself:[0,6,7,67],jal:[1,55,57,79],jali:[1,55,57,78],ji_typ:57,jsm:68,jtag:[0,56,67,68,71,77,79],jtag_if:56,jtag_reg:68,jtag_state_machin:[52,68,76],jtag_tck:[56,71],jtag_tdi:[56,71],jtag_tdo:[56,71],jtag_tm:[56,71],jtag_trst:[56,71],jtag_userdata:56,jtag_userop:56,jtag_userop_readi:56,jtaglet:[0,52,56,76,79],jump:[0,6,7,62,64],jump_pc:[62,64,70],just:[0,59,66,71,74,79],just_stal:64,keep:[0,79],kernel:[0,49],kind:[56,65,67,68],know:[],knowledg:0,known:[0,77],l16:[1,57],l32:[1,57],l8s:20,label:78,lack:0,lai:0,languag:[56,65,67,68,79],larg:[0,1,79],larger:[1,75],largest:0,latch:77,latenc:0,later:0,latex:75,law:[56,65,67,68],lead:78,leaf:78,least:[0,29,30,31,77],leav:[0,64],led:[69,77],led_en:77,led_ladr:78,led_reg:77,left:[0,1,6,7,13,14],legaci:0,legal:0,length:[0,1],less:[0,1,77],level:0,leverag:79,licens:[56,65,67,68],life:78,like:[0,1,78,79],limit:[0,56,65,67,68],line:[66,72,74,79],linear:[0,7],link:[0,1,62,79],linker:79,linux:[0,79],littl:0,load:[0,1,56,57,63,68,75,78],load_rs1:57,load_rs1_rd:57,load_rs1_rs2:57,localparam:[53,56,63,67,68],locat:[0,29,30,31,48,78,79],logic:[1,71,77],look:0,lookasid:0,loos:53,lower:78,lui:[1,57,63,78],lut:77,machin:[0,1,63,67,77,79],macro:78,made:[0,79],mai:[0,56,65,67,68],main:0,maintain:0,major:75,make:[0,1,78,79],manag:0,mani:[0,79],manipul:[1,79],map:[0,59,69,77],mark:[0,66,74],mask:[0,78],master:[78,79],match:[66,74],math:[0,1,61],matter:69,mean:[1,79],mechan:0,mem_addr:[71,77],mem_addr_valid:[71,77],mem_din:71,mem_din_readi:71,mem_dout:71,mem_dout_writ:71,mem_from_cpu:77,mem_from_cpu_writ:77,mem_to_cpu:77,mem_to_cpu_readi:77,memori:[63,64,69,70,71,72,77,78,79],memory_map:[52,71,76,77],memory_map_extern:77,memory_map_intern:71,memunit_busi:[66,70,74],memunit_en:[66,70,74],memunit_result:[53,70],memunit_rn:[53,70],memunit_stal:[53,70],memunit_typ:[66,74],memunit_valid:[53,70],metaproject:75,microarchitectur:1,might:53,minim:0,minimum:0,minut:77,mip:[0,1,75,78,79],mirror:78,misalign:[71,78],misus:79,mitig:0,mmap:0,mmu:75,mnemon:78,mode:[0,1],model:1,modern:[0,79],modif:0,modifi:[0,75,79],modul:[0,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,76,77],monitor:77,more:[0,1,77],most:[0,55,75,77,79],mostli:79,move:[0,66,74],moxi:79,much:[0,77,79],mul:[1,59,78],multi:0,multipl:[0,1,75],multipli:[0,1],mulu:[1,59],must:[0,6,7,13,14],mux:[0,66,74,77],name:[77,79],nativ:[0,55],natur:[1,78],nearli:0,necess:79,necessari:[0,1,53,79],necessit:0,need:[0,1,53,57,66,68,74,77,78],neg:68,negedg:[53,56,57,58,60,62,63,64,66,67,68,70,71,73,74,77],netbsd:0,never:0,nexi:78,next:[0,7,58,60,64,66,70,71,72,74],next_data:64,next_jump_pc:[64,70],next_pc:[7,12,62,64,70],next_seq_pc:64,next_stat:53,nexys4ddr:[75,77,78],nice:0,nommu:0,non:[0,55,66,74,77,78],none:[4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,50,51,79],nonetheless:1,nop:[0,78],nor:[1,61],nori:1,normal:1,notabl:0,note:[77,79],now:[0,53,58,59,69,71,77,78],num_byt:[71,72],number:[0,1,36,37,42,43,44,45,66,74,78,79],numitemsincol:78,nx64:72,objcopi:79,objdump:79,object:79,observ:0,obtain:[56,65,67,68,79],occur:0,off:0,offici:79,offset:[0,15,16,17,18,19,20,22,29,30,31,48,63,70,78],often:1,onboard:[0,77],one:[0,1,53,58,60,73,77],ones:1,onli:[0,1,13,14,53,63,66,69,74,77,79],onto:[1,78],op16_add:55,op16_addi:55,op16_j:55,op16_jal:55,op16_sub:55,op16_subi:55,op16_syscal:55,op_add:55,op_addi:55,op_bad_02:54,op_bad_03:54,op_bad_0b:54,op_bad_14:54,op_bad_15:54,op_bad_16:54,op_bad_17:54,op_bad_18:54,op_bad_19:54,op_bad_1a:54,op_bad_1b:54,op_bad_22:54,op_bad_23:54,op_bad_2b:54,op_eq:62,op_fstar:54,op_j:55,op_jal:55,op_jali:54,op_ji:54,op_lui:54,op_reg:63,op_sgti:55,op_slti:55,op_sub:55,op_subi:55,op_syscal:55,opcod:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,55,75,78,79],open:[0,77],openocd:[75,77],oper:[0,1,56,59,61,66,68,74,75,77,79],operand:[0,8,9,23,24,55],operand_unavail:[66,74],optim:0,option:[77,79],order:[0,53,75],orderli:0,ordinari:1,org:[0,56,65,67,68,79],organ:0,ori:[1,78],orient:77,origin:78,other:[0,55,66,74,78,79],otherwis:[0,32,33,34,35,38,39,40,41],our:[56,58,59,60,64,72,77],out2:[58,59,70],out2_pr:58,out:[0,56,58,59,60,61,63,65,68,70,75,77,79],out_pr:[58,59,60,61],output:[0,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,77,79],outsid:[66,74,79],over:0,overal:0,overlap:0,overview:76,overwhelm:78,overwrit:78,overwritten:53,owing:0,own:0,pack:78,packag:77,page:[0,77,78],parallel:0,paramet:[65,68,71,72],parish:[56,65,67,68],part:[0,68,75],pass:[0,1,68],path:[],pattern:68,pauciti:0,pause_dr:67,pause_ir:67,pdf:75,penalti:1,pend:[0,49],pending_data:53,pending_rn:53,pending_valid:53,per:[0,53,68],perform:0,period:0,permiss:[56,65,67,68],permit:1,phase:70,physic:[0,69],pick:[66,74],pipelin:[52,64,66,71,74,75,76],pipeline1:71,place:[0,2,3,4,5,7,8,9,12,13,15,16,17,18,19,20,22,23,24,25,26,27,28,46,47,50,51,77],plain:78,platform:0,point:[0,64],pointer:[78,79],poop:67,popul:[55,72],port:[0,73,78,79],portion:78,posedg:[53,56,57,58,60,62,63,64,65,66,67,68,70,71,72,73,74,77],posit:78,possibl:0,potenti:0,power3:75,power:79,pre:[68,77],precis:0,preemptiv:0,prefix:[0,79],preliminari:79,preload:0,prepar:[0,78,79],present:[0,49,75,77,78,79],prev_data:64,prev_pc:64,prevent:0,previou:[66,74,78],previous:[56,66,74],primarili:0,principl:0,print:[78,79],printchar:78,printcharimm:78,printstr:78,printstr_don:78,printstr_nextchar:78,privilag:[],privileg:0,probabl:[66,74],probe:[0,77,79],problem:0,process:[0,1,79],processor:[0,1,77,78,79],produc:79,prog:79,program:[0,1,6,7,13,14,72,79],programimemdmem:79,programm:[1,79],progress:[0,66,74],project:[0,68,75,77],proof:78,properli:[0,62],propos:[53,75],provabl:0,proven:0,provid:[0,72,75,77,79],publish:0,pure:[0,75],purpos:[77,79],put:[0,55,78],quick:79,quit:[0,79],quotient:[8,9],r10000:75,r16:78,r17:78,r18:78,r19:78,r1_data:[70,73],r1_data_pr:73,r1_in_rn:[66,70,74],r1_rn:[57,70,73],r20:78,r21:78,r2_data:[70,73],r2_data_pr:73,r2_in_rn:[66,70,74],r2_rn:[57,70,73],r62:79,r63:[0,7,12,13,62,66,70,74,79],r63_updat:[62,70],raisin64:[52,54,55,57,58,59,60,61,62,63,64,66,69,70,73,74,76,77,78,79],raisin64_dump_dmem:79,raisin64_dump_imem:79,raisin64_halt:79,raisin64_nodeps_openocd:79,raisin64_program:79,raisin64_reset:79,raisin64_resum:79,ram:[0,52,71,76,77,78],ram_width16:[63,72],ram_width32:[63,72],ram_width64:[63,72],ram_width8:[63,72],rama_result:72,ramb18:77,ramb36e1:77,ramb_result:72,rang:79,rate:0,rd2:[8,9,23,24,55],rd2_in_rn:[58,66,70,74],rd2_out_rn:[58,66,70,74],rd2_rn:[57,70],rd_in_rn:[0,58,60,63,66,70,74],rd_in_rn_reg:63,rd_out_rn:[0,58,60,63,66,70,74],rd_rn:[57,70],reachabl:0,read:[0,72,73,78],read_wait:63,readi:[0,56,66,72,74,79],readmemh:[72,79],real:78,realli:69,reason:[0,71,77,79],recent:[],reciproc:0,reconfigur:79,recov:0,recurs:77,reduc:[0,1],ref:[],refer:78,reg1_finish:[66,70,74],reg2_finish:[66,70,74],reg:[53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,77],reg_busi:[66,74],regardless:[],regfil:[52,70,76],regfile1:70,region:0,regist:[2,3,6,7,8,9,23,24,36,37,42,43,44,45,46,47,53,56,57,58,60,63,66,68,70,72,73,74,75,77,79],regsit:1,regular:[1,63],rel:0,releas:77,relev:70,remain:53,remaind:[8,9],rememb:55,remot:79,renam:[0,75],repeat:78,repetit:78,replic:0,repositori:[75,77],repres:[0,1],represent:[0,32,33,34,35,38,39,40,41],reprogram:0,request:[0,1,49,56],requestreset:56,requir:[0,56,65,67,68,71,79],reserv:1,reset:[0,56,78,79],reset_finloop:78,resetstretch:56,resolv:0,resort:0,resourc:[0,77],respect:[0,79],respons:0,rest:[0,1],restor:78,result:[0,2,3,4,5,23,24,25,26,27,28,36,37,42,43,44,45,46,47,50,51,53,56,58,60,77,78,79],revis:71,rewritten:[0,79],rf_:0,rf_data1:70,rf_data2:70,rf_writeback:70,rf_writeback_rn:70,right:1,risc:[0,75],rom:78,rout:77,row:78,rownum:78,rs1:[0,2,3,4,5,6,7,8,9,11,12,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,55],rs1_rn:[57,70],rs2:[0,2,4,8,9,23,24,25,27,32,35,36,38,41,42,44,46,50,55],rs2_rn:[57,70],rst_n:[53,57,58,60,62,63,64,66,70,71,73,74,77],rst_p:[56,65],rtl:75,run:[0,53,78,79],run_test_idl:67,s16:[1,57],s32:[1,57],sai:78,said:0,same:[0,1,53,78],satisfi:0,save:0,sc_:0,sc_advint_busi:70,sc_advint_en:70,sc_alu1_busi:70,sc_alu1_en:70,sc_alu2_busi:70,sc_alu2_en:70,sc_branch_busi:70,sc_branch_en:70,sc_imm_data:70,sc_memunit_busi:70,sc_memunit_en:70,sc_next_pc:70,sc_op:70,sc_rd2_rn:70,sc_rd_rn:70,sc_readi:[66,70,74],sc_type:70,sc_unit:70,scan:77,scenario:0,schedul:[52,57,70,76],schedule1:70,scheme:[0,79],scope:[0,75,79],scratch:0,script:79,second:0,section:[0,79],see:[1,56,65,67,68],seem:0,seen:[0,78],segment:[0,78],select:[0,1,68,70,77],select_dr:67,select_ir:67,self:[],semest:[0,75,79],send:78,separ:0,seq:68,seri:77,serv:0,servic:[1,49,66,74],set:[0,55,61,76,78,79],setup:78,sever:[0,77,78],sgt:[1,61],sgti:[1,55,57],sgtiu:1,sgtu:[1,61],share:1,sheer:[],shift:[1,6,7,13,14,61,62,77,78],shift_dr:67,shift_ir:67,should:[0,56,77,79],side:[0,53,56],sign:[0,1,3,6,7,8,15,17,19,22,23,29,30,31,32,33,38,39,42,43,47,48,55,59,61,63,69,78],sign_bit:[16,18,20],sign_extend:[3,42,43,47,55],sign_extend_reg:63,signal:[0,1,53,54,56,58,59,60,61,62,63,66,71,73,74,77],signedimm:57,signific:[0,29,30,31,77,79],similar:[0,77],simpl:[0,56,58,60,77,78],simpler:0,simplest:78,simpli:71,simplifi:75,simul:78,simultan:[0,78],singl:0,sit:0,site:77,situat:0,size:[0,1,13,14,55,79],slate:0,slice:77,sll:[1,61],slli:[1,78],slot:78,slow:0,slt:[1,61],slti:[1,55,57],sltiu:1,sltu:[1,61],small:[0,1,77],smaller:[1,79],soc:59,softwar:[0,56,65,67,68,79],some:[0,1,79],someth:[0,66,74],somewher:[58,60],soon:78,sourc:[0,1,66,74,75,77],space:[0,1,71,77,78],spec:[0,68],special:[0,1,71,75,79],specif:[1,56,65,67,68,78],specifi:[36,37,42,43,44,45],specul:0,speed:[0,77],spirit:79,split:[0,75],sra:[1,61],srai:1,src1:79,src2:79,srl:[1,61],srli:1,stack:[78,79],stack_init_head:78,stage:[58,59,60,61,70],stall:[0,53,57,58,60,62,63,64,66,70,74],standard:0,start:[0,63,78],state:[0,53,63,67,71,79],state_capturedr:[67,68],state_captureir:[67,68],state_idl:53,state_p1:53,state_p2:53,state_p3:53,state_p4:53,state_p5:53,state_p6:53,state_shiftdr:[67,68],state_shiftir:[67,68],state_tlr:[67,68],state_updatedr:[67,68],state_updateir:[67,68],stateless:56,statu:64,step:0,still:79,storag:78,store:[0,1,36,37,42,43,44,45,56,63,75,78],str_ptr:78,straightforward:0,stream:0,stretcher:56,strict:53,string:78,stub:59,style:79,sub:[1,55,57,61],subi:[1,55,78],subsequ:[0,75],subsystem:78,subtract:[0,1],suffic:78,suffici:[1,77],suitabl:[68,79],superscalar:75,support:[0,71,77,78,79],sure:79,sw_en:77,sw_ladr:78,sw_loop:78,sw_pre0:77,sw_pre1:77,sync_reg:65,synchron:[56,77],syntax:[78,79],synthes:0,synthesi:[0,77],sys_rstn:[56,71],syscal:[1,55],system:[0,1,56,75,77,79],tabl:[0,53],tag:0,take:[0,56,77,79],taken:[0,13,14,66,74],tap:[0,56,67,68],target:[0,79],task:0,tck:[56,67,68],tdi:[56,68],tdo:[56,68],tdo_pr:68,technic:0,templat:79,ten:79,tend:0,term:0,termin:[0,78],test:[72,78,79],test_logic_reset:67,text:[78,79],than:[0,1,77],thei:[0,1],them:[0,78],theme:79,thi:[0,1,53,55,56,57,58,60,65,67,68,71,75,78,79],those:[0,1],thousand:79,thread:79,three:[0,1],through:[0,70,77,78],tied:56,tile:77,time:[0,62,71,79],tms:[56,67,68],todo:[10,49,53,57,59,63,66,71,74,78],togeth:0,told:[58,60],too:[0,79],tool:0,top:[13,14,68],topic:0,toward:78,traceabl:0,track:[0,78],trade:0,transact:53,translat:0,treat:[8,9,23,24],tri:[0,67],trivial:[0,77,78],trst:[56,67,68],two:[0,73,77],txt:0,type:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,55,57,62,66,70,74,75,77],typic:[0,67],ultim:0,unalign:71,uncondit:[6,7,11,12,13,14],under:[56,65,67,68],underli:1,understand:0,unfortun:0,unifi:[0,1,71],unimpl:[10,49],unissu:0,unit:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,55,57,58,59,60,61,62,63,66,70,71,74,75],unit_en:[66,74],unit_reg:63,unless:[56,65,67,68],unlik:75,unmap:0,unmark:0,unnecessari:0,unsign:1,unsupport:71,until:[0,66,74],unus:0,updat:[68,77],update_dr:67,update_ir:67,upper:[1,57,69,78],upper_64bit:[23,24],use:[0,56,59,65,67,68,75,77,78],used:[0,1,55,70,78,79],useful:[0,78],user:[0,68,72],userdata:68,userdata_in:[56,68],userdata_len:[56,68],userdata_op:68,userdata_out:[56,68],userdata_reg:68,userdata_tdo:68,userop:[56,68],userop_len:68,userop_op:68,userop_readi:[56,68],userop_reg:68,userop_tdo:68,useropcod:68,useropready_tocpudomain:56,userspac:0,uses:[0,1,77,79],using:[0,56,63,75,77,79],usual:[0,1,79],util:[0,77,79],valid:[0,58,60,63,70],valu:[0,1,3,5,6,7,13,14,15,16,17,18,19,20,21,22,26,28,29,30,31,42,43,47,48,51],variabl:1,variou:[0,75],veri:0,verilog:[0,76,79],version:[0,1,55,56,65,67,68,79],vga:[0,69,77],vga_dout:77,vga_en:77,vga_ladr:78,via:[0,53,66,74,79],video:[77,78],view:1,virtual:[0,1],vivado:[67,77],w_data:[70,73],w_en:[70,73],w_rn:[70,73],wai:[0,79],wait:[0,77],warranti:[56,65,67,68],wast:[0,1],wea_b:72,web_b:72,well:[0,1,78,79],were:[0,78,79],what:[0,79],whatev:0,when:[0,1,58,60,67,71,75,77],whenev:1,where:0,wherev:0,whether:0,which:[0,1,53,56,57,72,78,79],who:[],wide:68,wider:0,width:[0,1,56,65],wiki:0,window:0,wire:[54,56,57,58,60,62,63,66,68,70,71,72,74,77],without:[0,56,65,67,68,79],won:78,word:[0,1,15,16,17,18,19,20,77,78,79],work:78,world:78,would:[0,79],wrapper:0,write:[0,56,65,67,68,72,73,77,78,79],write_data:[53,70],write_rn:[53,70],write_wait:63,write_width:[71,72],writeback:0,written:[0,53,70,77],wrong:53,wrote:[],www:[0,56,65,67,68],x86:79,xc7a100t:77,xilinx:77,xor:[1,61],xori:1,xpr:77,xxd:79,yet:1,you:[56,65,67,68],zero:[0,6,7,66,74,78,79]},titles:["Raisin64 CPU","Raisin64 Instruction Set","ADD - Integer Add","ADDI - Integer Add Immediate","AND - Bitwise AND","ANDI - Bitwise AND Immediate","BEQ - Branch if Equal","BEQAL - Branch if Equal And Link","DIV - Integer Divide","DIVU - Unsigned Integer Divide","F* - FPU Call","J - Jump","JAL - Jump and Link","JALI - Jump and Link Immediate","JI - Jump Immediate","L16 - Load 16-bit","L16S - Load 16-bit Sign-Extend","L32 - Load 32-bit","L32S - Load 32-bit Sign-Extend","L8 - Load 8-bit","L8S - Load 8-bit Sign-Extend","LUI - Load Upper Immediate","LW - Load 64-bit Word","MUL - Integer Multiply","MULU - Unsigned Integer Multiply","NOR - Bitwise NOR","NORI - Bitwise NOR Immediate","OR - Bitwise OR","ORI - Bitwise OR Immediate","S16 - Store 16-bit","S32 - Store 32-bit","S8 - Store 8-bit","SGT - Set 1 if Greater Than","SGTI - Set 1 if Greater Than Immediate","SGTIU - Set 1 if Greater Than Immediate Unsigned","SGTU - Set 1 if Greater Than Unsigned","SLL - Shift Left Logical","SLLI - Shift Left Logical Immediate","SLT - Set 1 if Less Than","SLTI - Set 1 if Less Than Immediate","SLTIU - Set 1 if Less Than Immediate Unsigned","SLTU - Set 1 if Less Than Unsigned","SRA - Shift Right Arithmetic","SRAI - Shift Right Arithmetic Immediate","SRL - Shift Right Logical","SRLI - Shift Right Logical Immediate","SUB - Integer Subtract","SUBI - Integer Subtract Immediate","SW - Store 64-bit Word","SYSCALL - System Call","XOR - Bitwise XOR","XORI - Bitwise XOR Immediate","Verilog Module Index","commit.v","de_badDetect.v","de_canonicalize.v","debug_control.v","decode.v","ex_advint.v","ex_advint_s1.v","ex_alu.v","ex_alu_s1.v","ex_branch.v","ex_memory.v","fetch.v","ff_sync.v","schedule.v","jtag_state_machine.v","jtaglet.v","memory_map.v","pipeline.v","raisin64.v","ram.v","regfile.v","schedule.v","Welcome to Raisin64\u2019s documentation!","Reference Index","Nexys 4 DDR Reference Implementation","Code Snippets and Software","Tools"],titleterms:{"16i":1,"16r":1,"32i":1,"32r":1,"64S":1,"64j":1,"switch":78,AND:[4,5],And:7,But:1,L8S:20,add:[2,3],addi:3,advanc:0,andi:5,arithmet:[42,43],assembl:79,beq:6,beqal:7,binari:79,bit:[1,15,16,17,18,19,20,22,29,30,31,48],bitwis:[4,5,25,26,27,28,50,51],branch:[0,6,7],build:79,cach:0,call:[10,49],code:78,commit:[0,53],control:0,core:77,cpu:0,ddr:77,de_baddetect:54,de_canonic:55,debug:[0,79],debug_control:56,decod:[0,57],demo:78,div:8,divid:[8,9],divu:9,document:75,encod:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],equal:[6,7],ex_advint:58,ex_advint_s1:59,ex_alu:60,ex_alu_s1:61,ex_branch:62,ex_memori:63,execut:0,extend:[16,18,20],extens:0,fetch:[0,64],ff_sync:65,file:0,footnot:75,format:1,fpu:10,from:79,futur:[0,79],get:79,greater:[32,33,34,35],hardwar:77,immedi:[1,3,5,13,14,21,26,28,33,34,37,39,40,43,45,47,51],implement:77,index:[52,76],instruct:1,integ:[0,2,3,8,9,23,24,46,47],interrupt:0,jal:12,jali:13,jtag_state_machin:67,jtaglet:68,jump:[1,11,12,13,14],l16:[15,16],l32:[17,18],led:78,left:[36,37],less:[38,39,40,41],link:[7,12,13],load:[15,16,17,18,19,20,21,22],logic:[36,37,44,45],lui:21,memori:0,memory_map:69,mmu:0,modul:52,mul:23,multipli:[23,24],mulu:24,nexi:77,nor:[25,26],nori:26,opcod:1,openocd:79,oper:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],ori:28,overview:1,peripher:77,pipelin:[0,70],program:78,propos:0,purpos:0,raisin64:[0,1,71,75],ram:72,refer:[0,76,77],regfil:73,regist:[0,1],releas:79,requir:77,right:[42,43,44,45],s16:29,s32:30,schedul:[0,66,74],set:[1,32,33,34,35,38,39,40,41],sgt:32,sgti:33,sgtiu:34,sgtu:35,shift:[36,37,42,43,44,45],sign:[16,18,20],sll:36,slli:37,slt:38,slti:39,sltiu:40,sltu:41,snippet:78,soc:77,softwar:78,sourc:79,sra:42,srai:43,srl:44,srli:45,stage:0,standard:1,store:[29,30,31,48],sub:46,subi:47,subtract:[46,47],synthes:77,syscal:49,system:49,tabl:1,than:[32,33,34,35,38,39,40,41],tool:79,unit:[0,1],unsign:[9,24,34,35,40,41],upper:21,usag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],verilog:52,vga:78,welcom:75,why:1,word:[22,48],work:[0,79],xor:[50,51],xori:51}})
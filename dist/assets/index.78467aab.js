import{H as V,z as me,r as f,A as ce,L as _e,d,K as L,o as p,c as R,B as y,C as fe,e,w as t,x as n,h as he,G as Q,M as j,i as h,j as O,v as z,k as P,n as m,q as ve,J as ge}from"./index.b8b61c20.js";function G(r){return V({url:"/system/dept/list",method:"get",params:r})}function be(r){return V({url:"/system/dept/list/exclude/"+r,method:"get"})}function ye(r){return V({url:"/system/dept/"+r,method:"get"})}function Ve(r){return V({url:"/system/dept",method:"post",data:r})}function ke(r){return V({url:"/system/dept",method:"put",data:r})}function we(r){return V({url:"/system/dept/"+r,method:"delete"})}const Ne={class:"app-container"},xe=m("\u641C\u7D22"),Ce=m("\u91CD\u7F6E"),Ie=m("\u65B0\u589E"),De=m("\u5C55\u5F00/\u6298\u53E0"),Ue=m("\u4FEE\u6539"),Se=m("\u65B0\u589E"),Te=m("\u5220\u9664"),$e={class:"dialog-footer"},qe=m("\u786E \u5B9A"),Re=m("\u53D6 \u6D88"),Pe=me({name:"Dept"}),Ee=Object.assign(Pe,{setup(r){const{proxy:s}=ve(),{sys_normal_disable:x}=s.useDict("sys_normal_disable"),B=f([]),v=f(!1),C=f(!0),I=f(!0),D=f(""),U=f([]),S=f(!0),T=f(!0),H=ce({form:{},queryParams:{deptName:void 0,status:void 0},rules:{parentId:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],deptName:[{required:!0,message:"\u90E8\u95E8\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],orderNum:[{required:!0,message:"\u663E\u793A\u6392\u5E8F\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],email:[{type:"email",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",trigger:"blur"}]}}),{queryParams:g,form:o,rules:J}=_e(H);function b(){C.value=!0,G(g.value).then(u=>{B.value=s.handleTree(u.data,"deptId"),C.value=!1})}function M(){v.value=!1,$()}function $(){o.value={deptId:void 0,parentId:void 0,deptName:void 0,orderNum:0,leader:void 0,phone:void 0,email:void 0,status:"0"},s.resetForm("deptRef")}function q(){b()}function W(){s.resetForm("queryRef"),q()}function E(u){$(),G().then(a=>{U.value=s.handleTree(a.data,"deptId")}),u!=null&&(o.value.parentId=u.deptId),v.value=!0,D.value="\u6DFB\u52A0\u90E8\u95E8"}function X(){T.value=!1,S.value=!S.value,ge(()=>{T.value=!0})}function Y(u){$(),be(u.deptId).then(a=>{U.value=s.handleTree(a.data,"deptId")}),ye(u.deptId).then(a=>{o.value=a.data,v.value=!0,D.value="\u4FEE\u6539\u90E8\u95E8"})}function Z(){s.$refs.deptRef.validate(u=>{u&&(o.value.deptId!=null?ke(o.value).then(a=>{s.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F"),v.value=!1,b()}):Ve(o.value).then(a=>{s.$modal.msgSuccess("\u65B0\u589E\u6210\u529F"),v.value=!1,b()}))})}function ee(u){s.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5220\u9664\u540D\u79F0\u4E3A"'+u.deptName+'"\u7684\u6570\u636E\u9879?').then(function(){return we(u.deptId)}).then(()=>{b(),s.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}return b(),(u,a)=>{const k=d("el-input"),i=d("el-form-item"),te=d("el-option"),le=d("el-select"),c=d("el-button"),A=d("el-form"),_=d("el-col"),ae=d("right-toolbar"),F=d("el-row"),w=d("el-table-column"),ne=d("dict-tag"),oe=d("el-table"),de=d("el-tree-select"),ue=d("el-input-number"),re=d("el-radio"),se=d("el-radio-group"),pe=d("el-dialog"),N=L("hasPermi"),ie=L("loading");return p(),R("div",Ne,[y(e(A,{model:n(g),ref:"queryRef",inline:!0},{default:t(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"deptName"},{default:t(()=>[e(k,{modelValue:n(g).deptName,"onUpdate:modelValue":a[0]||(a[0]=l=>n(g).deptName=l),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:"",onKeyup:he(q,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(i,{label:"\u72B6\u6001",prop:"status"},{default:t(()=>[e(le,{modelValue:n(g).status,"onUpdate:modelValue":a[1]||(a[1]=l=>n(g).status=l),placeholder:"\u90E8\u95E8\u72B6\u6001",clearable:""},{default:t(()=>[(p(!0),R(Q,null,j(n(x),l=>(p(),h(te,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:t(()=>[e(c,{type:"primary",icon:"Search",onClick:q},{default:t(()=>[xe]),_:1}),e(c,{icon:"Refresh",onClick:W},{default:t(()=>[Ce]),_:1})]),_:1})]),_:1},8,["model"]),[[fe,I.value]]),e(F,{gutter:10,class:"mb8"},{default:t(()=>[e(_,{span:1.5},{default:t(()=>[y((p(),h(c,{type:"primary",plain:"",icon:"Plus",onClick:E},{default:t(()=>[Ie]),_:1})),[[N,["system:dept:add"]]])]),_:1},8,["span"]),e(_,{span:1.5},{default:t(()=>[e(c,{type:"info",plain:"",icon:"Sort",onClick:X},{default:t(()=>[De]),_:1})]),_:1},8,["span"]),e(ae,{showSearch:I.value,"onUpdate:showSearch":a[2]||(a[2]=l=>I.value=l),onQueryTable:b},null,8,["showSearch"])]),_:1}),T.value?y((p(),h(oe,{key:0,data:B.value,"row-key":"deptId","default-expand-all":S.value,"tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(w,{prop:"deptName",label:"\u90E8\u95E8\u540D\u79F0",width:"260"}),e(w,{prop:"orderNum",label:"\u6392\u5E8F",width:"200"}),e(w,{prop:"status",label:"\u72B6\u6001",width:"100"},{default:t(l=>[e(ne,{options:n(x),value:l.row.status},null,8,["options","value"])]),_:1}),e(w,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"createTime",width:"200"},{default:t(l=>[O("span",null,z(u.parseTime(l.row.createTime)),1)]),_:1}),e(w,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:t(l=>[y((p(),h(c,{type:"text",icon:"Edit",onClick:K=>Y(l.row)},{default:t(()=>[Ue]),_:2},1032,["onClick"])),[[N,["system:dept:edit"]]]),y((p(),h(c,{type:"text",icon:"Plus",onClick:K=>E(l.row)},{default:t(()=>[Se]),_:2},1032,["onClick"])),[[N,["system:dept:add"]]]),l.row.parentId!=0?y((p(),h(c,{key:0,type:"text",icon:"Delete",onClick:K=>ee(l.row)},{default:t(()=>[Te]),_:2},1032,["onClick"])),[[N,["system:dept:remove"]]]):P("",!0)]),_:1})]),_:1},8,["data","default-expand-all"])),[[ie,C.value]]):P("",!0),e(pe,{title:D.value,modelValue:v.value,"onUpdate:modelValue":a[10]||(a[10]=l=>v.value=l),width:"600px","append-to-body":""},{footer:t(()=>[O("div",$e,[e(c,{type:"primary",onClick:Z},{default:t(()=>[qe]),_:1}),e(c,{onClick:M},{default:t(()=>[Re]),_:1})])]),default:t(()=>[e(A,{ref:"deptRef",model:n(o),rules:n(J),"label-width":"80px"},{default:t(()=>[e(F,null,{default:t(()=>[n(o).parentId!==0?(p(),h(_,{key:0,span:24},{default:t(()=>[e(i,{label:"\u4E0A\u7EA7\u90E8\u95E8",prop:"parentId"},{default:t(()=>[e(de,{modelValue:n(o).parentId,"onUpdate:modelValue":a[3]||(a[3]=l=>n(o).parentId=l),data:U.value,props:{value:"deptId",label:"deptName",children:"children"},"value-key":"deptId",placeholder:"\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8","check-strictly":""},null,8,["modelValue","data"])]),_:1})]),_:1})):P("",!0),e(_,{span:12},{default:t(()=>[e(i,{label:"\u90E8\u95E8\u540D\u79F0",prop:"deptName"},{default:t(()=>[e(k,{modelValue:n(o).deptName,"onUpdate:modelValue":a[4]||(a[4]=l=>n(o).deptName=l),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(i,{label:"\u663E\u793A\u6392\u5E8F",prop:"orderNum"},{default:t(()=>[e(ue,{modelValue:n(o).orderNum,"onUpdate:modelValue":a[5]||(a[5]=l=>n(o).orderNum=l),"controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(i,{label:"\u8D1F\u8D23\u4EBA",prop:"leader"},{default:t(()=>[e(k,{modelValue:n(o).leader,"onUpdate:modelValue":a[6]||(a[6]=l=>n(o).leader=l),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",maxlength:"20"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(i,{label:"\u8054\u7CFB\u7535\u8BDD",prop:"phone"},{default:t(()=>[e(k,{modelValue:n(o).phone,"onUpdate:modelValue":a[7]||(a[7]=l=>n(o).phone=l),placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD",maxlength:"11"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(i,{label:"\u90AE\u7BB1",prop:"email"},{default:t(()=>[e(k,{modelValue:n(o).email,"onUpdate:modelValue":a[8]||(a[8]=l=>n(o).email=l),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1",maxlength:"50"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{span:12},{default:t(()=>[e(i,{label:"\u90E8\u95E8\u72B6\u6001"},{default:t(()=>[e(se,{modelValue:n(o).status,"onUpdate:modelValue":a[9]||(a[9]=l=>n(o).status=l)},{default:t(()=>[(p(!0),R(Q,null,j(n(x),l=>(p(),h(re,{key:l.value,label:l.value},{default:t(()=>[m(z(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title","modelValue"])])}}});export{Ee as default};

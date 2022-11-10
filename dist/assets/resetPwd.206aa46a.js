import{b as _}from"./user.a602e2dd.js";import{A as P,r as g,d as t,o as b,i as V,w as r,e as s,n as w,q}from"./index.b8b61c20.js";const x=w("\u4FDD\u5B58"),y=w("\u5173\u95ED"),k={__name:"resetPwd",setup(h){const{proxy:n}=q(),e=P({oldPassword:void 0,newPassword:void 0,confirmPassword:void 0}),m=g({oldPassword:[{required:!0,message:"\u65E7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],newPassword:[{required:!0,message:"\u65B0\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{min:6,max:20,message:"\u957F\u5EA6\u5728 6 \u5230 20 \u4E2A\u5B57\u7B26",trigger:"blur"}],confirmPassword:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{required:!0,validator:(u,o,l)=>{e.newPassword!==o?l(new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4")):l()},trigger:"blur"}]});function i(){n.$refs.pwdRef.validate(u=>{u&&_(e.oldPassword,e.newPassword).then(o=>{n.$modal.msgSuccess("\u4FEE\u6539\u6210\u529F")})})}function f(){n.$tab.closePage()}return(u,o)=>{const l=t("el-input"),d=t("el-form-item"),p=t("el-button"),c=t("el-form");return b(),V(c,{ref:"pwdRef",model:e,rules:m.value,"label-width":"80px"},{default:r(()=>[s(d,{label:"\u65E7\u5BC6\u7801",prop:"oldPassword"},{default:r(()=>[s(l,{modelValue:e.oldPassword,"onUpdate:modelValue":o[0]||(o[0]=a=>e.oldPassword=a),placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),s(d,{label:"\u65B0\u5BC6\u7801",prop:"newPassword"},{default:r(()=>[s(l,{modelValue:e.newPassword,"onUpdate:modelValue":o[1]||(o[1]=a=>e.newPassword=a),placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),s(d,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"confirmPassword"},{default:r(()=>[s(l,{modelValue:e.confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=a=>e.confirmPassword=a),placeholder:"\u8BF7\u786E\u8BA4\u65B0\u5BC6\u7801",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),s(d,null,{default:r(()=>[s(p,{type:"primary",onClick:i},{default:r(()=>[x]),_:1}),s(p,{type:"danger",onClick:f},{default:r(()=>[y]),_:1})]),_:1})]),_:1},8,["model","rules"])}}};export{k as default};

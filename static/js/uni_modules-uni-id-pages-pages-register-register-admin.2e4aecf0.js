(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-register-register-admin"],{"0175":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-content[data-v-5ff2834e]{padding:0 %?60?%}.login-logo[data-v-5ff2834e]{display:none}@media screen and (min-width:690px){.uni-content[data-v-5ff2834e]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-5ff2834e]{display:flex;justify-content:center}.login-logo uni-image[data-v-5ff2834e]{width:60px;height:60px}.register-back[data-v-5ff2834e]{display:none}}.uni-content uni-view[data-v-5ff2834e]{box-sizing:border-box}.title[data-v-5ff2834e]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-5ff2834e]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.input-box[data-v-5ff2834e]{padding:4px;background-color:#f8f8f8;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-5ff2834e]{color:#04498c;cursor:pointer}.uni-content[data-v-5ff2834e]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-5ff2834e]{text-align:center;height:40px;line-height:40px;margin:15px 0 0 0;color:#fff!important;border-radius:5px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-5ff2834e]{height:auto!important}@media screen and (max-width:690px){.uni-content[data-v-5ff2834e]{margin-top:15px;height:100%;background-color:#fff}}@media screen and (min-width:690px){.uni-content[data-v-5ff2834e]{padding:30px 40px 60px}.link-box[data-v-5ff2834e]{display:flex;flex-direction:row;justify-content:space-between;margin-top:10px}.link[data-v-5ff2834e]{font-size:12px}}.uni-content[data-v-5ff2834e]  .uni-forms-item__label{position:absolute;left:-15px}uni-button[data-v-5ff2834e]{margin-top:15px}',""]),t.exports=e},"110b":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.matches,expression:"matches"}]},[t._t("default")],2)},r=[]},1425:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniMatchMedia:a("a5e8").default,uniForms:a("784b").default,uniFormsItem:a("9d44").default,uniEasyinput:a("6902").default,uniCaptcha:a("48ef").default,uniIdPagesAgreements:a("76c7").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-content"},[a("uni-match-media",{attrs:{"min-width":690}},[a("v-uni-view",{staticClass:"login-logo"},[a("v-uni-image",{attrs:{src:t.logo}})],1),a("v-uni-text",{staticClass:"title title-box"},[t._v("创建超级管理员")])],1),a("uni-forms",{ref:"form",attrs:{value:t.formData,rules:t.rules,"validate-trigger":"submit","err-show-type":"toast"}},[a("uni-forms-item",{attrs:{name:"username",required:!0}},[a("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusUsername,placeholder:"请输入用户名",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusUsername=!1}},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),a("uni-forms-item",{attrs:{name:"nickname"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusNickname,placeholder:"请输入用户昵称",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusNickname=!1}},model:{value:t.formData.nickname,callback:function(e){t.$set(t.formData,"nickname",e)},expression:"formData.nickname"}})],1),a("uni-forms-item",{attrs:{name:"password",required:!0},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusPassword,maxlength:"20",placeholder:"请输入"+("weak"==t.config.passwordStrength?"6":"8")+"-16位密码",type:"password",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword=!1}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),a("uni-forms-item",{attrs:{name:"password2",required:!0},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}},[a("uni-easyinput",{staticClass:"input-box",attrs:{inputBorder:!1,focus:t.focusPassword2,placeholder:"再次输入密码",maxlength:"20",type:"password",trim:"both"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPassword2=!1}},model:{value:t.formData.password2,callback:function(e){t.$set(t.formData,"password2",e)},expression:"formData.password2"}})],1),a("uni-forms-item",[a("uni-captcha",{ref:"captcha",attrs:{scene:"register"},model:{value:t.formData.captcha,callback:function(e){t.$set(t.formData,"captcha",e)},expression:"formData.captcha"}})],1),a("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}}),a("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("注册")]),a("v-uni-button",{staticClass:"register-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navigateBack.apply(void 0,arguments)}}},[t._v("返回")]),a("uni-match-media",{attrs:{"min-width":690}},[a("v-uni-view",{staticClass:"link-box"},[a("v-uni-text",{staticClass:"link",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("已有账号？点此登录")])],1)],1)],1)],1)},r=[]},"1ec3":function(t,e,a){"use strict";var n;a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:function(){return{matches:!0}},mounted:function(){var t=this;n=uni.createMediaQueryObserver(this),n.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(function(e){t.matches=e}))},destroyed:function(){n.disconnect()}};e.default=i},4723:function(t,e,a){"use strict";a.r(e);var n=a("1ec3"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"776b":function(t,e,a){"use strict";a.r(e);var n=a("1425"),i=a("e0a1");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c8d7");var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5ff2834e",null,!1,n["a"],o);e["default"]=u.exports},"9e53":function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("0173")),r=i.default.passwordStrength,o={super:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,strong:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,medium:/^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,weak:/^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/},s={normal:{noPwd:"请输入密码",noRePwd:"再次输入密码",rePwdErr:"两次输入密码不一致"},passwordStrengthError:{super:"密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间",strong:"密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间",medium:"密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间",weak:"密码必须包含字母，密码长度必须在6-16位之间"}};function u(t){return!(r&&o[r]&&!new RegExp(o[r]).test(t))||s.passwordStrengthError[r]}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"password",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"password2",a={};return a[t]={rules:[{required:!0,errorMessage:s.normal.noPwd},{validateFunction:function(t,e,a,n){var i=u(e);return!0!==i&&n(i),!0}}]},e&&(a[e]={rules:[{required:!0,errorMessage:s.normal.noRePwd},{validateFunction:function(t,e,a,n){return e!=a.password&&n(s.normal.rePwdErr),!0}}]}),a}var c={ERROR:s,validPwd:u,getPwdRules:d};e.default=c},"9f2e":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"uni-view[data-v-4447a614]{display:block}",""]),t.exports=e},a5e8:function(t,e,a){"use strict";a.r(e);var n=a("110b"),i=a("4723");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c2fd");var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4447a614",null,!1,n["a"],o);e["default"]=u.exports},bad5:function(t,e,a){var n=a("9f2e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("7f27ce9b",n,!0,{sourceMap:!1,shadowMode:!1})},c2fd:function(t,e,a){"use strict";var n=a("bad5"),i=a.n(n);i.a},c8d7:function(t,e,a){"use strict";var n=a("fa12"),i=a.n(n);i.a},d7da:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=n(a("9e53")),o=(0,i.default)({username:{rules:[{required:!0,errorMessage:"请输入用户名"},{minLength:3,maxLength:32,errorMessage:"用户名长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,e,a,n){return(/^1\d{10}$/.test(e)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e))&&n("用户名不能是：手机号或邮箱"),/^\d+$/.test(e)&&n("用户名不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(e)&&n("用户名不能包含中文"),!0}}],label:"用户名"},nickname:{rules:[{minLength:3,maxLength:32,errorMessage:"昵称长度在 {minLength} 到 {maxLength} 个字符"},{validateFunction:function(t,e,a,n){return(/^1\d{10}$/.test(e)||/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(e))&&n("昵称不能是：手机号或邮箱"),/^\d+$/.test(e)&&n("昵称不能为纯数字"),/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(e)&&n("昵称不能包含中文"),!0}}],label:"昵称"}},r.default.getPwdRules());e.default=o},e0a1:function(t,e,a){"use strict";a.r(e);var n=a("eb12"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},eb12:function(t,e,a){"use strict";(function(t,n){var i=a("4ea4");a("ac1f"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("d7da")),o=i(a("59dd")),s=(i(a("0173")),t.importObject("uni-id-co",{customUI:!0})),u={mixins:[o.default],data:function(){return{formData:{username:"",nickname:"",password:"",password2:"",captcha:""},rules:r.default,focusUsername:!1,focusNickname:!1,focusPassword:!1,focusPassword2:!1,logo:"/static/logo.png"}},onReady:function(){this.$refs.form.setRules(this.rules)},onShow:function(){var t=this;document.onkeydown=function(e){var a=e||window.event;a&&13==a.keyCode&&t.submit()}},methods:{submit:function(){var t=this;this.$refs.form.validate().then((function(e){return 4!=t.formData.captcha.length?(t.$refs.captcha.focusCaptchaInput=!0,uni.showToast({title:"请输入验证码",icon:"none"})):t.needAgreements&&!t.agree?t.$refs.agreements.popup((function(){t.submitForm(e)})):void t.submitForm(e)})).catch((function(e){var a=e[0].key;a=a.replace(a[0],a[0].toUpperCase()),n.log(a),t["focus"+a]=!0}))},submitForm:function(t){var e=this;n.log(this.formData),s.registerAdmin(this.formData).then((function(t){n.log(t),uni.navigateBack()})).catch((function(t){n.log(t),n.log(t.message),e.$refs.captcha.getImageCaptcha(),uni.showModal({title:"提示",content:t.errMsg||"创建失败: ".concat(t.errCode),showCancel:!1})}))},navigateBack:function(){uni.navigateBack()},toLogin:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})},registerByEmail:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/register/register-by-email"})}}};e.default=u}).call(this,a("a9ff")["default"],a("5a52")["default"])},fa12:function(t,e,a){var n=a("0175");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("4d7c1035",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
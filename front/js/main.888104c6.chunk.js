(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{226:function(e,t,n){e.exports={overlay:"LoadingWindow_overlay__16ikK",spinner:"LoadingWindow_spinner__183ES",rotator:"LoadingWindow_rotator__2TnsB",path:"LoadingWindow_path__LgGUm",dash:"LoadingWindow_dash__2nvuH",colors:"LoadingWindow_colors__13-up"}},428:function(e,t,n){e.exports=n(561)},433:function(e,t,n){},434:function(e,t,n){},445:function(e,t){},447:function(e,t){},561:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),i=(n(433),n(434),n(29)),l=n(109),u=n(18),s=n(3),d=n(14),f=n(66),m=n.n(f),g=n(276);function E(e,t){t=t-2016-8;for(var n=0;n<Math.pow(6,2);n++)e[t]=e[t+1]=e[t+2]=255,t+=(n+1)%6?4:988}var p=function(e,t){for(var n=function(e){var t=m.a.utils.hex.fromBytes(e),n=new Uint8Array(4*t.length),a=0;return t.split("").forEach((function(e){for(var t=parseInt(e,16).toString(2);4!==t.length;)t="0".concat(t);for(var r=0;r<t.length;r++)n[a]=parseInt(t[r],10),a++})),n}(Object(g.pbkdf2Sync)(e,t,1,32,"sha512")),a=new Uint8ClampedArray(287280),r=7343,o=0,c=0;c<a.length;c++)a[c]=(c+1)%4?0:255;for(var i=0;i<16;i++){for(var l=4*r;l<=4*(r+182);l+=48)n[o]&&E(a,l),o++;r+=3780}return a},b=function(e){return new Promise((function(t){var n=new Image;n.src=e,n.onload=function(){return t(n)}}))},h=function(e,t){var n=Object(g.pbkdf2Sync)(e,t,1,32,"sha512");return m.a.utils.hex.fromBytes(n)},v=function(e){for(var t=function(e){for(var t=7343,n=[[]],a=0,r=0;r<16;r++){for(var o=4*t;o<=4*(t+182);o+=48)n[a].length%4||0===n[a].length||(n.push([]),a++),e[o]<=25&&e[o+1]<=25&&e[o+2]<=25?n[a].push(0):n[a].push(1);t+=3780}return n}(e),n="",a=0;a<t.length;a++){var r=t[a].join(""),o=parseInt(r,2).toString(16);n=n.concat(o)}return n},y=function(e,t){var n=new Uint8Array(m.a.utils.hex.toBytes(t));return e.map((function(e){var t=Object(d.a)({},e);for(var a in t)if("id"!==a){if(!t.hasOwnProperty(a))throw new Error("There is no instance ".concat(a," in ").concat(e));t[a]=O(t[a],n)}return t}))};function O(e,t){var n=m.a.utils.hex.toBytes(e),a=new m.a.ModeOfOperation.ctr(t,new m.a.Counter(10)).decrypt(n);return m.a.utils.utf8.fromBytes(a)}var w=n(226),S=n.n(w),j=function(){return r.a.createElement("div",{className:S.a.overlay},r.a.createElement("svg",{className:S.a.spinner,width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{className:S.a.path,fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})))},_=n(81),T=n.n(_),I=n(28),C=n.n(I),k=C()((function(e){var t="light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],n="light"===e.palette.type?e.palette.grey.A400:e.palette.grey.A200;return{main:{backgroundColor:t},lock:{borderColor:n},underlock:{borderLeftColor:n,borderRightColor:n,background:t},lockHide:{borderColor:t,backgroundColor:t},body:{borderColor:n,backgroundColor:"light"===e.palette.type?e.palette.grey.A700:e.palette.grey[800],color:e.palette.grey[50]}}})),D=function(e){var t=e.children,n=e.animationTriggered,a=e.onFileHandle,o=k(),c=function(e){e.preventDefault(),e.stopPropagation()};return r.a.createElement("div",{className:"".concat(T.a.main," ").concat(o.main)},r.a.createElement("div",{className:T.a.container},r.a.createElement("div",{className:"".concat(T.a.body," ").concat(o.body),onDrop:function(e){var t;c(e),(null===(t=e.dataTransfer)||void 0===t?void 0:t.files.length)&&a(e.dataTransfer.files[0])},onDragOver:c},t),r.a.createElement("div",{className:n?"".concat(T.a.lockContainer," ").concat(o.lockContainer," ").concat(T.a.animate):"".concat(T.a.lockContainer," ").concat(o.lockContainer)},r.a.createElement("div",{className:"".concat(T.a.lock," ").concat(o.lock)}),r.a.createElement("div",{className:"".concat(T.a.underlock," ").concat(o.underlock)}),r.a.createElement("div",{className:"".concat(T.a.lockHide," ").concat(o.lockHide)})),r.a.createElement("div",{className:T.a.fixContainerHeight})))},R=n(602),L=n(586),x=n(565);function N(e){return r.a.createElement(x.a,Object.assign({},e,{direction:"up"}))}var P=function(e){var t=e.getImage,n=e.calcKey,o=e.tableEntries,c=e.isFetching,i=e.fetchError,l=Object(s.a)(e,["getImage","calcKey","tableEntries","isFetching","fetchError"]);c&&l.fetchEntries();var d,f=Object(a.useRef)(null),m=Object(a.useState)(null),g=Object(u.a)(m,2),E=g[0],p=g[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),v=h[0],O=h[1],w=(d=285,C()((function(){return{canvas:{position:"absolute",zIndex:-10,top:-d+"px",left:-d+"px"},filesOverlay:{height:"100vh",width:"100vw",position:"absolute",top:0,left:0,zIndex:5},input:{display:"none"},dropLabel:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}})))(),S=function(e){if("image/png"===e.type||"image/jpeg"===e.type){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){p(this.result)}}else alert("Wrong file type")};Object(a.useEffect)((function(){if(localStorage.getItem("key")&&o){var e=localStorage.getItem("key");l.setKey(e),l.setTableEntriesDecrypted(y(o,e)),l.setIsDecrypted(!0)}else E&&t(E).then((function(e){if(252===e.width&&285===e.height){f.current.width=e.width,f.current.height=e.height;var t=f.current.getContext("2d");t.drawImage(e,0,0);var a=t.getImageData(0,0,e.width,e.height),r=n(a.data);localStorage.setItem("key",r),l.setKey(r),p(null),l.setTableEntriesDecrypted(y(o,r)),l.setIsDecrypted(!0)}else alert("Incorrect image key")}))}),[o,E,n,t,l,i]);var _=function(e){e.preventDefault(),e.stopPropagation()},T=function(e){_(e),O(!0)},I=function(){O(!1)},k=Object(a.useState)(!0),x=Object(u.a)(k,2),P=x[0],A=x[1],F=function(e,t){"clickaway"!==t&&A(!1)};return i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:w.filesOverlay}),r.a.createElement(D,null,r.a.createElement("label",{htmlFor:"fileInput"},"Pick/Drop",r.a.createElement("br",null),"your key")),r.a.createElement(L.a,{open:P,autoHideDuration:9e3,onClose:F,TransitionComponent:N},r.a.createElement(R.a,{onClose:F,severity:"error"},"An Error occurred while fetching the data"))):r.a.createElement("div",null,c&&r.a.createElement(j,null),r.a.createElement("div",{className:w.filesOverlay,onDrop:function(e){var t;_(e),O(!1),(null===(t=e.dataTransfer)||void 0===t?void 0:t.files.length)&&S(e.dataTransfer.files[0])},onDragEnter:T,onDragOver:function(e){_(e)},onDragLeave:I}),r.a.createElement(D,{animationTriggered:v,onFileHandle:function(e){return S(e)}},r.a.createElement("label",{htmlFor:"fileInput",className:w.dropLabel,onDragEnter:T,onDragLeave:I},"Pick/Drop",r.a.createElement("br",null),"your key")),r.a.createElement("input",{type:"file",id:"fileInput",className:w.input,onChange:function(e){var t;(null===(t=e.target)||void 0===t?void 0:t.files.length)&&S(e.target.files[0])}}),r.a.createElement("canvas",{ref:f,className:w.canvas}))},A=n(277),F=n.n(A);var W={fetchPasswords:function(){return F.a.get("http://cors1/public/accounts").catch((function(){return null})).then((function(e){return e}))},postPassword:function(e){return F.a.post("http://cors1/public/accounts",{id:"8",name:"test",login:"test",password:"test",tag:"test",user_id:"13"}).then((function(e){console.log(e)})),0}},G=n(19),B={editingEntryId:null,searchBarText:"",tagSelected:"blank",tableEntries:null,addWindowShown:!1,editWindowShown:!1,getKeyWindowShown:!1},K=function(e){return{type:"SET_TABLE_ENTRIES",tableEntries:e}},U=function(){return{type:"const TOGGLE_GETTING_KEY_MODAL"}},H=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE_SEARCH_BAR_TEXT":return Object(d.a)({},n,{searchBarText:a.searchBarText});case"APPLY_TAG_ON_SELECTION":return Object(d.a)({},n,{tagSelected:a.tagSelected});case"ADD_ENTRY":e=n.tableEntries.length;var r={id:++e,name:a.entry.name,login:a.entry.login,password:a.entry.password,tag:a.entry.tag};return Object(d.a)({},n,{lastPostId:e,tableEntries:[].concat(Object(G.a)(n.tableEntries),[r])});case"TOGGLE_ADD_WINDOW":return Object(d.a)({},n,{addWindowShown:!n.addWindowShown});case"CLEAR_TAG":return Object(d.a)({},n,{tagSelected:"blank"});case"TOGGLE_EDIT_WINDOW":return Object(d.a)({},n,{editWindowShown:!n.editWindowShown,editingEntryId:a.editingEntryId});case"SAVE_EDITED_ENTRY":return e=a.entry.id-1,JSON.stringify(a.entry)!==JSON.stringify(n.tableEntries[e])?(t=Object(G.a)(n.tableEntries))[a.entry.id-1]=a.entry:t=n.tableEntries,Object(d.a)({},n,{tableEntries:t});case"DELETE_ENTRY":e=(t=Object(G.a)(n.tableEntries)).length-1;for(var o=a.id-1;o<e;o++)t[o]=t[o+1],t[o].id=o+1;return t.pop(),Object(d.a)({},n,{tableEntries:t});case"CLEAR_SEARCH_FIELD":return Object(d.a)({},n,{searchBarText:""});case"SET_TABLE_ENTRIES":return Object(d.a)({},n,{tableEntries:a.tableEntries});case"SET_DECRYPTED_TABLE_ENTRIES":return Object(d.a)({},n,{tableEntries:Object(G.a)(a.tableEntries)});case"const TOGGLE_GETTING_KEY_MODAL":return Object(d.a)({},n,{getKeyWindowShown:!n.getKeyWindowShown});case"RESET_CONTENT":return Object(d.a)({},B);default:return n}},M={isDecrypted:!1,isSignedIn:!0,isFetching:!0,firstSignIn:!1,fetchError:!1,userEmail:null,userLogin:null,userToken:null,userImageURL:null,key:null},Y=function(e){return{type:"SET_IS_SIGNED_IN",isSignedIn:e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_SIGNED_IN":return Object(d.a)({},e,{isSignedIn:t.isSignedIn});case"SET_USER_DATA":return Object(d.a)({},e,{userEmail:t.data.email,userLogin:t.data.login,userToken:t.data.token,userImageURL:t.data.image});case"SET_IS_DECRYPTED":return Object(d.a)({},e,{isDecrypted:t.isDecrypted});case"SET_IS_FETCHING":return Object(d.a)({},e,{isFetching:t.isFetching});case"SET_KEY":return Object(d.a)({},e,{key:t.key});case"SET_FETCH_ERROR":return Object(d.a)({},e,{fetchError:!0});case"RESET_LAYERS":return Object(d.a)({},M);default:return e}},q=n(278),J=function(e){return e.content.tableEntries},V=function(e){return e.content.getKeyWindowShown},X=Object(q.a)(J,(function(e){return e.map((function(e){return e.tag})).filter((function(e,t,n){return n.indexOf(e)===t}))})),Q=Object(q.a)(J,(function(e){return e.content.tagSelected}),(function(e){return e.content.searchBarText}),(function(e,t,n){var a;return"blank"!==t&&(a=e.filter((function(e){return e.tag===t}))),a=void 0===a?e:a,""!==n&&(a=a.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}))),a})),Z=function(e){return e.layers.userEmail},$=function(e){return e.layers.userLogin},ee=function(e){return e.layers.userImageURL},te=function(e){return e.layers.isDecrypted},ne=function(e){return e.layers.isSignedIn},ae=function(e){return e.layers.isFetching},re=function(e){return e.layers.fetchError},oe=function(e){return e.layers.firstSignIn},ce=Object(i.b)((function(e){return{tableEntries:J(e),isFetching:ae(e),fetchError:re(e),calcKey:v,getImage:b}}),{setIsDecrypted:function(e){return{type:"SET_IS_DECRYPTED",isDecrypted:e}},setTableEntriesDecrypted:function(e){return{type:"SET_DECRYPTED_TABLE_ENTRIES",tableEntries:e}},fetchEntries:function(){return function(e){W.fetchPasswords().then((function(t){e({type:"SET_IS_FETCHING",isFetching:!1}),e(t?K(t.data):{type:"SET_FETCH_ERROR"})}))}},setKey:function(e){return{type:"SET_KEY",key:e}}})(P),ie=n(397),le=n.n(ie),ue=n(407),se=n.n(ue),de=n(398),fe=n.n(de),me=n(405),ge=n.n(me),Ee=n(281),pe=n.n(Ee),be=n(280),he=n.n(be),ve=n(399),ye=n.n(ve),Oe=n(400),we=n.n(Oe),Se=n(402),je=n.n(Se),_e=n(403),Te=n.n(_e),Ie=n(404),Ce=n.n(Ie),ke=n(408),De=n.n(ke),Re=n(401),Le=n.n(Re),xe=n(406),Ne=n.n(xe),Pe=n(409),Ae=n.n(Pe),Fe=n(391),We=n.n(Fe),Ge=n(603),Be=n(372),Ke=function(e){var t=e.columnDef.title,n=Object(a.useState)({value:e.rowData[e.columnDef.field]||""}),o=Object(u.a)(n,2),c=o[0],i=o[1],l=e.columnDef.lookup,s=Object.values(l);return r.a.createElement(Ge.a,{options:s,freeSolo:!0,inputValue:c.value,onInputChange:function(t,n){t&&"keydown"!==t.type&&n!==c.value&&(e.onChange(n),i(Object(d.a)({},c,{value:n})))},onChange:function(t,n){t&&n&&(e.onChange(n.title||n),i(Object(d.a)({},c,{value:n.title||n})))},getOptionLabel:function(e){return e.title||e},renderInput:function(e){return r.a.createElement(Be.a,Object.assign({},e,{label:t||""}))}})},Ue=n(10);var He=function(e,t,n){var a=Object(G.a)(e.columns),r=null;if(a.forEach((function(e){e.hasOwnProperty("lookup")&&(r=Object(d.a)({},e.lookup))})),r){if(t){var o=t.tag;r=n?function(e,t,n){var a=Object(d.a)({},e),r=Object(G.a)(t).map((function(e){return e.id===n.id?Object(d.a)({},e,{tag:n.tag}):Object(d.a)({},e)})),o=new Set(r.map((function(e){return e.tag})));return Object.values(a).forEach((function(e){o.has(e)||delete a[e]})),a}(r,e.data,t):r,r=Object(d.a)({},r,Object(Ue.a)({},o,o))}else r=function(e,t,n){var a=Object(d.a)({},e);t.filter((function(e){return e.tag===n.tag})).length<=1&&delete a[n.tag];return a}(r,e.data,n);return a.forEach((function(e,t){e.hasOwnProperty("lookup")&&(a[t].lookup=r)})),a}};var Me=function(e){return function(t,n){return new Promise((function(a){setTimeout((function(){n&&e((function(e){var a=He(e,t,n),r=Object(G.a)(e.data);return r[r.indexOf(n)]=t,Object(d.a)({},e,{data:r,columns:a})})),a()}),600)}))}};var Ye=function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(),e((function(e){var n=He(e,null,t),a=Object(G.a)(e.data);return a.splice(a.indexOf(t),1),Object(d.a)({},e,{data:a,columns:n})}))}),600)}))}},ze=C()((function(){return{textField:{minWidth:"15ch"}}})),qe=n(376),Je=n(270),Ve=n(599),Xe=n(600),Qe=n(271),Ze=n(272),$e=n(211),et=function(e){var t="password-".concat(Math.floor(100*Math.random()),"-").concat(Date.now()),n=ze(),o=e.columnDef.title,c=Object(a.useState)({value:e.rowData[e.columnDef.field]||"",showPassword:!1}),i=Object(u.a)(c,2),l=i[0],s=i[1];return r.a.createElement(Qe.a,{className:"".concat(n.textField)},r.a.createElement(Ze.a,{htmlFor:t},o),r.a.createElement($e.a,{id:t,type:l.showPassword?"text":"password",value:l.value,onChange:function(t){e.onChange(t.target.value),s(Object(d.a)({},l,{value:t.target.value}))},endAdornment:r.a.createElement(qe.a,{position:"end"},r.a.createElement(Je.a,{"aria-label":"toggle password visibility",onClick:function(){s(Object(d.a)({},l,{showPassword:!l.showPassword}))},onMouseDown:function(e){e.preventDefault()}},l.showPassword?r.a.createElement(Ve.a,null):r.a.createElement(Xe.a,null)))}))},tt=function(e){var t=e.useAutofocus,n=Object(s.a)(e,["useAutofocus"]),o=n.columnDef.title,c=Object(a.useState)({value:n.rowData[n.columnDef.field]||"",addMode:!1}),i=Object(u.a)(c,2),l=i[0],f=i[1];return r.a.createElement(Be.a,{value:l.value,label:o,onChange:function(e){n.onChange(e.target.value),f(Object(d.a)({},l,{value:e.target.value}))},autoFocus:t})};var nt=function(e){return function(t){return new Promise((function(n){setTimeout((function(){e((function(e){var n=He(e,t,null),a=Object(G.a)(e.data);return a.push(t),Object(d.a)({},e,{data:a,columns:n})})),n()}),600)}))}},at=n(594),rt=n(358),ot=n(374);var ct=function(e){var t=e.copyFunc,n=e.field,a=e.hiddenText;return r.a.createElement(rt.a,{title:"Copy",placement:"left"},r.a.createElement(ot.a,{onClick:t.bind(null,n),style:{textTransform:"none",fontFamily:a?"'Libre Barcode 128', cursive":"'Roboto', sans-serif"}},a?"dummyChars":n))};function it(e){return r.a.createElement(x.a,Object.assign({},e,{direction:"up"}))}var lt={Add:Object(a.forwardRef)((function(e,t){return r.a.createElement(le.a,Object.assign({},e,{ref:t}))})),Check:Object(a.forwardRef)((function(e,t){return r.a.createElement(fe.a,Object.assign({},e,{ref:t}))})),Clear:Object(a.forwardRef)((function(e,t){return r.a.createElement(he.a,Object.assign({},e,{ref:t}))})),Delete:Object(a.forwardRef)((function(e,t){return r.a.createElement(ye.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(a.forwardRef)((function(e,t){return r.a.createElement(pe.a,Object.assign({},e,{ref:t}))})),Edit:Object(a.forwardRef)((function(e,t){return r.a.createElement(we.a,Object.assign({},e,{ref:t}))})),Export:Object(a.forwardRef)((function(e,t){return r.a.createElement(Le.a,Object.assign({},e,{ref:t}))})),Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(je.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(Te.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(Ce.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(pe.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(ge.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(he.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(Ne.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(se.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(a.forwardRef)((function(e,t){return r.a.createElement(De.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(a.forwardRef)((function(e,t){return r.a.createElement(Ae.a,Object.assign({},e,{ref:t}))}))},ut=C()((function(e){return{container:{marginTop:e.spacing(4)}}})),st=function(e){for(var t=ut(),n=e.filteredTableEntries,o=e.tags,c={},i=0;i<o.length;i++)c[o[i]]=o[i];var l=n.map((function(e){return{id:e.id,name:e.name,login:e.login,password:e.password,tag:e.tag}})),s=Object(a.useState)(!1),d=Object(u.a)(s,2),f=d[0],m=d[1],g=Object(a.useState)({columns:[{title:"Name",field:"name",filtering:!1,editComponent:function(e){return r.a.createElement(tt,Object.assign({},e,{useAutofocus:!0}))},cellStyle:{cursor:"default"},customSort:h("name")},{title:"Login",field:"login",filtering:!1,editComponent:tt,cellStyle:{cursor:"default",paddingLeft:8,flexWrap:"wrap"},render:function(e){return r.a.createElement(ct,{copyFunc:v,field:e.login})},customSort:h("login")},{title:"Password",field:"password",filtering:!1,sorting:!1,editComponent:et,cellStyle:{cursor:"default",paddingLeft:8},render:function(e){return r.a.createElement(ct,{hiddenText:!0,copyFunc:v,field:e.password})}},{title:"Tag",field:"tag",lookup:c,editComponent:Ke,cellStyle:{cursor:"default"},customSort:h("tag")}],data:l}),E=Object(u.a)(g,2),p=E[0],b=E[1];function h(e){return function(t,n){return t[e].toLowerCase()>n[e].toLowerCase()?1:-1}}function v(e){var t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t),m(!0)}function y(e,t){"clickaway"!==t&&m(!1)}return r.a.createElement(at.a,{maxWidth:"xl",className:t.container},r.a.createElement(We.a,{title:"Accounts",columns:p.columns,data:p.data,icons:lt,style:{userSelect:"none"},options:{draggable:!1,filtering:!0,paging:!1,addRowPosition:"first",debounceInterval:100,loadingType:"linear",padding:"dense",actionsCellStyle:{cursor:"default"}},actions:[{hidden:!0,icon:"dummy",onClick:function(){}}],editable:{onRowAdd:nt(b),onRowUpdate:Me(b),onRowDelete:Ye(b)},onRowClick:function(){}}),r.a.createElement(L.a,{open:f,autoHideDuration:1500,onClose:y,TransitionComponent:it},r.a.createElement(R.a,{onClose:y,severity:"success"},"Copied to clipboard!")))},dt=Object(i.b)((function(e){return{filteredTableEntries:Q(e),tags:X(e)}}),{toggleEditWindow:function(e){return{type:"TOGGLE_EDIT_WINDOW",editingEntryId:e}}})(st),ft=function(){return r.a.createElement(dt,null)},mt=n(578),gt=n(410),Et=n.n(gt),pt=n(588),bt=n(596),ht=n(589),vt=n(590),yt=C()((function(){return{textField:{minWidth:"15ch"}}}));var Ot=function(e){var t=e.onChange,n=e.value,o=e.autoFocus,c=Object(s.a)(e,["onChange","value","autoFocus"]),i=yt(),l="password-".concat(Math.floor(100*Math.random()),"-").concat(Date.now()),f=Object(a.useState)({value:n||"",showPassword:!1}),m=Object(u.a)(f,2),g=m[0],E=m[1];return r.a.createElement(Qe.a,Object.assign({className:"".concat(i.textField)},c),r.a.createElement(Ze.a,{htmlFor:l},"Enter your password"),r.a.createElement($e.a,{id:l,type:g.showPassword?"text":"password",value:g.value,autoFocus:o,onChange:function(e){t(e.target.value),E(Object(d.a)({},g,{value:e.target.value}))},endAdornment:r.a.createElement(qe.a,{position:"end"},r.a.createElement(Je.a,{"aria-label":"toggle password visibility",onClick:function(){E(Object(d.a)({},g,{showPassword:!g.showPassword}))},onMouseDown:function(e){e.preventDefault()}},g.showPassword?r.a.createElement(Ve.a,null):r.a.createElement(Xe.a,null)))}))},wt=C()((function(){return{text:{width:"252px",marginBottom:"5px"}}})),St=function(e){var t=e.isShown,n=e.toggleKeyModal,o=e.salt,c=e.generateKey,i=Object(a.useRef)(null),l=wt(),s=Object(a.useState)(!0),d=Object(u.a)(s,2),f=d[0],m=d[1],g=Object(a.useState)(""),E=Object(u.a)(g,2),b=E[0],h=E[1],v=Object(a.useState)(null),y=Object(u.a)(v,2),O=y[0],w=y[1],S=Et()(),j=Object(mt.a)(S.breakpoints.down("sm"));return r.a.createElement(r.a.Fragment,null,r.a.createElement(pt.a,{fullScreen:j,open:t,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(bt.a,{id:"responsive-dialog-title"},"Key generation"),r.a.createElement(ht.a,null,r.a.createElement(Ot,{className:l.text,onChange:function(e){h(c(e,o)),f&&m(!1),e||m(!0);var t=p(e,o);if(i.current){var n=new ImageData(t,252,285);i.current.getContext("2d").putImageData(n,0,0),w(i.current.toDataURL())}},autoFocus:!0}),r.a.createElement("div",null,r.a.createElement("canvas",{ref:i,width:252,height:285,style:{background:"black",borderRadius:"5px"}}))),r.a.createElement(vt.a,null,r.a.createElement(ot.a,{onClick:function(){localStorage.setItem("keyGenerated",b);var e=document.createElement("a");e.setAttribute("href",O.toString()),e.setAttribute("download","key"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e),m(!0),n()},color:"primary",disabled:f},"Download the key"))))},jt=function(e){return e.app.GOOGLE_CLIENT_ID},_t=function(e){return e.app.salt},Tt=Object(i.b)((function(e){return{isShown:V(e),salt:_t(e),generateKey:h}}),{toggleKeyModal:U})(St),It=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ft,null),r.a.createElement(Tt,null))},Ct=n(411),kt=n.n(Ct),Dt=n(100),Rt=function(){var e=C()((function(e){return{offset:e.mixins.toolbar,container:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}}))();return r.a.createElement("div",{className:"".concat(e.container," ").concat(e.offset)},r.a.createElement(Dt.a,{color:"textPrimary",variant:"h5"},"In progress"),r.a.createElement("br",null),r.a.createElement(Je.a,{"aria-label":"delete"},r.a.createElement(kt.a,null)))},Lt={isProfileWindowShown:!1,isSidebarShown:!1},xt=function(){return{type:"TOGGLE_SIDEBAR"}},Nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Lt,t=arguments.length>1?arguments[1]:void 0;switch(e||(e=Lt),t.type){case"SET_IS_PROFILE_WINDOW_SHOWN":return Object(d.a)({},e,{isProfileWindowShown:t.isProfileWindowShown});case"TOGGLE_SIDEBAR":return Object(d.a)({},e,{isSidebarShown:!e.isSidebarShown});case"RESET_SIDEBAR":return Object(d.a)({},Lt);default:return e}},Pt=n(593),At=n(357),Ft=n(412),Wt=n.n(Ft),Gt=n(604),Bt=n(571),Kt=n(261),Ut=n(4),Ht=n.n(Ut),Mt=n(221),Yt=n.n(Mt),zt=function(e){return r.a.createElement(Mt.GoogleLogout,Object.assign({},e.ownProps,{buttonText:e.buttonText,onLogoutSuccess:function(){e.setIsSignedIn(!1),e.resetContent(),e.resetSidebar(),e.resetLayers()}}))},qt=Object(i.b)((function(e,t){return{ownProps:Object(d.a)({},t),userLogin:$(e),clientId:jt(e)}}),{setIsSignedIn:Y,resetLayers:function(){return{type:"RESET_LAYERS"}},resetContent:function(){return{type:"RESET_CONTENT"}},resetSidebar:function(){return{type:"RESET_SIDEBAR"}}})(zt);qt.propTypes={buttonText:Ht.a.string.isRequired};var Jt=qt,Vt=C()((function(e){return{container:{padding:e.spacing(1.5)},logoutBtn:{marginTop:e.spacing(3)}}})),Xt=function(e){var t=e.children,n=e.userLogin,o=e.userEmail,c=Vt(),i=Object(a.useState)(null),l=Object(u.a)(i,2),s=l[0],d=l[1],f=!!s,m=f?"userActions":void 0;return n&&o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onClick:function(e){d(e.currentTarget)}},r.a.createElement(rt.a,{title:"More actions"},t)),r.a.createElement(Bt.a,{id:m,open:f,anchorEl:s,onClose:function(){d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(Kt.a,{className:c.container},r.a.createElement(Dt.a,{color:"textPrimary",variant:"h6"},n),r.a.createElement(Dt.a,{color:"textSecondary"},o),r.a.createElement(Jt,{className:c.logoutBtn,buttonText:"LogOut"})))):t},Qt=n(413),Zt=n.n(Qt),$t=C()((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},clickIcon:{cursor:"pointer"},button:{marginRight:e.spacing(5)}}})),en=function(e){var t=e.toggleSidebar,n=e.userImageURL,a=e.userLogin,o=e.userEmail,c=e.toggleKeyModal,i=$t();return r.a.createElement(Pt.a,{position:"static"},r.a.createElement(At.a,null,r.a.createElement(Je.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"menu",onClick:t},r.a.createElement(Wt.a,null)),r.a.createElement(Dt.a,{variant:"h6",className:i.title},"App"),r.a.createElement(ot.a,{variant:"contained",color:"primary",onClick:c,className:i.button,startIcon:r.a.createElement(Zt.a,null),disabled:!0},"Get the key"),r.a.createElement(ot.a,{variant:"contained",color:"primary",onClick:function(){W.postPassword({id:10,name:"test",login:"test",password:"test",tag:"test"})}},"click me"),r.a.createElement(Xt,{userEmail:o,userLogin:a},r.a.createElement(Gt.a,{className:i.clickIcon,imgProps:{draggable:!1},alt:a,src:n}))))},tn=Object(i.b)((function(e){return{userImageURL:ee(e),userEmail:Z(e),userLogin:$(e)}}),{toggleSidebar:xt,toggleKeyModal:U})(en),nn=n(75),an=n(574),rn=n(568),on=n(597),cn=n(377),ln=n(416),un=n.n(ln),sn=n(415),dn=n.n(sn),fn=n(106),mn=C()((function(e){return{list:{width:250},item:{textDecoration:"none",color:e.palette.text.primary}}})),gn=function(e){var t=e.toggleSidebar,n=mn();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:n.list,onClick:t},r.a.createElement(an.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(fn.b,{to:"content",className:n.item},r.a.createElement(rn.a,{button:!0},r.a.createElement(on.a,null,r.a.createElement(dn.a,null)),r.a.createElement(cn.a,{primary:"Content"}))),r.a.createElement(fn.b,{to:"trash",className:n.item},r.a.createElement(rn.a,{button:!0},r.a.createElement(on.a,null,r.a.createElement(un.a,null)),r.a.createElement(cn.a,{primary:"Trash"}))))))},En=function(e){var t=e.isSidebarShown,n=e.toggleSidebar;return r.a.createElement(r.a.Fragment,null,r.a.createElement(nn.a,{anchor:"left",open:t,onClose:n},r.a.createElement(gn,{toggleSidebar:n})))},pn=function(e){return e.sidebar.isSidebarShown},bn=Object(i.b)((function(e){return{isSidebarShown:pn(e)}}),{toggleSidebar:xt})(En),hn=function(){var e=C()((function(){return{container:{height:"100%"}}}))();return r.a.createElement(Kt.a,{className:e.container},r.a.createElement(tn,null),r.a.createElement(bn,null),r.a.createElement(l.b,{path:"/content",render:function(){return r.a.createElement(It,null)}}),r.a.createElement(l.b,{path:"/trash",render:function(){return r.a.createElement(Rt,null)}}))},vn=function(e){var t=e.isDecrypted,n=e.firstSignIn,a=e.toggleKeyModal,o=e.setTableEntries;return t=!!n||t,n&&(o([]),a()),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(hn,null),r.a.createElement(l.a,{to:{pathname:"/content"}})):r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement(l.a,{to:{pathname:"/"}}))},yn=Object(i.b)((function(e){return{isDecrypted:te(e),firstSignIn:oe(e)}}),{toggleKeyModal:U,setTableEntries:K})(vn),On=function(e){var t=e.clientId,n=e.setUserData,a=e.setIsSignedIn;return r.a.createElement(Yt.a,{clientId:t,buttonText:"Login",onSuccess:function(e){var t=e.getBasicProfile(),r={email:t.getEmail(),login:t.getName(),token:e.getAuthResponse().id_token,image:t.getImageUrl()};n(r),a(e.isSignedIn())},onFailure:function(){alert("Failure")},cookiePolicy:"single_host_origin"})},wn=Object(i.b)((function(e){return{isSignedIn:ne(e),clientId:jt(e)}}),{setIsSignedIn:Y,setUserData:function(e){return{type:"SET_USER_DATA",data:e}}})(On),Sn=n(595),jn=n(120),_n=n(592),Tn=C()((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},wrapper:{backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900]},button:{marginTop:"20vh"}}})),In=function(){var e=Tn();return r.a.createElement(_n.a,{container:!0,component:"main",className:e.root},r.a.createElement(Sn.a,null),r.a.createElement(_n.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(_n.a,{item:!0,xs:12,sm:8,md:5,className:e.wrapper,component:jn.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(Dt.a,{component:"h1",variant:"h5"},"Welcome, Log in"),r.a.createElement(Dt.a,{component:"h1",variant:"h5"},"Using your Google Account"),r.a.createElement("div",{className:e.button},r.a.createElement(wn,null)))))},Cn=function(e){return e.isSignedIn?r.a.createElement(yn,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{path:"/login",render:function(){return r.a.createElement(In,null)}}),r.a.createElement(l.a,{to:{pathname:"/login"}}))},kn=Object(i.b)((function(e){return{isSignedIn:ne(e)}}),{})(Cn),Dn=n(264),Rn=n.n(Dn),Ln=n(585),xn=n(266),Nn=n.n(xn),Pn=(n(417),n(265)),An=n.n(Pn);var Fn=function(){var e=Rn()({palette:{type:"light",primary:Nn.a,secondary:An.a},customProps:{appBarOffset:40}});return r.a.createElement(Ln.a,{theme:e},r.a.createElement(kn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Wn=n(65),Gn=n(418),Bn={GOOGLE_CLIENT_ID:"543293527953-vts0fcpac0jn00ihje2sqomqpe37u866.apps.googleusercontent.com",salt:"0000"},Kn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn;return e},Un=Object(Wn.c)({sidebar:Nt,content:H,layers:z,app:Kn}),Hn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Wn.d,Mn=Object(Wn.e)(Un,Hn(Object(Wn.a)(Gn.a)));c.a.render(r.a.createElement(fn.a,null,r.a.createElement(i.a,{store:Mn},r.a.createElement(Fn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},81:function(e,t,n){e.exports={main:"LockContainer_main__dAKXA",container:"LockContainer_container__18_iR",fixContainerHeight:"LockContainer_fixContainerHeight__3se6h",lockContainer:"LockContainer_lockContainer__WRA8B",lock:"LockContainer_lock__e6Rix",underlock:"LockContainer_underlock__6d1Ui",lockHide:"LockContainer_lockHide__3R4Ze",body:"LockContainer_body__2Q93b",animate:"LockContainer_animate__3vkyv"}}},[[428,1,2]]]);
//# sourceMappingURL=main.888104c6.chunk.js.map
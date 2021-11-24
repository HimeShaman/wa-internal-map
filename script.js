/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,o)=>{o.r(t),o.d(t,{Properties:()=>n,VariableDescriptor:()=>r,bootstrapExtra:()=>J,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>a,getLayersMap:()=>l,initDoors:()=>q,initPropertiesTemplates:()=>M,initVariableActionLayer:()=>$});class n{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const o=this.get(e);if(void 0!==o){if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const o=this.get(e);if(void 0===o)throw new Error('Property "'+e+'" is missing');if(typeof o!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return o}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class r{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new n(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function a(){const e=await WA.room.getTiledMap(),t=new Map;return s(e.layers,t),t}function s(e,t){for(const o of e)if("objectgroup"===o.type)for(const e of o.objects)"variable"===e.type&&t.set(e.name,new r(e));else"group"===o.type&&s(o.layers,t)}let i;async function l(){return void 0===i&&(i=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),i}function c(e,t,o){for(const n of e)"group"===n.type?c(n.layers,t+n.name+"/",o):(n.name=t+n.name,o.set(n.name,n))}function p(e){let t=1/0,o=1/0,n=0,r=0;const a=e.data;if("string"==typeof a)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let i=0;i<e.width;i++)0!==a[i+s*e.width]&&(t=Math.min(t,i),r=Math.max(r,i),o=Math.min(o,s),n=Math.max(n,s));return{top:o,left:t,right:r+1,bottom:n+1}}function u(e){let t=1/0,o=1/0,n=0,r=0;for(const a of e){const e=p(a);e.left<t&&(t=e.left),e.top<o&&(o=e.top),e.right>r&&(r=e.right),e.bottom>n&&(n=e.bottom)}return{top:o,left:t,right:r,bottom:n}}var h=Object.prototype.toString,g=Array.isArray||function(e){return"[object Array]"===h.call(e)};function f(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function m(e,t){return null!=e&&"object"==typeof e&&t in e}var y=RegExp.prototype.test,v=/\S/;var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},b=/\s*/,A=/\s+/,W=/\s*=/,S=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/;function C(e){this.string=e,this.tail=e,this.pos=0}function E(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function T(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}C.prototype.eos=function(){return""===this.tail},C.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var o=t[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o},C.prototype.scanUntil=function(e){var t,o=this.tail.search(e);switch(o){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,o),this.tail=this.tail.substring(o)}return this.pos+=t.length,t},E.prototype.push=function(e){return new E(e,this)},E.prototype.lookup=function(e){var t,o,n,r=this.cache;if(r.hasOwnProperty(e))t=r[e];else{for(var a,s,i,l=this,c=!1;l;){if(e.indexOf(".")>0)for(a=l.view,s=e.split("."),i=0;null!=a&&i<s.length;)i===s.length-1&&(c=m(a,s[i])||(o=a,n=s[i],null!=o&&"object"!=typeof o&&o.hasOwnProperty&&o.hasOwnProperty(n))),a=a[s[i++]];else a=l.view[e],c=m(l.view,e);if(c){t=a;break}l=l.parent}r[e]=t}return f(t)&&(t=t.call(this.view)),t},T.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},T.prototype.parse=function(e,t){var o=this.templateCache,n=e+":"+(t||L.tags).join(":"),r=void 0!==o,a=r?o.get(n):void 0;return null==a&&(a=function(e,t){if(!e)return[];var o,n,r,a,s=!1,i=[],l=[],c=[],p=!1,u=!1,h="",f=0;function m(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function w(e){if("string"==typeof e&&(e=e.split(A,2)),!g(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(d(e[0])+"\\s*"),n=new RegExp("\\s*"+d(e[1])),r=new RegExp("\\s*"+d("}"+e[1]))}w(t||L.tags);for(var E,T,P,x,V,M,Z=new C(e);!Z.eos();){if(E=Z.pos,P=Z.scanUntil(o))for(var D=0,U=P.length;D<U;++D)a=x=P.charAt(D),function(e,t){return y.call(e,t)}(v,a)?(u=!0,s=!0,h+=" "):(c.push(l.length),h+=x),l.push(["text",x,E,E+1]),E+=1,"\n"===x&&(m(),h="",f=0,s=!1);if(!Z.scan(o))break;if(p=!0,T=Z.scan(k)||"name",Z.scan(b),"="===T?(P=Z.scanUntil(W),Z.scan(W),Z.scanUntil(n)):"{"===T?(P=Z.scanUntil(r),Z.scan(S),Z.scanUntil(n),T="&"):P=Z.scanUntil(n),!Z.scan(n))throw new Error("Unclosed tag at "+Z.pos);if(V=">"==T?[T,P,E,Z.pos,h,f,s]:[T,P,E,Z.pos],f++,l.push(V),"#"===T||"^"===T)i.push(V);else if("/"===T){if(!(M=i.pop()))throw new Error('Unopened section "'+P+'" at '+E);if(M[1]!==P)throw new Error('Unclosed section "'+M[1]+'" at '+E)}else"name"===T||"{"===T||"&"===T?u=!0:"="===T&&w(P)}if(m(),M=i.pop())throw new Error('Unclosed section "'+M[1]+'" at '+Z.pos);return function(e){for(var t,o=[],n=o,r=[],a=0,s=e.length;a<s;++a)switch((t=e[a])[0]){case"#":case"^":n.push(t),r.push(t),n=t[4]=[];break;case"/":r.pop()[5]=t[2],n=r.length>0?r[r.length-1][4]:o;break;default:n.push(t)}return o}(function(e){for(var t,o,n=[],r=0,a=e.length;r<a;++r)(t=e[r])&&("text"===t[0]&&o&&"text"===o[0]?(o[1]+=t[1],o[3]=t[3]):(n.push(t),o=t));return n}(l))}(e,t),r&&o.set(n,a)),a},T.prototype.render=function(e,t,o,n){var r=this.getConfigTags(n),a=this.parse(e,r),s=t instanceof E?t:new E(t,void 0);return this.renderTokens(a,s,o,e,n)},T.prototype.renderTokens=function(e,t,o,n,r){for(var a,s,i,l="",c=0,p=e.length;c<p;++c)i=void 0,"#"===(s=(a=e[c])[0])?i=this.renderSection(a,t,o,n,r):"^"===s?i=this.renderInverted(a,t,o,n,r):">"===s?i=this.renderPartial(a,t,o,r):"&"===s?i=this.unescapedValue(a,t):"name"===s?i=this.escapedValue(a,t,r):"text"===s&&(i=this.rawValue(a)),void 0!==i&&(l+=i);return l},T.prototype.renderSection=function(e,t,o,n,r){var a=this,s="",i=t.lookup(e[1]);if(i){if(g(i))for(var l=0,c=i.length;l<c;++l)s+=this.renderTokens(e[4],t.push(i[l]),o,n,r);else if("object"==typeof i||"string"==typeof i||"number"==typeof i)s+=this.renderTokens(e[4],t.push(i),o,n,r);else if(f(i)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(i=i.call(t.view,n.slice(e[3],e[5]),(function(e){return a.render(e,t,o,r)})))&&(s+=i)}else s+=this.renderTokens(e[4],t,o,n,r);return s}},T.prototype.renderInverted=function(e,t,o,n,r){var a=t.lookup(e[1]);if(!a||g(a)&&0===a.length)return this.renderTokens(e[4],t,o,n,r)},T.prototype.indentPartial=function(e,t,o){for(var n=t.replace(/[^ \t]/g,""),r=e.split("\n"),a=0;a<r.length;a++)r[a].length&&(a>0||!o)&&(r[a]=n+r[a]);return r.join("\n")},T.prototype.renderPartial=function(e,t,o,n){if(o){var r=this.getConfigTags(n),a=f(o)?o(e[1]):o[e[1]];if(null!=a){var s=e[6],i=e[5],l=e[4],c=a;0==i&&l&&(c=this.indentPartial(a,l,s));var p=this.parse(c,r);return this.renderTokens(p,t,o,c,n)}}},T.prototype.unescapedValue=function(e,t){var o=t.lookup(e[1]);if(null!=o)return o},T.prototype.escapedValue=function(e,t,o){var n=this.getConfigEscape(o)||L.escape,r=t.lookup(e[1]);if(null!=r)return"number"==typeof r&&n===L.escape?String(r):n(r)},T.prototype.rawValue=function(e){return e[1]},T.prototype.getConfigTags=function(e){return g(e)?e:e&&"object"==typeof e?e.tags:void 0},T.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!g(e)?e.escape:void 0};var L={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){P.templateCache=e},get templateCache(){return P.templateCache}},P=new T;L.clearCache=function(){return P.clearCache()},L.parse=function(e,t){return P.parse(e,t)},L.render=function(e,t,o,n){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(g(r=e)?"array":typeof r)+'" was given as the first argument for mustache#render(template, view, partials)');var r;return P.render(e,t,o,n)},L.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return w[e]}))},L.Scanner=C,L.Context=E,L.Writer=T;const x=L;class V{constructor(e,t){this.template=e,this.state=t,this.ast=x.parse(e)}getValue(){return void 0===this.value&&(this.value=x.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const o of this.getUsedVariables().values())t.push(this.state.onVariableChange(o).subscribe((()=>{const t=x.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const o of e){const e=o[0],n=o[1],r=o[4];["name","&","#","^"].includes(e)&&t.add(n),void 0!==r&&"string"!=typeof r&&this.recursiveGetUsedVariables(r,t)}}}async function M(){var e;const t=await l();for(const[o,n]of t.entries()){const t=null!==(e=n.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const t=new V(e.value,WA.state);if(t.isPureString())continue;const n=t.getValue();Z(o,e.name,n),t.onChange((t=>{Z(o,e.name,t)}))}}}function Z(e,t,o){WA.room.setProperty(e,t,o),"visible"===t&&(o?WA.room.showLayer(e):WA.room.hideLayer(e))}const D="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let U,R,G=0,z=0;function B(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function j(e){return e.map((e=>U.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function N(e){const t=u(j(e)),o=32*((t.right-t.left)/2+t.left),n=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(G-o,2)+Math.pow(z-n,2))}function O(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=N(e.properties.mustGetString("openLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e):function(e){const t=e.properties.getString("closeSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=N(e.properties.mustGetString("closeLayer").split("\n"));if(t>o)return;n=1-t/o}t&&WA.sound.loadSound(t).play({volume:n})}(e),B(e)})),B(e)}function _(e,t,o,n){const r=e.name;let a,s,i=!1;const l=o.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+r+'"');const c=o.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const h=!!c;function g(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,f()}})}function f(){var e;a&&a.remove(),a=WA.ui.displayActionMessage({message:null!==(e=o.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,g()}})}function d(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterZone(l,(()=>{i=!0,o.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!h||p)&&h||!o.getString("code")&&!o.getString("codeVariable")?p&&(WA.state[t.name]?g():f()):function(e){const o=u(j(t.properties.mustGetString("closeLayer").split("\n")));s=WA.room.website.create({name:"doorKeypad"+e,url:n+"/keypad.html#"+encodeURIComponent(e),position:{x:32*o.right,y:32*o.top,width:96,height:128},allowApi:!0})}(r)})),WA.room.onLeaveZone(l,(()=>{i=!1,o.getBoolean("autoClose")&&(WA.state[t.name]=!1),a&&a.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{i&&(o.getBoolean("autoClose")||!0!==WA.state[t.name]||g(),s&&!0===WA.state[t.name]&&d(),o.getBoolean("autoOpen")||!1!==WA.state[t.name]||f())}))}function H(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),o=e.properties.getNumber("soundRadius");let n=1;if(o){const t=Math.sqrt(Math.pow(e.x-G,2)+Math.pow(e.y-z,2));if(t>o)return;n=1-t/o}WA.sound.loadSound(t).play({volume:n})}(e)}))}function I(e,t){let o;const n=t.mustGetString("zone"),r=t.getString("bellPopup");WA.room.onEnterZone(n,(()=>{var n;r?o=WA.ui.openPopup(r,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(n,(()=>{o&&(o.close(),o=void 0)}))}async function q(e){e=null!=e?e:D;const t=await a();U=await l();for(const e of t.values())e.properties.get("door")&&O(e),e.properties.get("bell")&&H(e);for(const o of U.values()){const r=new n(o.properties),a=r.getString("doorVariable");if(a&&"tilelayer"===o.type){const n=t.get(a);if(void 0===n)throw new Error('Cannot find variable "'+a+'" referred in the "doorVariable" property of layer "'+o.name+'"');_(o,n,r,e)}const s=r.getString("bellVariable");s&&I(s,r)}WA.player.onPlayerMove((e=>{G=e.x,z=e.y}))}function $(e){const t=e.getString("bindVariable");if(t){const o=e.getString("zone");if(!o)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,o,n,r,a){a&&!WA.player.tags.includes(a)||(void 0!==o&&WA.room.onEnterZone(t,(()=>{r||(WA.state[e]=o)})),void 0!==n&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=n})))}(t,o,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function F(e,t){let o;const n=t.getString("zone");if(!n)throw new Error('Missing "zone" property');const r=t.getString("openConfigAdminTag");let a=!0;function s(){WA.nav.closeCoWebSite()}r&&!WA.player.tags.includes(r)&&(a=!1),WA.room.onEnterZone(n,(()=>{const n=t.getString("openConfigTrigger");var r;a&&(n&&"onaction"===n?(o&&o.remove(),o=WA.ui.displayActionMessage({message:null!==(r=t.getString("openConfigTriggerMessage"))&&void 0!==r?r:"Press SPACE or touch here to configure",callback:()=>K(e)})):K(e))})),WA.room.onLeaveZone(n,(()=>{o?(o.remove(),s()):s()}))}function K(e){const t=e?"#"+e:"";WA.nav.openCoWebSite(D+"/configuration.html"+t,!0)}function J(){return WA.onInit().then((()=>{q().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())$(new n(t.properties))}().catch((e=>console.error(e))),async function(e){const t=await WA.room.getTiledMap();e=null!=e?e:D,R=await l();const o=t.layers.find((e=>"configuration"===e.name));if(o){const t=new n(o.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of R.values()){const t=new n(e.properties),o=t.getString("openConfig");o&&"tilelayer"===e.type&&F(o,t)}}}().catch((e=>console.error(e))),M().catch((e=>console.error(e)))}))}},607:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,a){function s(e){try{l(n.next(e))}catch(e){a(e)}}function i(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,i)}l((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=o(733);let a,s;console.log("Script started successfully"),function(){n(this,void 0,void 0,(function*(){try{yield(0,r.bootstrapExtra)(),console.log("Scripting API Extra loaded successfully");const e=yield WA.room.website.get("cinemaScreen");e.x=1670,e.y=802,e.width=320,e.height=240;const t=yield WA.room.website.get("githubRepository");t.x=3272,t.y=1088,t.width=400,t.height=300}catch(e){console.error("Scripting API Extra ERROR",e)}}))}(),WA.room.onEnterZone("scrollMonitor",(()=>WA.room.hideLayer("inactiveMonitor"))),WA.room.onLeaveZone("scrollMonitor",(()=>WA.room.showLayer("inactiveMonitor"))),WA.room.onEnterZone("toRoom3",(()=>WA.room.hideLayer("doorTipSwitch"))),WA.room.onLeaveZone("toRoom3",(()=>WA.room.showLayer("doorTipSwitch"))),WA.room.onEnterZone("doorCode",(()=>WA.room.hideLayer("ctaDigitCodeSwitch"))),WA.room.onLeaveZone("doorCode",(()=>WA.room.showLayer("ctaDigitCodeSwitch")));const i=[{zone:"needHelp",message:"Do you need some guidance? Meet us by going at the top left of the map!",cta:[]},{zone:"followUs1",message:"Hey! Have you already started following us?",cta:[{label:"LinkedIn",className:"primary",callback:()=>WA.nav.openTab("https://www.linkedin.com/company/workadventu-re")},{label:"Twitter",className:"primary",callback:()=>WA.nav.openTab("https://twitter.com/workadventure_")}]},{zone:"followUs2",message:"Hey! Have you already started following us?",cta:[{label:"LinkedIn",className:"primary",callback:()=>WA.nav.openTab("https://www.linkedin.com/company/workadventu-re")},{label:"Twitter",className:"primary",callback:()=>WA.nav.openTab("https://twitter.com/workadventure_")}]},{zone:"followUs3",message:"Hey! Have you already started following us?",cta:[{label:"LinkedIn",className:"primary",callback:()=>WA.nav.openTab("https://www.linkedin.com/company/workadventu-re")},{label:"Twitter",className:"primary",callback:()=>WA.nav.openTab("https://twitter.com/workadventure_")}]},{zone:"doorCode",message:"Hello, I'm Mr Robot. The code is 5300.",cta:[]},{zone:"toRoom3",message:"Want to access the gaming room? Mr Robot can help you!",cta:[]},{zone:"gatherDesk",message:"Learn more about WorkAdventure events and our ProductHunt launch!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowGatherPopup",!0).then((()=>c()))}]},{zone:"workDesk",message:"See how your virtual office could be. This is a small example of course ;)",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowWorkPopup",!0).then((()=>c()))}]},{zone:"collaborateDesk",message:"Test and feel live integrations of collaborative software!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowCollaboratePopup",!0).then((()=>c()))}]},{zone:"playDesk",message:"Experience multi and solo games, directly embedded into WorkAdventure!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowPlayPopup",!0).then((()=>c()))}]},{zone:"createDesk",message:"Do you want to create your own map by yourself? See how here!",cta:[{label:"Dismiss",className:"normal",callback:()=>WA.state.saveVariable("dontShowCreatePopup",!0).then((()=>c()))}]}];function l(e){a=e;const t=e+"Popup",o=i.find((t=>t.zone==e));void 0!==o&&(s=WA.ui.openPopup(t,o.message,o.cta))}function c(){void 0!==s&&(s.close(),s=void 0)}WA.room.onEnterZone("needHelp",(()=>l("needHelp"))),WA.room.onLeaveZone("needHelp",c),WA.room.onEnterZone("followUs1",(()=>l("followUs1"))),WA.room.onLeaveZone("followUs1",c),WA.room.onEnterZone("followUs2",(()=>l("followUs2"))),WA.room.onLeaveZone("followUs2",c),WA.room.onEnterZone("followUs3",(()=>l("followUs3"))),WA.room.onLeaveZone("followUs3",c),WA.room.onEnterZone("gatherDesk",(()=>{WA.state.loadVariable("dontShowGatherPopup")||l("gatherDesk")})),WA.room.onLeaveZone("gatherDesk",c),WA.room.onEnterZone("workDesk",(()=>{WA.state.loadVariable("dontShowWorkPopup")||l("workDesk")})),WA.room.onLeaveZone("workDesk",c),WA.room.onEnterZone("collaborateDesk",(()=>{WA.state.loadVariable("dontShowCollaboratePopup")||l("collaborateDesk")})),WA.room.onLeaveZone("collaborateDesk",c),WA.room.onEnterZone("playDesk",(()=>{WA.state.loadVariable("dontShowPlayPopup")||l("playDesk")})),WA.room.onLeaveZone("playDesk",c),WA.room.onEnterZone("createDesk",(()=>{WA.state.loadVariable("dontShowCreatePopup")||l("createDesk")})),WA.room.onLeaveZone("createDesk",c),WA.room.onEnterZone("doorCode",(()=>l("doorCode"))),WA.room.onLeaveZone("doorCode",c),WA.room.onEnterZone("toRoom3",(()=>{WA.state.loadVariable("room3Door")||l("toRoom3")})),WA.room.onLeaveZone("toRoom3",c)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(607)})();
//# sourceMappingURL=script.js.map
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2608],{2608:(Qe,B,p)=>{p.r(B),p.d(B,{HomePageModule:()=>Ke});var w=p(6814),m=p(3582),I=p(95),q=p(3044),r=p(6689),$=p(2096),pe=p(7715),fe=p(5592),me=p(6328),ye=p(2181),A=p(7398),Z=p(4716),ge=p(4664);class N{}class M{}class b{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(s=>{const n=s.indexOf(":");if(n>0){const a=s.slice(0,n),o=a.toLowerCase(),c=s.slice(n+1).trim();this.maybeSetNormalizedName(a,o),this.headers.has(o)?this.headers.get(o).push(c):this.headers.set(o,[c])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof b?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){const s=new b;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof b?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){const s=e.name.toLowerCase();switch(e.op){case"a":case"s":let n=e.value;if("string"==typeof n&&(n=[n]),0===n.length)return;this.maybeSetNormalizedName(e.name,s);const a=("a"===e.op?this.headers.get(s):void 0)||[];a.push(...n),this.headers.set(s,a);break;case"d":const o=e.value;if(o){let c=this.headers.get(s);if(!c)return;c=c.filter(i=>-1===o.indexOf(i)),0===c.length?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,c)}else this.headers.delete(s),this.normalizedNames.delete(s)}}setHeaderEntries(e,s){const n=(Array.isArray(s)?s:[s]).map(o=>o.toString()),a=e.toLowerCase();this.headers.set(a,n),this.maybeSetNormalizedName(e,a)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}}class ve{encodeKey(e){return G(e)}encodeValue(e){return G(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const Ee=/%(\d[a-f0-9])/gi,Te={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function G(t){return encodeURIComponent(t).replace(Ee,(e,s)=>{var n;return null!==(n=Te[s])&&void 0!==n?n:e})}function H(t){return`${t}`}class T{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new ve,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function be(t,e){const s=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(a=>{const o=a.indexOf("="),[c,i]=-1==o?[e.decodeKey(a),""]:[e.decodeKey(a.slice(0,o)),e.decodeValue(a.slice(o+1))],u=s.get(c)||[];u.push(i),s.set(c,u)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{const n=e.fromObject[s],a=Array.isArray(n)?n.map(H):[H(n)];this.map.set(s,a)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){const s=[];return Object.keys(e).forEach(n=>{const a=e[n];Array.isArray(a)?a.forEach(o=>{s.push({param:n,value:o,op:"a"})}):s.push({param:n,value:a,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const s=this.encoder.encodeKey(e);return this.map.get(e).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const s=new T({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const s=("a"===e.op?this.map.get(e.param):void 0)||[];s.push(H(e.value)),this.map.set(e.param,s);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let n=this.map.get(e.param)||[];const a=n.indexOf(H(e.value));-1!==a&&n.splice(a,1),n.length>0?this.map.set(e.param,n):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class _e{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function V(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function W(t){return typeof Blob<"u"&&t instanceof Blob}function K(t){return typeof FormData<"u"&&t instanceof FormData}class O{constructor(e,s,n,a){let o;if(this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function we(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||a?(this.body=void 0!==n?n:null,o=a):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params)),this.headers||(this.headers=new b),this.context||(this.context=new _e),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=s;else{const i=s.indexOf("?");this.urlWithParams=s+(-1===i?"?":i<s.length-1?"&":"")+c}}else this.params=new T,this.urlWithParams=s}serializeBody(){return null===this.body?null:V(this.body)||W(this.body)||K(this.body)||function Ce(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof T?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||K(this.body)?null:W(this.body)?this.body.type||null:V(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var s;const n=e.method||this.method,a=e.url||this.url,o=e.responseType||this.responseType,c=void 0!==e.body?e.body:this.body,i=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,u=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let l=e.headers||this.headers,y=e.params||this.params;const x=null!==(s=e.context)&&void 0!==s?s:this.context;return void 0!==e.setHeaders&&(l=Object.keys(e.setHeaders).reduce((g,v)=>g.set(v,e.setHeaders[v]),l)),e.setParams&&(y=Object.keys(e.setParams).reduce((g,v)=>g.set(v,e.setParams[v]),y)),new O(n,a,c,{params:y,headers:l,context:x,reportProgress:u,responseType:o,withCredentials:i})}}var R=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(R||{});class D{constructor(e,s=200,n="OK"){this.headers=e.headers||new b,this.status=void 0!==e.status?e.status:s,this.statusText=e.statusText||n,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class j extends D{constructor(e={}){super(e),this.type=R.ResponseHeader}clone(e={}){return new j({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class P extends D{constructor(e={}){super(e),this.type=R.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new P({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class Y extends D{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function L(t,e){return{body:e,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials}}let Q=(()=>{var t;class e{constructor(n){this.handler=n}request(n,a,o={}){let c;if(n instanceof O)c=n;else{let l,y;l=o.headers instanceof b?o.headers:new b(o.headers),o.params&&(y=o.params instanceof T?o.params:new T({fromObject:o.params})),c=new O(n,a,void 0!==o.body?o.body:null,{headers:l,context:o.context,params:y,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials})}const i=(0,$.of)(c).pipe((0,me.b)(l=>this.handler.handle(l)));if(n instanceof O||"events"===o.observe)return i;const u=i.pipe((0,ye.h)(l=>l instanceof P));switch(o.observe||"body"){case"body":switch(c.responseType){case"arraybuffer":return u.pipe((0,A.U)(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return u.pipe((0,A.U)(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return u.pipe((0,A.U)(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return u.pipe((0,A.U)(l=>l.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(n,a={}){return this.request("DELETE",n,a)}get(n,a={}){return this.request("GET",n,a)}head(n,a={}){return this.request("HEAD",n,a)}jsonp(n,a){return this.request("JSONP",n,{params:(new T).append(a,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,a={}){return this.request("OPTIONS",n,a)}patch(n,a,o={}){return this.request("PATCH",n,L(o,a))}post(n,a,o={}){return this.request("POST",n,L(o,a))}put(n,a,o={}){return this.request("PUT",n,L(o,a))}}return(t=e).\u0275fac=function(n){return new(n||t)(r.LFG(N))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),e})();function se(t,e){return e(t)}function Pe(t,e){return(s,n)=>e.intercept(s,{handle:a=>t(a,n)})}const Oe=new r.OlP(""),S=new r.OlP(""),ne=new r.OlP("");function Se(){let t=null;return(e,s)=>{var n;null===t&&(t=(null!==(n=(0,r.f3M)(Oe,{optional:!0}))&&void 0!==n?n:[]).reduceRight(Pe,se));const a=(0,r.f3M)(r.HDt),o=a.add();return t(e,s).pipe((0,Z.x)(()=>a.remove(o)))}}let re=(()=>{var t;class e extends N{constructor(n,a){super(),this.backend=n,this.injector=a,this.chain=null,this.pendingTasks=(0,r.f3M)(r.HDt)}handle(n){if(null===this.chain){const o=Array.from(new Set([...this.injector.get(S),...this.injector.get(ne,[])]));this.chain=o.reduceRight((c,i)=>function xe(t,e,s){return(n,a)=>s.runInContext(()=>e(n,o=>t(o,a)))}(c,i,this.injector),se)}const a=this.pendingTasks.add();return this.chain(n,o=>this.backend.handle(o)).pipe((0,Z.x)(()=>this.pendingTasks.remove(a)))}}return(t=e).\u0275fac=function(n){return new(n||t)(r.LFG(M),r.LFG(r.lqb))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),e})();const He=/^\)\]\}',?\n/;let ae=(()=>{var t;class e{constructor(n){this.xhrFactory=n}handle(n){if("JSONP"===n.method)throw new r.vHH(-2800,!1);const a=this.xhrFactory;return(a.\u0275loadImpl?(0,pe.D)(a.\u0275loadImpl()):(0,$.of)(null)).pipe((0,ge.w)(()=>new fe.y(c=>{const i=a.build();if(i.open(n.method,n.urlWithParams),n.withCredentials&&(i.withCredentials=!0),n.headers.forEach((d,h)=>i.setRequestHeader(d,h.join(","))),n.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){const d=n.detectContentTypeHeader();null!==d&&i.setRequestHeader("Content-Type",d)}if(n.responseType){const d=n.responseType.toLowerCase();i.responseType="json"!==d?d:"text"}const u=n.serializeBody();let l=null;const y=()=>{if(null!==l)return l;const d=i.statusText||"OK",h=new b(i.getAllResponseHeaders()),E=function ke(t){return"responseURL"in t&&t.responseURL?t.responseURL:/^X-Request-URL:/m.test(t.getAllResponseHeaders())?t.getResponseHeader("X-Request-URL"):null}(i)||n.url;return l=new j({headers:h,status:i.status,statusText:d,url:E}),l},x=()=>{let{headers:d,status:h,statusText:E,url:z}=y(),f=null;204!==h&&(f=typeof i.response>"u"?i.responseText:i.response),0===h&&(h=f?200:0);let F=h>=200&&h<300;if("json"===n.responseType&&"string"==typeof f){const de=f;f=f.replace(He,"");try{f=""!==f?JSON.parse(f):null}catch(he){f=de,F&&(F=!1,f={error:he,text:f})}}F?(c.next(new P({body:f,headers:d,status:h,statusText:E,url:z||void 0})),c.complete()):c.error(new Y({error:f,headers:d,status:h,statusText:E,url:z||void 0}))},g=d=>{const{url:h}=y(),E=new Y({error:d,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});c.error(E)};let v=!1;const J=d=>{v||(c.next(y()),v=!0);let h={type:R.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),"text"===n.responseType&&i.responseText&&(h.partialText=i.responseText),c.next(h)},X=d=>{let h={type:R.UploadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),c.next(h)};return i.addEventListener("load",x),i.addEventListener("error",g),i.addEventListener("timeout",g),i.addEventListener("abort",g),n.reportProgress&&(i.addEventListener("progress",J),null!==u&&i.upload&&i.upload.addEventListener("progress",X)),i.send(u),c.next({type:R.Sent}),()=>{i.removeEventListener("error",g),i.removeEventListener("abort",g),i.removeEventListener("load",x),i.removeEventListener("timeout",g),n.reportProgress&&(i.removeEventListener("progress",J),null!==u&&i.upload&&i.upload.removeEventListener("progress",X)),i.readyState!==i.DONE&&i.abort()}})))}}return(t=e).\u0275fac=function(n){return new(n||t)(r.LFG(w.JF))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),e})();const U=new r.OlP("XSRF_ENABLED"),ie=new r.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),ce=new r.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class le{}let De=(()=>{var t;class e{constructor(n,a,o){this.doc=n,this.platform=a,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,w.Mx)(n,this.cookieName),this.lastCookieString=n),this.lastToken}}return(t=e).\u0275fac=function(n){return new(n||t)(r.LFG(w.K0),r.LFG(r.Lbi),r.LFG(ie))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),e})();function je(t,e){const s=t.url.toLowerCase();if(!(0,r.f3M)(U)||"GET"===t.method||"HEAD"===t.method||s.startsWith("http://")||s.startsWith("https://"))return e(t);const n=(0,r.f3M)(le).getToken(),a=(0,r.f3M)(ce);return null!=n&&!t.headers.has(a)&&(t=t.clone({headers:t.headers.set(a,n)})),e(t)}var _=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(_||{});function C(t,e){return{\u0275kind:t,\u0275providers:e}}function Le(...t){const e=[Q,ae,re,{provide:N,useExisting:re},{provide:M,useExisting:ae},{provide:S,useValue:je,multi:!0},{provide:U,useValue:!0},{provide:le,useClass:De}];for(const s of t)e.push(...s.\u0275providers);return(0,r.MR2)(e)}const ue=new r.OlP("LEGACY_INTERCEPTOR_FN");let Je=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[Le(C(_.LegacyInterceptors,[{provide:ue,useFactory:Se},{provide:S,useExisting:ue,multi:!0}]))]}),e})();function Ze(t,e){if(1&t&&(r.TgZ(0,"ion-col",5)(1,"ion-card")(2,"ion-card-content")(3,"ion-avatar"),r._UZ(4,"img",6),r.qZA(),r.TgZ(5,"h1"),r._uU(6),r.qZA(),r.TgZ(7,"h2"),r._uU(8),r.qZA(),r.TgZ(9,"p"),r._uU(10),r.qZA(),r.TgZ(11,"p"),r._uU(12),r.qZA(),r.TgZ(13,"p"),r._uU(14),r.qZA()()()()),2&t){const s=r.oxw().$implicit;r.xp6(4),r.Q6J("src",s.image,r.LSH),r.xp6(2),r.Oqu(s.singer),r.xp6(2),r.Oqu(s.song),r.xp6(2),r.Oqu(s.genre),r.xp6(2),r.Oqu(s.duration),r.xp6(2),r.Oqu(s.release_date)}}function Ge(t,e){if(1&t&&(r.ynx(0),r.YNc(1,Ze,15,6,"ion-col",4),r.BQk()),2&t){const s=e.$implicit,n=r.oxw();r.xp6(1),r.Q6J("ngIf",""==n.filtro||s.singer.startsWith(n.filtro))}}const Ve=[{path:"",component:(()=>{var t;class e{constructor(n){this.httpClient=n,this.filtro="",this.singers=this.httpClient.get("https://raw.githubusercontent.com/Sperper/json-Actividad12/refs/heads/master/JSON_Artistas.json")}}return(t=e).\u0275fac=function(n){return new(n||t)(r.Y36(Q))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:6,consts:[[3,"translucent"],[3,"fullscreen"],["placeholder","Introduce el nombre del cantante que desea buscar (respetando las may\xfasculas y las min\xfasculas)",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["size-xl","2","size-lg","3","size-md","4","size-sm","6","size-xs","12",4,"ngIf"],["size-xl","2","size-lg","3","size-md","4","size-sm","6","size-xs","12"],[3,"src"]],template:function(n,a){1&n&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),r._uU(3," Lista de cantantes con una canci\xf3n "),r.qZA()()(),r.TgZ(4,"ion-content",1)(5,"ion-input",2),r.NdJ("ngModelChange",function(c){return a.filtro=c}),r.qZA(),r.TgZ(6,"ion-grid")(7,"ion-row"),r.YNc(8,Ge,2,1,"ng-container",3),r.ALo(9,"async"),r.qZA()()()),2&n&&(r.Q6J("translucent",!0),r.xp6(4),r.Q6J("fullscreen",!0),r.xp6(1),r.Q6J("ngModel",a.filtro),r.xp6(3),r.Q6J("ngForOf",r.lcZ(9,4,a.singers)))},dependencies:[w.sg,w.O5,I.JJ,I.On,m.BJ,m.PM,m.FN,m.wI,m.W2,m.jY,m.Gu,m.pK,m.Nd,m.wd,m.sr,m.j9,w.Ov],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}@media only screen and (orientation: portrait){ion-card[_ngcontent-%COMP%]{--background:rgba(111, 0, 255, .753) }ion-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:none;visibility:hidden}}"]}),e})()}];let We=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[q.Bz.forChild(Ve),q.Bz]}),e})(),Ke=(()=>{var t;class e{}return(t=e).\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[w.ez,I.u5,m.Pc,We,Je]}),e})()}}]);
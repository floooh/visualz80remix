var h;h||=typeof Module != 'undefined' ? Module : {};var aa="object"==typeof window,ba="undefined"!=typeof WorkerGlobalScope,ca="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&"renderer"!=process.type,da=Object.assign({},h),ea=[],fa="./this.program",ha=(a,b)=>{throw b;},k="",ia,ja;
if(ca){var fs=require("fs"),ka=require("path");k=__dirname+"/";ja=a=>{a=la(a)?new URL(a):ka.normalize(a);return fs.readFileSync(a)};ia=a=>{a=la(a)?new URL(a):ka.normalize(a);return new Promise((b,c)=>{fs.readFile(a,void 0,(d,e)=>{d?c(d):b(e.buffer)})})};!h.thisProgram&&1<process.argv.length&&(fa=process.argv[1].replace(/\\/g,"/"));ea=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=h);ha=(a,b)=>{process.exitCode=a;throw b;}}else if(aa||ba)ba?k=self.location.href:"undefined"!=typeof document&&
document.currentScript&&(k=document.currentScript.src),k=k.startsWith("blob:")?"":k.substr(0,k.replace(/[?#].*/,"").lastIndexOf("/")+1),ba&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=a=>la(a)?new Promise((b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c(d.status)};d.onerror=c;d.send(null)}):fetch(a,{credentials:"same-origin"}).then(b=>
b.ok?b.arrayBuffer():Promise.reject(Error(b.status+" : "+b.url)));var ma=h.print||console.log.bind(console),n=h.printErr||console.error.bind(console);Object.assign(h,da);da=null;h.arguments&&(ea=h.arguments);h.thisProgram&&(fa=h.thisProgram);var na=h.wasmBinary,oa,q=!1,pa,r,t,qa,ra,u,w,x,y;
function sa(){var a=oa.buffer;h.HEAP8=r=new Int8Array(a);h.HEAP16=qa=new Int16Array(a);h.HEAPU8=t=new Uint8Array(a);h.HEAPU16=ra=new Uint16Array(a);h.HEAP32=u=new Int32Array(a);h.HEAPU32=w=new Uint32Array(a);h.HEAPF32=x=new Float32Array(a);h.HEAPF64=y=new Float64Array(a)}var ta=[],ua=[],va=[],wa=[];function xa(){var a=h.preRun.shift();ta.unshift(a)}var z=0,ya=null,A=null;
function za(a){h.onAbort?.(a);a="Aborted("+a+")";n(a);q=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}var Aa=a=>a.startsWith("data:application/octet-stream;base64,"),la=a=>a.startsWith("file://"),Ba;function Ca(a){if(a==Ba&&na)return new Uint8Array(na);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}function Da(a){return na?Promise.resolve().then(()=>Ca(a)):ia(a).then(b=>new Uint8Array(b),()=>Ca(a))}
function Ea(a,b,c){return Da(a).then(d=>WebAssembly.instantiate(d,b)).then(c,d=>{n(`failed to asynchronously prepare wasm: ${d}`);za(d)})}function Fa(a,b){var c=Ba;na||"function"!=typeof WebAssembly.instantiateStreaming||Aa(c)||la(c)||ca||"function"!=typeof fetch?Ea(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){n(`wasm streaming compile failed: ${e}`);n("falling back to ArrayBuffer instantiation");return Ea(c,a,b)}))}
function Ga(){var a=document.getElementById("picker");const b=a.files[0];a.value=null;console.log("--- load file:");console.log("  name: "+b.name);console.log("  type: "+b.type);console.log("  size: "+b.size);256E3>b.size?(a=new FileReader,a.onload=c=>{console.log("file loaded!");(c=c.target.result)?(console.log("content length: "+c.byteLength),c=new Uint8Array(c),0==Ha([b.name,c,c.length])&&console.warn("util_emsc_loadfile() failed!")):console.warn("load result empty!")},a.readAsArrayBuffer(b)):
console.warn("ignoring file because it is too big")}class Ia{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`;this.status=a}}
var Ja=a=>{for(;0<a.length;)a.shift()(h)},Ka=h.noExitRuntime||!0,La="undefined"!=typeof TextDecoder?new TextDecoder:void 0,B=(a,b=0,c=NaN)=>{var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&La)return La.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>
10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d},Ma=0,C={},Na=a=>{a instanceof Ia||"unwind"==a||ha(1,a)},Oa=a=>{pa=a;Ka||0<Ma||(h.onExit?.(a),q=!0);ha(a,new Ia(a))},Pa=a=>{pa=a;Oa(a)},Qa=()=>{if(!(Ka||0<Ma))try{var a=pa;pa=a;Oa(a)}catch(b){Na(b)}},Ra=a=>{if(!q)try{a(),Qa()}catch(b){Na(b)}},D=(a,b,c)=>{var d=t;if(!(0<c))return 0;var e=b;c=b+c-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var l=a.charCodeAt(++g);f=65536+((f&1023)<<10)|l&1023}if(127>=f){if(b>=
c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e},Ya=(a,b)=>{Sa=a;Ta=b;if(E)if(Ua||=!0,0==a)F=function(){setTimeout(H,Math.max(0,Va+b-performance.now())|0)};else if(1==a)F=function(){Wa(H)};else if(2==a){if("undefined"==typeof Xa)if("undefined"==typeof setImmediate){var c=[];addEventListener("message",d=>{if("setimmediate"===
d.data||"setimmediate"===d.data.target)d.stopPropagation(),c.shift()()},!0);Xa=d=>{c.push(d);if(ba){let e;(e=h).setImmediates??(e.setImmediates=[]);h.setImmediates.push(d);postMessage({target:"setimmediate"})}else postMessage("setimmediate","*")}}else Xa=setImmediate;F=function(){Xa(H)}}},gb=(a,b,c,d,e)=>{function g(){return f<Za?(Qa(),!1):!0}E=a;$a=d;var f=Za;Ua=!1;H=function(){if(!q)if(0<ab.length){var l=ab.shift();l.Ed(l.vd);if(bb){var m=bb,p=0==m%1?m-1:Math.floor(m);bb=l.xd?p:(8*m+(p+.5))/9}h.setStatus&&
(l=h.statusMessage||"Please wait...",m=bb??0,p=cb.Cd??0,m?m<p?h.setStatus("{message} ({expected - remaining}/{expected})"):h.setStatus(l):h.setStatus(""));g()&&setTimeout(H,0)}else if(g())if(db=db+1|0,1==Sa&&1<Ta&&0!=db%Ta)F();else{0==Sa&&(Va=performance.now());a:if(!q){for(l of eb)if(!1===l())break a;Ra(a);for(m of fb)m()}g()&&F()}};e||(b&&0<b?Ya(0,1E3/b):Ya(1,1),F());if(c)throw"unwind";},Ua=!1,F=null,Za=0,E=null,$a=0,Sa=0,Ta=0,db=0,ab=[],eb=[],fb=[];function hb(){F=null;Za++}var I=0;
function Wa(a){if("function"==typeof requestAnimationFrame)requestAnimationFrame(a);else{var b=Date.now();if(0===I)I=b+1E3/60;else for(;b+2>=I;)I+=1E3/60;setTimeout(a,Math.max(I-b,0))}}var cb={},Va,H,Xa,bb;function ib(a){var b=J.uc[a];b.target.removeEventListener(b.tc,b.Wc,b.vc);J.uc.splice(a,1)}function jb(){if(navigator.userActivation?navigator.userActivation.isActive:J.Kc&&J.md.Ic){var a=J.Ac;J.Ac=[];for(var b of a)b.Nc(...b.Sc)}}
function K(a){if(!a.target)return-4;if(a.wc)a.Wc=function(c){++J.Kc;J.md=a;jb();a.xc(c);jb();--J.Kc},a.target.addEventListener(a.tc,a.Wc,a.vc),J.uc.push(a);else for(var b=0;b<J.uc.length;++b)J.uc[b].target==a.target&&J.uc[b].tc==a.tc&&ib(b--);return 0}function kb(a){return a?a==window?"#window":a==screen?"#screen":a?.nodeName||"":""}
var J={wd:0,Fd:0,Lc:0,Gc:0,Rc:0,Pc:0,Jc:0,Ad:0,Jd:0,zd:0,Dd:0,Mc:0,Sd:0,Oc:0,Hd(a,b,c){r.set(r.subarray(b,b+c),a)},Ld(){for(;J.uc.length;)ib(J.uc.length-1);J.Ac=[]},Kc:0,Ac:[],yd(a,b,c){function d(g,f){if(g.length!=f.length)return!1;for(var l in g)if(g[l]!=f[l])return!1;return!0}for(var e of J.Ac)if(e.Nc==a&&d(e.Sc,c))return;J.Ac.push({Nc:a,$c:b,Sc:c});J.Ac.sort((g,f)=>g.$c<f.$c)},Nd(a){J.Ac=J.Ac.filter(b=>b.Nc!=a)},uc:[],Md:(a,b)=>{for(var c=0;c<J.uc.length;++c)J.uc[c].target!=a||b&&b!=J.uc[c].tc||
ib(c--)},fullscreenEnabled(){return document.fullscreenEnabled||document.webkitFullscreenEnabled}},lb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0],L=a=>{a=2<a?a?B(t,a):"":a;return lb[a]||("undefined"!=typeof document?document.querySelector(a):null)},mb=a=>0>lb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0},nb=[],ob,M=a=>{var b=nb[a];b||(a>=nb.length&&(nb.length=a+1),nb[a]=b=ob.get(a));return b},pb=(a,b,c,d,e,g)=>{J.Jc||(J.Jc=N(256));a={target:L(a),tc:g,wc:d,
xc:(f=event)=>{var l=f.target.id?f.target.id:"",m=J.Jc;D(kb(f.target),m+0,128);D(l,m+128,128);M(d)(e,m,b)&&f.preventDefault()},vc:c};return K(a)},qb=(a,b,c,d,e,g)=>{J.Lc||(J.Lc=N(160));a={target:L(a),tc:g,wc:d,xc:f=>{var l=J.Lc;y[l>>3]=f.timeStamp;var m=l>>2;u[m+2]=f.location;r[l+12]=f.ctrlKey;r[l+13]=f.shiftKey;r[l+14]=f.altKey;r[l+15]=f.metaKey;r[l+16]=f.repeat;u[m+5]=f.charCode;u[m+6]=f.keyCode;u[m+7]=f.which;D(f.key||"",l+32,32);D(f.code||"",l+64,32);D(f.char||"",l+96,32);D(f.locale||"",l+128,
32);M(d)(e,l,b)&&f.preventDefault()},vc:c};return K(a)},rb=(a,b,c)=>{y[a>>3]=b.timeStamp;var d=a>>2;u[d+2]=b.screenX;u[d+3]=b.screenY;u[d+4]=b.clientX;u[d+5]=b.clientY;r[a+24]=b.ctrlKey;r[a+25]=b.shiftKey;r[a+26]=b.altKey;r[a+27]=b.metaKey;qa[2*d+14]=b.button;qa[2*d+15]=b.buttons;u[d+8]=b.movementX;u[d+9]=b.movementY;a=mb(c);u[d+10]=b.clientX-(a.left|0);u[d+11]=b.clientY-(a.top|0)},sb=(a,b,c,d,e,g)=>{J.Gc||(J.Gc=N(64));a=L(a);return K({target:a,Ic:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,
tc:g,wc:d,xc:(f=event)=>{rb(J.Gc,f,a);M(d)(e,J.Gc,b)&&f.preventDefault()},vc:c})},tb=(a,b,c,d,e)=>{J.Mc||(J.Mc=N(257));return K({target:a,tc:e,wc:d,xc:(g=event)=>{var f=J.Mc,l=document.pointerLockElement||document.Bc||document.ld||document.hd;r[f]=!!l;var m=l?.id||"";D(kb(l),f+1,128);D(m,f+129,128);M(d)(20,f,b)&&g.preventDefault()},vc:c})},ub=(a,b,c,d,e)=>K({target:a,tc:e,wc:d,xc:(g=event)=>{M(d)(38,0,b)&&g.preventDefault()},vc:c}),vb=(a,b,c,d)=>{J.Pc||(J.Pc=N(36));a=L(a);return K({target:a,tc:"resize",
wc:d,xc:(e=event)=>{if(e.target==a){var g=document.body;if(g){var f=J.Pc;u[f>>2]=0;u[f+4>>2]=g.clientWidth;u[f+8>>2]=g.clientHeight;u[f+12>>2]=innerWidth;u[f+16>>2]=innerHeight;u[f+20>>2]=outerWidth;u[f+24>>2]=outerHeight;u[f+28>>2]=pageXOffset|0;u[f+32>>2]=pageYOffset|0;M(d)(10,f,b)&&e.preventDefault()}}},vc:c})},wb=(a,b,c,d,e,g)=>{J.Oc||(J.Oc=N(1552));a=L(a);return K({target:a,Ic:"touchstart"==g||"touchend"==g,tc:g,wc:d,xc:f=>{var l={},m=f.touches;for(var p of m)p.Xc=p.Zc=0,l[p.identifier]=p;for(var v of f.changedTouches)v.Xc=
1,l[v.identifier]=v;for(var Q of f.targetTouches)l[Q.identifier].Zc=1;m=J.Oc;y[m>>3]=f.timeStamp;r[m+12]=f.ctrlKey;r[m+13]=f.shiftKey;r[m+14]=f.altKey;r[m+15]=f.metaKey;p=m+16;v=mb(a);Q=0;for(let G of Object.values(l))if(l=p>>2,u[l]=G.identifier,u[l+1]=G.screenX,u[l+2]=G.screenY,u[l+3]=G.clientX,u[l+4]=G.clientY,u[l+5]=G.pageX,u[l+6]=G.pageY,r[p+28]=G.Xc,r[p+29]=G.Zc,u[l+8]=G.clientX-(v.left|0),u[l+9]=G.clientY-(v.top|0),p+=48,31<++Q)break;u[m+8>>2]=Q;M(d)(e,m,b)&&f.preventDefault()},vc:c})},O,xb=
a=>{var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=(c,d)=>b.vertexAttribDivisorANGLE(c,d),a.drawArraysInstanced=(c,d,e,g)=>b.drawArraysInstancedANGLE(c,d,e,g),a.drawElementsInstanced=(c,d,e,g,f)=>b.drawElementsInstancedANGLE(c,d,e,g,f))},yb=a=>{var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=()=>b.createVertexArrayOES(),a.deleteVertexArray=c=>b.deleteVertexArrayOES(c),a.bindVertexArray=c=>b.bindVertexArrayOES(c),a.isVertexArray=c=>b.isVertexArrayOES(c))},
zb=a=>{var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=(c,d)=>b.drawBuffersWEBGL(c,d))},Ab=a=>{a.Bd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")},Bb=a=>{a.Gd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")},Cb=a=>{var b="ANGLE_instanced_arrays EXT_blend_minmax EXT_disjoint_timer_query EXT_frag_depth EXT_shader_texture_lod EXT_sRGB OES_element_index_uint OES_fbo_render_mipmap OES_standard_derivatives OES_texture_float OES_texture_half_float OES_texture_half_float_linear OES_vertex_array_object WEBGL_color_buffer_float WEBGL_depth_texture WEBGL_draw_buffers EXT_color_buffer_float EXT_conservative_depth EXT_disjoint_timer_query_webgl2 EXT_texture_norm16 NV_shader_noperspective_interpolation WEBGL_clip_cull_distance EXT_clip_control EXT_color_buffer_half_float EXT_depth_clamp EXT_float_blend EXT_polygon_offset_clamp EXT_texture_compression_bptc EXT_texture_compression_rgtc EXT_texture_filter_anisotropic KHR_parallel_shader_compile OES_texture_float_linear WEBGL_blend_func_extended WEBGL_compressed_texture_astc WEBGL_compressed_texture_etc WEBGL_compressed_texture_etc1 WEBGL_compressed_texture_s3tc WEBGL_compressed_texture_s3tc_srgb WEBGL_debug_renderer_info WEBGL_debug_shaders WEBGL_lose_context WEBGL_multi_draw WEBGL_polygon_mode".split(" ");
return(a.getSupportedExtensions()||[]).filter(c=>b.includes(c))},Db=1,Eb=[],P=[],Fb=[],Gb=[],Hb=[],R=[],Ib=[],Jb=[],S=[],Kb={},Lb=4,Mb=0,Nb=a=>{for(var b=Db++,c=a.length;c<b;c++)a[c]=null;return b},Ob=(a,b,c,d)=>{for(var e=0;e<a;e++){var g=O[c](),f=g&&Nb(d);g?(g.name=f,d[f]=g):T||=1282;u[b+4*e>>2]=f}},Qb=(a,b)=>{a.Bc||(a.Bc=a.getContext,a.getContext=function(d,e){e=a.Bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Yc?a.getContext("webgl2",b):a.getContext("webgl",b);
return c?Pb(c,b):0},Pb=(a,b)=>{var c=Nb(Jb),d={handle:c,attributes:b,version:b.Yc,Hc:a};a.canvas&&(a.canvas.ud=d);Jb[c]=d;("undefined"==typeof b.Vc||b.Vc)&&Rb(d);return c},Rb=a=>{a||=U;if(!a.rd){a.rd=!0;var b=a.Hc;b.sd=b.getExtension("WEBGL_multi_draw");b.qd=b.getExtension("EXT_polygon_offset_clamp");b.pd=b.getExtension("EXT_clip_control");b.td=b.getExtension("WEBGL_polygon_mode");xb(b);yb(b);zb(b);Ab(b);Bb(b);2<=a.version&&(b.Uc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||
!b.Uc)b.Uc=b.getExtension("EXT_disjoint_timer_query");Cb(b).forEach(c=>{c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}},T,U,Sb=(a,b,c,d,e,g)=>{a={target:L(a),tc:g,wc:d,xc:(f=event)=>{M(d)(e,0,b)&&f.preventDefault()},vc:c};K(a)},Tb=(a,b,c,d)=>{J.Rc||(J.Rc=N(96));return K({target:a,Ic:!0,tc:"wheel",wc:d,xc:(e=event)=>{var g=J.Rc;rb(g,e,a);y[g+64>>3]=e.deltaX;y[g+72>>3]=e.deltaY;y[g+80>>3]=e.deltaZ;u[g+88>>2]=e.deltaMode;M(d)(9,g,b)&&e.preventDefault()},vc:c})},Ub=["default","low-power",
"high-performance"],Vb={},Xb=()=>{if(!Wb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:fa||"./this.program"},b;for(b in Vb)void 0===Vb[b]?delete a[b]:a[b]=Vb[b];var c=[];for(b in a)c.push(`${b}=${a[b]}`);Wb=c}return Wb},Wb,Yb=[null,[],[]],Zb=()=>{var a=Cb(O);return a=a.concat(a.map(b=>"GL_"+b))},$b=(a,b)=>{if(b){var c=void 0;switch(a){case 36346:c=1;break;
case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=O.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T||=1282;return}c=Zb().length;break;case 33307:case 33308:if(2>U.version){T||=1280;return}c=33307==a?3:0}if(void 0===c)switch(d=O.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T||=1280;return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T||=1280;return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)u[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Unknown object returned from WebGL getParameter(${a})! (error: ${e})`);return}}break;default:T||=1280;n(`GL_INVALID_ENUM in glGet${0}v: Native code calling glGet${0}v(${a}) and it returns ${d} of type ${typeof d}!`);return}u[b>>2]=c}else T||=1281},ac=
a=>{for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b},bc=a=>{var b=ac(a)+1,c=N(b);c&&D(a,c,b);return c},cc=a=>"]"==a.slice(-1)&&a.lastIndexOf("["),dc=[],ec=a=>{a-=5120;return 0==a?r:1==a?t:2==a?qa:4==a?u:6==a?x:5==a||28922==a||28520==a||30779==a||30782==a?w:ra},fc=(a,b,c,d,e)=>{a=ec(a);b=d*((Mb||c)*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*a.BYTES_PER_ELEMENT+Lb-1&-Lb);return a.subarray(e>>>31-
Math.clz32(a.BYTES_PER_ELEMENT),e+b>>>31-Math.clz32(a.BYTES_PER_ELEMENT))},V=a=>{var b=O.nd;if(b){var c=b.Cc[a];"number"==typeof c&&(b.Cc[a]=c=O.getUniformLocation(b,b.jd[a]+(0<c?`[${c}]`:"")));return c}T||=1282},W=[],gc=[],X=a=>{var b=ac(a)+1,c=hc(b);D(a,c,b);return c},Ha=a=>{var b=["string","array","number"],c={string:m=>{var p=0;null!==m&&void 0!==m&&0!==m&&(p=X(m));return p},array:m=>{var p=hc(m.length);r.set(m,p);return p}},d=h._util_emsc_loadfile,e=[],g=0;if(a)for(var f=0;f<a.length;f++){var l=
c[b[f]];l?(0===g&&(g=ic()),e[f]=l(a[f])):e[f]=a[f]}a=d(...e);return a=function(m){0!==g&&jc(g);return m}(a)},kc=a=>{var b=ic();a();jc(b)};h.requestAnimationFrame=Wa;h.pauseMainLoop=hb;h.resumeMainLoop=function(){Za++;var a=Sa,b=Ta,c=E;E=null;gb(c,0,!1,$a,!0);Ya(a,b);F()};h.preMainLoop&&eb.push(h.preMainLoop);h.postMainLoop&&fb.push(h.postMainLoop);for(var Y=0;32>Y;++Y)dc.push(Array(Y));var lc=new Float32Array(288);for(Y=0;288>=Y;++Y)W[Y]=lc.subarray(0,Y);var mc=new Int32Array(288);
for(Y=0;288>=Y;++Y)gc[Y]=mc.subarray(0,Y);
var uc={ha:function(){return 0},jb:function(){return 0},kb:function(){},pb:()=>za(""),eb:()=>1,ob:(a,b,c)=>t.copyWithin(a,b,b+c),ab:()=>{Ka=!1;Ma=0},bb:(a,b)=>{C[a]&&(clearTimeout(C[a].id),delete C[a]);if(!b)return 0;var c=setTimeout(()=>{delete C[a];Ra(()=>nc(a,performance.now()))},b);C[a]={id:c,Rd:b};return 0},db:(a,b,c,d)=>{var e=(new Date).getFullYear(),g=(new Date(e,0,1)).getTimezoneOffset();e=(new Date(e,6,1)).getTimezoneOffset();w[a>>2]=60*Math.max(g,e);u[b>>2]=Number(g!=e);b=f=>{var l=Math.abs(f);
return`UTC${0<=f?"-":"+"}${String(Math.floor(l/60)).padStart(2,"0")}${String(l%60).padStart(2,"0")}`};a=b(g);b=b(e);e<g?(D(a,c,17),D(b,d,17)):(D(a,d,17),D(b,c,17))},Ta:function(a,b,c){a=a?B(t,a):"";let d="";for(var e=0;e<c;e++)d+=String.fromCharCode(t[b+e]);console.log(btoa(d));b=document.createElement("a");b.setAttribute("href","data:application/octet-stream;base64,"+btoa(d));b.setAttribute("download",a);b.style.display="none";document.body.appendChild(b);b.click();document.body.removeChild(b)},
u:function(a,b){a=a?B(t,a):"";b=b?B(t,b):"";const c=document.createElement("a");c.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(b));c.setAttribute("download",a);c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c)},bc:function(){h.emsc_js_onload=Ga},ac:function(){return navigator.userAgent.includes("Macintosh")?1:0},Qa:function(){document.getElementById("picker").click()},Ga:function(a){a=a?B(t,a):"";return(a=window.localStorage.getItem(a))?
bc(a):0},Pa:function(a){a=a?B(t,a):"";window.open(a)},Ja:function(a,b){a=a?B(t,a):"";b=b?B(t,b):"";window.localStorage.setItem(a,b)},Na:()=>{hb();E=null},fb:()=>Date.now(),ba:()=>"number"==typeof devicePixelRatio&&devicePixelRatio||1,da:(a,b,c)=>{a=L(a);if(!a)return-4;a=mb(a);y[b>>3]=a.width;y[c>>3]=a.height;return 0},Oa:()=>performance.now(),Va:(a,b)=>{function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:a=>{var b=t.length;a>>>=0;if(2147483648<a)return!1;for(var c=
1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);a:{d=(Math.min(2147483648,65536*Math.ceil(Math.max(a,d)/65536))-oa.buffer.byteLength+65535)/65536|0;try{oa.grow(d);sa();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},L:(a,b,c,d)=>pb(a,b,c,d,12,"blur"),aa:(a,b,c)=>{a=L(a);if(!a)return-4;a.width=b;a.height=c;return 0},M:(a,b,c,d)=>pb(a,b,c,d,13,"focus"),V:(a,b,c,d)=>qb(a,b,c,d,2,"keydown"),T:(a,b,c,d)=>qb(a,b,c,d,1,"keypress"),U:(a,b,c,d)=>qb(a,b,c,d,3,"keyup"),Wa:(a,b,c)=>{a=M(a);
gb(a,b,c)},$:(a,b,c,d)=>sb(a,b,c,d,5,"mousedown"),Y:(a,b,c,d)=>sb(a,b,c,d,33,"mouseenter"),X:(a,b,c,d)=>sb(a,b,c,d,34,"mouseleave"),Z:(a,b,c,d)=>sb(a,b,c,d,8,"mousemove"),_:(a,b,c,d)=>sb(a,b,c,d,6,"mouseup"),O:(a,b,c,d)=>{if(!document||!document.body||!(document.body.requestPointerLock||document.body.Bc||document.body.ld||document.body.hd))return-1;a=L(a);if(!a)return-4;tb(a,b,c,d,"mozpointerlockchange");tb(a,b,c,d,"webkitpointerlockchange");tb(a,b,c,d,"mspointerlockchange");return tb(a,b,c,d,"pointerlockchange")},
N:(a,b,c,d)=>{if(!document||!(document.body.requestPointerLock||document.body.Bc||document.body.ld||document.body.hd))return-1;a=L(a);if(!a)return-4;ub(a,b,c,d,"mozpointerlockerror");ub(a,b,c,d,"webkitpointerlockerror");ub(a,b,c,d,"mspointerlockerror");return ub(a,b,c,d,"pointerlockerror")},ca:(a,b,c,d)=>vb(a,b,c,d),P:(a,b,c,d)=>wb(a,b,c,d,25,"touchcancel"),Q:(a,b,c,d)=>wb(a,b,c,d,23,"touchend"),R:(a,b,c,d)=>wb(a,b,c,d,24,"touchmove"),S:(a,b,c,d)=>wb(a,b,c,d,22,"touchstart"),K:(a,b,c,d)=>{Sb(a,b,
c,d,31,"webglcontextlost");return 0},J:(a,b,c,d)=>{Sb(a,b,c,d,32,"webglcontextrestored");return 0},W:(a,b,c,d)=>(a=L(a))?"undefined"!=typeof a.onwheel?Tb(a,b,c,d):-1:-4,Ua:(a,b)=>{var c=b>>2;b={alpha:!!r[b+0],depth:!!r[b+1],stencil:!!r[b+2],antialias:!!r[b+3],premultipliedAlpha:!!r[b+4],preserveDrawingBuffer:!!r[b+5],powerPreference:Ub[u[c+2]],failIfMajorPerformanceCaveat:!!r[b+12],Yc:u[c+4],Id:u[c+5],Vc:r[b+24],od:r[b+25],Kd:u[c+7],Od:r[b+32]};a=L(a);return!a||b.od?0:Qb(a,b)},Ra:(a,b)=>{a=Jb[a];
b=b?B(t,b):"";b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&xb(O);"OES_vertex_array_object"==b&&yb(O);"WEBGL_draw_buffers"==b&&zb(O);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&Ab(O);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&Bb(O);"WEBGL_multi_draw"==b&&(O.sd=O.getExtension("WEBGL_multi_draw"));"EXT_polygon_offset_clamp"==b&&(O.qd=O.getExtension("EXT_polygon_offset_clamp"));"EXT_clip_control"==b&&(O.pd=O.getExtension("EXT_clip_control"));"WEBGL_polygon_mode"==
b&&(O.td=O.getExtension("WEBGL_polygon_mode"));return!!a.Hc.getExtension(b)},Sa:a=>{U=Jb[a];h.ctx=O=U?.Hc;return!a||O?0:-5},mb:(a,b)=>{var c=0;Xb().forEach((d,e)=>{var g=b+c;e=w[a+4*e>>2]=g;for(g=0;g<d.length;++g)r[e++]=d.charCodeAt(g);r[e]=0;c+=d.length+1});return 0},nb:(a,b)=>{var c=Xb();w[a>>2]=c.length;var d=0;c.forEach(e=>d+=e.length+1);w[b>>2]=d;return 0},ga:()=>52,ib:()=>52,_a:function(){return 70},hb:(a,b,c,d)=>{for(var e=0,g=0;g<c;g++){var f=w[b>>2],l=w[b+4>>2];b+=8;for(var m=0;m<l;m++){var p=
t[f+m],v=Yb[a];0===p||10===p?((1===a?ma:n)(B(v)),v.length=0):v.push(p)}e+=l}w[d>>2]=e;return 0},l:a=>O.activeTexture(a),oa:(a,b)=>{O.attachShader(P[a],R[b])},b:(a,b)=>{35051==a?O.Tc=b:35052==a&&(O.zc=b);O.bindBuffer(a,Eb[b])},a:(a,b,c)=>{O.bindBufferBase(a,b,Eb[c])},p:(a,b)=>{O.bindFramebuffer(a,Fb[b])},za:(a,b)=>{O.bindRenderbuffer(a,Gb[b])},k:(a,b)=>{O.bindSampler(a,S[b])},c:(a,b)=>{O.bindTexture(a,Hb[b])},I:a=>{O.bindVertexArray(Ib[a])},E:(a,b,c,d)=>O.blendColor(a,b,c,d),F:(a,b)=>O.blendEquationSeparate(a,
b),G:(a,b,c,d)=>O.blendFuncSeparate(a,b,c,d),tb:(a,b,c,d,e,g,f,l,m,p)=>O.blitFramebuffer(a,b,c,d,e,g,f,l,m,p),Ca:(a,b,c,d)=>{2<=U.version?c&&b?O.bufferData(a,t,d,c,b):O.bufferData(a,b,d):O.bufferData(a,c?t.subarray(c,c+b):b,d)},x:(a,b,c,d)=>{2<=U.version?c&&O.bufferSubData(a,b,t,d,c):O.bufferSubData(a,b,t.subarray(d,d+c))},Ob:(a,b,c,d)=>O.clearBufferfi(a,b,c,d),ka:(a,b,c)=>{O.clearBufferfv(a,b,x,c>>2)},Nb:(a,b,c)=>{O.clearBufferiv(a,b,u,c>>2)},m:(a,b,c,d)=>{O.colorMask(!!a,!!b,!!c,!!d)},Sb:a=>{O.compileShader(R[a])},
ta:(a,b,c,d,e,g,f,l)=>{2<=U.version?O.zc||!f?O.compressedTexImage2D(a,b,c,d,e,g,f,l):O.compressedTexImage2D(a,b,c,d,e,g,t,l,f):O.compressedTexImage2D(a,b,c,d,e,g,t.subarray(l,l+f))},ra:(a,b,c,d,e,g,f,l,m)=>{O.zc?O.compressedTexImage3D(a,b,c,d,e,g,f,l,m):O.compressedTexImage3D(a,b,c,d,e,g,f,t,m,l)},Zb:()=>{var a=Nb(P),b=O.createProgram();b.name=a;b.Fc=b.Dc=b.Ec=0;b.Qc=1;P[a]=b;return a},Ub:a=>{var b=Nb(R);R[b]=O.createShader(a);return b},B:a=>O.cullFace(a),Fa:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+
4*c>>2],e=Eb[d];e&&(O.deleteBuffer(e),e.name=0,Eb[d]=null,d==O.Tc&&(O.Tc=0),d==O.zc&&(O.zc=0))}},h:(a,b)=>{for(var c=0;c<a;++c){var d=u[b+4*c>>2],e=Fb[d];e&&(O.deleteFramebuffer(e),e.name=0,Fb[d]=null)}},q:a=>{if(a){var b=P[a];b?(O.deleteProgram(b),b.name=0,P[a]=null):T||=1281}},y:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Gb[d];e&&(O.deleteRenderbuffer(e),e.name=0,Gb[d]=null)}},j:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=S[d];e&&(O.deleteSampler(e),e.name=0,S[d]=null)}},w:a=>{if(a){var b=
R[a];b?(O.deleteShader(b),R[a]=null):T||=1281}},A:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2],e=Hb[d];e&&(O.deleteTexture(e),e.name=0,Hb[d]=null)}},Ea:(a,b)=>{for(var c=0;c<a;c++){var d=u[b+4*c>>2];O.deleteVertexArray(Ib[d]);Ib[d]=null}},t:a=>O.depthFunc(a),s:a=>{O.depthMask(!!a)},e:a=>O.disable(a),H:a=>{O.disableVertexAttribArray(a)},vb:(a,b,c)=>{O.drawArrays(a,b,c)},xb:(a,b,c,d)=>{O.drawArraysInstanced(a,b,c,d)},yb:(a,b,c,d)=>{O.drawElements(a,b,c,d)},zb:(a,b,c,d,e)=>{O.drawElementsInstanced(a,
b,c,d,e)},g:a=>O.enable(a),Kb:a=>{O.enableVertexAttribArray(a)},C:a=>O.frontFace(a),Da:(a,b)=>{Ob(a,b,"createBuffer",Eb)},Ba:(a,b)=>{Ob(a,b,"createRenderbuffer",Gb)},_b:(a,b)=>{Ob(a,b,"createSampler",S)},xa:(a,b)=>{Ob(a,b,"createTexture",Hb)},Ma:(a,b)=>{Ob(a,b,"createVertexArray",Ib)},Qb:(a,b)=>O.getAttribLocation(P[a],b?B(t,b):""),d:(a,b)=>$b(a,b),Xb:(a,b,c,d)=>{a=O.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,d,b):0;c&&(u[c>>2]=b)},na:(a,b,c)=>{if(c)if(a>=Db)T||=1281;else if(a=
P[a],35716==b)a=O.getProgramInfoLog(a),null===a&&(a="(unknown error)"),u[c>>2]=a.length+1;else if(35719==b){if(!a.Fc){var d=O.getProgramParameter(a,35718);for(b=0;b<d;++b)a.Fc=Math.max(a.Fc,O.getActiveUniform(a,b).name.length+1)}u[c>>2]=a.Fc}else if(35722==b){if(!a.Dc)for(d=O.getProgramParameter(a,35721),b=0;b<d;++b)a.Dc=Math.max(a.Dc,O.getActiveAttrib(a,b).name.length+1);u[c>>2]=a.Dc}else if(35381==b){if(!a.Ec)for(d=O.getProgramParameter(a,35382),b=0;b<d;++b)a.Ec=Math.max(a.Ec,O.getActiveUniformBlockName(a,
b).length+1);u[c>>2]=a.Ec}else u[c>>2]=O.getProgramParameter(a,b);else T||=1281},Rb:(a,b,c,d)=>{a=O.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,d,b):0;c&&(u[c>>2]=b)},la:(a,b,c)=>{c?35716==b?(a=O.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),u[c>>2]=a?a.length+1:0):35720==b?(a=O.getShaderSource(R[a]),u[c>>2]=a?a.length+1:0):u[c>>2]=O.getShaderParameter(R[a],b):T||=1281},Ka:(a,b)=>{if(2>U.version)return T||=1282,0;var c=Kb[a];if(c)return 0>b||b>=c.length?(T||=1281,
0):c[b];switch(a){case 7939:return c=Zb().map(bc),c=Kb[a]=c,0>b||b>=c.length?(T||=1281,0):c[b];default:return T||=1280,0}},ma:(a,b)=>{b=b?B(t,b):"";if(a=P[a]){var c=a,d=c.Cc,e=c.kd,g;if(!d){c.Cc=d={};c.jd={};var f=O.getProgramParameter(c,35718);for(g=0;g<f;++g){var l=O.getActiveUniform(c,g);var m=l.name;l=l.size;var p=cc(m);p=0<p?m.slice(0,p):m;var v=c.Qc;c.Qc+=l;e[p]=[l,v];for(m=0;m<l;++m)d[v]=m,c.jd[v++]=p}}c=a.Cc;d=0;e=b;g=cc(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.kd[e])&&
d<e[0]&&(d+=e[1],c[d]=c[d]||O.getUniformLocation(a,b)))return d}else T||=1281;return-1},sb:(a,b,c)=>{for(var d=dc[b],e=0;e<b;e++)d[e]=u[c+4*e>>2];O.invalidateFramebuffer(a,d)},Yb:a=>{a=P[a];O.linkProgram(a);a.Cc=0;a.kd={}},La:(a,b)=>{3317==a?Lb=b:3314==a&&(Mb=b);O.pixelStorei(a,b)},D:(a,b)=>O.polygonOffset(a,b),ub:a=>O.readBuffer(a),ya:(a,b,c,d,e)=>O.renderbufferStorageMultisample(a,b,c,d,e),pa:(a,b,c)=>{O.samplerParameterf(S[a],b,c)},f:(a,b,c)=>{O.samplerParameteri(S[a],b,c)},n:(a,b,c,d)=>O.scissor(a,
b,c,d),Tb:(a,b,c,d)=>{for(var e="",g=0;g<b;++g){var f=(f=w[c+4*g>>2])?B(t,f,d?w[d+4*g>>2]:void 0):"";e+=f}O.shaderSource(R[a],e)},Ia:(a,b,c)=>O.stencilFunc(a,b,c),ja:(a,b,c,d)=>O.stencilFuncSeparate(a,b,c,d),r:a=>O.stencilMask(a),Ha:(a,b,c)=>O.stencilOp(a,b,c),ia:(a,b,c,d)=>O.stencilOpSeparate(a,b,c,d),sa:(a,b,c,d,e,g,f,l,m)=>{if(2<=U.version){if(O.zc){O.texImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=ec(l);m>>>=31-Math.clz32(p.BYTES_PER_ELEMENT);O.texImage2D(a,b,c,d,e,g,f,l,p,m);return}}p=m?fc(l,
f,d,e,m):null;O.texImage2D(a,b,c,d,e,g,f,l,p)},qa:(a,b,c,d,e,g,f,l,m,p)=>{if(O.zc)O.texImage3D(a,b,c,d,e,g,f,l,m,p);else if(p){var v=ec(m);O.texImage3D(a,b,c,d,e,g,f,l,m,v,p>>>31-Math.clz32(v.BYTES_PER_ELEMENT))}else O.texImage3D(a,b,c,d,e,g,f,l,m,null)},wa:(a,b,c)=>O.texParameteri(a,b,c),va:(a,b,c,d,e)=>O.texStorage2D(a,b,c,d,e),ua:(a,b,c,d,e,g)=>O.texStorage3D(a,b,c,d,e,g),rb:(a,b,c,d,e,g,f,l,m)=>{if(2<=U.version){if(O.zc){O.texSubImage2D(a,b,c,d,e,g,f,l,m);return}if(m){var p=ec(l);O.texSubImage2D(a,
b,c,d,e,g,f,l,p,m>>>31-Math.clz32(p.BYTES_PER_ELEMENT));return}}m=m?fc(l,f,e,g,m):null;O.texSubImage2D(a,b,c,d,e,g,f,l,m)},qb:(a,b,c,d,e,g,f,l,m,p,v)=>{if(O.zc)O.texSubImage3D(a,b,c,d,e,g,f,l,m,p,v);else if(v){var Q=ec(p);O.texSubImage3D(a,b,c,d,e,g,f,l,m,p,Q,v>>>31-Math.clz32(Q.BYTES_PER_ELEMENT))}else O.texSubImage3D(a,b,c,d,e,g,f,l,m,p,null)},Jb:(a,b,c)=>{if(2<=U.version)b&&O.uniform1fv(V(a),x,c>>2,b);else{if(288>=b)for(var d=W[b],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);O.uniform1fv(V(a),
d)}},Vb:(a,b)=>{O.uniform1i(V(a),b)},Eb:(a,b,c)=>{if(2<=U.version)b&&O.uniform1iv(V(a),u,c>>2,b);else{if(288>=b)for(var d=gc[b],e=0;e<b;++e)d[e]=u[c+4*e>>2];else d=u.subarray(c>>2,c+4*b>>2);O.uniform1iv(V(a),d)}},Ib:(a,b,c)=>{if(2<=U.version)b&&O.uniform2fv(V(a),x,c>>2,2*b);else{if(144>=b){b*=2;for(var d=W[b],e=0;e<b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2]}else d=x.subarray(c>>2,c+8*b>>2);O.uniform2fv(V(a),d)}},Db:(a,b,c)=>{if(2<=U.version)b&&O.uniform2iv(V(a),u,c>>2,2*b);else{if(144>=b){b*=
2;for(var d=gc[b],e=0;e<b;e+=2)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2]}else d=u.subarray(c>>2,c+8*b>>2);O.uniform2iv(V(a),d)}},Gb:(a,b,c)=>{if(2<=U.version)b&&O.uniform3fv(V(a),x,c>>2,3*b);else{if(96>=b){b*=3;for(var d=W[b],e=0;e<b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2]}else d=x.subarray(c>>2,c+12*b>>2);O.uniform3fv(V(a),d)}},Cb:(a,b,c)=>{if(2<=U.version)b&&O.uniform3iv(V(a),u,c>>2,3*b);else{if(96>=b){b*=3;for(var d=gc[b],e=0;e<b;e+=3)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+
4)>>2],d[e+2]=u[c+(4*e+8)>>2]}else d=u.subarray(c>>2,c+12*b>>2);O.uniform3iv(V(a),d)}},Fb:(a,b,c)=>{if(2<=U.version)b&&O.uniform4fv(V(a),x,c>>2,4*b);else{if(72>=b){var d=W[4*b],e=x;c>>=2;b*=4;for(var g=0;g<b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=x.subarray(c>>2,c+16*b>>2);O.uniform4fv(V(a),d)}},Bb:(a,b,c)=>{if(2<=U.version)b&&O.uniform4iv(V(a),u,c>>2,4*b);else{if(72>=b){b*=4;for(var d=gc[b],e=0;e<b;e+=4)d[e]=u[c+4*e>>2],d[e+1]=u[c+(4*e+4)>>2],d[e+2]=u[c+(4*e+
8)>>2],d[e+3]=u[c+(4*e+12)>>2]}else d=u.subarray(c>>2,c+16*b>>2);O.uniform4iv(V(a),d)}},Ab:(a,b,c,d)=>{if(2<=U.version)b&&O.uniformMatrix4fv(V(a),!!c,x,d>>2,16*b);else{if(18>=b){var e=W[16*b],g=x;d>>=2;b*=16;for(var f=0;f<b;f+=16){var l=d+f;e[f]=g[l];e[f+1]=g[l+1];e[f+2]=g[l+2];e[f+3]=g[l+3];e[f+4]=g[l+4];e[f+5]=g[l+5];e[f+6]=g[l+6];e[f+7]=g[l+7];e[f+8]=g[l+8];e[f+9]=g[l+9];e[f+10]=g[l+10];e[f+11]=g[l+11];e[f+12]=g[l+12];e[f+13]=g[l+13];e[f+14]=g[l+14];e[f+15]=g[l+15]}}else e=x.subarray(d>>2,d+64*
b>>2);O.uniformMatrix4fv(V(a),!!c,e)}},i:a=>{a=P[a];O.useProgram(a);O.nd=a},Lb:(a,b)=>{O.vertexAttribDivisor(a,b)},Mb:(a,b,c,d,e,g)=>{O.vertexAttribPointer(a,b,c,!!d,e,g)},o:(a,b,c,d)=>O.viewport(a,b,c,d),$a:Oa,Aa:function(){h.ad=a=>{0!=oc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.ad)},Wb:function(){h.gd=a=>{const b=a.clipboardData.getData("text");kc(()=>{const c=X(b);pc(c)})};window.addEventListener("paste",h.gd)},wb:function(){h.Pd=[];h.bd=b=>{b.stopPropagation();
b.preventDefault()};h.cd=b=>{b.stopPropagation();b.preventDefault()};h.dd=b=>{b.stopPropagation();b.preventDefault()};h.ed=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;h.Qd=c;qc(c.length);for(let e=0;e<c.length;e++)kc(()=>{const g=X(c[e].name);rc(e,g)});let d=0;b.shiftKey&&(d|=1);b.ctrlKey&&(d|=2);b.altKey&&(d|=4);b.metaKey&&(d|=8);sc(b.clientX,b.clientY,d)};const a=h.yc;a.addEventListener("dragenter",h.bd,!1);a.addEventListener("dragleave",h.cd,!1);a.addEventListener("dragover",
h.dd,!1);a.addEventListener("drop",h.ed,!1)},Za:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},cb:function(a){a=a?B(t,a):"";void 0!==h.canvas&&("object"===typeof h.canvas?lb[a]=h.canvas:console.warn("sokol_app.h: Module['canvas'] is set but is not an object"));h.yc=L(a);h.yc||console.warn("sokol_app.h: can't find html5_canvas_selector ",a);h.yc.requestPointerLock||console.warn("sokol_app.h: target doesn't support requestPointerLock: ",a)},$b:function(){window.removeEventListener("beforeunload",
h.ad)},Pb:function(){window.removeEventListener("paste",h.gd)},lb:function(){const a=h.yc;a.removeEventListener("dragenter",h.bd);a.removeEventListener("dragleave",h.cd);a.removeEventListener("dragover",h.dd);a.removeEventListener("drop",h.ed)},v:function(){h.yc&&h.yc.requestPointerLock&&h.yc.requestPointerLock()},fa:function(a,b){if(h.yc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a=
"ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}h.yc.style.cursor=a}},Ya:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(t.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
Hb:function(a){a=a?B(t,a):"";const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Xa:function(){const a=(new URLSearchParams(window.location.search)).entries();for(let b=a.next();!b.done;b=
a.next()){const c=b.value[0],d=b.value[1];kc(()=>{const e=X(c),g=X(d);tc(e,g)})}},z:function(){return navigator.userAgent.includes("Macintosh")?1:0},ea:function(a,b){b=b?B(t,b):"";switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}},Z=function(){function a(c){Z=c.exports;oa=Z.cc;sa();ob=Z.oc;ua.unshift(Z.dc);z--;h.monitorRunDependencies?.(z);0==z&&(null!==ya&&(clearInterval(ya),ya=null),A&&(c=A,A=null,c()));return Z}z++;h.monitorRunDependencies?.(z);
var b={a:uc};if(h.instantiateWasm)try{return h.instantiateWasm(b,a)}catch(c){return n(`Module.instantiateWasm callback failed with error: ${c}`),!1}Ba??=Aa("vz80r.wasm")?"vz80r.wasm":h.locateFile?h.locateFile("vz80r.wasm",k):k+"vz80r.wasm";Fa(b,function(c){a(c.instance)});return{}}();h._util_emsc_loadfile=(a,b,c)=>(h._util_emsc_loadfile=Z.ec)(a,b,c);
var N=a=>(N=Z.fc)(a),pc=h.__sapp_emsc_onpaste=a=>(pc=h.__sapp_emsc_onpaste=Z.gc)(a),oc=h.__sapp_html5_get_ask_leave_site=()=>(oc=h.__sapp_html5_get_ask_leave_site=Z.hc)(),qc=h.__sapp_emsc_begin_drop=a=>(qc=h.__sapp_emsc_begin_drop=Z.ic)(a),rc=h.__sapp_emsc_drop=(a,b)=>(rc=h.__sapp_emsc_drop=Z.jc)(a,b),sc=h.__sapp_emsc_end_drop=(a,b,c)=>(sc=h.__sapp_emsc_end_drop=Z.kc)(a,b,c);h.__sapp_emsc_invoke_fetch_cb=(a,b,c,d,e,g,f,l)=>(h.__sapp_emsc_invoke_fetch_cb=Z.lc)(a,b,c,d,e,g,f,l);
var vc=h._main=(a,b)=>(vc=h._main=Z.mc)(a,b),tc=h.__sargs_add_kvp=(a,b)=>(tc=h.__sargs_add_kvp=Z.nc)(a,b),nc=(a,b)=>(nc=Z.pc)(a,b),jc=a=>(jc=Z.qc)(a),hc=a=>(hc=Z.rc)(a),ic=()=>(ic=Z.sc)(),wc;A=function xc(){wc||yc();wc||(A=xc)};function zc(a=[]){var b=vc;a.unshift(fa);var c=a.length,d=hc(4*(c+1)),e=d;a.forEach(f=>{w[e>>2]=X(f);e+=4});w[e>>2]=0;try{var g=b(c,d);Pa(g)}catch(f){Na(f)}}
function yc(){var a=ea;function b(){if(!wc&&(wc=!0,h.calledRun=!0,!q)){Ja(ua);Ja(va);h.onRuntimeInitialized?.();Ac&&zc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();wa.unshift(c)}Ja(wa)}}if(!(0<z)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)xa();Ja(ta);0<z||(h.setStatus?(h.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>h.setStatus(""),1);b()},1)):b())}}
if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var Ac=!0;h.noInitialRun&&(Ac=!1);yc();

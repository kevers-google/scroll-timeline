!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function i(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return n(e,void 0);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function r(e,t){if(e instanceof CSSUnitValue||e instanceof CSSMathSum)return e;if(!t)return null;var n=e.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/);return n?new CSSUnitValue(n[1],"%"==n[2]?"percent":n[2]):null}var a=new CSSKeywordValue("auto"),o=new WeakMap,l=[];function s(e){return e===document.scrollingElement?document:e}function u(e){var t=o.get(e).animations;if(0!==t.length)for(var n=e.currentTime,i=0;i<t.length;i++)t[i].tickAnimation(n)}function c(e,t,n,o,l){if(l)return l(t,n,o,0==e.value?"start":"end");"block"===n?n="vertical":"inline"===n&&(n="horizontal");var s="vertical"===n?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth;return function e(t,n){if(t instanceof CSSUnitValue){if("percent"==t.unit)return t.value*n/100;if("px"==t.unit)return t.value;throw TypeError("Unhandled unit type "+t.unit)}if(t instanceof CSSMathSum){for(var r,a=0,o=i(t.values);!(r=o()).done;)a+=e(r.value,n);return a}throw TypeError("Unsupported value type: "+typeof t)}(r(o===a?e:o),s)}function m(e,t){for(var n=o.get(e).animations,i=0;i<n.length;i++)n[i].animation==t&&n.splice(i,1)}function f(e,t,n){for(var i=o.get(e).animations,r=0;r<i.length;r++)if(i[r].animation==t)return;i.push({animation:t,tickAnimation:n}),u(e)}var h=function(){function e(e){o.set(this,{scrollSource:null,orientation:"block",startScrollOffset:a,endScrollOffset:a,scrollOffsets:[],timeRange:a,animations:[],scrollOffsetFns:[]}),this.scrollSource=e&&void 0!==e.scrollSource?e.scrollSource:document.scrollingElement,this.orientation=e&&e.orientation||"block",this.startScrollOffset=e&&e.startScrollOffset||a,this.endScrollOffset=e&&e.endScrollOffset||a,this.scrollOffsets=e&&void 0!==e.scrollOffsets?e.scrollOffsets:[],this.timeRange=e&&void 0!==e.timeRange?e.timeRange:"auto"}return t(e,[{key:"scrollSource",set:function(e){var t=this;this.scrollSource&&s(this.scrollSource).removeEventListener("scroll",function(){return u(t)}),o.get(this).scrollSource=e,e&&s(e).addEventListener("scroll",function(){return u(t)}),u(this)},get:function(){return o.get(this).scrollSource}},{key:"orientation",set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");o.get(this).orientation=e,u(this)},get:function(){return o.get(this).orientation}},{key:"scrollOffsets",set:function(e){for(var t,n=[],s=[],u=i(e);!(t=u()).done;){var c=t.value,m=null,f=void 0;"auto"==c&&(c=a);for(var h=0;h<l.length;h++){var d=l[h].parse(c);if(void 0!==d){f=d,m=l[h].evaluate;break}}if(!m){if(c!=a){var g=r(c);if(!g||g instanceof CSSUnitValue&&"number"==g.unit)throw TypeError("Invalid scrollOffsets entry.")}f=c}n.push(f),s.push(m)}if(1==n.length&&n[0]==a)throw TypeError("Invalid scrollOffsets value.");var p=o.get(this);p.scrollOffsets=n,p.scrollOffsetFns=s},get:function(){return o.get(this).scrollOffsets}},{key:"startScrollOffset",set:function(e){"auto"==e&&(e=a);var t=o.get(this);t.startScrollOffsetFunction=null;for(var n=0;n<l.length;n++){var i=l[n].parse(e);if(void 0!==i){e=i,t.startScrollOffsetFunction=l[n].evaluate;break}}if(e!=a&&!o.get(this).startScrollOffsetFunction){var s=r(e);if(!s||s instanceof CSSUnitValue&&"number"==s.unit)throw TypeError("Invalid start offset.")}t.startScrollOffset=e,u(this)},get:function(){return o.get(this).startScrollOffset}},{key:"endScrollOffset",set:function(e){"auto"==e&&(e=a),o.get(this).endScrollOffsetFunction=null;for(var t=0;t<l.length;t++){var n=l[t].parse(e);if(void 0!==n){e=n,o.get(this).endScrollOffsetFunction=l[t].evaluate;break}}if(e!=a&&!o.get(this).startScrollOffsetFunction){var i=r(e);if(!i||i instanceof CSSUnitValue&&"number"==i.unit)throw TypeError("Invalid end offset.")}o.get(this).endScrollOffset=e,u(this)},get:function(){return o.get(this).endScrollOffset}},{key:"timeRange",set:function(e){if("auto"!=e&&("number"!=typeof e||!Number.isFinite(e)||e!=e))throw TypeError("Invalid timeRange value");o.get(this).timeRange=e,u(this)},get:function(){return o.get(this).timeRange}},{key:"phase",get:function(){if(!this.scrollSource)return"inactive";var e=getComputedStyle(this.scrollSource);if("none"==e.display)return"inactive";if("visible"==e.overflow||"clip"==e.overflow)return"inactive";var t=c(new CSSUnitValue(0,"percent"),this.scrollSource,this.orientation,this.startScrollOffset,o.get(this).startScrollOffsetFunction),n=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,this.endScrollOffset,o.get(this).endScrollOffsetFunction),i=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,new CSSUnitValue(100,"percent"),null);if(null===t||null===n)return"inactive";var r=this.scrollSource.scrollTop;return"inline"!==this.orientation&&"horizontal"!==this.orientation||(r=this.scrollSource.scrollLeft),r<t?"before":r>=n&&n<i?"after":"active"}},{key:"currentTime",get:function(){if(!this.scrollSource)return null;if("inactive"==this.phase)return null;var e=c(new CSSUnitValue(0,"percent"),this.scrollSource,this.orientation,this.startScrollOffset,o.get(this).startScrollOffsetFunction),t=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,this.endScrollOffset,o.get(this).endScrollOffsetFunction),n=function(e){var t=e.timeRange;if(t==a){t=0;for(var n=o.get(e).animations,i=0;i<n.length;i++)t=Math.max(t,n[i].animation.effect.getComputedTiming().activeDuration);Infinity===t&&(t=0)}return t}(this),i=this.scrollSource.scrollTop;return"inline"!==this.orientation&&"horizontal"!==this.orientation||(i=this.scrollSource.scrollLeft),i<e?0:i>=t?n:(i-e)/(t-e)*n}},{key:"__polyfill",get:function(){return!0}}]),e}(),d=window.Element.prototype.animate,g=window.Animation;function p(e,t){var n=void 0,i=void 0,r=t,a="pending",o=new Promise(function(e,t){n=e,i=t});return o.resolve=function(){a="resolved",r=null,n(e.proxy)},o.reject=function(){a="rejected",r=null,i(e.proxy)},o.cancelTask=function(){r=null},o.queueTask=function(e){r=e},o.state=function(){return a},requestAnimationFrame(function t(){if(r)return null!==e.timeline.currentTime?(r(),void(r=null)):void requestAnimationFrame(t)}),e.readyPromise=o,o}function y(e){return e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function v(e){e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function T(e){if(e.timeline&&("running"==e.playState||"finished"==e.playState)){var t,n,i=(t=y(e),n=e.animation.currentTime,t<0&&n<=0||t>0&&n>=e.animation.effect.getTiming().duration?"finished":"running");i!=e.playSAtate&&(e.playState=i,"finished"==i&&requestAnimationFrame(function(){if("finished"==e.playState){var t=e.aniamtion.currentTime;e.animation.finish(),e.animation.pause(),e.animation.currentTime=t}}))}}function S(e){e.timeline&&(null!==e.startTime?e.animation.currentTime=(e.timeline.currentTime-e.startTime)*e.animation.playbackRate:null!==e.holdTime&&(e.animation.currentTime=e.holdTime))}function k(e){var t=b.get(this);null!=e?"running"==this.playState&&(t.animation.currentTime=(e-this.startTime)*this.playbackRate,T(t)):"idle"!=t.animation.playState&&t.animation.cancel()}var b=new WeakMap,w=function(){function e(e,t){var n=e instanceof g?e:new g(e,r),i=t instanceof h,r=i?void 0:t;b.set(this,{animation:n,timeline:i?t:void 0,playState:i?"idle":null,readyPromise:null,startTime:null,holdTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,proxy:this,sequence:0,aborted:new Set})}var n=e.prototype;return n.finish=function(){var e=b.get(this);if(e.timeline){var t=y(e),n=e.animation.effect.getTiming().duration;if(0==t||t<0&&Infinity==n)e.animation.finish();else{v(e);var i=t<0?0:n,r=e.timeline.currentTime;e.animation.currentTime=i,function(e){return!e.timeline||"inactive"!=e.timeline.phase}(e)?(e.startTime=r-i/t,e.holdTime=i,e.playState="finished",m(e.timeline,e.animation),e.readyPromise&&"pending"==e.readyPromise.state()&&e.readyPromise.resolve(),e.animation.finish()):(e.startTime=null,e.holdTime=i,e.playState="paused")}}else e.animation.finish()},n.play=function(){var e=b.get(this);if(e.timeline){var t="paused"==e.playState&&this.pending,n=!1,i=null,r=e.animation.currentTime;e.resetCurrentTimeOnResume&&(r=null,e.resetCurrentTimeOnResume=!1);var a=y(e),o=e.animation.effect.getTiming().duration;if(a>0&&(null==r||r<0||r>=o))i=0;else if(a<0&&(null==r||r<=0||r>o)){if(Infinity==o)return void e.animation.play();i=o}else 0==a&&null==r&&(i=0);if(null!=i&&(e.startTime=i,e.holdTime=null,v(e)),e.playState="running",f(e.timeline,e.animation,k.bind(this)),e.holdTime&&(e.startTime=null),e.readyPromise&&this.pending&&(e.readyPromise.cancelTask(),n=!0),null!==e.holdTime||null!==i||t||null!==e.pendingPlaybackRate){e.readyPromise&&!n&&(e.readyPromise=null),S(e);var l=function(){var t=e.timeline.currentTime;if(null!=e.holdTime)v(e),0==a?e.startTime=t:(e.startTime=t-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var n=(t-e.startTime)*e.animation.playbackRate;v(e);var i=e.animation.playbackRate;0==i?(e.holdTime=null,e.startTime=t):e.startTime=t-n/i}e.readyPromise&&"pending"==e.readyPromise.state()&&e.readyPromise.resolve(),T(e),S(e)};e.readyPromise?e.readyPromise.queueTask(l):p(e,l)}}else e.animation.play()},n.pause=function(){var e=b.get(this);if(e.timeline){if("paused"!=e.playState){var t=null,n=e.animation.playbackRate,i=e.animation.effect.getTiming().duration;if(null===e.animation.currentTime)if(n>=0)t=0;else{if(Infinity==i)return void e.animation.pause();t=i}null!==t&&(e.startTime=t),"running"==e.playState&&e.readyPromise&&"pending"==e.readyPromise.state()?e.readyPromise.cancelTask():e.readyPromise=null,e.playState="paused";var r=function(){var t=e.timeline.currentTime;console.log("commitPendingPause"),console.log("readyTime: "+t),console.log("startTime: "+e.startTime),console.log("holdTime: "+e.holdTime),null!=e.startTime&&null==e.holdTime&&(e.holdTime=(t-e.startTime)*e.animation.playbackRate),v(e),e.startTime=null,e.readyPromise.resolve(),T(e),S(e)};e.readyPromise?e.readyPromise.queueTask(r):p(e,r)}}else e.animation.pause()},n.reverse=function(){var e=b.get(this);if(e.timeline){var t=y(e),n=e.animation.effect.getTiming().duration;0==t||t>0&&Infinity==n?e.animation.reverse():(this.updatePlaybackRate(-t),this.play())}else e.animation.reverse()},n.updatePlaybackRate=function(e){var t=b.get(this);if(t.pendingPlaybackRate=e,t.timeline){var n=t.playState;if(!t.readyPromise||"pending"!=t.readyPromise.state())switch(n){case"idle":case"paused":v(t);break;case"finished":var i=t.timeline.currentTime,r=null!==i?(i-t.startTime)*t.animation.playbackRate:null;t.startTime=0==value?i:null!=i&&null!=r?(i-r)/value:null,v(t),T(t),S(t);break;default:this.play()}}else t.animation.updatePlaybackRate(e)},n.persist=function(){b.get(this).animation.persist()},n.cancel=function(){var e=b.get(this);e.animation.cancel(),e.timeline&&"idle"!=e.playState&&(function(e){e.readyPromise&&"pending"!=!e.readyPromise.state()&&(e.readyPromise.cancelTask(),v(e),e.readyPromise.reject(),e.readyPromise=null)}(e),e.startTime=null,e.holdTime=null,e.playState="idle",m(e.timeline,e.animation))},t(e,[{key:"effect",get:function(){return b.get(this).animation.effect},set:function(e){b.get(this).animation.effect=e}},{key:"timeline",get:function(){var e=b.get(this);return e.timeline||e.animation.timeline},set:function(e){var t=this.timeline;if(t!=e){var n=b.get(this),i=t instanceof h,r=e instanceof h,a=this.currentTime,o=this.playState,l=y(n),s=this.pending;if(i&&m(n.timeline,n.animation),n.resetCurrentTimeOnResume=!1,r){switch(n.timeline=e,v(n),n.animation.pause(),o){case"idle":n.playState="idle",n.holdTime=null,n.startTime=null;break;case"paused":n.playState="paused",n.resetCurrentTimeOnResume=!0,n.animation.currentTime=a,m(n.timeline,n.animation);break;case"running":case"finished":n.playState=o,n.startTime=l<0?n.animation.effect.getTiming().duration:0,n.holdTime="finished"==o?a:null,f(n.timeline,n.animation,k.bind(this))}s&&p(n)}else{if(n.animation.timeline!=e)throw TypeError("Unsupported timeilne: "+e);if(i)switch(n.timeline=null,n.animation.currentTime=a,n.playbackRate){case"paused":n.animation.pause();break;case"running":case"finished":n.animation.play()}}}}},{key:"startTime",get:function(){var e=b.get(this);return e.timeline?e.startTime:e.animation.startTime},set:function(e){var t=b.get(this);if(t.timeline){var n=t.timeline.currentTime;null===n&&null!==e&&(t.holdTime=null);var i=this.currentTime;v(t),t.startTime=e,t.resetCurrentTimeOnResume=!1,t.readyPromise=null,null===e?(t.holdTime=i,t.playState=null===i?"idle":"paused"):(t.playState="running",null!==n&&(t.animation.currentTime=(n-e)*this.playbackRate,T(t)))}else t.animation.startTime=e}},{key:"currentTime",get:function(){var e=b.get(this);return e.timeline?e.playState&&"idle"!=e.playState?"running"==e.playState&&"inactive"==e.timeline.phase?null:e.animation.currentTime:null:e.animation.currentTime},set:function(e){var t=b.get(this);if(t.animation.currentTime=e,t.resetCurrentTimeOnResume=!1,t.timeline){var n=t.timeline.currentTime,i=this.playbackRate;switch(t.playState){case"running":case"finished":t.startTime=n-e/i,t.holdTime=null;break;default:t.playState=e?"paused":"idle",t.holdTime=e,t.startTime=null}T(t)}}},{key:"playbackRate",get:function(){return b.get(this).animation.playbackRate},set:function(e){var t=b.get(this);t.animation.playbackRate=e,t.pendingPlaybackRate=null,T(t)}},{key:"playState",get:function(){return proxy=b.get(this),proxy.timeline?proxy.playState:proxy.animation.playState}},{key:"replaceState",get:function(){return b.get(this).animation.pending}},{key:"pending",get:function(){var e=b.get(this);return e.timeline?e.readyPromise&&"pending"==e.readyPromise.state():e.animation.pending}},{key:"id",get:function(){return b.get(this).animation.id}},{key:"onfinish",get:function(){return b.get(this).animation.onfinish},set:function(e){b.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return b.get(this).animation.oncancel},set:function(e){b.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return b.get(this).animation.onremove},set:function(e){b.get(this).animation.onremove=e}},{key:"finished",get:function(){b.get(this)}},{key:"ready",get:function(){var e=b.get(this);return e.timeline?(e.readyPromise||(p(e,null),e.readyPromise.resolve(e.proxy)),e.readyPromise):e.animation.ready}}]),e}(),P=new WeakMap,O=[[[0,1,2,3]],[[0,2],[1,3]],[[0],[1,3],[2]],[[0],[1],[2],[3]]],R=function(){function e(e){P.set(this,{target:null,edge:"start",threshold:0,rootMargin:[[0,"px"],[0,"px"],[0,"px"],[0,"px"]]}),this.target=e.target,this.edge=e.edge||"start",this.threshold=e.threshold||0,this.rootMargin=e.rootMargin||"0px 0px 0px 0px",this.clamp=e.clamp||!1}return t(e,[{key:"target",set:function(e){if(!(e instanceof Element))throw P.get(this).target=null,Error("Intersection target must be an element.");P.get(this).target=e},get:function(){return P.get(this).target}},{key:"edge",set:function(e){-1!=["start","end"].indexOf(e)&&(P.get(this).edge=e)},get:function(){return P.get(this).edge}},{key:"threshold",set:function(e){var t=parseFloat(e);if(t!=t)throw TypeError("Invalid threshold.");if(t<0||t>1)throw TypeError("threshold must be in the range [0, 1]");P.get(this).threshold=t},get:function(){return P.get(this).threshold}},{key:"rootMargin",set:function(e){var t=e.split(/ +/);if(t.length<1||t.length>4)throw TypeError("rootMargin must contain between 1 and 4 length components");for(var n=[[],[],[],[]],i=0;i<t.length;i++){var a=r(t[i],!0);if(!a)throw TypeError("Unrecognized rootMargin length");for(var o=O[t.length-1][i],l=0;l<o.length;l++)n[o[l]]=[parseFloat(a.value),a.unit]}P.get(this).rootMargin=n},get:function(){return P.get(this).rootMargin.map(function(e){return e.join("")}).join(" ")}},{key:"clamp",set:function(e){P.get(this).clamp=!!e}}]),e}();if(l.push({parse:function(e){if(e.target)return new R(e)},evaluate:function(e,t,n,i){"block"==t?t="vertical":"inline"==t&&(t="horizontal");for(var r,a=e==document.scrollingElement?{left:0,right:e.clientWidth,top:0,bottom:e.clientHeight,width:e.clientWidth,height:e.clientHeight}:e.getBoundingClientRect(),o=P.get(n).rootMargin,l=[],s=0;s<4;s++)l.push("percent"==(r=o[s])[1]?r[0]*(s%2==0?a.height:a.width)/100:r[0]);var u=a.left-l[3],c=a.right-a.left+l[3]+l[1],m=a.top-l[0],f=a.bottom-a.top+l[0]+l[2],h=P.get(n).clamp,d=n.target.getBoundingClientRect(),g=n.threshold;if("start"==n.edge&&(g=1-g),"vertical"==t){var p=d.top+d.height*g-m+e.scrollTop;return h?"end"==n.edge?Math.max(0,p-f):Math.min(p,e.scrollHeight-f):"end"==n.edge?p-f:p}var y=d.left+d.width*g-u+e.scrollLeft;return h?"end"==n.edge?Math.max(0,y-c):Math.min(y,e.scrollWidth-c):"end"==n.edge?y-c:y}}),!Reflect.defineProperty(window,"ScrollTimeline",{value:h}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,t){var n=t.timeline;n instanceof h&&delete t.timeline;var i=d.apply(this,[e,t]),r=new w(i,n);return n instanceof h&&(i.pause(),proxyAniamtion.play()),r}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:w}))throw Error("Error installing Animation constructor.")}();
//# sourceMappingURL=scroll-timeline.js.map

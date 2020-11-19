!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function i(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return n(e,void 0);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=e[Symbol.iterator]()).next.bind(i)}function r(e,t){if(e instanceof CSSUnitValue||e instanceof CSSMathSum)return e;if(!t)return null;var n=e.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/);return n?new CSSUnitValue(n[1],"%"==n[2]?"percent":n[2]):null}var a=new CSSKeywordValue("auto"),l=new WeakMap,o=[];function s(e){return e===document.scrollingElement?document:e}function u(e){var t=l.get(e).animations;if(0!==t.length)for(var n=e.currentTime,i=0;i<t.length;i++)t[i].tickAnimation(n)}function c(e,t,n,l,o){if(o)return o(t,n,l,0==e.value?"start":"end");"block"===n?n="vertical":"inline"===n&&(n="horizontal");var s="vertical"===n?t.scrollHeight-t.clientHeight:t.scrollWidth-t.clientWidth;return function e(t,n){if(t instanceof CSSUnitValue){if("percent"==t.unit)return t.value*n/100;if("px"==t.unit)return t.value;throw TypeError("Unhandled unit type "+t.unit)}if(t instanceof CSSMathSum){for(var r,a=0,l=i(t.values);!(r=l()).done;)a+=e(r.value,n);return a}throw TypeError("Unsupported value type: "+typeof t)}(r(l===a?e:l),s)}function m(e,t){for(var n=l.get(e).animations,i=0;i<n.length;i++)n[i].animation==t&&n.splice(i,1)}function f(e,t,n){for(var i=l.get(e).animations,r=0;r<i.length;r++)if(i[r].animation==t)return;i.push({animation:t,tickAnimation:n}),u(e)}var h=function(){function e(e){l.set(this,{scrollSource:null,orientation:"block",startScrollOffset:a,endScrollOffset:a,scrollOffsets:[],timeRange:a,animations:[],scrollOffsetFns:[]}),this.scrollSource=e&&void 0!==e.scrollSource?e.scrollSource:document.scrollingElement,this.orientation=e&&e.orientation||"block",this.startScrollOffset=e&&e.startScrollOffset||a,this.endScrollOffset=e&&e.endScrollOffset||a,this.scrollOffsets=e&&void 0!==e.scrollOffsets?e.scrollOffsets:[],this.timeRange=e&&void 0!==e.timeRange?e.timeRange:"auto"}return t(e,[{key:"scrollSource",set:function(e){var t=this;this.scrollSource&&s(this.scrollSource).removeEventListener("scroll",function(){return u(t)}),l.get(this).scrollSource=e,e&&s(e).addEventListener("scroll",function(){return u(t)}),u(this)},get:function(){return l.get(this).scrollSource}},{key:"orientation",set:function(e){if(-1===["block","inline","horizontal","vertical"].indexOf(e))throw TypeError("Invalid orientation");l.get(this).orientation=e,u(this)},get:function(){return l.get(this).orientation}},{key:"scrollOffsets",set:function(e){for(var t,n=[],s=[],u=i(e);!(t=u()).done;){var c=t.value,m=null,f=void 0;"auto"==c&&(c=a);for(var h=0;h<o.length;h++){var d=o[h].parse(c);if(void 0!==d){f=d,m=o[h].evaluate;break}}if(!m){if(c!=a){var g=r(c);if(!g||g instanceof CSSUnitValue&&"number"==g.unit)throw TypeError("Invalid scrollOffsets entry.")}f=c}n.push(f),s.push(m)}if(1==n.length&&n[0]==a)throw TypeError("Invalid scrollOffsets value.");var p=l.get(this);p.scrollOffsets=n,p.scrollOffsetFns=s},get:function(){return l.get(this).scrollOffsets}},{key:"startScrollOffset",set:function(e){"auto"==e&&(e=a);var t=l.get(this);t.startScrollOffsetFunction=null;for(var n=0;n<o.length;n++){var i=o[n].parse(e);if(void 0!==i){e=i,t.startScrollOffsetFunction=o[n].evaluate;break}}if(e!=a&&!l.get(this).startScrollOffsetFunction){var s=r(e);if(!s||s instanceof CSSUnitValue&&"number"==s.unit)throw TypeError("Invalid start offset.")}t.startScrollOffset=e,u(this)},get:function(){return l.get(this).startScrollOffset}},{key:"endScrollOffset",set:function(e){"auto"==e&&(e=a),l.get(this).endScrollOffsetFunction=null;for(var t=0;t<o.length;t++){var n=o[t].parse(e);if(void 0!==n){e=n,l.get(this).endScrollOffsetFunction=o[t].evaluate;break}}if(e!=a&&!l.get(this).startScrollOffsetFunction){var i=r(e);if(!i||i instanceof CSSUnitValue&&"number"==i.unit)throw TypeError("Invalid end offset.")}l.get(this).endScrollOffset=e,u(this)},get:function(){return l.get(this).endScrollOffset}},{key:"timeRange",set:function(e){if("auto"!=e&&("number"!=typeof e||!Number.isFinite(e)||e!=e))throw TypeError("Invalid timeRange value");l.get(this).timeRange=e,u(this)},get:function(){return l.get(this).timeRange}},{key:"phase",get:function(){if(!this.scrollSource)return"inactive";var e=getComputedStyle(this.scrollSource);if("none"==e.display)return"inactive";if(this.scrollSource!=document.scrollingElement&&("visible"==e.overflow||"clip"==e.overflow))return"inactive";var t=c(new CSSUnitValue(0,"percent"),this.scrollSource,this.orientation,this.startScrollOffset,l.get(this).startScrollOffsetFunction),n=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,this.endScrollOffset,l.get(this).endScrollOffsetFunction),i=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,new CSSUnitValue(100,"percent"),null);if(null===t||null===n)return"inactive";var r=this.scrollSource.scrollTop;return"inline"!==this.orientation&&"horizontal"!==this.orientation||(r=this.scrollSource.scrollLeft),r<t?"before":r>=n&&n<i?"after":"active"}},{key:"currentTime",get:function(){if(!this.scrollSource)return null;if("inactive"==this.phase)return null;var e=c(new CSSUnitValue(0,"percent"),this.scrollSource,this.orientation,this.startScrollOffset,l.get(this).startScrollOffsetFunction),t=c(new CSSUnitValue(100,"percent"),this.scrollSource,this.orientation,this.endScrollOffset,l.get(this).endScrollOffsetFunction),n=function(e){var t=e.timeRange;if(t==a){t=0;for(var n=l.get(e).animations,i=0;i<n.length;i++)t=Math.max(t,n[i].animation.effect.getComputedTiming().activeDuration);Infinity===t&&(t=0)}return t}(this),i=this.scrollSource.scrollTop;return"inline"!==this.orientation&&"horizontal"!==this.orientation||(i=this.scrollSource.scrollLeft),i<e?0:i>=t?n:(i-e)/(t-e)*n}},{key:"__polyfill",get:function(){return!0}}]),e}(),d=window.Element.prototype.animate,g=window.Animation;function p(e){var t=void 0,n=void 0,i=void 0,r=void 0,a="pending",l=new Promise(function(e,i){t=e,n=i});return l.resolve=function(){a="resolved",i=null,r=null,t(e.proxy)},l.reject=function(){a="rejected",i=null,r=null,n(new DOMException("The user aborted a request","AbortError"))},l.cancelTask=function(){i=null},l.queueTask=function(e,t){i=e,r=t},l.state=function(){return a},l.taskName=function(){return r},requestAnimationFrame(function t(){if(i&&null!=e.timeline)return null!==e.timeline.currentTime?(i(e),void(i=null)):void requestAnimationFrame(t)}),e.readyPromise=l,l}function y(e){return!!e.readyPromise&&"pause"==e.readyPromise.taskName()}function v(e){var t=e.timeline.currentTime;if(null!=e.holdTime)b(e),0==e.animation.playbackRate?e.startTime=t:(e.startTime=t-e.holdTime/e.animation.playbackRate,e.holdTime=null);else if(null!==e.startTime&&null!==e.pendingPlaybackRate){var n=(t-e.startTime)*e.animation.playbackRate;b(e);var i=e.animation.playbackRate;0==i?(e.holdTime=null,e.startTime=t):e.startTime=t-n/i}e.readyPromise&&"pending"==e.readyPromise.state()&&e.readyPromise.resolve(),R(e,!1,!1),O(e)}function T(e){null!=e.startTime&&null==e.holdTime&&(e.holdTime=(e.timeline.currentTime-e.startTime)*e.animation.playbackRate),b(e),e.startTime=null,e.readyPromise.resolve(),R(e,!1,!1),O(e)}function S(e){var t=void 0,n=void 0,i="pending",r=new Promise(function(e,i){t=e,n=i});return r.resolve=function(){i="resolved",t(e.proxy)},r.reject=function(){i="rejected",n(new DOMException("The user aborted a request","AbortError"))},r.state=function(){return i},r.scheduleAsyncFinish=function(){requestAnimationFrame(function(){"finished"==e.proxy.playState&&"pending"==i&&(r.resolve(),e.animation.finish())})},e.finishedPromise=r,r}function k(e){return e.pendingPlaybackRate?e.pendingPlaybackRate:e.animation.playbackRate}function b(e){null!==e.pendingPlaybackRate&&(e.animation.playbackRate=e.pendingPlaybackRate,e.pendingPlaybackRate=null)}function P(e){if(!e.timeline)return null;var t=e.timeline.currentTime;if(null===t)return null;if(null===e.startTime)return null;var n=(t-e.startTime)*e.animation.playbackRate;return-0==n&&(n=0),n}function w(e,t){if(!e.timeline)return null;var n=e.timeline.currentTime;return null==n?null:n-t/e.animation.playbackRate}function R(e,t,n){if(e.timeline){var i=t?e.proxy.currentTime:P(e);if(i&&null!=e.startTime&&!e.proxy.pending){var r=k(e),a=e.animation.effect.getTiming().duration,l=e.previousCurrentTime;r>0&&i>=a?((null===l||l<a)&&(l=a),e.holdTime=t?i:l):r<0&&i<=0?((null==l||l>0)&&(l=0),e.holdTime=t?i:l):0!=r&&(t&&null!==e.holdTime&&(e.startTime=w(e,e.holdTime)),e.holdTime=null)}O(e),e.previousCurrentTime=e.proxy.currentTime,"finished"==e.proxy.playState?(e.finishedPromise||S(e),"pending"==e.finishedPromise.state()&&(n?(e.finishedPromise.resolve(),e.animation.finish()):e.finishedPromise.scheduleAsyncFinish())):(e.finishedPromise&&"resolved"==e.finishedPromise.state()&&(e.finsihedPromise=null),"paused"!=e.animation.playState&&e.animation.pause())}}function O(e){e.timeline&&(null!==e.startTime?e.animation.currentTime=(e.timeline.currentTime-e.startTime)*e.animation.playbackRate:null!==e.holdTime&&(e.animation.currentTime=e.holdTime))}function E(e){var t=e.animation.effect.getTiming();return Math.max(0,t.delay+t.endDelay+t.iterations*t.duration)}function x(e,t){if(e.timeline){var n="paused"==e.playState&&e.proxy.pending,i=!1,r=null,a=e.proxy.currentTime;e.resetCurrentTimeOnResume&&(a=null,e.resetCurrentTimeOnResume=!1);var l=k(e),o=E(e);if(l>0&&t&&(null==a||a<0||a>=o))r=0;else if(l<0&&t&&(null==a||a<=0||a>o)){if(Infinity==o)return void e.animation.play();r=o}else 0==l&&null==a&&(r=0);null!=r&&(e.startTime=r,e.holdTime=null,b(e)),e.playState="running",f(e.timeline,e.animation,C.bind(e.proxy)),e.holdTime&&(e.startTime=null),e.readyPromise&&e.proxy.pending&&(e.readyPromise.cancelTask(),i=!0),(null!==e.holdTime||null!==r||n||null!==e.pendingPlaybackRate)&&(e.readyPromise&&!i&&(e.readyPromise=null),O(e),e.readyPromise||p(e),e.readyPromise.queueTask(v,"play"))}}function C(e){var t=M.get(this);null!=e?"running"==t.proxy.playState&&(t.animation.currentTime=(e-this.startTime)*this.playbackRate,R(t,!1,!1)):"idle"!=t.animation.playState&&t.animation.cancel()}var M=new WeakMap,A=function(){function e(e,t){var n=e instanceof g?e:new g(e,r),i=t instanceof h,r=i?void 0:t;M.set(this,{animation:n,timeline:i?t:void 0,playState:i?"idle":null,readyPromise:null,finishedPromise:null,startTime:null,holdTime:null,previousCurrentTime:null,resetCurrentTimeOnResume:!1,pendingPlaybackRate:null,proxy:this,sequence:0,aborted:new Set})}var n=e.prototype;return n.finish=function(){var e=M.get(this);if(e.timeline){var t=k(e),n=e.animation.effect.getTiming().duration;if(0==t||t<0&&Infinity==n)e.animation.finish();else{b(e);var i=t<0?0:n;this.currentTime=i;var r=e.timeline.currentTime;null===e.startTime&&null!==r&&(e.startTime=r-i/e.animation.playbackRate),y(e)&&null!==e.startTime&&(e.holdTime=null,e.readyPromise.cancelTask(),e.readyPromise.resolve()),function(e){return!!e.readyPromise&&"play"==e.readyPromise.taskName()}(e)&&null!==e.startTime&&(e.readyPromise.cancelTask(),e.readyPromise.resolve()),R(e,!0,!0)}}else e.animation.finish()},n.play=function(){var e=M.get(this);e.timeline?x(e,!0):e.animation.play()},n.pause=function(){var e=M.get(this);if(e.timeline){if("paused"!=e.playState){var t=null,n=e.animation.playbackRate,i=e.animation.effect.getTiming().duration;if(null===e.animation.currentTime)if(n>=0)t=0;else{if(Infinity==i)return void e.animation.pause();t=i}null!==t&&(e.startTime=t),"running"==e.playState&&e.readyPromise&&"pending"==e.readyPromise.state()?e.readyPromise.cancelTask():e.readyPromise=null,e.playState="paused",e.readyPromise||p(e),e.readyPromise.queueTask(T,"pause")}}else e.animation.pause()},n.reverse=function(){var e=M.get(this),t=k(e),n=e.resetCurrentTimeOnResume?null:this.currentTime,i=Infinity==E(e),r=0!=t&&(t<0||n>0||!i);if(!e.timeline||!r)return r&&(e.pendingPlaybackRate=-k(e)),void e.animation.reverse();this.updatePlaybackRate(-t),x(e,!0)},n.updatePlaybackRate=function(e){var t=M.get(this);if(t.pendingPlaybackRate=e,t.timeline){var n=this.playState;if(!t.readyPromise||"pending"!=t.readyPromise.state())switch(n){case"idle":case"paused":b(t);break;case"finished":var i=t.timeline.currentTime,r=null!==i?(i-t.startTime)*t.animation.playbackRate:null;t.startTime=0==e?i:null!=i&&null!=r?(i-r)/e:null,b(t),R(t,!1,!1),O(t);break;default:x(t,!1)}}else t.animation.updatePlaybackRate(e)},n.persist=function(){M.get(this).animation.persist()},n.cancel=function(){var e=M.get(this);e.timeline?"idle"!=e.playState&&(function(e){e.readyPromise&&"pending"!=!e.readyPromise.state()&&(e.readyPromise.cancelTask(),b(e),e.readyPromise.reject(),e.readyPromise=null)}(e),e.animation.cancel(),e.startTime=null,e.holdTime=null,m(e.timeline,e.animation)):e.animation.cancel()},n.addEventListener=function(e,t,n){M.get(this).animation.addEventListener(e,t,n)},n.removeEventListener=function(e,t,n){M.get(this).animation.removeEventListener(e,t,n)},n.dispatchEvent=function(e){M.get(this).animation.dispatchEvent(e)},t(e,[{key:"effect",get:function(){return M.get(this).animation.effect},set:function(e){M.get(this).animation.effect=e}},{key:"timeline",get:function(){var e=M.get(this);return e.timeline||e.animation.timeline},set:function(e){var t=this.timeline;if(t!=e){var n=this.playState,i=this.currentTime,r=t instanceof h,a=e instanceof h,l=M.get(this);l.resetCurrentTimeOnResume=!1;var o=this.pending;if(r&&m(l.timeline,l.animation),a){l.timeline=e,b(l);var s=l.animation.playbackRate>=0?0:l.animation.effect.getTiming().duration;switch(n){case"running":case"finished":l.startTime=s,f(l.timeline,l.animation,C.bind(this));break;case"paused":l.resetCurrentTimeOnResume=!0,l.startTime=null,l.holdTime=i;break;default:l.holdTime=null,l.startTime=null}return o&&(l.readyPromise&&"resolved"!=l.readyPromise.state()||p(l),"paused"==n?l.readyPromise.queueTask(T,"pause"):l.readyPromise.queueTask(v,"play")),null!==l.startTime&&(l.holdTime=null),void R(l,!1,!1)}if(l.animation.timeline!=e)throw TypeError("Unsupported timeline: "+e);if(m(l.timeline,l.animation),l.timeline=null,r)switch(null!==i&&(l.animation.currentTime=i),n){case"paused":l.animation.pause();break;case"running":case"finished":l.animation.play()}}}},{key:"startTime",get:function(){var e=M.get(this);return e.timeline?e.startTime:e.animation.startTime},set:function(e){var t=M.get(this);if(t.timeline){var n=t.timeline.currentTime;null===n&&null!==e&&(t.holdTime=null);var i=this.currentTime;b(t),t.startTime=e,t.resetCurrentTimeOnResume=!1,t.readyPromise=null,null===e?t.holdTime=i:null!==n&&(t.animation.currentTime=(n-e)*this.playbackRate,R(t,!0,!1)),O(t)}else t.animation.startTime=e}},{key:"currentTime",get:function(){var e=M.get(this);return e.timeline?null!=e.holdTime?e.holdTime:P(e):e.animation.currentTime},set:function(e){var t=M.get(this);if(t.timeline&&null!=e){var n=t.timeline.phase;null!==t.holdTime||null===t.startTime||"inactive"==n||0==t.animation.playbackRate?t.holdTime=e:t.startTime=w(t,e),t.resetCurrentTimeOnResume=!1,"inactive"==n&&(t.startTime=null),t.previousCurrentTime=null,y(t)&&(t.holdTime=e,b(t),t.startTime=null,t.readyPromise.cancelTask(),t.readyPromise.resolve()),R(t,!0,!1)}else t.animation.currentTime=e}},{key:"playbackRate",get:function(){return M.get(this).animation.playbackRate},set:function(e){var t=M.get(this);if(t.timeline){t.pendingPlaybackRate=null;var n=this.currentTime;t.animation.playbackRate=e,null!==n&&(this.currentTime=n)}else t.animation.playbackRate=e}},{key:"playState",get:function(){if(details=M.get(this),!details.timeline)return details.animation.playState;var e=this.currentTime,t=details.readyPromise?details.readyPromise.taskName():null;if(null===e&&null===details.startTime&&null==t)return"idle";if("pause"==t||null===details.startTime&&"play"!=t)return"paused";if(null!=e){if(details.animation.playbackRate>0&&e>=details.animation.effect.getTiming().duration)return"finished";if(details.animation.playbackRate<0&&e<=0)return"finished"}return"running"}},{key:"replaceState",get:function(){return M.get(this).animation.pending}},{key:"pending",get:function(){var e=M.get(this);return e.timeline?!!e.readyPromise&&"pending"==e.readyPromise.state():e.animation.pending}},{key:"id",get:function(){return M.get(this).animation.id}},{key:"onfinish",get:function(){return M.get(this).animation.onfinish},set:function(e){M.get(this).animation.onfinish=e}},{key:"oncancel",get:function(){return M.get(this).animation.oncancel},set:function(e){M.get(this).animation.oncancel=e}},{key:"onremove",get:function(){return M.get(this).animation.onremove},set:function(e){M.get(this).animation.onremove=e}},{key:"finished",get:function(){var e=M.get(this);return e.timeline?(e.finishedPromise||(S(e),"finished"==this.playState&&e.finishedPromise.resolve()),e.finishedPromise):e.animation.finished}},{key:"ready",get:function(){var e=M.get(this);return e.timeline?(e.readyPromise||(p(e),e.readyPromise.resolve()),e.readyPromise):e.animation.ready}}]),e}(),F=new WeakMap,I=[[[0,1,2,3]],[[0,2],[1,3]],[[0],[1,3],[2]],[[0],[1],[2],[3]]],U=function(){function e(e){F.set(this,{target:null,edge:"start",threshold:0,rootMargin:[[0,"px"],[0,"px"],[0,"px"],[0,"px"]]}),this.target=e.target,this.edge=e.edge||"start",this.threshold=e.threshold||0,this.rootMargin=e.rootMargin||"0px 0px 0px 0px",this.clamp=e.clamp||!1}return t(e,[{key:"target",set:function(e){if(!(e instanceof Element))throw F.get(this).target=null,Error("Intersection target must be an element.");F.get(this).target=e},get:function(){return F.get(this).target}},{key:"edge",set:function(e){-1!=["start","end"].indexOf(e)&&(F.get(this).edge=e)},get:function(){return F.get(this).edge}},{key:"threshold",set:function(e){var t=parseFloat(e);if(t!=t)throw TypeError("Invalid threshold.");if(t<0||t>1)throw TypeError("threshold must be in the range [0, 1]");F.get(this).threshold=t},get:function(){return F.get(this).threshold}},{key:"rootMargin",set:function(e){var t=e.split(/ +/);if(t.length<1||t.length>4)throw TypeError("rootMargin must contain between 1 and 4 length components");for(var n=[[],[],[],[]],i=0;i<t.length;i++){var a=r(t[i],!0);if(!a)throw TypeError("Unrecognized rootMargin length");for(var l=I[t.length-1][i],o=0;o<l.length;o++)n[l[o]]=[parseFloat(a.value),a.unit]}F.get(this).rootMargin=n},get:function(){return F.get(this).rootMargin.map(function(e){return e.join("")}).join(" ")}},{key:"clamp",set:function(e){F.get(this).clamp=!!e}}]),e}();if(o.push({parse:function(e){if(e.target)return new U(e)},evaluate:function(e,t,n,i){"block"==t?t="vertical":"inline"==t&&(t="horizontal");for(var r,a=e==document.scrollingElement?{left:0,right:e.clientWidth,top:0,bottom:e.clientHeight,width:e.clientWidth,height:e.clientHeight}:e.getBoundingClientRect(),l=F.get(n).rootMargin,o=[],s=0;s<4;s++)o.push("percent"==(r=l[s])[1]?r[0]*(s%2==0?a.height:a.width)/100:r[0]);var u=a.left-o[3],c=a.right-a.left+o[3]+o[1],m=a.top-o[0],f=a.bottom-a.top+o[0]+o[2],h=F.get(n).clamp,d=n.target.getBoundingClientRect(),g=n.threshold;if("start"==n.edge&&(g=1-g),"vertical"==t){var p=d.top+d.height*g-m+e.scrollTop;return h?"end"==n.edge?Math.max(0,p-f):Math.min(p,e.scrollHeight-f):"end"==n.edge?p-f:p}var y=d.left+d.width*g-u+e.scrollLeft;return h?"end"==n.edge?Math.max(0,y-c):Math.min(y,e.scrollWidth-c):"end"==n.edge?y-c:y}}),!Reflect.defineProperty(window,"ScrollTimeline",{value:h}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(e,t){var n=t.timeline;n instanceof h&&delete t.timeline;var i=d.apply(this,[e,t]),r=new A(i,n);return n instanceof h&&(i.pause(),r.play()),r}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:A}))throw Error("Error installing Animation constructor.")}();
//# sourceMappingURL=scroll-timeline.js.map

!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}function n(t){var e=t.trim().match(/^(-?[0-9]*\.?[0-9]*)(px|%)$/);return e?{value:e[1],unit:e[2]}:null}var i=new CSSKeywordValue("auto"),r=new WeakMap,o=[];function a(t){return t===document.scrollingElement?document:t}function l(t){var e=r.get(t).animations;if(0!==e.length)for(var n=t.currentTime,i=0;i<e.length;i++)null==n?"paused"===e[i].playState&&e[i].cancel():e[i].currentTime=n}function s(t,e,r,o,a){if(a)return a(e,r,o,"0%"===t?"start":"end");"block"===r?r="vertical":"inline"===r&&(r="horizontal");var l="vertical"===r?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,s=n(o===i?t:o);return"%"===s.unit?parseFloat(s.value)*l/100:parseFloat(s.value)}function c(t,e){var n=r.get(t).animations,i=n.indexOf(e);-1!==i&&n.splice(i,1)}var h=function(){function t(t){r.set(this,{scrollSource:null,orientation:"block",startScrollOffset:i,endScrollOffset:i,timeRange:i,fill:"none",animations:[]}),this.scrollSource=t&&t.scrollSource||document.scrollingElement,this.orientation=t&&t.orientation||"block",this.startScrollOffset=t&&t.startScrollOffset||i,this.endScrollOffset=t&&t.endScrollOffset||i,this.timeRange=t&&t.timeRange||i,this.fill=t&&t.fill||"none"}return e(t,[{key:"scrollSource",set:function(t){var e=this;this.scrollSource&&a(this.scrollSource).removeEventListener("scroll",function(){return l(e)}),t instanceof Element||(t=document.scrollingElement),r.get(this).scrollSource=t,a(t).addEventListener("scroll",function(){return l(e)}),l(this)},get:function(){return r.get(this).scrollSource}},{key:"orientation",set:function(t){if(-1===["block","inline","horizontal","vertical"].indexOf(t))throw TypeError("Invalid orientation");r.get(this).orientation=t,l(this)},get:function(){return r.get(this).orientation}},{key:"startScrollOffset",set:function(t){"auto"==t&&(t=i);var e=r.get(this);e.startScrollOffsetFunction=null;for(var a=0;a<o.length;a++){var s=o[a].parse(t);if(void 0!==s){t=s,e.startScrollOffsetFunction=o[a].evaluate;break}}if(!r.get(this).startScrollOffsetFunction&&t!=i&&!n(t))throw TypeError("Invalid start offset.");e.startScrollOffset=t,l(this)},get:function(){return r.get(this).startScrollOffset}},{key:"endScrollOffset",set:function(t){"auto"==t&&(t=i),r.get(this).endScrollOffsetFunction=null;for(var e=0;e<o.length;e++){var a=o[e].parse(t);if(void 0!==a){t=a,r.get(this).endScrollOffsetFunction=o[e].evaluate;break}}if(!r.get(this).endScrollOffsetFunction&&t!=i&&!n(t))throw TypeError("Invalid end offset.");r.get(this).endScrollOffset=t,l(this)},get:function(){return r.get(this).endScrollOffset}},{key:"timeRange",set:function(t){r.get(this).timeRange=t,l(this)},get:function(){return r.get(this).timeRange}},{key:"currentTime",get:function(){if(!this.scrollSource)return null;var t,e,n=s("0%",this.scrollSource,this.orientation,this.startScrollOffset,r.get(this).startScrollOffsetFunction),o=s("100%",this.scrollSource,this.orientation,this.endScrollOffset,r.get(this).endScrollOffsetFunction),a=function(t){var e=t.timeRange;if(e===i){e=0;for(var n=r.get(t).animations,o=0;o<n.length;o++)e=Math.max(e,n[o].effect.getComputedTiming().activeDuration);Infinity===e&&(e=0)}return e}(this),l=this.scrollSource.scrollTop;return"inline"!==this.orientation&&"horizontal"!==this.orientation||(l=this.scrollSource.scrollLeft),l<n?"none"===this.fill||"forwards"===this.fill?null:0:l>=o?o<(t=this.scrollSource,"block"===(e=this.orientation)?e="vertical":"inline"===e&&(e="horizontal"),"vertical"===e?t.scrollHeight-t.clientHeight:"horizontal"===e?t.scrollWidth-t.clientWidth:void 0)&&("none"===this.fill||"backwards"===this.fill)?null:a:(l-n)/(o-n)*a}},{key:"__polyfill",get:function(){return!0}}]),t}(),u=window.Element.prototype.animate,f=window.Animation,g=new WeakMap,m=function(){function t(t,e){if(t instanceof f)g.set(this,{animation:t,timeline:e,playState:"idle"});else{var n=e&&e instanceof h;g.set(this,{animation:new f(t,n?void 0:e),timeline:n?e:void 0,playState:n?"idle":null})}}var n=t.prototype;return n.finish=function(){g.get(this).animation.finish();var t=g.get(this).timeline;t?"finished"!=g.get(this).playState&&(g.get(this).playState="finished",c(t,g.get(this).animation)):g.get(this).animation.play()},n.play=function(){var t,e,n=g.get(this).timeline;n?("paused"!=g.get(this).animation.playState&&(g.get(this).animation.play(),g.get(this).animation.pause()),"running"!=g.get(this).playState&&(t=n,e=g.get(this).animation,r.get(t).animations.push(e),l(t),g.get(this).playState="running")):g.get(this).animation.play()},n.pause=function(){var t=g.get(this).timeline;t?"paused"!=g.get(this).playState&&(g.get(this).playState="paused",c(t,g.get(this).animation)):g.get(this).animation.pause()},n.reverse=function(){g.get(this).animation.reverse()},n.updatePlaybackRate=function(t){g.get(this).animation.updatePlaybackRate(t)},n.persist=function(){g.get(this).animation.persist()},n.cancel=function(){g.get(this).animation.cancel();var t=g.get(this).timeline;t&&"idle"!=g.get(this).playState&&"finished"!=g.get(this).playState&&("running"==g.get(this).playState&&c(t,g.get(this).animation),g.get(this).playState="finished")},e(t,[{key:"effect",get:function(){return g.get(this).animation.effect},set:function(t){return g.get(this).animation.effect=t}},{key:"timeline",get:function(){var t=g.get(this).timeline;return void 0!==t?t:g.get(this).animation.timeline}},{key:"startTime",get:function(){var t=g.get(this).playState;return t?"running"==t?0:null:g.get(this).animation.startTime},set:function(t){g.get(this).animation.startTime=t}},{key:"currentTime",get:function(){return g.get(this).animation.currentTime},set:function(t){g.get(this).animation.currentTime=t}},{key:"playbackRate",get:function(){return g.get(this).animation.playbackRate},set:function(t){g.get(this).animation.playbackRate=t}},{key:"playState",get:function(){return g.get(this).playState||g.get(this).animation.playState}},{key:"replaceState",get:function(){return g.get(this).animation.pending}},{key:"pending",get:function(){return g.get(this).animation.pending}},{key:"id",get:function(){return g.get(this).animation.id}},{key:"onfinish",get:function(){return g.get(this).animation.onfinish},set:function(t){g.get(this).animation.onfinish=t}},{key:"oncancel",get:function(){return g.get(this).animation.oncancel},set:function(t){g.get(this).animation.oncancel=t}},{key:"onremove",get:function(){return g.get(this).animation.onremove},set:function(t){g.get(this).animation.onremove=t}},{key:"finished",get:function(){g.get(this)}},{key:"ready",get:function(){g.get(this)}}]),t}(),d=new WeakMap,p=[[[0,1,2,3]],[[0,2],[1,3]],[[0],[1,3],[2]],[[0],[1],[2],[3]]],y=function(){function t(t){d.set(this,{target:null,edge:"start",threshold:0,rootMargin:[[0,"px"],[0,"px"],[0,"px"],[0,"px"]]}),this.target=t.target,this.edge=t.edge||"start",this.threshold=t.threshold||0,this.rootMargin=t.rootMargin||"0px 0px 0px 0px",this.clamp=t.clamp||!1}return e(t,[{key:"target",set:function(t){if(!(t instanceof Element))throw d.get(this).target=null,Error("Intersection target must be an element.");d.get(this).target=t},get:function(){return d.get(this).target}},{key:"edge",set:function(t){-1!=["start","end"].indexOf(t)&&(d.get(this).edge=t)},get:function(){return d.get(this).edge}},{key:"threshold",set:function(t){var e=parseFloat(t);if(e!=e)throw TypeError("Invalid threshold.");if(e<0||e>1)throw RangeError("threshold must be in the range [0, 1]");d.get(this).threshold=e},get:function(){return d.get(this).threshold}},{key:"rootMargin",set:function(t){var e=t.split(/ +/);if(e.length<1||e.length>4)throw TypeError("rootMargin must contain between 1 and 4 length components");for(var i=[[],[],[],[]],r=0;r<e.length;r++){var o=n(e[r]);if(!o)throw TypeError("Unrecognized rootMargin length");for(var a=p[e.length-1][r],l=0;l<a.length;l++)i[a[l]]=[parseFloat(o.value),o.unit]}d.get(this).rootMargin=i},get:function(){return d.get(this).rootMargin.map(function(t){return t.join("")}).join(" ")}},{key:"clamp",set:function(t){d.get(this).clamp=!!t}}]),t}();if(o.push({parse:function(t){if(t.target)return new y(t)},evaluate:function(t,e,n,i){"block"==e?e="vertical":"inline"==e&&(e="horizontal");for(var r,o=t==document.scrollingElement?{left:0,right:t.clientWidth,top:0,bottom:t.clientHeight,width:t.clientWidth,height:t.clientHeight}:t.getBoundingClientRect(),a=d.get(n).rootMargin,l=[],s=0;s<4;s++)l.push("%"==(r=a[s])[1]?r[0]*(s%2==0?o.height:o.width)/100:r[0]);var c=o.left-l[3],h=o.right-o.left+l[3]+l[1],u=o.top-l[0],f=o.bottom-o.top+l[0]+l[2],g=d.get(n).clamp,m=n.target.getBoundingClientRect(),p=n.threshold;if("start"==n.edge&&(p=1-p),"vertical"==e){var y=m.top+m.height*p-u+t.scrollTop;return g?"end"==n.edge?Math.max(0,y-f):Math.min(y,t.scrollHeight-f):"end"==n.edge?y-f:y}var v=m.left+m.width*p-c+t.scrollLeft;return g?"end"==n.edge?Math.max(0,v-h):Math.min(v,t.scrollWidth-h):"end"==n.edge?v-h:v}}),!Reflect.defineProperty(window,"ScrollTimeline",{value:h}))throw Error("Error installing ScrollTimeline polyfill: could not attach ScrollTimeline to window");if(!Reflect.defineProperty(Element.prototype,"animate",{value:function(t,e){var n=e.timeline;if(!(n&&n instanceof h))return u.apply(this,[t,e]);delete e.timeline;var i=u.apply(this,[t,e]);i.pause();var r=new m(i,n);return r.play(),r}}))throw Error("Error installing ScrollTimeline polyfill: could not attach WAAPI's animate to DOM Element");if(!Reflect.defineProperty(window,"Animation",{value:m}))throw Error("Error installing Animation constructor.")}();
//# sourceMappingURL=scroll-timeline.js.map

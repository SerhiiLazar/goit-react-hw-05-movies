"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{713:function(n,t,e){e.d(t,{JR:function(){return s},TP:function(){return p},lj:function(){return o},zv:function(){return f}});var r=e(861),a=e(687),c=e.n(a),u=e(388),i="425e30ddd9895d0b97d51a8502562e6a";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},736:function(n,t,e){e.r(t),e.d(t,{Cast:function(){return j},default:function(){return U}});var r,a,c,u,i,o,s=e(861),p=e(885),f=e(687),l=e.n(f),d=e(791),m=e(470),h=e(168),g=e(934),v=g.Z.section(r||(r=(0,h.Z)(["\n\n"]))),x=g.Z.ul(a||(a=(0,h.Z)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-gap: 16px;\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 0;\nlist-style: none;\nmargin-left: auto;\nmargin-right: auto;"]))),Z=g.Z.li(c||(c=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;"]))),w=g.Z.img(u||(u=(0,h.Z)(["\nmargin-bottom: 5px;\nwidth: 300px;\nheight: 300px;\n"]))),k=g.Z.p(i||(i=(0,h.Z)([""]))),y=g.Z.p(o||(o=(0,h.Z)([""]))),b=e(713),_=e(184),j=function(){var n=(0,d.useState)(null),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,m.UO)().id;return(0,d.useEffect)((function(){function n(){return(n=(0,s.Z)(l().mark((function n(){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.zv(a);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert("ooops");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,_.jsx)(v,{children:(0,_.jsx)(x,{children:e&&e.cast.map((function(n){var t=n.cast_id,e=n.profile_path,r=n.name,a=n.character;return(0,_.jsxs)(Z,{id:t,children:[(0,_.jsx)(w,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",alt:r}),(0,_.jsx)(k,{children:r}),(0,_.jsx)(y,{children:a})]})}))})})},U=j}}]);
//# sourceMappingURL=736.0799108b.chunk.js.map
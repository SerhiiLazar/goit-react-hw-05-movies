"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{713:function(n,t,e){e.d(t,{JR:function(){return s},TP:function(){return p},lj:function(){return o},tx:function(){return f},zv:function(){return l}});var r=e(861),a=e(687),c=e.n(a),i=e(388),u="425e30ddd9895d0b97d51a8502562e6a";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},349:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,i,u,o,s=e(861),p=e(885),l=e(687),f=e.n(l),d=e(713),m=e(791),g=e(470),v=e(168),h=e(934),x=e(731),Z=h.Z.main(r||(r=(0,v.Z)([""]))),w=h.Z.h1(a||(a=(0,v.Z)(["\nfont-size: 25px;\ndisplay: block;\nmargin-botton: 10px;\nalign-items: center;\n"]))),y=h.Z.img(c||(c=(0,v.Z)(["\nmargin-bottom: 5px;\nwidth: 300px;\nheight: auto;\n"]))),b=h.Z.ul(i||(i=(0,v.Z)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\ngrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\ngrid-gap: 16px;\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 0;\nlist-style: none;\nmargin-left: auto;\nmargin-right: auto;\n"]))),k=h.Z.li(u||(u=(0,v.Z)(["\nmargin-bottom: 10px;\n\n\n"]))),_=(0,h.Z)(x.OL)(o||(o=(0,v.Z)(["\nlist-style: none;\ncolor: blue;\ntext-decoration: none;\n\ndisplay:flex;\nflex-direction: column;\nalign-items: center;\n\n:hover:not(.active),\n:focus-visible:not(.active) {\n    color: red;\n}\n"]))),j=e(184),S=function(){var n=(0,m.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,g.TH)();return(0,m.useEffect)((function(){function n(){return(n=(0,s.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.lj();case 3:t=n.sent,r(t.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),alert("Oops something went wrong, try again.");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,j.jsxs)(Z,{children:[(0,j.jsx)(w,{children:"Trending Today"}),(0,j.jsx)(b,{children:e.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return(0,j.jsx)(k,{children:(0,j.jsxs)(_,{to:"movies/".concat(t),state:{from:a},children:[(0,j.jsx)(y,{src:"https://image.tmdb.org/t/p/w500".concat(r),alt:e}),e]})},t)}))})]})}}}]);
//# sourceMappingURL=349.dd02b401.chunk.js.map
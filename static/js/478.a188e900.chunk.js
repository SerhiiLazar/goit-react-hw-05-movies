"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[478],{713:function(e,n,r){r.d(n,{JR:function(){return s},TP:function(){return p},lj:function(){return i},zv:function(){return l}});var t=r(861),a=r(687),c=r.n(a),o=r(388),u="425e30ddd9895d0b97d51a8502562e6a";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(n,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("/movie/".concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},478:function(e,n,r){r.r(n),r.d(n,{default:function(){return K}});var t=r(142);function a(e,n,r){return(n=(0,t.Z)(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var u,i,s,p,l,f,d,h,v,Z,g,j,b,x,m=r(861),y=r(885),w=r(687),O=r.n(w),k=r(791),P=r(731),_=r(470),S=r(168),U=r(934),D=U.Z.main(u||(u=(0,S.Z)(["\n\n"]))),C=U.Z.div(i||(i=(0,S.Z)(["\ndisplay: flex;\npadding: 5px;\n"]))),E=U.Z.img(s||(s=(0,S.Z)([""]))),T=U.Z.div(p||(p=(0,S.Z)(["\npadding: 10px;\nbackground-color: #f3eae8;\n"]))),L=U.Z.h2(l||(l=(0,S.Z)(["\ncolor: orangered;\n"]))),R=U.Z.p(f||(f=(0,S.Z)([""]))),q=U.Z.h3(d||(d=(0,S.Z)(["\ncolor: orangered;\n"]))),z=U.Z.p(h||(h=(0,S.Z)([""]))),A=U.Z.h3(v||(v=(0,S.Z)(["\ncolor: orangered;\n"]))),G=U.Z.p(Z||(Z=(0,S.Z)([""]))),H=U.Z.div(g||(g=(0,S.Z)([""]))),I=U.Z.h3(j||(j=(0,S.Z)([""]))),J=U.Z.ul(b||(b=(0,S.Z)([""]))),M=U.Z.li(x||(x=(0,S.Z)([""]))),B=r(713),F=r(184),K=function(){var e=(0,k.useState)(null),n=(0,y.Z)(e,2),r=n[0],t=n[1],a=(0,_.UO)().id,c=(0,_.TH)();return(0,k.useEffect)((function(){function e(){return(e=(0,m.Z)(O().mark((function e(){var n;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.TP(a);case 3:n=e.sent,t(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("ooops");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r?(0,F.jsxs)(D,{children:[(0,F.jsxs)(C,{children:[(0,F.jsx)(E,{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title}),(0,F.jsxs)(T,{children:[(0,F.jsx)(L,{children:r.title}),(0,F.jsxs)(R,{children:["User score: ",Math.round(10*r.vote_average),"%"]}),(0,F.jsx)(q,{children:"Overview"}),(0,F.jsx)(z,{children:r.overview}),(0,F.jsx)(A,{children:"Ganres"}),(0,F.jsx)(G,{children:r.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,F.jsxs)(H,{children:[(0,F.jsx)(I,{children:"Addition Information"}),(0,F.jsx)(J,{children:(0,F.jsx)(M,{children:(0,F.jsx)(P.OL,{to:"cast",state:o({},c.state),children:"Cast"})})})]}),(0,F.jsx)(_.j3,{})]}):null}}}]);
//# sourceMappingURL=478.a188e900.chunk.js.map
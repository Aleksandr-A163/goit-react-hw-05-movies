(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n(60),a=n.n(r),c=n(66),o=n(61),i=n(17),u=n(1),s=n(4),l=n(11),f=n(59),d=n(16),b=n(98),p=n.n(b),m=n(65),j=n(2);function v(){var e=Object(s.h)(),t=Object(s.j)().url,n=Object(u.useState)([]),r=Object(i.a)(n,2),b=r[0],v=r[1],h=Object(u.useState)(1),y=Object(i.a)(h,2),g=y[0],O=y[1],x=Object(u.useState)("pending"),_=Object(i.a)(x,2),w=_[0],I=_[1];return Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I("pending"),e.prev=1,e.next=4,f.e(1);case 4:t=e.sent,v(Object(c.a)(t.data.results)),I((function(){return 0===t.data.results?"rejected":"resolved"})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error: request failed"),e.abrupt("return",I("failed"));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(u.useEffect)((function(){function e(){return(e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.e(g);case 3:if(0!==(t=e.sent).data.results.length){e.next=6;break}return e.abrupt("return");case 6:v((function(e){return[].concat(Object(c.a)(e),Object(c.a)(t.data.results))})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),console.log("Error: request failed"),e.abrupt("return",I("failed"));case 13:case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}1!==g&&function(){e.apply(this,arguments)}()}),[g]),Object(u.useEffect)((function(){Object(m.a)(b,600,.2,(function(){return O((function(e){return e+1}))}))}),[b]),Object(j.jsxs)(j.Fragment,{children:["pending"===w&&Object(j.jsx)(d.a,{}),"rejected"===w&&Object(j.jsx)("h2",{className:"galleryTitle",children:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),"failed"===w&&Object(j.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===w&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{id:"gallery",className:p.a.MovieGallery,children:b.map((function(n){var r=n.id,a=n.poster_path,c=n.title;return Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{to:{pathname:"".concat(t,"/").concat(r),state:{from:e}},className:p.a.MovieGalleryItem,children:[Object(j.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w342").concat(a),id:r,alt:c,className:p.a.MovieGalleryItemImage}),Object(j.jsx)("h4",{className:p.a.MovieTitle,children:c})]})},r)}))})})]})}function h(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v,{})})}},59:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(64),a=n.n(r),c="https://api.themoviedb.org/3/",o="367b0facb69c6afab44aa6f928a1cec5",i=function(e){return a.a.get("".concat(c,"trending/movie/day?api_key=").concat(o,"&page=").concat(e))},u=function(e,t){return a.a.get("".concat(c,"search/movie?api_key=").concat(o,"&page=").concat(t,"&query=").concat(e,"&include_adult=false"))},s=function(e){return a.a.get("".concat(c,"movie/").concat(e,"?api_key=").concat(o))},l=function(e){return a.a.get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(o))},f=function(e){return a.a.get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(o,"&page=1"))}},65:function(e,t,n){"use strict";t.a=function(e,t,n,r){if(0!==e.length){var a=e[e.length-1].id;setTimeout((function(){var e=document.getElementById(a);new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(r(),t.unobserve(e.target))}))}),{threshold:n}).observe(e)}),t)}}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(14);var a=n(18);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},98:function(e,t,n){e.exports={MovieGallery:"HomeGallery_MovieGallery__1JnVM",MovieGalleryItem:"HomeGallery_MovieGalleryItem__3ShpH",MovieTitle:"HomeGallery_MovieTitle__3Ww1d",MovieGalleryItemImage:"HomeGallery_MovieGalleryItemImage__2yUmr"}}}]);
//# sourceMappingURL=5.749e4606.chunk.js.map
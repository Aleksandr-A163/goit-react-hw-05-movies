(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[4],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var c=a(53),n=a.n(c),i=a(54),s=a(55),r=a(3),l=a(10),o=a(0),u=a(96),j=a.n(u),d=a(52),m=a(97),b=a.n(m),v=a.p+"static/media/no-avatar.6c6bc58e.jpg",h=a(14),f=a(1);function p(){var e=Object(r.i)().movieId,t=Object(o.useState)(null),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(o.useState)("pending"),j=Object(s.a)(u,2),m=j[0],p=j[1];return Object(o.useEffect)((function(){function t(){return(t=Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p("pending"),t.prev=1,t.next=4,d.a(e);case 4:a=t.sent,l(a.data.cast),p((function(){return 0===a.data.cast.length?"rejected":"resolved"})),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),console.log("Error: request failed1"),t.abrupt("return",p("failed"));case 13:case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(f.jsxs)(f.Fragment,{children:["pending"===m&&Object(f.jsx)(h.a,{}),"rejected"===m&&Object(f.jsx)("h2",{className:"galleryTitle",children:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),"failed"===m&&Object(f.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===m&&Object(f.jsx)(f.Fragment,{children:c&&Object(f.jsx)("ul",{className:b.a.castGallery,children:c.map((function(e){var t=e.profile_path,a=e.id,c=e.name;return Object(f.jsxs)("li",{className:b.a.castGalleryItem,children:[t&&Object(f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w154").concat(t),alt:c,className:b.a.CastGalleryItemImage}),!t&&Object(f.jsx)("img",{src:v,alt:"NoImage",className:b.a.CastGalleryItemImage}),Object(f.jsx)("h5",{className:b.a.CastTitle,children:c})]},a)}))})})]})}var x=a(98),O=a.n(x);function g(){var e=Object(r.i)().movieId,t=Object(o.useState)(null),a=Object(s.a)(t,2),c=a[0],l=a[1],u=Object(o.useState)("pending"),j=Object(s.a)(u,2),m=j[0],b=j[1];return Object(o.useEffect)((function(){function t(){return(t=Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b("pending"),t.prev=1,t.next=4,d.c(e);case 4:a=t.sent,l(a.data.results),b((function(){return 0===a.data.results.length?"rejected":"resolved"})),t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(1),console.log("Error: request failed1"),t.abrupt("return",b("failed"));case 13:case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(f.jsxs)(f.Fragment,{children:["pending"===m&&Object(f.jsx)(h.a,{}),"rejected"===m&&Object(f.jsx)("h2",{className:"galleryTitle",children:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),"failed"===m&&Object(f.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===m&&Object(f.jsx)(f.Fragment,{children:c&&Object(f.jsx)("ul",{className:O.a.ReviewsList,children:c.map((function(e){var t=e.author,a=e.id,c=e.content,n=e.created_at;return Object(f.jsxs)("li",{className:O.a.ReviewsListItem,children:[Object(f.jsx)("span",{className:O.a.ReviewsAuthorTitle,children:"Author: "}),Object(f.jsx)("span",{className:O.a.ReviewsAuthor,children:t}),Object(f.jsxs)("p",{className:O.a.ReviewsCreated,children:["Created: ",n.slice(0,10)]}),Object(f.jsx)("p",{className:O.a.ReviewsContent,children:c})]},a)}))})})]})}var _=a(99);function w(){var e=Object(r.g)(),t=Object(r.h)(),a=Object(r.j)().url,c=Object(r.i)().movieId,u=Object(o.useState)(null),m=Object(s.a)(u,2),b=m[0],v=m[1],x=Object(o.useState)("pending"),O=Object(s.a)(x,2),w=O[0],N=O[1];Object(o.useEffect)((function(){function e(){return(e=Object(i.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N("pending"),e.prev=1,e.next=4,d.d(c);case 4:t=e.sent,v(t),N((function(){return 0===t.data.length?"rejected":"resolved"})),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log("Error: request failed"),e.abrupt("return",N("failed"));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);return Object(f.jsxs)(f.Fragment,{children:["pending"===w&&Object(f.jsx)(h.a,{}),"rejected"===w&&Object(f.jsx)("h2",{className:"galleryTitle",children:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),"failed"===w&&Object(f.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===w&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("button",{type:"button",onClick:function(){var a,c,n;(null===(a=t.state)||void 0===a?void 0:a.from.location)?e.push(t.state.from.location):e.push(null!==(c=null===t||void 0===t||null===(n=t.state)||void 0===n?void 0:n.from)&&void 0!==c?c:"/")},className:j.a.GoBackBtn,children:[Object(f.jsx)(_.a,{}),Object(f.jsx)("span",{children:"GO BACK"})]}),b&&Object(f.jsxs)("div",{className:j.a.SingleFilm,children:[Object(f.jsx)("div",{className:j.a.imageFrame,children:Object(f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w342").concat(b.data.poster_path),alt:b.data.title,className:j.a.imgFilm})}),Object(f.jsxs)("div",{className:j.a.filmData,children:[Object(f.jsx)("h1",{className:j.a.filmTitle,children:b.data.title}),Object(f.jsx)("h4",{className:j.a.filmText,children:"Released:"}),Object(f.jsx)("p",{className:j.a.filmTextValue,children:b.data.release_date}),Object(f.jsx)("h4",{className:j.a.filmText,children:"Overview:"}),Object(f.jsx)("p",{className:j.a.filmTextValue,children:b.data.overview}),Object(f.jsx)("h4",{className:j.a.filmText,children:"Genres:"}),Object(f.jsx)("p",{className:j.a.filmTextValue,children:b.data.genres.map((function(e){return e.name})).join(", ").toLowerCase()}),Object(f.jsx)("h4",{className:j.a.filmText,children:"Vote average:"}),Object(f.jsx)("p",{className:j.a.filmTextValue,children:b.data.vote_average}),Object(f.jsx)("h4",{className:j.a.filmText,children:"Additional information:"}),Object(f.jsx)(l.c,{to:"".concat(a,"/cast/").concat(c),className:j.a.FilmLink,children:"cast"}),Object(f.jsx)(l.c,{to:"".concat(a,"/reviews/").concat(c),className:j.a.FilmLink,children:"reviews"})]})]}),Object(f.jsx)(r.b,{path:"".concat(a,"/cast/:movieId"),children:Object(f.jsx)(p,{})}),Object(f.jsx)(r.b,{path:"".concat(a,"/reviews/:movieId"),children:Object(f.jsx)(g,{})})]})]})}function N(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(w,{})})}},52:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return j}));var c=a(60),n=a.n(c),i="https://api.themoviedb.org/3/",s="367b0facb69c6afab44aa6f928a1cec5",r=function(e){return n.a.get("".concat(i,"trending/movie/day?api_key=").concat(s,"&page=").concat(e))},l=function(e,t){return n.a.get("".concat(i,"search/movie?api_key=").concat(s,"&page=").concat(t,"&query=").concat(e,"&include_adult=false"))},o=function(e){return n.a.get("".concat(i,"movie/").concat(e,"?api_key=").concat(s))},u=function(e){return n.a.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(s))},j=function(e){return n.a.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(s,"&page=1"))}},96:function(e,t,a){e.exports={SingleFilm:"SingleMovie_SingleFilm__3Vx7v",imageFrame:"SingleMovie_imageFrame__2z1dL",imgFilm:"SingleMovie_imgFilm__1SQtM",filmData:"SingleMovie_filmData__1y31M",filmTitle:"SingleMovie_filmTitle__35gHA",filmText:"SingleMovie_filmText__1EN0b",filmTextValue:"SingleMovie_filmTextValue__3bbxR",FilmLink:"SingleMovie_FilmLink__18Oz6",GoBackBtn:"SingleMovie_GoBackBtn__37mGQ"}},97:function(e,t,a){e.exports={castGallery:"Cast_castGallery__3wjay",castGalleryItem:"Cast_castGalleryItem__279Aw",CastGalleryItemImage:"Cast_CastGalleryItemImage__3hR84",CastTitle:"Cast_CastTitle__2YNvC"}},98:function(e,t,a){e.exports={ReviewsList:"Reviews_ReviewsList__3sS2R",ReviewsListItem:"Reviews_ReviewsListItem__3JdP7",ReviewsAuthorTitle:"Reviews_ReviewsAuthorTitle__2dJSe",ReviewsAuthor:"Reviews_ReviewsAuthor__3mXJC",ReviewsContent:"Reviews_ReviewsContent__3KlRk",ReviewsCreated:"Reviews_ReviewsCreated__1mDEr"}}}]);
//# sourceMappingURL=4.ba51d3b2.chunk.js.map
(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[7],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var c=a(53),r=a.n(c),n=a(62),s=a(54),i=a(55),o=a(0),u=a(3),l=a(10),h=a(94),b=a(72),j=(a(74),a(75)),d=a.n(j),f=a(52),m=a(61),p=a(14),v=a.p+"static/media/no-poster-s.9f1ba4ad.jpg",g=a(1);var O=function(){var e=Object(u.g)(),t=Object(u.h)(),a=Object(u.j)().url,c=Object(o.useState)(""),j=Object(i.a)(c,2),O=j[0],S=j[1],_=Object(o.useState)([]),x=Object(i.a)(_,2),I=x[0],y=x[1],k=Object(o.useState)(0),N=Object(i.a)(k,2),T=N[0],F=N[1],M=Object(o.useState)(1),w=Object(i.a)(M,2),L=w[0],E=w[1],B=Object(o.useState)(""),Z=Object(i.a)(B,2),q=Z[0],A=Z[1],z=Object(o.useRef)();return Object(o.useEffect)((function(){var e=t.search.slice(7,t.search.length);function a(){return(a=Object(s.a)(r.a.mark((function a(){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t.search){a.next=2;break}return a.abrupt("return");case 2:return A("pending"),a.prev=3,a.next=6,f.b(e,1);case 6:c=a.sent,y(Object(n.a)(c.data.results)),F(c.data.total_results),A((function(){return 0===c.data.results?"rejected":"resolved"})),a.next=16;break;case 12:return a.prev=12,a.t0=a.catch(3),console.log("Error: request failed"),a.abrupt("return",A("failed"));case 16:case 17:case"end":return a.stop()}}),a,null,[[3,12]])})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[t,e]),Object(o.useEffect)((function(){if(1!==L){var e=t.search.slice(7,t.search.length);!function(){a.apply(this,arguments)}()}function a(){return(a=Object(s.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.b(e,L);case 3:if(0!==(a=t.sent).data.results.length){t.next=6;break}return t.abrupt("return");case 6:y((function(e){return[].concat(Object(n.a)(e),Object(n.a)(a.data.results))})),F(a.data.total_results),t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error: request failed"),t.abrupt("return",A("failed"));case 14:case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}}),[L,t]),Object(o.useEffect)((function(){Object(m.a)(I,600,.2,(function(){return E((function(e){return e+1}))}))}),[I]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:d.a.Searchbar,children:[Object(g.jsx)("span",{className:d.a.SearchTitle,children:"Search:"}),Object(g.jsxs)("form",{className:d.a.SearchForm,onSubmit:function(t){t.preventDefault(),""!==O.trim()?(e.push({search:"query=".concat(O)}),z.current.placeholder=O,S("")):b.b.warn("\u0412\u0432\u0435\u0434\u0438 \u0447\u0442\u043e-\u0442\u043e!",{autoClose:2e3,theme:"colored",icon:!1})},children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(g.jsx)(h.a,{})}),Object(g.jsx)("label",{children:Object(g.jsx)("input",{className:d.a.SearchFormInput,type:"text",name:"searchInput",ref:z,placeholder:"Type movie name",value:O,onChange:function(e){return S(e.currentTarget.value)},pattern:"^[0-9a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u041f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435, \u0446\u0438\u0444\u0440 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432."})})]})]}),"pending"===q&&Object(g.jsx)(p.a,{}),"rejected"===q&&Object(g.jsx)("h2",{className:"galleryTitle",children:"\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),"failed"===q&&Object(g.jsx)("h2",{className:"galleryTitle",children:"Error: request failed. \u041d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043e\u043c \u0438\u043b\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c"}),"resolved"===q&&t.search&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("ul",{id:"search-gallery",className:d.a.SearchList,children:I.map((function(e){var c=e.id,r=e.backdrop_path,n=e.title,s=e.vote_average;return Object(g.jsx)("li",{id:c,children:Object(g.jsxs)(l.b,{to:{pathname:"".concat(a,"/").concat(c),state:{from:t}},className:d.a.SearchListItem,children:[r&&Object(g.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w300").concat(r),alt:n,className:d.a.SearchListItemImage}),!r&&Object(g.jsx)("img",{src:v,alt:"NoImage",className:d.a.SearchListItemImage}),Object(g.jsx)("span",{className:d.a.SearchedMovieTitle,children:n}),Object(g.jsxs)("span",{className:d.a.SearchedMovieTitle,children:["Raiting: ",s]})]})},c)}))})}),20*L>=T&&"resolved"===q&&Object(g.jsx)("h2",{className:"galleryTitle",children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"}),Object(g.jsx)(b.a,{})]})};function S(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(O,{})})}},52:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return h}));var c=a(60),r=a.n(c),n="https://api.themoviedb.org/3/",s="367b0facb69c6afab44aa6f928a1cec5",i=function(e){return r.a.get("".concat(n,"trending/movie/day?api_key=").concat(s,"&page=").concat(e))},o=function(e,t){return r.a.get("".concat(n,"search/movie?api_key=").concat(s,"&page=").concat(t,"&query=").concat(e,"&include_adult=false"))},u=function(e){return r.a.get("".concat(n,"movie/").concat(e,"?api_key=").concat(s))},l=function(e){return r.a.get("".concat(n,"movie/").concat(e,"/credits?api_key=").concat(s))},h=function(e){return r.a.get("".concat(n,"movie/").concat(e,"/reviews?api_key=").concat(s,"&page=1"))}},61:function(e,t,a){"use strict";t.a=function(e,t,a,c){if(0!==e.length){var r=e[e.length-1].id;setTimeout((function(){var e=document.getElementById(r);new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(c(),t.unobserve(e.target))}))}),{threshold:a}).observe(e)}),t)}}},75:function(e,t,a){e.exports={Searchbar:"SearchMovie_Searchbar__HT7QA",SearchTitle:"SearchMovie_SearchTitle__275pU",SearchForm:"SearchMovie_SearchForm__190dg",SearchFormButton:"SearchMovie_SearchFormButton__2LZI1",SearchFormInput:"SearchMovie_SearchFormInput__2aAkI",SearchList:"SearchMovie_SearchList__1jfBZ",SearchListItem:"SearchMovie_SearchListItem__2bc0L",SearchListItemImage:"SearchMovie_SearchListItemImage__3B5Z4",SearchedMovieTitle:"SearchMovie_SearchedMovieTitle__1jF3m"}}}]);
//# sourceMappingURL=7.be3aaa30.chunk.js.map
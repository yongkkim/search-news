(this["webpackJsonpsearch-articles"]=this["webpackJsonpsearch-articles"]||[]).push([[0],{45:function(n,e,t){},47:function(n,e,t){},74:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t(12),i=(t(45),t(10)),c=t.n(i),o=t(14),s=t(4),u=t(38),l=t.n(u),d=t.p+"static/media/nyt2.0af8f2fa.jpg",p="(max-width: 376px)",b="(max-width: 376px)",f="(max-width: 415px)",h="(max-width: 655px) and (max-height: 400px)",g="(max-width: 815px) and (max-height: 400px)",j="(max-width: 1025px)",m="(max-width: 1281px)",x="(max-width: 1441px)",O=t(5),y=(t(47),t(9)),w=t(19),E=t.n(w),v="ARTICLE_DATA",k="SEARCH_ARTICLE_DATA",T="SUBMIT_ENTER",A="BUTTON_ENTER",R="CURRENT_PAGE",S="CURRENT_ARTICLES",C="LOADING",M="TOP_NEWS",N="SUBMIT",_="KEYWORD",P="SNIPPET",L="ERROR_MESSAGE",D="ERROR";function I(n){return{type:R,payload:n}}function U(n){return{type:M,payload:n}}function z(n){return{type:L,payload:n}}function B(n){return{type:D,payload:n}}var F,K,G,H,J,W,V,X,Y,Z,q,Q,$,nn,en,tn,rn,an,cn,on,sn,un=t(37),ln=t.n(un),dn=t(2),pn=O.a.ul(F||(F=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n"]))),bn=O.a.section(K||(K=Object(s.a)(["\n  padding: 0 20%;\n  margin-top: 120px;\n\n  @media "," {\n    padding: 0 3%;\n    margin-top: 100px;\n  }\n\n  @media "," {\n    padding: 0 10%;\n  }\n\n  @media "," {\n    padding: 0 10%;\n    margin-top: 100px;\n  }\n"])),f,g,h),fn=O.a.h3(G||(G=Object(s.a)(["\n  margin: 0;\n"]))),hn=O.a.article(H||(H=Object(s.a)(["\n  padding: 10px;\n"]))),gn=O.a.div(J||(J=Object(s.a)(["\n  display: flex;\n\n  @media "," {\n    flex-direction: column;\n  }\n"])),f),jn=O.a.a(W||(W=Object(s.a)(["\n  align-self: center;\n  text-decoration: none;\n  border: 1px solid #213fb9;\n  padding: 5px;\n  color: #213fb9;\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n\n  &:hover {\n    background-color: #213fb9;\n    color: white;\n  }\n\n  @media "," {\n    width: 100%;\n    text-align: center;\n  }\n"])),f),mn=O.a.div(V||(V=Object(s.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n  flex: 1 1 0%;\n\n  @media "," {\n    font-size: 12px;\n  }\n\n  @media "," {\n    font-size: 10px;\n  }\n"])),g,h),xn=O.a.aside(X||(X=Object(s.a)(["\n  @media "," {\n    width: 100%;\n  }\n"])),f),On=O.a.img(Y||(Y=Object(s.a)(["\n  height: 84px;\n\n  @media "," {\n    width: inherit;\n    object-fit: cover;\n    height: unset;\n  }\n"])),f),yn=O.a.hr(Z||(Z=Object(s.a)(["\n  width: 100%;\n  border: none;\n  background-color: #cfcfcf;\n  color: #cfcfcf;\n  height: 1px;\n"]))),wn=Object(y.b)((function(n){return{currentArticles:n.currentArticles,loading:n.loading,submit:n.submit,topNews:n.topNews}}),(function(n){return{setError:function(e){return n(B(e))},setErrorMsg:function(e){return n(z(e))}}}))((function(n){var e=n.currentArticles,t=n.loading,a=n.submit,i=n.topNews,c=n.setError,o=n.setErrorMsg;if(Object(r.useEffect)((function(){(i||a)&&0===e.length?(c(!0),o("No results are found. Please try different keywords")):(c(!1),o(""))}),[e]),t)return Object(dn.jsx)("span",{children:"Loading..."});var s=e.map((function(n){var e=a?n.multimedia[0]:n.media[0];return!a&&e?e["media-metadata"][n.media[0]["media-metadata"].length-1]:a&&e?"https://static01.nyt.com/"+e.url:null}));return Object(dn.jsx)(bn,{children:Object(dn.jsx)(pn,{children:e.map((function(n,e){return Object(dn.jsxs)(r.Fragment,{children:[Object(dn.jsx)("li",{children:Object(dn.jsx)(hn,{children:Object(dn.jsxs)(gn,{children:[s[e]?Object(dn.jsx)(xn,{"aria-label":"article-image",children:Object(dn.jsx)(On,{src:a?s[e]:s[e].url})}):Object(dn.jsx)(ln.a,{style:{height:84,width:126},"aria-label":"article-no-image"}),Object(dn.jsxs)(mn,{children:[Object(dn.jsx)(fn,{"aria-label":"article-title",children:a?n.headline.main:n.title}),Object(dn.jsx)("p",{"aria-label":"article-abstract",children:n.abstract})]}),Object(dn.jsx)(jn,{href:n.url,target:"_blank","aria-label":"article-link",children:"visit to read"})]})})},n.id),Object(dn.jsx)(yn,{})]},n.asset_id)}))})})})),En=O.a.ul(q||(q=Object(s.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  margin-bottom: 10px;\n  padding: 0;\n"]))),vn=O.a.li(Q||(Q=Object(s.a)(["\n  display: flex;\n  border: 1px solid #213fb9;\n  color: #213fb9;\n  width: 30px;\n  height: 30px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  transition: background 0.2s ease-out, color 0.2s ease-out;\n\n  &:hover {\n    background-color: #213fb9;\n    color: white;\n  }\n"]))),kn=(O.a.a($||($=Object(s.a)(["\n  text-decoration: none;\n"]))),Object(y.b)((function(n){return{articles:n.articles}}),(function(n){return{setCurrentPage:function(e){return n(I(e))}}}))((function(n){for(var e=n.articles,t=n.setCurrentPage,r=e.length,a=[],i=1;i<=Math.ceil(r/4);i++)a.push(i);return Object(dn.jsx)(En,{children:a.map((function(n){return Object(dn.jsx)(vn,{"aria-label":"pagination",onClick:function(){return t(n)},children:n},n)}))})}))),Tn=O.a.div(nn||(nn=Object(s.a)(["\n  position: absolute;\n  top: 300px;\n  width: 40%;\n  border-radius: 10px;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  text-align: center;\n  padding: 5px 10px;\n\n  @media "," {\n    margin-top: 100px;\n  }\n\n  @media "," {\n    width: unset;\n  }\n\n  @media "," {\n    width: unset;\n    top: 330px;\n  }\n"])),g,f,b),An=O.a.span(en||(en=Object(s.a)(["\n  cursor: pointer;\n  float: right;\n"]))),Rn=Object(y.b)((function(n){return{errorMsg:n.errorMsg}}),(function(n){return{setError:function(e){return n(B(e))}}}))((function(n){var e=n.errorMsg,t=n.setError;return Object(dn.jsxs)(Tn,{role:"error-message","aria-label":"error-message",children:[Object(dn.jsx)("span",{children:e}),Object(dn.jsx)(An,{onClick:function(){return t(!1)},children:"X"})]})})),Sn=O.a.div(tn||(tn=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  min-height: 50%;\n  width: 100%;\n  background-image: url(",");\n  background-position: center;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  z-index: -1;\n\n  @media "," {\n    min-height: 38%;\n  }\n\n  @media "," {\n    min-height: 42%;\n  }\n\n  @media "," {\n    min-height: 25%;\n  }\n\n  @media "," {\n    min-height: 95%;\n  }\n\n  @media "," {\n    min-height: 110%;\n  }\n\n  @media "," {\n    min-height: 47%;\n  }\n\n  @media "," {\n    min-height: 50%;\n  }\n\n  @media "," {\n    min-height: 56%;\n  }\n"])),(function(n){return n.nyt2}),x,m,j,g,h,f,b,p),Cn=O.a.div(rn||(rn=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 170px;\n  color: white;\n\n  @media "," {\n    font-size: 12px;\n  }\n\n  @media "," {\n    font-size: 12px;\n    margin-top: 120px;\n    padding: 0 10px;\n    text-align: center;\n  }\n"])),g,f),Mn=O.a.div(an||(an=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media "," {\n    flex-wrap: wrap;\n  }\n"])),f),Nn=O.a.input.attrs({type:"text",placeholder:"Search news by keyword"})(cn||(cn=Object(s.a)(["\n  width: 30%;\n  height: 30px;\n  padding-left: 10px;\n  margin-left: 5px;\n  outline: none;\n  border-top-left-radius: 15px;\n  border-bottom-left-radius: 15px;\n  border: 1px solid #213fb9;\n\n  @media "," {\n    flex-basis: 70%;\n  }\n"])),f),_n=O.a.button(on||(on=Object(s.a)(["\n  padding: 2px 15px;\n  cursor: pointer;\n  background-color: white;\n  outline: none;\n  border: 1px solid #213fb9;\n  ",";\n  transition: background 0.2s ease-out;\n\n  &:hover {\n    background-color: #213fb9;\n  }\n\n  @media "," {\n    flex-basis: ",";\n    ",";\n    ",";\n    \n}  \n  }\n"])),(function(n){return n.getTop&&"height: 36px; border-radius: 15px;"}),f,(function(n){return n.getTop?"85%":"10%"}),(function(n){return n.getTop&&"margin-bottom: 4px; "}),(function(n){return!n.getTop&&"border-top-right-radius: 15px;\n    border-bottom-right-radius: 15px;"})),Pn=O.a.span(sn||(sn=Object(s.a)(["\n  color: ",";\n  transition: color 0.2s ease-out;\n"])),(function(n){return n.enter?"white":"#213fb9"})),Ln=Object(y.b)((function(n){return{articles:n.articles,searchArticles:n.searchArticles,submitEnter:n.submitEnter,buttonEnter:n.buttonEnter,currentPage:n.currentPage,currentArticles:n.currentArticles,loading:n.loading,topNews:n.topNews,submit:n.submit,keyword:n.keyword,snippet:n.snippet,placeHolder:n.placeHolder,error:n.error}}),(function(n){return{getData:function(){return n(function(){var n=Object(o.a)(c.a.mark((function n(e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=LnFPt84z7OUmVRWwgcMtZJcUR0nTrKTl").then((function(n){e({type:"ARTICLE_DATA",payload:n.data.results})})).catch((function(n){console.error(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},getSearchData:function(e){return n(function(n){return function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+n+"&api-key=LnFPt84z7OUmVRWwgcMtZJcUR0nTrKTl").then((function(n){t({type:"SEARCH_ARTICLE_DATA",payload:n.data.response.docs})})).catch((function(n){console.error(n)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}(e))},setSubmitEnter:function(e){return n(function(n){return{type:T,payload:n}}(e))},setButtonEnter:function(e){return n(function(n){return{type:A,payload:n}}(e))},setCurrentArticles:function(e){return n(function(n){return{type:S,payload:n}}(e))},setCurrentPage:function(e){return n(I(e))},setLoading:function(e){return n(function(n){return{type:C,payload:n}}(e))},setTopNews:function(e){return n(U(e))},setSubmit:function(e){return n(function(n){return{type:N,payload:n}}(e))},setKeyword:function(e){return n(function(n){return{type:_,payload:n}}(e))},setSnippet:function(e){return n(function(n){return{type:P,payload:n}}(e))},setErrorMsg:function(e){return n(z(e))},setError:function(e){return n(B(e))}}}))((function(n){var e=n.articles,t=n.submitEnter,a=n.buttonEnter,i=n.currentPage,s=n.loading,u=n.keyword,p=n.snippet,b=(n.errorMsg,n.error),f=n.getData,h=n.getSearchData,g=n.setSubmitEnter,j=n.setButtonEnter,m=n.setCurrentArticles,x=n.setLoading,O=n.setSubmit,y=n.setKeyword,w=n.setSnippet,E=n.setCurrentPage,v=n.setErrorMsg,k=n.setError,T=function(n){var e=4*n;return[e-4,e]},A=function(){var n=Object(o.a)(c.a.mark((function n(){var t;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=T(i),x(!0),n.next=4,E(1);case 4:return n.next=6,O(!1);case 6:return n.next=8,f();case 8:e&&m(e.slice(t[0],t[1])),U(!0),w(!1),x(!1);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();Object(r.useEffect)((function(){var n=T(i);f(),e.slice(0,4)&&m(e.slice(n[0],n[1]))}),[]),Object(r.useEffect)((function(){var n=T(i);e&&m(e.slice(n[0],n[1]))}),[i,e]);var R=function(){var n=Object(o.a)(c.a.mark((function n(e){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""===u.replace(/['"]+/g,"").trim()){n.next=16;break}return x(!0),n.next=6,E(1);case 6:return n.next=8,O(!0);case 8:return n.next=10,h(u);case 10:k(!1),y(""),w(!1),x(!1),n.next=19;break;case 16:k(!0),v("Keyword should not be empty"),y("");case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(dn.jsxs)("div",{children:[Object(dn.jsx)(Sn,{"aria-label":"background-image",role:"background-image",nyt2:d}),b&&Object(dn.jsx)(Rn,{}),Object(dn.jsx)(Cn,{role:"app-title","aria-label":"app-title",children:Object(dn.jsx)("h1",{children:"Search most popular articles in New York Times"})}),Object(dn.jsx)("form",{role:"search",method:"get",onSubmit:function(n){return R(n)},children:Object(dn.jsxs)(Mn,{role:"search-container",children:[Object(dn.jsx)(_n,{role:"button","aria-label":"api-call-button",type:"button",getTop:!0,onMouseEnter:function(){return j(!0)},onMouseLeave:function(){return j(!1)},children:Object(dn.jsx)(Pn,{role:"button-name","aria-label":"button-name",onClick:function(){return A()},enter:a,children:"Get top 20 articles"})}),Object(dn.jsx)(Nn,{role:"search-bar","aria-label":"search-bar",onChange:function(n){var e=n.target.value;e.length<=40?y(e):(k(!0),v("Keyword should be less than 40 characters"))},value:u,error:b}),Object(dn.jsx)(_n,{role:"submit","aria-label":"submit",type:"submit",onMouseEnter:function(){return g(!0)},onMouseLeave:function(){return g(!1)},children:Object(dn.jsx)(l.a,{className:t?"icon-color-hover":"icon-color"})})]})}),!s&&Object(dn.jsx)(wn,{}),!s&&!p&&Object(dn.jsx)(kn,{})]})})),Dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,86)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))},In=t(15),Un=t(3),zn={submitEnter:!1,buttonEnter:!1,currentPage:1,currentArticles:[],loading:!1,topNews:!1,submit:!1,keyword:"",articles:[],snippet:!0,errorMsg:"",error:!1},Bn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:zn,e=arguments.length>1?arguments[1]:void 0;return e.type===v||e.type===k?Object(Un.a)(Object(Un.a)({},n),{},{articles:Object.assign([],e.payload)}):e.type===A?Object(Un.a)(Object(Un.a)({},n),{},{buttonEnter:e.payload}):e.type===S?Object(Un.a)(Object(Un.a)({},n),{},{currentArticles:e.payload}):e.type===R?Object(Un.a)(Object(Un.a)({},n),{},{currentPage:e.payload}):e.type===_?Object(Un.a)(Object(Un.a)({},n),{},{keyword:e.payload}):e.type===C?Object(Un.a)(Object(Un.a)({},n),{},{loading:e.payload}):e.type===N?Object(Un.a)(Object(Un.a)({},n),{},{submit:e.payload}):e.type===T?Object(Un.a)(Object(Un.a)({},n),{},{submitEnter:e.payload}):e.type===M?Object(Un.a)(Object(Un.a)({},n),{},{topNews:e.payload}):e.type===P?Object(Un.a)(Object(Un.a)({},n),{},{snippet:e.payload}):e.type===L?Object(Un.a)(Object(Un.a)({},n),{},{errorMsg:e.payload}):e.type===D?Object(Un.a)(Object(Un.a)({},n),{},{error:e.payload}):n};var Fn=t(39),Kn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||In.c,Gn=Object(In.d)(Bn,Kn(Object(In.a)(Fn.a)));t(72);Object(a.render)(Object(dn.jsx)(y.a,{store:Gn,children:Object(dn.jsx)(Ln,{})}),document.getElementById("root")),Dn()}},[[74,1,2]]]);
//# sourceMappingURL=main.36872c9b.chunk.js.map
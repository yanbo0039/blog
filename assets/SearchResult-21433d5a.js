import{u as M,a as Q,b as O,c as V,m as W,l as z,n as J,y as K,h as N,d as T,e as X,r as w,g as Y,v as Z,L as _,H as ee}from"./app-da47ec67.js";import{c as te,D as ae,t as se,r as b,h as k,x as j,j as t,R as P,B as le,G as ue,i as re}from"./framework-68dd73a2.js";const ne="search-pro-result-history",o=M(ne,[]),oe=()=>{const{resultHistoryCount:u}=w,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},ce=u=>{const c=Q(),l=b(!1),h=le([]);let i;const v=X(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/blog/${w.worker}`,{}),i.addEventListener("message",({data:g})=>{h.value=g,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},w.delay);return j([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var pe=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=Y(),h=ae(),i=Q(),v=O(Z),{addQueryHistory:d}=_(),{enabled:g,resultHistory:L,addResultHistory:q,removeResultHistory:A}=oe(),f=se(u,"query"),{results:y,searching:E}=ce(f),r=b(0),s=b(0),D=k(()=>L.value.length>0),R=k(()=>y.value.length>0),$=k(()=>y.value[r.value]||null),U=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=$.value.contents.length-1},B=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},F=()=>{s.value<$.value.contents.length-1?s.value=s.value+1:B()},G=()=>{s.value>0?s.value=s.value-1:U()},C=e=>e.map(a=>re(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=ee[e.index]||"$content",[p,m=""]=ue(a)?a[i.value].split("$content"):a.split("$content");return C([p,...e.display,m])}return C(e.display)},H=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return V("keydown",e=>{if(R.value){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")F();else if(e.key==="Enter"){const a=$.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),H())}}}),j([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!D.value}],id:"search-pro-results"},f.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),L.value.map((e,a)=>t(P,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{H()}},()=>[t(W,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),A(a)}},t(z))]))])):g?v.value.emptyHistory:v.value.emptyResult:E.value?t(J,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,I)=>{const x=m&&s.value===I;return t(P,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{d(u.query),q(n),H()}},()=>[n.type==="content"?null:t(n.type==="title"?K:n.type==="heading"?N:T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{pe as default};

import{B as o,c,C as f,D as d,E as v,G as l,H as i,I as h,J as m}from"./yRGzBWxY.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=c(!1),n=c({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,u=>{r.patch(u)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{U as u};

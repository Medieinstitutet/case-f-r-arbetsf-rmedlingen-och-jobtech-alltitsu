let r=[];function i(n="digi"){let t=`${n}-${Math.random().toString(36).substring(2,7)}`;for(;r.includes(t);)t=`${n}-${Math.random().toString(36).substring(2,7)}`;return t}export{i as r};

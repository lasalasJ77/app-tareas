import{a as r,b as p,c as n,d as i,e as a,f as c,g as d,h as l,i as u,j as f,k as g,l as s,m as v}from"./chunk-GY2D5TYR.js";var w=[{path:"tareas",loadChildren:()=>import("./chunk-XLIENMYY.js").then(t=>t.TareaModule)},{path:"**",redirectTo:"tareas"}],b=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=n({type:t});static \u0275inj=r({imports:[s.forRoot(w),s]})}return t})();var M=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-navbar"]],decls:3,vars:0,consts:[[1,"navbar","navbar-dark","bg-dark"],[1,"navbar-brand","mb-0","h1"]],template:function(e,N){e&1&&(i(0,"nav",0)(1,"span",1),d(2,"App Tareas"),a()())}})}return t})();var C=(()=>{class t{title="app-tareas";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],decls:7,vars:0,consts:[[1,"container-fluid","m-0","p-0","m-0","p-0"],[1,"row","m-0","p-0","menu-content"],[1,"col","m-0","p-0"],[1,"row","m-0","p-0","body-content"]],template:function(e,N){e&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),c(3,"app-navbar"),a()(),i(4,"div",3)(5,"div",2),c(6,"router-outlet"),a()()())},dependencies:[g,M],styles:[".menu-content[_ngcontent-%COMP%]{height:5vh;background-size:100%}.body-content[_ngcontent-%COMP%]{background-image:url(/img/bosque.jpg);background-size:100%;background-repeat:no-repeat;height:95vh;overflow:hidden}"]})}return t})();var y=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=n({type:t});static \u0275inj=r({imports:[l]})}return t})();var h=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=n({type:t,bootstrap:[C]});static \u0275inj=r({imports:[f,b,y,v]})}return t})();u().bootstrapModule(h,{ngZoneEventCoalescing:!0}).catch(t=>console.error(t));
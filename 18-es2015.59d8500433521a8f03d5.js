(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"HJ/b":function(t,e,o){"use strict";o.r(e),o.d(e,"Tab2PageModule",(function(){return j}));var n=o("TEn/"),c=o("ofXK"),i=o("3Pt+"),l=o("tyNb"),s=o("IzEk"),r=o("lJxs"),a=o("R0Ic"),b=o("MdZ8"),f=o("fXoL"),u=o("tadm"),d=o("cqlc"),p=o("2ux8");function h(t,e){1&t&&(f.Mb(0,"ion-text",4),f.Mb(1,"h2"),f.Mb(2,"span"),f.ic(3,"There are no list completed."),f.Lb(),f.Lb(),f.Lb()),2&t&&(f.zb(1),f.Zb("@fadeIn",void 0))}function m(t,e){if(1&t){const t=f.Nb();f.Mb(0,"app-todo-collections",5),f.Ub("collectionRemoved",(function(){return f.ec(t),f.Wb().onCollectionRemoved()})),f.Lb()}if(2&t){const t=f.Wb();f.Zb("currentTab","tab2")("collections",t.collections)}}const v=[{path:"",component:(()=>{class t{constructor(t){this.todoService=t,this.collections=[]}ionViewWillEnter(){this.featchCollections()}onCollectionRemoved(){this.featchCollections()}featchCollections(){this.todoService.getCollections().pipe(Object(s.a)(1),Object(r.a)(t=>t.filter(t=>t.isCompleted))).subscribe(t=>this.collections=t)}}return t.\u0275fac=function(e){return new(e||t)(f.Jb(u.a))},t.\u0275cmp=f.Db({type:t,selectors:[["app-tab2"]],decls:4,vars:3,consts:[["title","Done"],[3,"fullscreen"],["class","ion-text-center","color","warning",4,"ngIf"],[3,"currentTab","collections","collectionRemoved",4,"ngIf"],["color","warning",1,"ion-text-center"],[3,"currentTab","collections","collectionRemoved"]],template:function(t,e){1&t&&(f.Kb(0,"app-tab-header",0),f.Mb(1,"ion-content",1),f.hc(2,h,4,1,"ion-text",2),f.hc(3,m,1,2,"app-todo-collections",3),f.Lb()),2&t&&(f.zb(1),f.Zb("fullscreen",!0),f.zb(1),f.Zb("ngIf",0===e.collections.length),f.zb(1),f.Zb("ngIf",e.collections.length>0))},directives:[d.a,n.i,c.i,n.A,p.a],styles:[""],data:{animation:[Object(a.k)("fadeIn",[Object(a.j)(":enter",Object(a.l)(b.a))])]}}),t})()}];let w=(()=>{class t{}return t.\u0275mod=f.Hb({type:t}),t.\u0275inj=f.Gb({factory:function(e){return new(e||t)},imports:[[l.i.forChild(v)],l.i]}),t})();var g=o("j1ZV");let j=(()=>{class t{}return t.\u0275mod=f.Hb({type:t}),t.\u0275inj=f.Gb({factory:function(e){return new(e||t)},imports:[[n.D,c.b,i.a,w,g.a]]}),t})()}}]);
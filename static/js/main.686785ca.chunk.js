(this["webpackJsonpgoods-list"]=this["webpackJsonpgoods-list"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(19),s=c.n(r),i=(c(40),c(23)),l=c(7),o=(c(30),c(14)),j=(c(41),c(53)),d=c(55),u=c(54),b=c(1),O=function(e){var t=e.listOfUsers,c=e.setNameForDelete,a=e.nameForDelete,r=Object(n.useState)(""),s=Object(l.a)(r,2),O=s[0],m=s[1],h=Object(n.useState)(""),x=Object(l.a)(h,2),g=x[0],f=x[1],v=Object(n.useState)(0),p=Object(l.a)(v,2),S=p[0],_=p[1],N=Object(n.useState)(0),C=Object(l.a)(N,2),I=C[0],y=C[1],w=Object(n.useState)(""),F=Object(l.a)(w,2),k=F[0],J=F[1],D=Object(n.useState)(0),E=Object(l.a)(D,2),L=E[0],T=E[1],U=Object(n.useState)(0),z=Object(l.a)(U,2),W=z[0],B=z[1],H=Object(n.useState)(!0),P=Object(l.a)(H,2),A=P[0],M=P[1];return Object(b.jsxs)(j.a,{className:"Form",children:[Object(b.jsx)(j.a.Control,{value:O,isInvalid:!O,onChange:function(e){var t=e.target;return m(t.value)},placeholder:"Enter the card name"}),Object(b.jsx)(j.a.Control,{value:g,isInvalid:!g,onChange:function(e){var t=e.target;return f(t.value)},placeholder:"Enter the imageUrl"}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Count of products"}),Object(b.jsx)(j.a.Control,{value:S,onChange:function(e){var t=e.target;return _(t.value)},type:"number"})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Weight of products"}),Object(b.jsx)(j.a.Control,{value:I,onChange:function(e){var t=e.target;return y(t.value)},type:"number"})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Description"}),Object(b.jsx)(j.a.Control,{isInvalid:!k,value:k,onChange:function(e){var t=e.target;J(t.value),(g&&O&&t.value).length?M(!1):M(!0)}})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Width of product"}),Object(b.jsx)(j.a.Control,{type:"number",value:L,onChange:function(e){var t=e.target;return T(t.value)}})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Height of product"}),Object(b.jsx)(j.a.Control,{type:"number",value:W,onChange:function(e){var t=e.target;return B(t.value)}})]}),Object(b.jsx)(o.b,{disabled:A&&!0,to:!A&&"/",exact:!0,onClick:function(){(O&&g&&k).length&&(!function(e,c,n,a,r,s,l,o){t.length?localStorage.setItem("array",JSON.stringify([].concat(Object(i.a)(t),[{description:r,id:t[t.length-1].id+1,name:e,imageUrl:c,count:n,weight:a,size:{width:s,height:l}}]).filter((function(e){return 0!==o?e.id!==o:e})))):localStorage.setItem("array",JSON.stringify([{description:r,id:1,name:e,imageUrl:c,count:n,weight:a,size:{width:s,height:l}}]))}(O,g,S,I,k,L,W,a),f(""),m(""),T(0),B(0),J(""),y(0),_(0),c(0)),M(!0)},children:Object(b.jsx)(u.a,{disabled:A&&!0,children:"Save"})})]})},m=c(35),h=c(51),x=c(52),g=function(e){var t,c=e.list,a=e.removeElement,r=e.removeComments,s=e.setListOfUsers,i=e.setListOfComments,O=e.listOfComments,g=Object(n.useState)(!1),f=Object(l.a)(g,2),v=f[0],p=f[1],S=Object(n.useState)(0),_=Object(l.a)(S,2),N=_[0],C=_[1],I=Object(n.useState)(0),y=Object(l.a)(I,2),w=y[0],F=y[1],k=Object(n.useState)(""),J=Object(l.a)(k,2),D=J[0],E=J[1];return Object(n.useEffect)((function(){return s(JSON.parse(localStorage.getItem("array")))}),[w]),Object(n.useEffect)((function(){return i(JSON.parse(localStorage.getItem("comments")))}),[O.length]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Filter by name"}),Object(b.jsx)(j.a.Control,{className:"modal__filter-title",placeholder:"filter by name",value:D,onChange:function(e){var t=e.target;return E(t.value)}})]}),Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Text,{children:"Filter by count"}),Object(b.jsx)(j.a.Control,{className:"modal__filter-title",type:"number",value:N,onChange:function(e){var t=e.target;return C(t.value)}})]})]}),function(e){return 0!==+N?e.filter((function(e){return e.count>=+N})):e}((t=c,D.length?t.filter((function(e){return e.name.toLowerCase().includes(D.toLowerCase())})):t)).map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)(x.a,{size:"sm",show:v,onHide:function(){return p(!1)},children:[Object(b.jsx)(x.a.Header,{children:Object(b.jsx)(x.a.Title,{id:"example-modal-sizes-title-sm",children:"Are you sure want to delete it ? (reload the page after deleting)"})}),Object(b.jsxs)(x.a.Body,{className:"button__form-container",children:[Object(b.jsx)(u.a,{variant:"danger",onClick:function(){a(w),F(0),r(void 0,e.id),p(!1)},children:"Submit"}),Object(b.jsx)(u.a,{onClick:function(){return p(!1)},children:"Cancel"})]})]}),Object(b.jsx)(m.a,{onClick:function(){F(e.id),p(!0)},className:"card__button-close"}),Object(b.jsx)(h.a,{rounded:!0,alt:e.name,src:e.imageUrl,className:"card__images"}),Object(b.jsxs)("div",{className:"card__container",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("p",{className:e.count?"in_stock":"not_available",children:e.count?"In stock":"Not available"}),Object(b.jsxs)("p",{children:["Count of products:"," ".concat(e.count)]}),Object(b.jsxs)("p",{children:["Weight:"," ".concat(e.weight,"g")]})]}),Object(b.jsx)(o.b,{to:"/".concat(e.id),exact:!0,className:"card__button-info",children:"info"})]},e.id)}))]})},f=(c(48),c(8));null===JSON.parse(localStorage.getItem("array"))&&localStorage.setItem("array",JSON.stringify([])),null===JSON.parse(localStorage.getItem("comments"))&&localStorage.setItem("comments",JSON.stringify([]));var v=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("array"))),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(JSON.parse(localStorage.getItem("comments"))),s=Object(l.a)(r,2),d=s[0],x=s[1],v=Object(n.useState)(0),p=Object(l.a)(v,2),S=p[0],_=p[1],N=Object(n.useState)(0),C=Object(l.a)(N,2),I=C[0],y=C[1],w=Object(n.useState)(0),F=Object(l.a)(w,2),k=F[0],J=F[1],D=Object(n.useState)(""),E=Object(l.a)(D,2),L=E[0],T=E[1],U=Object(n.useState)(!1),z=Object(l.a)(U,2),W=z[0],B=z[1];Object(n.useEffect)((function(){return x(JSON.parse(localStorage.getItem("comments")))}),[I,L.length]);var H=function(e,t){return t?localStorage.setItem("comments",JSON.stringify(d.filter((function(e){return e.productId!==t})))):localStorage.setItem("comments",JSON.stringify(d.filter((function(t){return t.postId!==e}))))};return Object(b.jsx)("div",{children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{path:"/",exact:!0,children:Object(b.jsxs)("div",{children:[Object(b.jsx)(o.b,{className:"form__product_add",to:"/modalWindowForm",children:Object(b.jsx)(u.a,{variant:"outline-primary",children:"New Product"})}),Object(b.jsx)("div",{className:"all__card_container",children:Object(b.jsx)(g,{setListOfUsers:a,removeElement:function(e){return localStorage.setItem("array",JSON.stringify(c.filter((function(t){return t.id!==e}))))},removeComments:H,listOfComments:d,setListOfComments:x,idForDelete:S,setIdForDelete:_,list:c})})]})}),Object(b.jsx)(f.a,{path:"/modalWindowForm",children:Object(b.jsxs)("div",{className:"modal__window-form",children:[Object(b.jsxs)("div",{className:"modal__title-container",children:["Add new card",Object(b.jsx)(o.b,{to:"/",exact:!0,children:Object(b.jsx)(m.a,{className:"card__button-close"})})]}),Object(b.jsx)(O,{listOfUsers:c,nameForDelete:k,setNameForDelete:J})]})}),c.map((function(e){return Object(b.jsxs)(f.a,{path:"/".concat(e.id),exact:!0,children:[Object(b.jsx)(o.b,{to:"/",exact:!0,children:Object(b.jsx)(u.a,{variant:"outline-danger",className:"form__product_back",children:"Back"})}),Object(b.jsx)(o.b,{to:"/".concat(e.id,"/edit"),children:Object(b.jsx)(u.a,{variant:"outline-success",className:"form__product_edit",onClick:function(){return J(e.id)},children:"Edit"})}),Object(b.jsxs)("div",{className:"card__full",children:[Object(b.jsx)("h1",{children:e.name}),Object(b.jsxs)("div",{className:"card__full-container",children:[Object(b.jsx)(h.a,{rounded:!0,className:"card__full-img",alt:e.name,src:e.imageUrl}),Object(b.jsxs)("div",{children:["Description:",Object(b.jsx)("p",{children:e.description}),Object(b.jsxs)("p",{children:["Count: ",e.count]}),Object(b.jsxs)("p",{children:["Weight: ",e.weight,"g"]}),Object(b.jsx)("p",{className:e.count?"in_stock":"not_available",children:e.count?"In stock":"Not available"}),Object(b.jsxs)("p",{children:["Size - Width: ",e.size.width," Heigth: ",e.size.height]}),Object(b.jsx)("ul",{children:d.filter((function(t){return t.productId===e.id})).map((function(t,c){if(e.id===t.productId)return Object(b.jsxs)(n.Fragment,{children:["Comment #",c+1,Object(b.jsxs)("div",{children:["By user id : ",e.id]}),Object(b.jsxs)("li",{className:"card__full-list_comments",children:[Object(b.jsx)("div",{className:"card__full-list_item",children:t.comments}),Object(b.jsx)(m.a,{onClick:function(){H(t.postId),y(t.postId)}})]})]},t.id)}))}),Object(b.jsxs)("div",{className:"card__full-contol_block",children:[Object(b.jsx)(j.a.Control,{isInvalid:W&&!0,isValid:L&&!0,as:"textarea",rows:3,onChange:function(e){var t=e.target;T(t.value),t.value.length&&B(!1)},value:L}),Object(b.jsx)(j.a.Control.Feedback,{type:"invalid",children:"Please enter a comment (minimal length = 1)."}),Object(b.jsx)(u.a,{onClick:function(){L.length>=1?(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;d.length?localStorage.setItem("comments",JSON.stringify([].concat(Object(i.a)(d),[{postId:d.length+1,productId:t,comments:e,date:(new Date).toLocaleString()}]))):localStorage.setItem("comments",JSON.stringify([{postId:d.length+1,productId:t,comments:L,date:(new Date).toLocaleString()}]))}(L,e.id),T(""),B(!1)):B(!0)},children:"Add comment"})]})]})]})]})]},e.id)})),c.map((function(e){return Object(b.jsx)(f.a,{path:"/".concat(e.id,"/"),children:Object(b.jsxs)("div",{className:"modal__window-form",children:[Object(b.jsx)(o.b,{to:"/".concat(e.id),children:Object(b.jsx)(u.a,{variant:"outline-danger",children:"Back"})}),Object(b.jsx)("h2",{children:"Edit Form"}),Object(b.jsx)(O,{listOfUsers:c,nameForDelete:k,setNameForDelete:J})]})},e.id)}))]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,56)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{children:Object(b.jsx)(v,{})})}),document.getElementById("root")),p()}},[[49,1,2]]]);
//# sourceMappingURL=main.686785ca.chunk.js.map
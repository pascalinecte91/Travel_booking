"use strict";(self.webpackChunktravel_booking=self.webpackChunktravel_booking||[]).push([[95],{5258:function(e,s,a){a.r(s),a.d(s,{default:function(){return g}});var n=a(2791),i=a(5705),r=a(7670),t=a(184),o=r.Ry({name:r.Z_().required("nom requis"),email:r.Z_().required("email requis"),message:r.Z_().required("message requis"),isRegistered:r.O7()}),c=function(e,s){var a=s.setSubmitting;console.log(e),a(!1)},d=function(){return(0,t.jsx)(i.J9,{initialValues:{name:"",email:"",message:"",isRegistered:!1},validatedSchema:o,onSubmit:c,children:(0,t.jsxs)(i.l0,{className:"formContact",children:[(0,t.jsx)("label",{htmlFor:"name",children:"Nom :"}),(0,t.jsx)(i.gN,{type:"text",id:"name",name:"name"}),(0,t.jsx)(i.Bc,{name:"name",component:"div"}),(0,t.jsx)("label",{htmlFor:"email",children:"Email :"}),(0,t.jsx)(i.gN,{type:"email",id:"email",name:"email"}),(0,t.jsx)(i.Bc,{name:"email",component:"div"}),(0,t.jsx)("label",{htmlFor:"message",children:"Message :"}),(0,t.jsx)(i.gN,{as:"textarea",id:"message",name:"message"}),(0,t.jsx)(i.Bc,{name:"message",component:"div"}),(0,t.jsxs)("label",{children:[(0,t.jsx)(i.gN,{type:"checkbox",name:"isRegistered"}),"D\xe9j\xe0 inscrit"]}),(0,t.jsx)("button",{type:"submit",children:"Envoyer"})]})})},m=a(8559),l=a.n(m),u=(a(3666),function(){return(0,n.useEffect)((function(){var e=l().map("map").setView([48.8566,2.3522],10);return l().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(e),[{name:"Si\xe8ge social",coordinates:[48.8584,2.2944],address:"1, Rue de la Tour Eiffel, 75007 Paris"},{name:"Succursale Nord",coordinates:[49.0097,2.5479],address:"123, Avenue du Nord, 95100 Val d'Oise"},{name:"Succursale Sud",coordinates:[48.6325,2.3948],address:"456, Rue du Sud, 91000 Essonne"},{name:"Succursale Ouest",coordinates:[48.8966,2.1804],address:"789, Boulevard de l'Ouest, 92000 Hauts-de-Seine"}].forEach((function(s){l().marker(s.coordinates).addTo(e).bindPopup("<b>".concat(s.name,"</b><br>").concat(s.address)).openPopup()})),function(){e.remove()}}),[]),(0,t.jsx)("section",{className:"mapAdress",id:"map"})}),g=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("section",{className:"contact",children:[(0,t.jsx)(d,{}),(0,t.jsx)(u,{})]})})}}}]);
//# sourceMappingURL=95.ebaf517c.chunk.js.map
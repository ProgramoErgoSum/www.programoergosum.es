(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{592:function(e,t,n){var content=n(594);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("7f32a972",content,!0,{sourceMap:!1})},593:function(e,t,n){"use strict";n(592)},594:function(e,t,n){(t=n(13)(!1)).push([e.i,'.DynamicMarkdown{font-size:20px}.DynamicMarkdown h1{padding-top:10px;font-size:1.2em;font-weight:600}.DynamicMarkdown h1,.DynamicMarkdown h2{margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid #f0f0f0}.DynamicMarkdown h2{margin-top:10px;font-size:1.7rem;font-weight:700}.DynamicMarkdown h3{margin-top:40px;margin-bottom:20px;font-size:1.5rem;font-weight:600}.DynamicMarkdown h4{margin-top:30px;margin-bottom:20px;font-size:1.2rem;font-weight:500}.DynamicMarkdown br{margin:20px 0}.DynamicMarkdown a{text-decoration:none;border-bottom:1px dotted #000;color:#333}.DynamicMarkdown a:hover{color:#ae4119}.DynamicMarkdown p{margin:0 0 30px}.DynamicMarkdown p strong{font-weight:600}.DynamicMarkdown p em{font-style:italic}.DynamicMarkdown ul{display:block;margin:0 0 30px 30px;padding:0}.DynamicMarkdown ul li{display:block;margin-bottom:10px;list-style:none}.DynamicMarkdown ul li:before{padding:0 15px 0 0;content:"•"}.DynamicMarkdown blockquote{margin:0 0 30px;padding:10px 10px 10px 20px;border-left:3px solid #999;background:#f0f0f0;color:#1e2125;font-style:italic;font-size:1.1rem}.DynamicMarkdown blockquote p{margin:0}.DynamicMarkdown blockquote p code{padding:0 5px;line-height:1rem}.DynamicMarkdown .twitter-tweet{margin:0 auto}.DynamicMarkdown code{padding:1px 3px;background:#f0f0f0;color:#1e2125;font-weight:400;border-radius:5px;font-family:"Courier New",Courier,monospace;border-radius:3px}.DynamicMarkdown pre{display:block;margin:0 0 30px;font-size:18px;white-space:pre-wrap;word-wrap:pre-wrap}.DynamicMarkdown pre code{display:block;position:relative;padding:20px;border-radius:2px 2px 0 0}.DynamicMarkdown pre code.language-sh{border:3px solid #555;border-top:30px solid #555;background:#1e2125;color:#fff}.DynamicMarkdown pre code.language-sh:before{top:-18px;left:15px;width:7px;height:7px;background:#777;border-radius:50%;box-shadow:0 0 0 3px #777,24px 0 0 3px #777,48px 0 0 3px #777}.DynamicMarkdown pre code.language-python{border:3px solid #daaa00;border-top:30px solid #daaa00}.DynamicMarkdown pre code.language-python:before{content:"Python";color:#f0f0f0}.DynamicMarkdown pre code.language-arduino{border:3px solid #00979d;border-top:30px solid #00979d}.DynamicMarkdown pre code.language-arduino:before{content:"Arduino";color:#f0f0f0}.DynamicMarkdown pre code.language-html{border:3px solid #616161;border-top:30px solid #616161}.DynamicMarkdown pre code.language-html:before{content:"HTML";color:#f0f0f0}.DynamicMarkdown pre code:before{display:block;position:absolute;top:-25px;left:15px;content:""}.DynamicMarkdown pre code:after{content:none}.DynamicMarkdown table{margin:0 0 30px;font-size:1rem;line-height:1.5rem}.DynamicMarkdown table td,.DynamicMarkdown table th,.DynamicMarkdown table tr{padding:10px;border:1px solid #f0f0f0}.DynamicMarkdown table th{background:#f0f0f0}.DynamicMarkdown figure{margin:20px auto 50px;text-align:center}.DynamicMarkdown figure img{max-width:100%}.DynamicMarkdown figure figcaption{text-align:center;font-size:14px;font-weight:300}.DynamicMarkdown hr{display:block;margin:60px 0;border:1px solid #f0f0f0}.DynamicMarkdown .iframe{overflow:hidden;padding-top:56.25%;position:relative;margin:20px auto 50px;border:20px solid #333;border-radius:20px}.DynamicMarkdown .iframe iframe{position:absolute;left:0;top:0;height:100%;width:100%;margin:0;border:0}@media only screen and (max-width:960px){.DynamicMarkdown ul{margin:0 0 30px}}@media only screen and (max-width:600px){.DynamicMarkdown{font-size:16px}.DynamicMarkdown ul{margin:0 0 30px}.DynamicMarkdown h1{font-size:1.6em}.DynamicMarkdown h2{font-size:1.5rem}.DynamicMarkdown h3{font-size:1.4rem}.DynamicMarkdown h4{font-size:1.2rem}}',""]),e.exports=t},595:function(e,t,n){"use strict";n(51),n(30),n(32);var r=n(596),o=n.n(r),c=n(597),l=n.n(c),d=n(600),m=n.n(d),f=(n(601),{name:"Content",components:{},props:{raw:{type:String,required:!0},cdn:{type:String,default:""}},computed:{renderer:function(){var e=this.cdn,t=o()("commonmark",{html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight:function(e,t){if(t&&m.a.getLanguage(t))try{return m.a.highlight(t,e).value}catch(e){}return""}}).enable(["table"]);return t.use(l.a,{anchorLink:!1}),t.renderer.rules.image=function(t,n,r,o,c){var l=t[n],d="",m="";return l.attrs=l.attrs.map((function(t){return"src"===t[0]&&("http"!==t[1].substring(0,4)&&(t[1]="".concat(e).concat(t[1])),d=t[1]),"title"===t[0]&&""!==t[1]&&(m=t[1]),t})),'<figure><img class="lazy" src="'.concat("/lazy.png",'" data-src="').concat(d,'" alt="').concat(m,'"><figcaption>').concat(m,"</figcaption></figure>")},t.renderer.rules.html_block=function(e,t,n,r,o){var content=e[t].content;if(content.includes("youtube.com/embed")){var c=content.split("youtube.com/embed/")[1].split('"');return'<a href="https://youtube.com/embed/'.concat(c[0],'" target="_blank">Ver vídeo en YouTube</a>')}return e[t].content},t.renderer.rules.link_open=function(e,t,n,r,o){return'<a target="_blank" rel="nofollow noopener noreferrer"'+o.renderAttrs(e[t])+">"},t.renderer.rules.link_close=function(){return'<i aria-hidden="true" class="v-icon notranslate pl-1 mdi mdi-open-in-new" style="font-size:12px;"></i></a>'},t.render(this.raw)}},mounted:function(){var e=[].slice.call(document.querySelectorAll(".DynamicMarkdown img.lazy"));if("IntersectionObserver"in window){var t=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}}))}));e.forEach((function(e){t.observe(e)}))}}}),h=(n(593),n(15)),component=Object(h.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"DynamicMarkdown",domProps:{innerHTML:this._s(this.renderer)}})}),[],!1,null,null,null);t.a=component.exports},599:function(e,t,n){"use strict";var r={name:"Reg"},o=n(15),c=n(20),l=n.n(c),d=n(573),m=n(574),f=n(575),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"primary white--text"},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("div",{staticClass:"py-12"},[t("p",{staticClass:"headline font-weight-bold"},[this._v("\n            Asociación Programo Ergo Sum\n          ")]),this._v(" "),t("p",{staticClass:"title font-weight-light"},[this._v("\n            Iniciativa sin ánimo de lucro inscrita en el Registro de\n            Asociaciones por el Director General de Participación Ciudadana,\n            Unión Europea y Acción Exterior de la Consejería de Presidencia,\n            con el número de registro 12.731/1ª.\n          ")])])])],1)],1)],1)}),[],!1,null,"2d686dd6",null);t.a=component.exports;l()(component,{VCol:d.a,VContainer:m.a,VRow:f.a})},603:function(e,t,n){var content=n(613);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("21edf7e0",content,!0,{sourceMap:!1})},612:function(e,t,n){"use strict";n(603)},613:function(e,t,n){(t=n(13)(!1)).push([e.i,".v-card[data-v-36f021d2]{max-width:220px;margin:0 auto}",""]),e.exports=t},619:function(e,t,n){"use strict";var r={props:{card:{type:Object,required:!0}}},o=(n(612),n(15)),c=n(20),l=n.n(c),d=n(177),m=n(109),f=n(170),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ma-3 text-center"},[n("v-avatar",{attrs:{size:"110"}},[n("VImageLazy",{attrs:{src:e.card.image,title:e.card.name,"lazy-src":"/lazy-user.png"}})],1),e._v(" "),n("p",{staticClass:"my-3"},[e._v("\n    "+e._s(e.card.name)+"\n  ")]),e._v(" "),n("p",{staticClass:"my-3 font-weight-light subtitle-2"},[e._v("\n    "+e._s(e.card.description)+"\n  ")]),e._v(" "),e.card.social.url?n("v-btn",{attrs:{href:e.card.social.url,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Url"}},[n("v-icon",{attrs:{size:"18",color:"#000"}},[e._v("mdi-link")])],1):e._e(),e._v(" "),e.card.social.twitter?n("v-btn",{attrs:{href:e.card.social.twitter,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"}},[n("v-icon",{attrs:{size:"18",color:"#1da1f2"}},[e._v("mdi-twitter")])],1):e._e(),e._v(" "),e.card.social.github?n("v-btn",{attrs:{href:e.card.social.github,icon:"",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"}},[n("v-icon",{attrs:{size:"18",color:"#333"}},[e._v("mdi-github-circle")])],1):e._e()],1)}),[],!1,null,"36f021d2",null),h=component.exports;l()(component,{VAvatar:d.a,VBtn:m.a,VIcon:f.a});var w={components:{Card:h},data:function(){return{volunteers:[{name:"Miguel Ángel Abellán",image:"/images/voluntarios/migueabellan.png",description:"Porque disfruto programando y tengo la suerte de aprender todos los días.",social:{url:"https://migueabellan.github.io",twitter:"https://twitter.com/migueabellan",github:"https://github.com/migueabellan"}},{name:"Carmen B. Martínez",image:"/images/voluntarios/carmenb_mg.jpg",description:"Psicóloga en constante reinvención. De todas las personas se aprende algo nuevo.",social:{url:"",twitter:"https://twitter.com/carmenb_mg",github:""}},{name:"Miguel Manzano",image:"/images/voluntarios/mmanzano.jpg",description:"Aporrea el teclado, eso sí, primero hace un commit por si los bytes.",social:{url:"",twitter:"https://twitter.com/mmanzano",github:"https://github.com/mmanzano"}},{name:"Antonio García",image:"",description:"Productor de televisión al que le apasiona la enseñanza de la programación.",social:{url:"",twitter:"",github:""}}]}}},y=n(573),v=n(574),x=n(575),k=Object(o.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"mb-3"},[e._v("Mentores / Voluntarios")])]),e._v(" "),e._l(e.volunteers,(function(e,t){return n("v-col",{key:t,staticClass:"pa-2",attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",xl:"3"}},[n("Card",{attrs:{card:e}})],1)})),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"my-6"},[n("p",[e._v("\n          Buscamos personas que quieran\n          "),n("b",[e._v("compartir sus conocimientos desinteresadamente")]),e._v(". Personas\n          interesadas en aportar su experiencia y tiempo en los talleres\n          gratuitos que hacemos en la Región de Murcia. ¿Te apetece?\n        ")]),e._v(" "),n("v-btn",{attrs:{to:"/contacto",nuxt:"",tile:"",outlined:""}},[e._v("\n          Hazte voluntario\n        ")])],1)])],2)],1)}),[],!1,null,"ad684524",null);t.a=k.exports;l()(k,{VBtn:m.a,VCol:y.a,VContainer:v.a,VRow:x.a})},913:function(e,t,n){"use strict";n.r(t);n(82);var r=n(25),o=n(595),c=n(619),l=n(599),d={components:{Content:o.a,Volunteers:c.a,Reg:l.a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.env,o=e.store,c=o.state.metas.asociacion,t.next=4,n.e(2).then(n.t.bind(null,901,7));case 4:return l=t.sent,t.abrupt("return",{title:c.title,description:c.description,image:"".concat(r.cdn).concat(c.image),raw:l.body,cdn:"".concat(r.cdn,"/images/asociacion/")});case 6:case"end":return t.stop()}}),t)})))()},computed:{background:function(){return this.$vuetify.theme.isDark?"grey darken-3":"grey lighten-3"}},head:function(){var title=this.title,e=this.description,image=this.image;return{title:title,meta:[{hid:"description",name:"description",content:e},{hid:"o:t",property:"og:title",content:title},{hid:"o:d",property:"og:description",content:e},{hid:"o:i",property:"og:image",content:image},{hid:"t:t",name:"twitter:title",content:title},{hid:"t:d",name:"twitter:description",content:e},{hid:"t:i",name:"twitter:image",content:image}]}}},m=n(15),f=n(20),h=n.n(f),w=n(573),y=n(574),v=n(575),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Title",{attrs:{title:e.title,description:e.description,image:e.image}}),e._v(" "),n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("Content",{attrs:{raw:e.raw,cdn:e.cdn}})],1)],1)],1),e._v(" "),n("section",{staticClass:"py-12",class:e.background},[n("Volunteers")],1),e._v(" "),n("Reg")],1)}),[],!1,null,"980aceb2",null);t.default=component.exports;h()(component,{VCol:w.a,VContainer:y.a,VRow:v.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(40)},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a(41),s=a(6),m=a.n(s),i=a(7),o=a(8),u=a(9),d=a(11),p=a(10),E=a(12),g=(a(27),a(43)),v=a(42),h=a(13),f=function(e){return l.a.createElement("div",{className:"boxCard"},l.a.createElement("div",{className:"boxCard-header"},e.header),l.a.createElement("div",{className:"boxCard-body"},e.children),e.renderFooter())},N=(a(29),a(3)),b=a.n(N),x=[],y=[],k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onFocus1=function(e,t){document.getElementById("cf-focus").value=e,b()("#userMarketText, #userMarketPopupHeading").text(x[e].name),b()("#userMarketPopupMarket").text(x[e].market),b()("#userMarketPopupLanguage").text(x[e].language),b()("#userMarketPopupYear").text(x[e].year),b()("#userMarketPopupType").text(x[e].type)},a.onClick1=function(e,t){document.getElementById("cf-click").value=e},a.state={bottom:"",isLoading:!0,contacts:[]},a.startCoverflow=a.startCoverflow.bind(Object(h.a)(Object(h.a)(a))),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"infoCoverflow",value:function(){var e=window.IML;e._path="http://imagehousepictures.inter-ikea.com/dwr",e.findMostRelevantPublications(10,function(e){x=e.newestPubsForThisUsersMarkets,y=e.newestPubsForAllMarkets,b()("#userMarketText, #userMarketPopupHeading").text(x[0].name),b()("#userMarketPopupMarket").text(x[0].market),b()("#userMarketPopupLanguage").text(x[0].language),b()("#userMarketPopupYear").text(x[0].year),b()("#userMarketPopupType").text(x[0].type),b()("#allMarketText, #allMarketPopupHeading").text(y[0].name),b()("#allMarketPopupMarket").text(y[0].market),b()("#allMarketPopupLanguage").text(y[0].language),b()("#allMarketPopupYear").text(y[0].year),b()("#allMarketPopupType").text(y[0].type)})}},{key:"startCoverflow",value:function(e,t,a){var n=this,l="http://imagehousepictures.inter-ikea.com",r=window.IML;return r._path=l+"/dwr",this.infoCoverflow(),new Promise(function(t){return r.findMostRelevantPublications(10,function(a){return t({IMLarray:a[e]})})}).then(function(e){return e.IMLarray.map(function(e){return e.assetId})}).then(function(e){return Promise.all(e.map(function(e){return new Promise(function(t){r.getPagesWithPageNumbers(e,[1],function(e){return t(e[0].largeImageURL.split("../").join(l+"/"))})})}))}).then(function(e){var l=e.map(function(e){return{image:e}});b()("#userMarketPopupImage").attr("src",l[0].image),window[t](a).setup({flash:"coverflow.swf",width:"100%",playlist:l,height:250,y:-20,backgroundcolor:"666666",coverwidth:120,coverheight:150,fixedsize:!0,textoffset:50,textstyle:".coverflow-text{color:#000000;text-align:center;font-family:Arial Rounded MT Bold,Arial;} .coverflow-text h1{font-size:14px;font-family:inherit;font-weight:normal;line-height:21px;} .coverflow-text h2{font-size:12px;font-family:inherit;font-weight:normal;} .coverflow-text a{color:#0000EE;}"}).on("ready",function(){}).on("focus",n.onFocus1).on("click",n.onClick1)})}},{key:"loadScript",value:function(e){return new Promise(function(t,a){var n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=function(){return t()}})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript("/scripts/coverflow/server-call.js");case 2:return e.next=4,this.loadScript("/scripts/IML/engine.js");case 4:return e.next=6,this.loadScript("/scripts/IML/IML.js");case 6:return e.next=8,this.loadScript("/scripts/main/_main.js");case 8:return e.next=10,this.loadScript("/scripts/coverflow/main.js");case 10:return e.next=12,this.loadScript("/scripts/coverflow/main2.js");case 12:return e.next=14,this.loadScript("/scripts/views/index.js");case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{id:"view_home"},l.a.createElement(f,{header:"",id:"welcome",renderFooter:function(){return l.a.createElement("div",null)}},"Welcome Stephanie Hallberg"),l.a.createElement(f,{header:"News for your market",renderFooter:function(){return l.a.createElement("div",{id:"userMarketText",className:"bottom"})}},l.a.createElement("div",{id:"userMarketPopup",className:"player_controls clearfix "},l.a.createElement("p",{id:"userMarketPopupHeading",className:"heading"}),l.a.createElement("img",{alt:"",id:"userMarketPopupImage",className:"float_left image",src:""}),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Market: ",l.a.createElement("span",{id:"userMarketPopupMarket"})),l.a.createElement("p",null,"Language: ",l.a.createElement("span",{id:"userMarketPopupLanguage"})),l.a.createElement("p",null,"Year: ",l.a.createElement("span",{id:"userMarketPopupYear"})),l.a.createElement("p",null," Type: ",l.a.createElement("span",{id:"userMarketPopupType"})))),l.a.createElement("div",{id:"player"}),l.a.createElement("div",{className:"apibar"},l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Previous"),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Next"),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"To ",l.a.createElement("input",{id:"cf-val",type:"text",size:"1",maxLength:"3"})),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Focused"," ",l.a.createElement("input",{id:"cf-focus",type:"text",size:"1",maxLength:"3",disabled:!0})),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Clicked"," ",l.a.createElement("input",{id:"cf-click",type:"text",size:"1",maxLength:"3",disabled:!0})))),l.a.createElement(f,{header:"News for all market",renderFooter:function(){return l.a.createElement("div",{id:"allMarketText",className:"bottom"})}},l.a.createElement("div",{id:"allMarketPopup",className:"player_controls clearfix"},l.a.createElement("p",{id:"allMarketPopupHeading",className:"heading"}),l.a.createElement("img",{id:"allMarketPopupImage",className:"float_left image",src:""}),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Market: ",l.a.createElement("span",{id:"allMarketPopupMarket"})),l.a.createElement("p",null,"Language: ",l.a.createElement("span",{id:"allMarketPopupLanguage"})),l.a.createElement("p",null,"Year: ",l.a.createElement("span",{id:"allMarketPopupYear"})),l.a.createElement("p",null," Type: ",l.a.createElement("span",{id:"allMarketPopupType"})))),l.a.createElement("div",{id:"player2"}),l.a.createElement("div",{className:"apibar"},l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Previous"),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Next"),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"To ",l.a.createElement("input",{id:"cf-val2",type:"text",size:"1",maxLength:"3"})),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Focused"," ",l.a.createElement("input",{id:"cf-focus2",type:"text",size:"1",maxLength:"3",disabled:!0})),l.a.createElement("a",{href:"/some/valid/uri",className:"apibar-button"},"Clicked"," ",l.a.createElement("input",{id:"cf-click2",type:"text",size:"1",maxLength:"3",disabled:!0})))))}}]),t}(l.a.Component),w=function(e){return l.a.createElement("div",{className:"boxCard leftMain"},l.a.createElement("div",{className:"boxCard-header"},e.header),l.a.createElement("div",{className:"boxCard-body"},e.children),l.a.createElement("div",{className:"boxCard-footer"},l.a.createElement("button",{id:"prevBtn",title:"Previous Page",className:"menuButton controls_previousButton"}),l.a.createElement("div",{className:"menuButton controls_zoomLeftPage",title:"Zoom Left Page"}),l.a.createElement("input",{type:"number",step:"2",id:"pageFld",min:"1"}),l.a.createElement("div",{id:"slider-bar",className:"turnjs-slider"},l.a.createElement("div",{id:"slider"})),l.a.createElement("div",{className:"menuButton controls_zoomRightPage",title:"Zoom Right Page"}),l.a.createElement("button",{id:"nextBtn",title:"Next Page",className:"menuButton controls_nextButton"})))},P=(a(31),a(33),a(35),function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"loadScript",value:function(e){return new Promise(function(t,a){var n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=function(){return t()}})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript("/scripts/IML/engine.js");case 2:return e.next=4,this.loadScript("/scripts/IML/IML.js");case 4:return e.next=6,this.loadScript("/scripts/main/main_outside_home.js");case 6:return e.next=8,this.loadScript("/scripts/turnjs/turn.js");case 8:return e.next=10,this.loadScript("/scripts/turnjs/server-call.js");case 10:return e.next=12,this.loadScript("/scripts/dragula/dragula.js");case 12:return e.next=14,this.loadScript("/scripts/dragula/load.js");case 14:return e.next=16,this.loadScript("/scripts/dragula/server-call.js");case 16:return e.next=18,this.loadScript("/scripts/views/browse.js");case 18:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{id:"view_browse"},l.a.createElement(w,{className:"leftMain",header:"News for your market"},l.a.createElement("div",{className:"book",id:"book"})),l.a.createElement("div",{className:"rightMain"},l.a.createElement(f,{header:"Spread Images",renderFooter:function(){return l.a.createElement("div",{className:"boxCard-footer"},l.a.createElement("div",{className:"boxButton img_add_all"},l.a.createElement("p",null,"Add all")))}},l.a.createElement("div",{id:"dragula_left",className:"dragula_container"})),l.a.createElement(f,{header:"Shopping Cart",renderFooter:function(){return l.a.createElement("div",{className:"boxCard-footer"},l.a.createElement("div",{className:"boxButton img_remove_all"},l.a.createElement("p",null,"Remove all")),l.a.createElement("div",{className:"boxButton img_checkout"},l.a.createElement("a",{href:"index_checkout.html"},l.a.createElement("p",null,"Check out"))))}},l.a.createElement("div",{id:"dragula_right",className:"dragula_container"},l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"assets/img/GridItems/05.png"}),l.a.createElement("p",null,"PH155189")),l.a.createElement("div",null,l.a.createElement("img",{alt:"",src:"assets/img/GridItems/06.png"}),l.a.createElement("p",null,"PH155189"))),l.a.createElement("div",{id:"sortable",className:"dragula_container"}))))}}]),t}(l.a.Component)),M=function(){return l.a.createElement("div",{className:"boxCard"},l.a.createElement("div",{className:"boxCard-header"},"Name"),l.a.createElement("div",{className:"boxCard-body"},l.a.createElement("div",{className:"banner"},l.a.createElement("p",null,"Image Properties")),l.a.createElement("div",{className:"settings"},l.a.createElement("div",{className:"menuItem"},l.a.createElement("p",{className:"no_margin"},"Use pictures for:"),l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxPicType",name:"type",id:"picType"},l.a.createElement("option",null,"To be converted / Adobe RGB / Digital use, 300 dpi / JPG"),l.a.createElement("option",null,"To be converted / Adobe RGB / Digital use, 300 dpi / EPS"),l.a.createElement("option",null,"To be converted / Adobe RGB / Digital use, 300 dpi / PNG")))),l.a.createElement("div",{className:"menuItem"},l.a.createElement("p",null,"Unit type:"),l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxUnitType",name:"type",id:"unitType"},l.a.createElement("option",null,"cm"),l.a.createElement("option",null,"inch"),l.a.createElement("option",null,"pica"),l.a.createElement("option",null,"point"),l.a.createElement("option",null,"px"))))),l.a.createElement("div",{className:"img_placeholder"},l.a.createElement("div",{className:"selected_image"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("div",{className:"image-container"},l.a.createElement("img",{src:"assets/img/pics/checkout_img_1.png",alt:"checkout_img"}),l.a.createElement("div",{className:"assetItem"},l.a.createElement("p",{className:"assetId"},"PH153618")))),l.a.createElement("div",{className:"imgConfig"},l.a.createElement("div",{className:"imgInfo"},l.a.createElement("p",null,"Clipping Path:"),l.a.createElement("p",null,"Size:"),l.a.createElement("p",null,"Dimension:")),l.a.createElement("div",{className:"imgSettings"},l.a.createElement("div",{className:"clipSetting"},l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxUnitType",name:"type",id:"clipType2"},l.a.createElement("option",null,"none")))),l.a.createElement("div",{className:"sizeSetting"},l.a.createElement("input",{type:"range",name:"range",id:"range1",min:"0",max:"100",step:"5",value:"40"}),l.a.createElement("output",{className:"output1"})),l.a.createElement("div",{className:"dimSetting"},l.a.createElement("p",null,"Width: 6130.00 Height: 4895.00"))))),l.a.createElement("div",{className:"selected_image"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"assets/img/pics/checkout_img_1.png",alt:"checkout_img1"}),l.a.createElement("p",null,"PH153618")),l.a.createElement("div",{className:"imgConfig"},l.a.createElement("div",{className:"imgInfo"},l.a.createElement("p",null,"Clipping Path:"),l.a.createElement("p",null,"Size:"),l.a.createElement("p",null,"Dimension:")),l.a.createElement("div",{className:"imgSettings"},l.a.createElement("div",{className:"clipSetting"},l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxUnitType",name:"type",id:"clipType3"},l.a.createElement("option",null,"none")))),l.a.createElement("div",{className:"sizeSetting"},l.a.createElement("input",{type:"range",name:"range",id:"range2",min:"0",max:"100",step:"5",value:"40"}),l.a.createElement("output",{className:"output2"})),l.a.createElement("div",{className:"dimSetting"},l.a.createElement("p",null,"Width: 6130.00 Height: 4895.00"))))),l.a.createElement("div",{className:"selected_image"},l.a.createElement("div",{className:"imgBox"},l.a.createElement("img",{src:"assets/img/pics/checkout_img_1.png",alt:"checkout_img2"}),l.a.createElement("p",null,"PH153618")),l.a.createElement("div",{className:"imgConfig"},l.a.createElement("div",{className:"imgInfo"},l.a.createElement("p",null,"Clipping Path:"),l.a.createElement("p",null,"Size:"),l.a.createElement("p",null,"Dimension:")),l.a.createElement("div",{className:"imgSettings"},l.a.createElement("div",{className:"clipSetting"},l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxUnitType",name:"type",id:"clipType"},l.a.createElement("option",null,"none")))),l.a.createElement("div",{className:"sizeSetting"},l.a.createElement("input",{type:"range",name:"range",id:"range3",min:"0",max:"100",step:"5",value:"40"}),l.a.createElement("output",{className:"output3"})),l.a.createElement("div",{className:"dimSetting"},l.a.createElement("p",null,"Width: 6130.00 Height: 4895.00"))))))),l.a.createElement("div",{className:"boxCard-footer"},l.a.createElement("div",{className:"banner"},l.a.createElement("p",null,"Delivery address")),l.a.createElement("div",{className:"orderButton"},"Proceed with order")))},S=function(){return l.a.createElement("div",{id:"view_order"},l.a.createElement(M,null))},I=function(){return l.a.createElement(g.a,null,l.a.createElement(v.a,{exact:!0,path:"/",component:k}),l.a.createElement(v.a,{exact:!0,path:"/browse",component:P}),l.a.createElement(v.a,{exact:!0,path:"/order",component:S}))},B=function(){return l.a.createElement("div",{id:"menu"},l.a.createElement("div",{id:"div_1",className:"menuBox swapButton"},"Menu"),l.a.createElement("div",{id:"div_2",className:"menuBox"},l.a.createElement("div",{className:"menuSecondary"},"Menu",l.a.createElement("div",{className:"menuButton home"},l.a.createElement("p",null,"Home")),l.a.createElement("div",{className:"menuButton checkout"},l.a.createElement("p",null,"Check out")),l.a.createElement("div",{className:"last_item menuButton logout"},l.a.createElement("p",null,"Log out"))),l.a.createElement("div",{className:"menuLeft"},"Search",l.a.createElement("div",{className:"menuItem"},l.a.createElement("p",null,"Year"),l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxYear",name:"year",id:"cboYear"},l.a.createElement("option",null,"Static 2017"),l.a.createElement("option",null,"2016"),l.a.createElement("option",null,"2015"),l.a.createElement("option",null,"2014"),l.a.createElement("option",null,"2013")))),l.a.createElement("div",{className:"menuItem"},l.a.createElement("p",null,"Market"),l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxMarket",name:"market",id:"cboMarket"},l.a.createElement("option",null,"Static Sweden"),l.a.createElement("option",null,"France")))),l.a.createElement("div",{className:"menuItem"},l.a.createElement("p",null,"Type"),l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox",name:"type",id:"cboType"},l.a.createElement("option",null,"Static All"),l.a.createElement("option",null,"Catalogue"),l.a.createElement("option",null,"Global Production"),l.a.createElement("option",null,"IKEA FAMILY LIVE"),l.a.createElement("option",null,"Local Production")))),l.a.createElement("a",{href:"/browse"},l.a.createElement("div",{className:"menuButton search"}))),l.a.createElement("div",{className:"menuRight"},l.a.createElement("div",{className:"menuItem2"},l.a.createElement("p",null,"Free text search"),l.a.createElement("input",{type:"text",name:"quickSearch",id:"cboSearch",placeholder:"Click here in order to search"})),l.a.createElement("div",{id:"freeTextSearchButton",className:"menuButton search disabledButton"}),l.a.createElement("div",{id:"logout",className:"menuButton logout"},l.a.createElement("p",null,"Log out")))))},C=function(){return l.a.createElement("footer",{className:"footer footer-popup"},l.a.createElement("div",{id:"copyrightText"},"\xa9 Inter IKEA Systems B.V. 2002-2018"),l.a.createElement("div",{id:"supportContactText"},"Support: Phone: +46 31 750 09 33 E-mail: servicedesk@elanders.com"))},_=function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"userMarket_popup",className:"popup"},l.a.createElement("b",null,"User Market"),l.a.createElement("br",null),l.a.createElement("br",null),"Please choose your default user market:",l.a.createElement("div",{className:"selectWrapper"},l.a.createElement("select",{className:"selectBox selectBoxMarket",name:"market",id:"cboMarket_popup"},l.a.createElement("option",null,"Static Sweden"),l.a.createElement("option",null,"France"))),l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"grey",id:"btnUserMarketOK"},"OK"),"\xa0")),l.a.createElement("div",{id:"login_popup"},l.a.createElement("div",{className:"label"},"Welcome to"),l.a.createElement("div",{className:"title"},"Media Library"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{className:"fluffy"},l.a.createElement("td",null,l.a.createElement("div",{className:"label"},"Username:")),l.a.createElement("td",{className:"center",width:"50%"},l.a.createElement("input",{type:"text",name:"username"})),l.a.createElement("td",null,"\xa0")),l.a.createElement("tr",{className:"fluffy"},l.a.createElement("td",null,l.a.createElement("div",{className:"label"},"Password:")),l.a.createElement("td",{className:"center"},l.a.createElement("input",{type:"password",name:"password"})),l.a.createElement("td",null,l.a.createElement("button",{type:"button",className:"green",id:"btnLogin"},"Enter"))),l.a.createElement("tr",{className:"fluffy"},l.a.createElement("td",null,"\xa0"),l.a.createElement("td",{className:""},l.a.createElement("button",{type:"button",className:"grey",id:"btnShowForgotPassword"},"Reset password"))),l.a.createElement("tr",{className:"fluffy"},l.a.createElement("td",null,"\xa0"),l.a.createElement("td",{className:""},l.a.createElement("button",{type:"button",className:"grey",id:"btnOpenRequestAccount"},"Request account")),l.a.createElement("td",null,"\xa0")))),l.a.createElement("br",null)),l.a.createElement("div",{id:"licens_popup",className:"popup"},l.a.createElement("b",null,"License agreement"),l.a.createElement("br",null),l.a.createElement("br",null),"The intellectual property rights in and to the enclosed digital images are the sole property of Inter IKEA Systems B.V. Ordered images from IKEA Image House are for one time only use. After using the digital images for the purpose intended, they should be deleted from any storage media. It is not permitted to store the digital images in order to use them on later occasions. A new order must then be placed with the Inter IKEA Systems B.V. IKEA Image House.",l.a.createElement("br",null),l.a.createElement("br",null),"As a user of the IKEA Image House I am aware there are some images in the database who might not yet been published. I understand that publishing before this date is not allowed without permission from Inter IKEA Systems B.V.",l.a.createElement("br",null),l.a.createElement("div",{className:"center"},l.a.createElement("button",{type:"button",className:"grey",id:"btnLicenseOK"},"I agree"),"\xa0",l.a.createElement("button",{type:"button",className:"grey",id:"btnLicenseCancel"},"I disagree"))),l.a.createElement("div",{id:"requestAccount_popup",className:"popup"},l.a.createElement("b",null,"Request account"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{id:"arGDPR",className:"info"}),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Username :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arUsername",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Password :"),l.a.createElement("td",null,l.a.createElement("input",{type:"password",name:"arPassword",className:"w200"}),l.a.createElement("div",{id:"info"},"&nbsp"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Email :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arEmail",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"First name :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arFirstname",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Last name :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arLastname",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Company :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arCompany",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Address :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arAddress",className:"w300"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Zip code :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arZipcode",className:"w100"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"City :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arCity",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Country :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arCountry",className:"w200"}))),l.a.createElement("tr",null,l.a.createElement("td",null,"Phone number :"),l.a.createElement("td",null,l.a.createElement("input",{type:"text",name:"arPhone",className:"w200"}))))),l.a.createElement("br",null),l.a.createElement("div",{className:"right"},l.a.createElement("button",{type:"button",className:"green",id:"btnRaSend"},"Send request"),"\xa0",l.a.createElement("button",{type:"button",className:"grey",id:"btnRaCancel"},"Cancel"),"\xa0")),l.a.createElement("div",{id:"generic_popup",className:"popup"}),l.a.createElement("div",{id:"wait",className:"popup"},l.a.createElement("div",{className:"meter animate"},l.a.createElement("span",null,l.a.createElement("span",null))),l.a.createElement("div",{className:"title"},"Loading. Please wait..."),l.a.createElement("br",null)))},j=function(e){function t(){return Object(o.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"loadScript",value:function(e){return new Promise(function(t,a){var n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=function(){return t()}})}},{key:"componentDidMount",value:function(){var e=Object(i.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadScript("/scripts/views/menu.js");case 2:return e.next=4,this.loadScript("/scripts/main/search.js");case 4:return e.next=6,this.loadScript("/scripts/main/usermarket.js");case 6:return e.next=8,this.loadScript("/scripts/main/loadConfig.js");case 8:return e.next=10,this.loadScript("/scripts/main/login.js");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{id:"header"},l.a.createElement("p",null,"Media Library")),l.a.createElement(B,null),l.a.createElement(I,null),l.a.createElement(C,null),l.a.createElement(_,null))}}]),t}(l.a.Component);Object(r.render)(l.a.createElement(c.a,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[19,2,1]]]);
//# sourceMappingURL=main.9445a2c8.chunk.js.map
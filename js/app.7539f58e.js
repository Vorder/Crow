(function(t){function e(e){for(var a,i,d=e[0],l=e[1],o=e[2],c=0,h=[];c<d.length;c++)i=d[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,d=1;d<n.length;d++){var l=n[d];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/crow/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=e,d=d.slice();for(var o=0;o<d.length;o++)e(d[o]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0486":function(t){t.exports=JSON.parse('[{"id":1,"name":"issue1","days":5,"startTime":"2020-07-07 08:00:00","endTime":"2020-07-12 18:00:00","developerNum":2,"relatedTo":[]},{"id":2,"name":"issue2","days":6,"startTime":"2020-07-05 08:00:00","endTime":"2020-07-11 18:00:00","developerNum":3,"relatedTo":[]},{"id":3,"name":"issue3","days":18,"startTime":"2020-07-02 10:00:00","endTime":"2020-07-20 14:00:00","developerNum":1,"relatedTo":[]},{"id":4,"name":"issue4","days":2,"startTime":"2020-07-21 08:00:00","endTime":"2020-07-23 02:00:00","developerNum":5,"relatedTo":[2,3]},{"id":8,"name":"issue8","days":4,"startTime":"2020-07-23 08:00:00","endTime":"2020-07-27 18:00:00","developerNum":5,"relatedTo":[]},{"id":9,"name":"issue9","days":3,"startTime":"2020-08-02 08:00:00","endTime":"2020-08-05 18:00:00","developerNum":5,"relatedTo":[]},{"id":10,"name":"issue10","days":8,"startTime":"2020-09-02 08:00:00","endTime":"2020-09-10 18:00:00","developerNum":5,"relatedTo":[]},{"id":11,"name":"issue11","days":2,"startTime":"2020-06-28 08:00:00","endTime":"2020-06-30 18:00:00","developerNum":7,"relatedTo":[]}]')},"06dd":function(t,e,n){"use strict";var a=n("2145"),r=n.n(a);r.a},2145:function(t,e,n){},"274f":function(t,e,n){},"2fb7":function(t,e,n){},"38dc":function(t,e,n){"use strict";var a=n("bdcd"),r=n.n(a);r.a},"3ab4":function(t,e,n){"use strict";var a=n("7621"),r=n.n(a);r.a},"4ad0":function(t){t.exports=JSON.parse('{"start":"2020-06-28 08:00:00","end":"2020-10-20 17:00:00"}')},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-1"}),n("div",{staticClass:"col-sm-2"},[n("Backlog")],1),n("div",{staticClass:"col-sm-8"},[n("Timeline")],1)])])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12 timeline"},[n("keep-alive",[n("div",{on:{wheel:function(e){return e.ctrlKey?t.zoom(e):null}}},[n(t.timeline,{tag:"component",attrs:{startdate:t.startdate,enddate:t.enddate,developers:t.developers}})],1)])],1)])},d=[],l=n("d4fb"),o=n("4ad0"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"grid-template-columns":t.gridtemplate()},attrs:{id:"container"}},[n("div",{staticClass:"firstblock"}),t._l(t.developers,(function(e,a){return n("div",{key:e,staticClass:"dev",style:{"grid-row":a+4}},[t._v(" "+t._s(e)+" ")])})),t._l(t.calendar(),(function(e,a){return n("div",{key:e+a,staticClass:"datetime",style:{"grid-column":24*a+2+"/span 24"}},[n("p",[t._v(t._s(e.month)+" "+t._s(e.day))])])})),t._l(24*t.calendar_length,(function(e){return n("div",{key:e,staticClass:"time",style:{"grid-column":e+1}},[n("div",{staticClass:"hour"},e%24==0?[t._v("00:00")]:e%24<10?[t._v("0"+t._s(e%24)+":00")]:[t._v(t._s(e%24)+":00")])])})),t._l(t.issuelist,(function(e){return n("div",{key:"issue"+e.id,style:{"grid-area":t.area(e)}},[n("Issue",{attrs:{name:e.name,border:5}})],1)})),t._l(t.lines,(function(t){return n("div",{key:String(t[0])+t[2]+t[3],staticClass:"lines"},[n("Dline",{attrs:{startrow:t[0],endrow:t[1],startdate:t[2],enddate:t[3],datewidth:30,gaplength:5}})],1)}))],2)},c=[],h=n("0486"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"issue",style:{"border-left":t.border+"px solid white","border-right":t.border+"px solid white","font-size":t.textsize+"em"}},[n("div",{staticClass:"isstext"},[n("span",{staticClass:"inner"},[t._v(" "+t._s(t.name)+" ")])])])},p=[],g=(n("a9e3"),{props:{name:String,border:Number,textsize:Number}}),v=g,m=(n("3ab4"),n("2877")),y=Object(m["a"])(v,f,p,!1,null,null,null),_=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"l1",attrs:{id:this._uid+"l1"}}),n("div",{staticClass:"l2",attrs:{id:this._uid+"l2"}}),n("div",{staticClass:"l3",attrs:{id:this._uid+"l3"}})])},D=[],b={props:{startrow:Number,endrow:Number,startdate:Number,enddate:Number,datewidth:Number,gaplength:Number},methods:{drawlines:function(){var t=100,e=this.datewidth,n=50,a=120,r=document.getElementById(this._uid+"l1"),s=document.getElementById(this._uid+"l2"),i=document.getElementById(this._uid+"l3");r.style.top=t+Math.round(n*(this.startrow-1)+n/3)+"px",r.style.left=a+this.startdate*e-this.gaplength+"px",r.style.width=this.gaplength+"px",s.style.top=r.style.top,s.style.left=a+this.startdate*e+"px",s.style.height=(this.endrow-this.startrow)*n+"px",i.style.top=t+n*(this.endrow-1)+Math.round(n/3)+"px",i.style.left=s.style.left,i.style.width=(this.enddate-this.startdate)*e+this.gaplength+"px"}},mounted:function(){this.drawlines()}},T=b,M=(n("f423"),Object(m["a"])(T,w,D,!1,null,null,null)),x=M.exports,k=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),N={components:{Issue:_,Dline:x},data:function(){return{scale:1,issuelist:h}},props:{developers:Array,startdate:Date,enddate:Date},methods:{gridtemplate:function(){return"120px repeat("+24*this.calendar_length+", 30px)"},find_date:function(t){var e=new Date(t.startTime),n=Math.round((e-this.startdate)/this.day_length),a=24*n+e.getHours()+1,r=new Date(t.endTime),s=Math.round((r-this.startdate)/this.day_length),i=24*s+r.getHours()+2;return[a,i]},area:function(t){var e=this.find_date(t),n=t.developerNum+3,a=n+"/"+e[0]+"/"+n+"/"+e[1];return a},goToday:function(){var t=document.getElementById("container");t.scrollLeft+=(this.today-this.startdate)/this.day_length*80-450},calendar:function(){for(var t=new Array(this.calendar_length),e=new Date(this.startdate),n=0;n<=this.calendar_length;n++)e.getDate()==this.today.getDate()&&e.getMonth()==this.today.getMonth()&&e.getFullYear()==this.today.getFullYear()?t[n]={month:k[this.today.getMonth()],day:this.today.getDate()+"\nToday"}:t[n]={month:k[e.getMonth()],day:e.getDate()},e.setDate(e.getDate()+1);return t}},computed:{day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return Math.round((this.enddate-this.startdate)/this.day_length)},lines:function(){for(var t=new Array,e=null,n=null,a=null,r=null,s=0;s<h.length;s++)if(0!=h[s].relatedTo.length)for(var i=0;i<h[s].relatedTo.length;i++)for(var d=0;d<h.length;d++)h[d].id==h[s].relatedTo[i]&&(r=new Date(h[d].endTime),e=Math.round((r-this.startdate)/this.day_length),e=24*e+r.getHours(),a=new Date(h[s].startTime),n=Math.round((a-this.startdate)/this.day_length),n=24*n+a.getHours()-1,t.push([h[d].developerNum,h[s].developerNum,e,n]));return t}},mounted:function(){}},C=N,A=(n("b125"),Object(m["a"])(C,u,c,!1,null,null,null)),O=A.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"grid-template-columns":t.gridtemplate()},attrs:{id:"container"}},[n("div",{staticClass:"firstblock"}),t._l(t.developers,(function(e,a){return n("div",{key:e,staticClass:"dev",style:{"grid-row":a+4}},[t._v(" "+t._s(e)+" ")])})),t._l(t.calendar(),(function(e,a){return n("div",{key:e+a,staticClass:"date",style:{"grid-column":a+2}},[n("p",[t._v(t._s(e.month))]),n("p",[t._v(t._s(e.day))])])})),t._l(t.issuelist,(function(e){return n("div",{key:e.id,style:{"grid-area":t.area(e)}},[n("Issue",{attrs:{name:e.name}})],1)})),t._l(t.lines,(function(t){return n("div",{key:t[0]+t[2],staticClass:"lines"},[n("Dline",{attrs:{startrow:t[0],endrow:t[1],startdate:t[2],enddate:t[3],datewidth:80,gaplength:20}})],1)}))],2)},I=[],j=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),E={components:{Issue:_,Dline:x},data:function(){return{scale:1,issuelist:h}},props:{developers:Array,startdate:Date,enddate:Date},methods:{gridtemplate:function(){return"120px repeat("+this.calendar_length+", 80px)"},find_date:function(t){var e=new Date(t.startTime),n=Math.round((e-this.startdate)/this.day_length)+1;return n},area:function(t){var e=this.find_date(t)+1,n=t.days,a=t.developerNum+3,r=a+"/"+e+"/"+a+"/span "+n;return r},goToday:function(){var t=document.getElementById("container");t.scrollLeft+=(this.today-this.startdate)/this.day_length*80-450},calendar:function(){for(var t=new Array(this.calendar_length),e=new Date(this.startdate),n=0;n<=this.calendar_length;n++)e.getDate()==this.today.getDate()&&e.getMonth()==this.today.getMonth()&&e.getFullYear()==this.today.getFullYear()?t[n]={month:j[this.today.getMonth()],day:this.today.getDate()+"\nToday"}:t[n]={month:j[e.getMonth()],day:e.getDate()},e.setDate(e.getDate()+1);return t}},computed:{day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return Math.round((this.enddate-this.startdate)/this.day_length)},lines:function(){for(var t=new Array,e=null,n=null,a=0;a<h.length;a++)if(0!=h[a].relatedTo.length)for(var r=0;r<h[a].relatedTo.length;r++)for(var s=0;s<h.length;s++)h[s].id==h[a].relatedTo[r]&&(e=Math.round((new Date(h[s].endTime)-this.startdate)/this.day_length),n=Math.round((new Date(h[a].startTime)-this.startdate)/this.day_length),t.push([h[s].developerNum,h[a].developerNum,e,n]));return t}},mounted:function(){}},S=E,F=(n("e3ed"),Object(m["a"])(S,J,I,!1,null,null,null)),Y=F.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"grid-template-columns":t.gridtemplate()},attrs:{id:"container"}},[n("div",{staticClass:"firstblock"}),t._l(t.developers,(function(e,a){return n("div",{key:e,staticClass:"dev",style:{"grid-row":a+4}},[t._v(" "+t._s(e)+" ")])})),t._l(t.weeks(),(function(e,a){return n("div",{key:e+a,staticClass:"week",style:{"grid-column":7*a+7+"/span 7"}},[n("p",[t._v(t._s(e.week)+" ")]),n("p",[t._v(t._s(e.dates)+" ")])])})),t._l(t.issuelist,(function(e){return n("div",{key:e.id,style:{"grid-area":t.area(e)}},[n("Issue",{attrs:{name:e.name,border:5,textsize:.75}})],1)})),t._l(t.lines,(function(t){return n("div",{key:t[0]+t[2],staticClass:"lines"},[n("Dline",{attrs:{startrow:t[0],endrow:t[1],startdate:t[2],enddate:t[3],datewidth:20,gaplength:5}})],1)}))],2)},B=[],z=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),P={components:{Issue:_,Dline:x},data:function(){return{issuelist:h,diffstart:0}},props:{developers:Array,startdate:Date,enddate:Date},computed:{day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return Math.round((this.enddate-this.startdate)/this.day_length)},lines:function(){for(var t=new Array,e=null,n=null,a=null,r=null,s=0;s<h.length;s++)if(0!=h[s].relatedTo.length)for(var i=0;i<h[s].relatedTo.length;i++)for(var d=0;d<h.length;d++)h[d].id==h[s].relatedTo[i]&&(e=new Date(h[d].endTime),e.setDate(e.getDate()+this.diffstart),n=new Date(h[s].startTime),n.setDate(n.getDate()+this.diffstart),a=Math.round((e-this.startdate)/this.day_length),r=Math.round((n-this.startdate)/this.day_length),t.push([h[d].developerNum,h[s].developerNum,a,r]));return t}},mounted:function(){},methods:{gridtemplate:function(){return"repeat("+this.calendar_length+", 20px)"},find_date:function(t){var e=new Date(t.startTime),n=Math.round((e-new Date(this.startdate))/this.day_length)+1;return n},area:function(t){var e=this.find_date(t)+6+this.diffstart,n=t.days,a=t.developerNum+3,r=a+"/"+e+"/"+a+"/span "+n;return r},goToday:function(){var t=document.getElementById("container");t.scrollLeft+=500},weeks:function(){var t=Array(),e=1,n=new Date(this.startdate);this.diffstart=n.getDay()<6?n.getDay()+1:0,n.setDate(n.getDate()-this.diffstart);for(var a=new Date(n),r=1;r<this.calendar_length+this.diffstart;r++)6==a.getDay()&&t.push({week:"Week "+e++,dates:z[a.getMonth()]+" "+a.getDate()+" - "}),5==a.getDay()&&(t[t.length-1].dates+=z[a.getMonth()]+" "+a.getDate()),a.setDate(a.getDate()+1);return 6!=a.getDay()&&(t[t.length-1].dates+=z[this.enddate.getMonth()]+" "+this.enddate.getDate()),t}}},H=P,L=(n("06dd"),Object(m["a"])(H,$,B,!1,null,null,null)),W=L.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"grid-template-columns":t.gridtemplate()},attrs:{id:"container"}},[n("div",{staticClass:"firstblock"}),t._l(t.developers,(function(e,a){return n("div",{key:e,staticClass:"dev",style:{"grid-row":a+4}},[t._v(" "+t._s(e)+" ")])})),t._l(t.months(),(function(e){return n("div",{key:e[0],staticClass:"month",style:{"grid-column":e[2]+2+"/span "+e[1],width:10*e[1]+"px"}},[n("p",[t._v(t._s(e[0])+" ")])])})),t._l(t.issuelist,(function(e){return n("div",{key:e.id,style:{"grid-area":t.area(e)}},[n("Issue",{attrs:{name:e.name,border:2,textsize:.65}})],1)})),t._l(t.lines,(function(t){return n("div",{key:t[0]+t[2],staticClass:"lines"},[n("Dline",{attrs:{startrow:t[0],endrow:t[1],startdate:t[2],enddate:t[3],datewidth:10,gaplength:2}})],1)}))],2)},q=[],G=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),Q={components:{Issue:_,Dline:x},data:function(){return{issuelist:h,monthstart:null}},props:{developers:Array,startdate:Date,enddate:Date},computed:{day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return Math.round((this.enddate-this.monthstart)/this.day_length)},lines:function(){for(var t=new Array,e=null,n=null,a=0;a<h.length;a++)if(0!=h[a].relatedTo.length)for(var r=0;r<h[a].relatedTo.length;r++)for(var s=0;s<h.length;s++)h[s].id==h[a].relatedTo[r]&&(e=Math.round((new Date(h[s].endTime)-this.monthstart)/this.day_length),n=Math.round((new Date(h[a].startTime)-this.monthstart)/this.day_length),t.push([h[s].developerNum,h[a].developerNum,e,n]));return t}},beforeMount:function(){this.monthstart=new Date(this.startdate),this.monthstart.setDate(1)},mounted:function(){},methods:{gridtemplate:function(){return"120px repeat("+this.calendar_length+", 10px)"},find_date:function(t){var e=new Date(t.startTime),n=Math.round((e-new Date(this.monthstart))/this.day_length)+1;return n},area:function(t){var e=this.find_date(t)+1,n=t.days,a=t.developerNum+3,r=a+"/"+e+"/"+a+"/span "+n;return r},daysInMonth:function(t,e){return 32-new Date(t,e,32).getDate()},months:function(){for(var t=0,e=new Array,n=0,a=[],r=0,s=this.startdate.getFullYear();s<=this.enddate.getFullYear();s++)a.push(s);if(1==a.length)r=this.enddate.getMonth()-this.monthstart.getMonth();else{r=11-this.startdate.getMonth();for(var i=2;i<a.length;i++)r+=12;r+=this.enddate.getMonth()+1}console.log(r);for(var d=0,l=0;l<=r;l++)(this.startdate.getMonth()+l)%12==0&&d++,t=this.daysInMonth(a[d],(this.startdate.getMonth()+l)%12),e.push([G[(this.startdate.getMonth()+l)%12]+" "+a[d],t,n]),n+=t;return e}}},R=Q,U=(n("9ce1"),Object(m["a"])(R,K,q,!1,null,null,null)),V=U.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"grid-template-columns":t.gridtemplate()},attrs:{id:"container"}},[n("div",{staticClass:"firstblock"}),t._l(t.developers,(function(e,a){return n("div",{key:e,staticClass:"dev",style:{"grid-row":a+4}},[t._v(" "+t._s(e)+" ")])})),t._l(t.years,(function(e,a){return n("div",{key:e,staticClass:"year",style:{"grid-column":366*a+2+"/span 366"}},[n("p",[t._v(t._s(e))])])})),t._l(t.months(),(function(e){return n("div",{key:e[0]+e[2],staticClass:"monthyear",style:{"grid-column":e[2]+2+"/span "+e[1],width:5*e[1]+"px"}},[n("p",[t._v(t._s(e[0])+" ")])])})),t._l(t.issuelist,(function(e){return n("div",{key:e.id,style:{"grid-area":t.area(e)}},[n("Issue",{attrs:{name:e.name,border:2,textsize:.65}})],1)})),t._l(t.lines,(function(t){return n("div",{key:t[0]+t[2],staticClass:"lines"},[n("Dline",{attrs:{startrow:t[0],endrow:t[1],startdate:t[2],enddate:t[3],datewidth:5,gaplength:3}})],1)}))],2)},Z=[],tt=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),et={components:{Issue:_,Dline:x},data:function(){return{issuelist:h,years:[],startyear:null}},props:{developers:Array,startdate:Date,enddate:Date},computed:{day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return 366*this.years.length},lines:function(){for(var t=new Array,e=null,n=null,a=0;a<h.length;a++)if(0!=h[a].relatedTo.length)for(var r=0;r<h[a].relatedTo.length;r++)for(var s=0;s<h.length;s++)h[s].id==h[a].relatedTo[r]&&(e=Math.round((new Date(h[s].endTime)-this.startyear)/this.day_length),n=Math.round((new Date(h[a].startTime)-this.startyear)/this.day_length)+1,t.push([h[s].developerNum,h[a].developerNum,e,n]));return t}},beforeMount:function(){this.computyears(),this.startyear=new Date(this.years[0],0,1)},methods:{gridtemplate:function(){return"120px repeat("+366*this.years.length+", 5px)"},find_date:function(t){var e=new Date(t.startTime),n=Math.round((e-new Date(this.startdate.getFullYear(),0,1))/this.day_length)+2;return n},area:function(t){var e=this.find_date(t)+1,n=t.days,a=t.developerNum+3,r=a+"/"+e+"/"+a+"/span "+n;return r},daysInMonth:function(t,e){return 32-new Date(t,e,32).getDate()},computyears:function(){for(var t=this.startdate.getFullYear();t<=this.enddate.getFullYear();t++)this.years.push(t)},months:function(){for(var t=0,e=new Array,n=0,a=-1,r=0;r<12*this.years.length;r++)r%12==0&&a++,t=this.daysInMonth(this.years[a],r%12),e.push([tt[r%12],t,n]),n+=t;return e}}},nt=et,at=(n("38dc"),Object(m["a"])(nt,X,Z,!1,null,null,null)),rt=at.exports,st={components:{Dayline:Y,Hourline:O,Weekline:W,Monthline:V,Yearline:rt},data:function(){return{scale:1,developers:l,startdate:null,enddate:null,timelines:["Hourline","Dayline","Weekline","Monthline","Yearline"]}},computed:{timeline:function(){return this.timelines[this.scale]},day_length:function(){var t=864e5;return t},today:function(){return new Date},calendar_length:function(){return(this.enddate-this.startdate)/this.day_length}},beforeMount:function(){this.startdate=new Date(o.start),this.enddate=new Date(o.end)},methods:{zoom:function(t){t.preventDefault(),this.scale+=t.deltaY>0?this.scale<4?1:0:this.scale>0?-1:0}}},it=st,dt=(n("995e"),Object(m["a"])(it,i,d,!1,null,null,null)),lt=dt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logcontainer"},[n("h2",[t._v("BackLog")]),n("div",{attrs:{id:"log"}},t._l(t.issue,(function(e,a){return n("div",{key:a,staticClass:"issue_item"},[t._v(" "+t._s(e)+" ")])})),0)])},ut=[],ct=n("fd7a"),ht={data:function(){return{issue:ct}}},ft=ht,pt=(n("fd24"),Object(m["a"])(ft,ot,ut,!1,null,null,null)),gt=pt.exports,vt={name:"App",components:{Timeline:lt,Backlog:gt}},mt=vt,yt=(n("034f"),Object(m["a"])(mt,r,s,!1,null,null,null)),_t=yt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(_t)}}).$mount("#app")},"695d":function(t,e,n){},7621:function(t,e,n){},"85ec":function(t,e,n){},"883a":function(t,e,n){},"995e":function(t,e,n){"use strict";var a=n("bcdc"),r=n.n(a);r.a},"9ce1":function(t,e,n){"use strict";var a=n("274f"),r=n.n(a);r.a},a02b:function(t,e,n){},b125:function(t,e,n){"use strict";var a=n("695d"),r=n.n(a);r.a},bcdc:function(t,e,n){},bdcd:function(t,e,n){},d4fb:function(t){t.exports=JSON.parse('["dev1","dev2","dev3","dev4","dev5","dev6","dev7","dev8","dev9","dev10","dev11","dev12"]')},e3ed:function(t,e,n){"use strict";var a=n("a02b"),r=n.n(a);r.a},f423:function(t,e,n){"use strict";var a=n("2fb7"),r=n.n(a);r.a},fd24:function(t,e,n){"use strict";var a=n("883a"),r=n.n(a);r.a},fd7a:function(t){t.exports=JSON.parse('["issue5","issue6","issue7","issue8","issue9","issue10","issue11"]')}});
//# sourceMappingURL=app.7539f58e.js.map
(window.webpackJsonpLogan=window.webpackJsonpLogan||[]).push([[3],{10:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(12),a=n(0),i=function(){},u=function(e){var t="XDomainRequest"in window,n=t?new window.XDomainRequest:new XMLHttpRequest;if(n.open(e.type||"GET",e.url,!0),n.success=e.success||i,n.fail=e.fail||i,n.withCredentials=!!e.withCredentials,t?(n.onload=e.success||i,n.onerror=e.fail||i,n.onprogress=i):n.onreadystatechange=function(){if(4==n.readyState)if(n.status>=200)try{var t=JSON.parse(n.responseText);e.success&&e.success(t)}catch(t){e.fail&&e.fail(t)}else e.fail&&e.fail(n.statusText)},"POST"===e.type){if(e.header&&!t)for(var r in e.header)r in e.header&&n.setRequestHeader(r,e.header[r]);n.send(e.data)}else n.send();return n},c=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};function l(e,t){return c(this,void 0,void 0,(function(){return s(this,(function(n){return[2,new Promise((function(n,r){u({url:e,type:"POST",data:JSON.stringify(t),withCredentials:!0,header:{"Content-Type":"application/json",Accept:"application/json,text/javascript"},success:function(e){n(e)},fail:function(e){r(e||new Error("Ajax error"))}})}))]}))}))}var f=n(2);n.d(t,"default",(function(){return g}));var p,d=function(){return(d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},h=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}};function g(e){return h(this,void 0,void 0,(function(){var t,n,i,u,c,s,g,y;return b(this,(function(w){switch(w.label){case 0:if(o.b.idbIsSupported())return[3,1];throw new Error(r.b.DB_NOT_SUPPORT);case 1:return p||(p=new o.b(a.a.get("dbName"))),[4,p.getLogDaysInfo(e.fromDayString,e.toDayString)];case 2:t=w.sent(),n=t.reduce((function(e,t){var n;return d(((n={})[t[o.a]]=t.reportPagesInfo?t.reportPagesInfo.pageSizes.map((function(e,n){return p.logReportNameFormatter(t[o.a],n)})):[],n),e)}),{}),i={},u=Object(f.d)(e.fromDayString),c=Object(f.d)(e.toDayString),s=+u,w.label=3;case 3:if(!(s<=+c))return[3,10];if(g=Object(f.c)(new Date(s)),!(n[g]&&n[g].length>0))return[3,8];w.label=4;case 4:return w.trys.push([4,6,,7]),[4,Promise.all(n[g].map((function(t){return function(e,t){return h(this,void 0,void 0,(function(){var n,r;return b(this,(function(o){switch(o.label){case 0:return[4,p.getLogsByReportName(e)];case 1:return n=o.sent(),r=p.logReportNameParser(e),[4,l(t.reportUrl||a.a.get("reportUrl"),{client:"Web",webSource:""+(t.webSource||""),deviceId:t.deviceId,environment:""+(t.environment||""),customInfo:""+(t.customInfo||""),logPageNo:r.pageIndex+1,fileDate:r.logDay,logArray:n.map((function(e){return encodeURIComponent(e.logString)})).toString()})];case 2:return[2,o.sent()]}}))}))}(t,e)})))];case 5:return w.sent().forEach((function(e){if(200!==e.code)throw new Error("Server error: "+e.code)})),i[g]={msg:r.b.REPORT_LOG_SUCC},[3,7];case 6:return y=w.sent(),i[g]={msg:r.b.REPORT_LOG_FAIL,desc:y.message||y.stack||JSON.stringify(y)},[3,7];case 7:return[3,9];case 8:i[g]={msg:r.b.NO_LOG},w.label=9;case 9:return s+=f.b,[3,3];case 10:return[2,i]}}))}))}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(15),o=n(2),a=n(1),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},c=1,s="logan_web_db",l="logan_detail_table",f="logReportName",p="logCreateTime",d="log_day_table",h="logDay",b=7*o.a,g=1*o.a,y=function(){function e(e){var t;this.DB=new r.CustomDB({dbName:e||s,dbVersion:c,tables:(t={},t[l]={indexList:[{indexName:f,unique:!1},{indexName:p,unique:!1}]},t[d]={primaryKey:h},t)})}return e.prototype.logReportNameFormatter=function(e,t){return e+"_"+t},e.prototype.logReportNameParser=function(e){var t=e.split("_");return{logDay:t[0],pageIndex:+t[1]}},e.prototype.getLogDayInfo=function(e){return i(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItem(d,e)];case 1:return[2,t.sent()]}}))}))},e.prototype.getLogDaysInfo=function(e,t){return i(this,void 0,void 0,(function(){var n;return u(this,(function(r){switch(r.label){case 0:return e!==t?[3,2]:[4,this.DB.getItem(d,e)];case 1:return[2,(n=r.sent())?[n]:[]];case 2:return[4,this.DB.getItemsInRange({tableName:d,indexRange:{indexName:h,lowerIndex:e,upperIndex:t,lowerExclusive:!1,upperExclusive:!1}})];case 3:return[2,r.sent()]}}))}))},e.prototype.getLogsByReportName=function(e){return i(this,void 0,void 0,(function(){return u(this,(function(t){switch(t.label){case 0:return[4,this.DB.getItemsInRange({tableName:l,indexRange:{indexName:f,onlyIndex:e}})];case 1:return[2,t.sent()]}}))}))},e.prototype.addLog=function(e){return i(this,void 0,void 0,(function(){var t,n,r,i,c,s,y,w,v,m,S,I,x,D,N;return u(this,(function(u){switch(u.label){case 0:return t=Object(o.g)(e),n=new Date,r=Object(o.c)(n),[4,this.getLogDayInfo(r)];case 1:if((i=u.sent()||((x={})[h]=r,x.totalSize=0,x.reportPagesInfo={pageSizes:[0]},x)).totalSize+t>b)throw new Error(a.b.EXCEED_LOG_SIZE_LIMIT);return i.reportPagesInfo||(i.reportPagesInfo={pageSizes:[0]}),c=i.reportPagesInfo.pageSizes,s=c.length-1,y=c[s],w=y>0&&y+t>g,O=c.slice(),w?O.push(t):O[s]+=t,v=O,(D={})[f]=this.logReportNameFormatter(r,w?s+1:s),D[p]=+n,D.logSize=t,D.logString=e,m=D,(N={})[h]=r,N.totalSize=i.totalSize+t,N.reportPagesInfo={pageSizes:v},S=N,I=6048e5-(+new Date-Object(o.e)(new Date)),[4,this.DB.addItems([{tableName:l,item:m,itemDuration:I},{tableName:d,item:S,itemDuration:I}])];case 2:return u.sent(),[2]}var O}))}))},e.idbIsSupported=r.idbIsSupported,e.deleteDB=r.deleteDB,e}();t.b=y}}]);
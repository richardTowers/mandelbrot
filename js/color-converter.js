// Generated by CoffeeScript 1.4.0
(function(){window.define(function(){"strict mode";var e;e=function(){function i(){}var e,t,n,r;i.prototype.colorToHsv=function(e){if(e.h!=null&&e.s!=null&&e.v!=null)return e;if(e.r!=null&&e.g!=null&&e.b!=null)return r(e);throw e+" is not a supported color."};i.prototype.colorToRgb=function(e){if(e.r!=null&&e.g!=null&&e.b!=null)return e;if(e.h!=null&&e.s!=null&&e.v!=null)return t(e);throw e+" is not a supported color."};r=function(t){var n,r,i,s,o,u,a,f,l;a=t.r/255;r=t.g/255;n=t.b/255;s=Math.max(a,r,n);o=Math.min(a,r,n);u=s-o;f=s===0?0:u/s;switch(s){case o:i=0;break;case a:i=(r-n)/u+((l=r<n)!=null?l:{6:0});break;case r:i=(n-a)/u+2;break;case n:i=(a-r)/u+4}i*=60;return e(i,f,s)};t=function(e){var t,r,i,s,o,u;r=e.h;s=e.s;o=e.v;r<360?r<0&&(r+=(1+Math.floor(r/360))*360):r-=Math.floor(r/360)*360;s=Math.max(0,Math.min(1,s));o=Math.max(0,Math.min(1,o));t=o*s;u=t*(1-Math.abs(r/60%2-1));i=o-t;s===0?e=n(0,0,0):0<=r&&r<60?e=n(t,u,0):60<=r&&r<120?e=n(u,t,0):120<=r&&r<180?e=n(0,t,u):180<=r&&r<240?e=n(0,u,t):240<=r&&r<320?e=n(u,0,t):320<=r&&r<360&&(e=n(t,0,u));e.r=255*(e.r+i);e.g=255*(e.g+i);e.b=255*(e.b+i);return e};n=function(e,t,n){return{r:e,g:t,b:n}};e=function(e,t,n){return{h:e,s:t,v:n}};return i}();return e})}).call(this);
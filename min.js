/*! litejs.com/MIT-LICENSE.txt */
String.naturalCompare=function(e,f,l){function k(b,c,a){a=l&&l.indexOf(b.charAt(c));return-1<a?a+76:(a=b.charCodeAt(c)||0,45>a||127<a)?a:46>a?65:48>a?a-1:58>a?a+18:65>a?a-11:91>a?a+11:97>a?a-37:123>a?a+5:a-63}l=String.alphabet;if((e+="")!=(f+=""))for(var d,c,b=1,g=0,h=0;b;){c=k(e,g++);b=k(f,h++);if(!d&&76>c&&76>b&&66<c&&66<b){for(d=g;c=k(e,g),76>c&&65<c;g++);c=+e.slice(d-1,g);for(d=h;b=k(f,h),76>b&&65<b;h++);b=+f.slice(d-1,h)}d=66==c||66==b;if(c!=b)return c<b?-1:1}return 0};
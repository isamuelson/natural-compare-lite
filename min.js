String.natural_compare=function(d,e){var c,a,b,f=0,g=0;if(d!==e)for(;""!==a;){a=d.charAt(f++);b=e.charAt(g++);if("/"<a&&":">a){for(;c=d.charAt(f),"/"<c&&":">c;f++)a+=c;a|=0}if("/"<b&&":">b){if("number"!==typeof a)return 1;for(;c=e.charAt(g),"/"<c&&":">c;g++)b+=c;b|=0}else if("number"===typeof a)return-1;if(a>b)return 1;if(a<b)return-1}return 0};
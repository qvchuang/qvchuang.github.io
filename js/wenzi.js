// build time:Fri Feb 28 2020 20:07:53 GMT+0800 (GMT+08:00)
var a_idx=0;jQuery(document).ready(function(a){a("body").click(function(o){var n=new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");var t=a("<span></span>").text(n[a_idx]);a_idx=(a_idx+1)%n.length;var e=o.pageX,d=o.pageY;t.css({"z-index":1e69,top:d-20,left:e,position:"absolute","font-weight":"bold",color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"});a("body").append(t);t.animate({top:d-180,opacity:0},1500,function(){t.remove()})})});
//rebuild by neat 
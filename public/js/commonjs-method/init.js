 require.config({
    baseUrl: "/js/commonjs-method/",
    paths: {
        "jquery"			: "lib/jquery",
        "module.loader" 	: "modules/module.loader",
        "module.one" 		: "modules/module.one",
        "module.two" 		: "modules/module.two",
        "module.three" 		: "modules/module.three",
        "util1"				: "utils/util1"
    },
    waitSeconds: 15,
  });
 
 require(['jquery','module.loader',component],function($,module,component){
	 module.init(function(response){
		 component.init();
	 });
 });
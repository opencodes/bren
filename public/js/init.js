 require.config({
    baseUrl: "/js",
    paths: {
        "jquery"			: "lib/jquery",
        "module.loader" 	: "modules/module.loader",
        "module.one" 		: "modules/module.one",
        "module.two" 		: "modules/module.two",
        "module.three" 		: "modules/module.three"
    },
    waitSeconds: 15,
  });
 
 require(['jquery','module.loader','module.one'],function($,module,core){
	 module.init(function(response){
		 core.init();
	 });
 });
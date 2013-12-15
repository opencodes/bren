requirejs.config({
    paths: {
        "jquery": "lib/jquery",
        "jquery.bootstrap": "lib/bootstrap.min",
        "module-loader": "modules/module-loader"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        },
        "module-loader": {
            deps: ["jquery.bootstrap"]
        }
    }
});

require(["jquery", "jquery.bootstrap","module-loader"], function ($,b,module) {
	module.init();
});

/** 
 * A module representing a module.
 * @module module-name
 */
define(function () {
    /**
    @class app.storefront
    */
    	var $cache = {};
    	storefront = {
    		init : function () {
    			$cache = {
    				slide : $('.slide'),
    				slider : $('#homepage-slider'),
    				wrapper : $('#wrapper')
    			};

    			
    		}
    	};

    return storefront;
});
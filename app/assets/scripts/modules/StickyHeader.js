import $ from "jquery";
import Waypoints from './../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.largeHeroTitle = $('.large-hero__title');
        this.createStickyWaypoint();
    }

    createStickyWaypoint ()  {
        var that = this;
        new Waypoint({
            element: this.largeHeroTitle[0],
            handler: function(direction) {
                if(direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                }else {
                    that.siteHeader.removeClass("site-header--dark");   
                }
            }
        })
    }
}

export default StickyHeader;
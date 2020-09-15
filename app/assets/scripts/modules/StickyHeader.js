import $ from "jquery";
import Waypoints from './../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.largeHeroTitle = $('.large-hero__title');
        this.createStickyWaypoint();
        this.pageSection = $('.page-section');
        this.createLinkPointer();
        this.primaryNav = $(".primary-nav a");
        this.deleteColorWhenReachTitle();
        this.smoothingScrolling();
    }

    smoothingScrolling () {
        this.primaryNav.smoothScroll();
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

    createLinkPointer() {
        var that = this;
        this.pageSection.each((num,els) => {
            new Waypoint({
                element: els,
                handler: function(direction) {
                    if(direction === 'down') {
                        var currentSection = els.getAttribute("data-machine-link");
                    that.primaryNav.removeClass("is-current-link");
                    $(currentSection).addClass("is-current-link");
                    }
                    
                },
                offset: "18%",
            })

            new Waypoint({
                element: els,
                handler: function(direction) {
                    if(direction === 'up') {
                        var currentSection = els.getAttribute("data-machine-link");
                    that.primaryNav.removeClass("is-current-link");
                    $(currentSection).addClass("is-current-link");
                    }
                    
                },
                offset: "-40%",
            })
        })
    }

    deleteColorWhenReachTitle() {
        var that = this;
        new Waypoint({
            element: this.largeHeroTitle[0],
            handler: function() {
                that.primaryNav.removeClass("is-current-link");
            }
        })
    }
}

export default StickyHeader;
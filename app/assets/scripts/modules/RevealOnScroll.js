import $ from "jquery";
import Waypoints from "./../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercent = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWayPoints() {
    var that = this;
    this.itemsToReveal.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercent,
      });
    });
  }
}

export default RevealOnScroll;

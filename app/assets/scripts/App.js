import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll ($(".testimonial"),"75%");
new RevealOnScroll ($(".feature-item"),"85%");


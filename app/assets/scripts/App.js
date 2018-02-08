 
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
 
import Modal from './modules/Modal';

// var mobileMenu = new MobileMenu();
new RevealOnScroll($(".work"),"85%");

var stickyHeader = new StickyHeader();
var modal = new Modal();
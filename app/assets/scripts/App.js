 
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
 
import Modal from './modules/Modal';

// var mobileMenu = new MobileMenu();
// new RevealOnScroll($(".work__image-area"),"85%","fadeIn");
// class name: animateUp animateRight animateLeft
//parameter: fadeInUp fadeInRight fadeInLeft
new RevealOnScroll($(".animateUp"),"85%","fadeInUp");
new RevealOnScroll($(".animateRight"),"60%","fadeInRight");
new RevealOnScroll($(".animateLeft"),"85%","fadeInLeft");


var stickyHeader = new StickyHeader();
var modal = new Modal();
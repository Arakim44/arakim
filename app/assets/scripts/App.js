 
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
 
import Modal from './modules/Modal';

// var mobileMenu = new MobileMenu();
// new RevealOnScroll($(".work__image-area"),"85%","fadeIn");
new RevealOnScroll($("#up1"),"85%","fadeInUp");
new RevealOnScroll($("#up2"),"60%","fadeInRight");
new RevealOnScroll($("#up3"),"85%","fadeInLeft");


var stickyHeader = new StickyHeader();
var modal = new Modal();
import { gsap } from "gsap/all";

export function test(){
    const tlOpen = gsap.timeline({paused: true});
    const tlClose = gsap.timeline({paused: true});

    const el = document.querySelector('.menu-module'),
        itEl = el.querySelector('.it-module'),
        opEl = document.querySelector('.open-menu'),
        openTriggerTop = opEl.querySelector('.bar.top'),
        openTriggerMiddle = opEl.querySelector('.bar.middle'),
        openTriggerBottom = opEl.querySelector('.bar.bottom');

    const csEl = document.querySelector('.close-menu'),
        closeTriggerLeft = csEl.querySelector('.bar.left'),
        closeTriggerRight = csEl.querySelector('.bar.right');

    const menuContainer = document.querySelector('.gnb'),
        menu = document.querySelector('.depth1'),
        menuTop = document.querySelector('.menu-bg.top'),
        menuMiddle = document.querySelector('.menu-bg.middle'),
        menuBottom = document.querySelector('.menu-bg.bottom');
    console.log(openTriggerTop)
    
    tlOpen.add("preOpen").to(openTriggerTop, 0.4, { x: "80px", y: "-80px", delay: 0.1, ease: "Power4.easeIn", onComplete: function() {
        csEl.style.zIndex = "25";
    }}, "preOpen")
    .to(openTriggerMiddle, 0.4, { x: "80px", y: "-=80px", ease: "Power4.easeIn", onComplete: function() {
        opEl.style.visibility = "hidden";
    }}, "preOpen")
    .to(openTriggerBottom, 0.4, { x: "80px", y: "-=80px", delay: 0.2, ease: "Power4.easeIn" }, "preOpen")
    .add("open", "-=0.4")
    .to(menuTop, 0.8, { y: "13%", ease: "Power4.easeInOut" }, "open")
    .to(menuMiddle, 0.8, { scaleY: 1, ease: "Power4.easeInOut" }, "open")
    .to(menuBottom, 0.8, { y: "-114%", ease: "Power4.easeInOut" }, "open")
    .fromTo(menu, 0.6, { y: 30, opacity: 0, visibility: 'hidden' }, { y: 0, opacity: 1, visibility: 'visible', ease: "Power4.easeOut" }, "-=0.2")
    .add("preClose", "-=0.8")
    .to(closeTriggerLeft, 0.8, { x: "-=100px", y: "+=100px", ease: "Power4.easeOut" }, "preClose")
    .to(closeTriggerRight, 0.8, { x: "+=100px", y: "+=100px", delay: 0.2, ease: "Power4.easeOut" }, "preClose");

    // close
    tlClose.add("close")
    .to(menuTop, 0.2, { backgroundColor: "#6295ca", ease: "Power4.easeInOut", onComplete: function() {
        csEl.style.zIndex = "5";
        opEl.style.visibility = "visible";
    }}, "close")
    .to(menuMiddle, 0.2, { backgroundColor: "#6295ca", ease: "Power4.easeInOut" }, "close") 
    .to(menuBottom, 0.2, { backgroundColor: "#6295ca", ease: "Power4.easeInOut" }, "close")
    .to(menu, 0.6, { y: 20, opacity: 0, ease: "Power4.easeOut", onComplete: function() {
        menu.style.visibility = "hidden";
    }}, "close")
    .to(menuTop, 0.8, { y: "-113%", ease: "Power4.easeInOut" }, "close", "+=0.2")
    .to(menuMiddle, 0.8, { scaleY: 0, ease: "Power4.easeInOut" }, "close", "+=0.2")
    .to(menuBottom, 0.8, { y: "23%", ease: "Power4.easeInOut", onComplete: function() {
        menuTop.style.backgroundColor = "#222";
        menuMiddle.style.backgroundColor = "#222";
        menuBottom.style.backgroundColor = "#222";
    }}, "close", "+=0.2")
    .to(closeTriggerLeft, 0.2, { x: "+=100px", y: "-=100px", ease: "Power4.easeIn" }, "close")
    .to(closeTriggerRight, 0.2, { x: "-=100px", y: "-=100px", delay: 0.1, ease: "Power4.easeIn" }, "close")
    .to(openTriggerTop, 1, { x: "-=80px", y: "+=80px", delay: 0.2, ease: "Power4.easeOut" }, "close")
    .to(openTriggerMiddle, 1, { x: "-=80px", y: "+=80px", ease: "Power4.easeOut" }, "close")
    .to(openTriggerBottom, 1, { x: "-=80px", y: "+=80px", delay: 0.1, ease: "Power4.easeOut"}, "close");

    let opCheck = false;
    let csCheck = false;
    opEl.addEventListener('click', function (e) {
        if(opCheck){
            return false;
        } else {
            itEl.style.display = 'block';
            if (tlOpen.progress() < 1) {
                tlOpen.play();
            } else {
                tlOpen.restart();
            }
            csCheck = true;
            setTimeout(function() {
                csCheck = false;
            }, 1200);
        }

    });

    csEl.addEventListener('click', function(){
        if(csCheck){
            return false;
        } else {
            if(tlClose.progress() < 1){
                tlClose.play();
            } else {
                tlClose.restart();
            }
            opCheck = true;
            setTimeout(function() {
                itEl.style.display = 'none';
                opCheck = false;
            }, 600);
        }
    });

}

export function test2(){
    console.log(2)
}
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
// const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    big_title.style.opacity = - scroll / (header_height / 2) + 1;
    // shadow.style.height = `${scroll * 0.8 + 300}px`;

    // content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll / (section_height + sectionY.top) * -50 + 50}px)`;

    // border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;
})



let bright = document.getElementById('birdright');
let bleft = document.getElementById('birdleft');
let backmount = document.getElementById('backmount');
let fortpc = document.getElementById('fortpc');
let fortmob = document.getElementById('fortmob');
let btn = document.getElementById('btn');



window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bright.style.right = 20 + value * -0.04 + '%';
    bleft.style.left = 12 + value * -0.04 + '%';
    backmount.style.left = value * -0.25 + 'px';
    fortpc.style.top = 23 + value * -0.03 + '%';
    fortmob.style.top = 34 + value * -0.03 + '%';
    btn.style.top = 50 + value * -0.2 + '%';

})





const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if (!activePanel) return;
    toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents =
        panelToActivate.parentElement.querySelectorAll(".accordion-content");

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true);
    });

    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

    panelToActivate
        .querySelector(".accordion-content")
        .setAttribute("aria-hidden", false);
}



/////////////////////////email//////////////

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_ldtiiv8";
    const templateID = "template_76q36mk";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}



document.addEventListener('scroll', () => {
    const header = document.querySelector('nav');

    if (window.scrollY > 400) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/////////////send buttujm///////


// gsap.registerPlugin(MotionPathPlugin);
// MorphSVGPlugin.convertToPath("circle, rect");
// gsap.set("#paperPlaneRoute", { drawSVG: "0% 0%" });
// gsap.set("#rectSentItems", { x: "-=240" });
// const tl = gsap.timeline();

// let ranOnce = false;

// function onBtnUp() {
//     if (ranOnce) {
//         tl.restart();
//         return;
//     }
//     ranOnce = true;
//     tl.to("#base", { duration: 0.2, scale: 1, transformOrigin: "50% 50%" });
//     tl.to(
//         "#btnBase",
//         { duration: 0.77, morphSVG: "#cBottom", ease: "power1.inOut" },
//         "start"
//     );

//     tl.to("#btnBase", { duration: 0.23, morphSVG: "#cTop", ease: "power1.inOut" });
//     tl.to("#btnBase", {
//         duration: 0.2,
//         morphSVG: "#cCenter",
//         ease: "power1.inOut"
//     });
//     tl.to(
//         "#btnBase",
//         { duration: 0.5, morphSVG: "#cEnd", ease: "power1.inOut" },
//         "revealStart"
//     );
//     tl.to("#rectSentItems", { x: "0", duration: 0.5 }, "revealStart");
//     tl.to(
//         "#mask1",
//         { x: "-=260", duration: 0.5, ease: "power1.inOut" },
//         "revealStart"
//     );
//     tl.to(
//         "#paperPlane",
//         { x: "-=205", duration: 0.5, ease: "power1.inOut" },
//         "revealStart"
//     );
//     tl.to(
//         "#paperPlanePath",
//         { duration: 0.43, morphSVG: "#tickMark" },
//         "start+=0.77"
//     );

//     tl.to(
//         "#txtSend",
//         { duration: 0.6, scale: 0, transformOrigin: "50% 50%" },
//         "start"
//     );
//     tl.to(
//         "#paperPlaneRoute",
//         { drawSVG: "80% 100%", duration: 0.7, ease: "power1.inOut" },
//         "start+=0.3"
//     );
//     tl.to(
//         "#paperPlaneRoute",
//         { drawSVG: "100% 100%", duration: 0.2, ease: "power1.inOut" },
//         "start+=1"
//     );

//     tl.to(
//         "#paperPlane",
//         {
//             duration: 1,
//             ease: "power1.inOut",
//             immediateRender: true,
//             motionPath: {
//                 path: "#paperPlaneRoute",
//                 align: "#paperPlaneRoute",
//                 alignOrigin: [0.5, 0.5],
//                 autoRotate: 90
//             }
//         },
//         "start"
//     );

//     tl.to(
//         "#paperPlanePath",
//         { duration: 0.15, attr: { fill: "#ffffff" } },
//         "start"
//     );
//     tl.to(
//         "#paperPlanePath",
//         { duration: 0.15, attr: { fill: "#4E67E8" } },
//         "start+=0.77"
//     );
// }

// function onBtnDown() {
//     gsap.timeline({ defaults: { clearProps: true } });
//     gsap.to("#base", { duration: 0.1, scale: 0.9, transformOrigin: "50% 50%" });
// }

// const btn = document.getElementById("base");
// btn.addEventListener("mousedown", onBtnDown);
// btn.addEventListener("mouseup", onBtnUp);

let pagesEnum = Object.freeze({"about":0, "experience":1, "projects":2, "interests":3});
const sidebarClosedWidth=80, sidebarOpenWidth=196;

$(document).ready(function () {

    $("#about").css("color", "#4ca1af");
    $("#about").css("background", "#fff");

    $('[data-toggle="tooltip"]').tooltip();

    $("#email-img").hover(() => {
        $("#email-img").css("height", 65);
        $("#email-img").css("width", 65);
    });

    $("#email-img").mouseleave(() => {
        $("#email-img").css("height", 50);
        $("#email-img").css("width", 50);
    });

    $("#github-img").hover(() => {
        $("#github-img").css("height", 65);
        $("#github-img").css("width", 65);
    });

    $("#github-img").mouseleave(() => {
        $("#github-img").css("height", 50);
        $("#github-img").css("width", 50);
    });

    $("#linkedin-img").hover(() => {
        $("#linkedin-img").css("height", 65);
        $("#linkedin-img").css("width", 65);
    });

    $("#linkedin-img").mouseleave(() => {
        $("#linkedin-img").css("height", 50);
        $("#linkedin-img").css("width", 50);
    });

    setTimeout(() => {
        $("#email-img").show(500);
    }, 300);

    setTimeout(() => {
        $("#linkedin-img").show(500);
    }, 600);

    setTimeout(() => {
        $("#github-img").show(500);
    }, 900);
    
    let pagesArr = [ $("#about-page"), $("#experience-page"), $("#projects-page"), $("#interests-page") ];
    let pageLinks = [ $("#about"), $("#experience"), $("#projects"), $("#interests") ];

    $("#about").click(() => {
        switchPage(pagesEnum.about, "About Me", pagesArr, pageLinks);
    });

    $("#interests").click(() => {
        switchPage(pagesEnum.interests, "My Interests", pagesArr, pageLinks);
    });

    $("#projects").click(() => {
        switchPage(pagesEnum.projects, "My Projects", pagesArr, pageLinks);
    });

    $("#experience").click(() => {
        switchPage(pagesEnum.experience, "My Experience", pagesArr, pageLinks);
    });

    if (/Mobi|Android/i.test(navigator.userAgent) || screen.width <= 575) {
        console.log("User on mobile device");
        console.log("Disabling sidebar expansion");
        return;
    }

    let sections = $(".section");

    $("#sidebar").hover(() => {
        $("#sidebar").addClass("inactive");
        $("#sidebar").removeClass("active");
        for (let i = 0; i < sections.length; i++) {
            $(sections[i]).css("margin-left", '' + sidebarOpenWidth + 'px');
        }
    });

    $("#sidebar").mouseleave(() => {
        $("#sidebar").addClass("active");
        $("#sidebar").removeClass("inactive");
        for (let i = 0; i < sections.length; i++) {
            $(sections[i]).css("margin-left", '' + sidebarClosedWidth + 'px');
        }
    });
});

function switchPage(page, pageTitle, pagesArr, pageLinks) {
    for (let i = 0; i < pagesArr.length; i++) {
        if (i != page) {
            pagesArr[i].hide();
            pageLinks[i].css("color", "#fff");
            pageLinks[i].css("background",  "#4ca1af");
        }

        else {
            pagesArr[i].show();
            pageLinks[i].css("color", "#4ca1af");
            pageLinks[i].css("background", "#fff");
            document.title = pageTitle;
        }
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

document.addEventListener('DOMContentLoaded', function() {
    const ht1 = document.getElementById('highlight-text-1');
    const ht2 = document.getElementById('highlight-text-2');
    const ht3 = document.getElementById('highlight-text-3');

    const ht1Wrapper = document.getElementById('text-1-wrapper');
    const ht2Wrapper = document.getElementById('text-2-wrapper');
    const ht3Wrapper = document.getElementById('text-3-wrapper');

    const about = document.getElementById('about-me');
    const projects = document.getElementById('projects');
    const interests = document.getElementById('interests');

    //Initial highlighted text is About
    highlightText(ht1);

    ht1Wrapper.addEventListener('click', function() { 
        highlightOneResetOthers(1);
    });

    ht2Wrapper.addEventListener('click', function() {
        highlightOneResetOthers(2); 
    });

    ht3Wrapper.addEventListener('click', function() { 
        highlightOneResetOthers(3);
    });

    projects.addEventListener('mouseenter', function() {
        highlightOneResetOthers(2);
    });

    interests.addEventListener('mouseenter', function() {
        highlightOneResetOthers(3);
    });

    about.addEventListener('mouseenter', function() {
        highlightOneResetOthers(1);
    });
});

function highlightOneResetOthers(number) {
    const ht1 = document.getElementById('highlight-text-1');
    const ht2 = document.getElementById('highlight-text-2');
    const ht3 = document.getElementById('highlight-text-3');

    if (number == 1) {
        highlightText(ht1);
        resetText(ht2);
        resetText(ht3);
    }

    else if (number == 2) {
        highlightText(ht2);
        resetText(ht1);
        resetText(ht3);
    }

    else {
        highlightText(ht3);
        resetText(ht2);
        resetText(ht1);
    }
}

$(window).scroll(function() {
    if ($(this).scrollTop() < 660)
        highlightOneResetOthers(1);
    
    if ($(this).scrollTop() > 660)
        highlightOneResetOthers(2);

    if ($(this).scrollTop() > 1700)
        highlightOneResetOthers(3);
});


function highlightText(element) {
    element.style.backgroundColor = "white";
    element.style.color = "black";
    element.style.paddingLeft = "5px";
    element.style.paddingRight = "5px";
    element.style.border = "1px solid #D0D0D0";
}

function resetText(element) {
    element.style.backgroundColor = "";
    element.style.color = "";
    element.style.paddingLeft = "";
    element.style.paddingRight = "";
    element.style.border = "";
}
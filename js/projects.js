const slideshowTimeout = 2500;
const animationHideTime = 300;
const animationShowTime = 500;

function setupSlideshows() {
  const loop = (slideshow) => {
  for (let i = 1; i < slideshow.length; i++) {
      const storedIndex = i;
      setTimeout(() => {
        $(slideshow[storedIndex - 1]).hide(animationHideTime);
        $(slideshow[storedIndex]).show(animationShowTime);
        if (storedIndex + 1 == slideshow.length) {
          setTimeout(() => {
              $(slideshow[slideshow.length - 1]).hide(animationHideTime);
              $(slideshow[0]).show(animationShowTime);
              loop(slideshow);
          }, slideshowTimeout);
        }
      }, slideshowTimeout * i);
    }
  }

  const slideshows = [$(".ios-slideshow"), $(".android-slideshow")];
  slideshows.forEach((slideshow) => {
    loop(slideshow);
  });
}

function setupProjectCards() {
  const projectCards = $(".project-card");
  projectCards.hover((evt) => {
    $(evt.currentTarget)[0].style.border = "4px solid #253D98";
  });

  projectCards.mouseleave((evt) => {
    $(evt.currentTarget)[0].style.border = "";
  });

  projectCards.click((evt) => {
    const children = $(evt.currentTarget)[0].children;
    const front = children[0];
    const back = children[1];

    if (front.style.display == "none") {
      $(back).hide(300);
      $(front).show(500);
    } else {
      $(front).hide(300);
      $(back).show(500);
    }
  });
}

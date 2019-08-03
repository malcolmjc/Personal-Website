function setupBottomBar() {
  $('[data-toggle="tooltip"]').tooltip();

  const bottomBarImages =  [ $("#email-img"), $("#github-img"), $("#linkedin-img") ];
  bottomBarImages.forEach((image, index) => {
    let hovered = false;
    const smallSize = 50, largeSize = 65;
    
    image.hover(() => {
      if (!hovered) {
        image.css("height", largeSize);
        image.css("width", largeSize);
        hovered = true;
      }
    });

    image.mouseleave(() => {
      hovered = false;
      image.css("height", smallSize);
      image.css("width", smallSize);
    });

    setTimeout(() => {
      image.show(500);
    }, 300 * (index + 1));
  });
}

function setupBottomBar() {
  $('[data-toggle="tooltip"]').tooltip();

  const bottomBarImages = $(".bottom-bar-img");
  $.each((bottomBarImages), (index, image) => {
    image = $(image);
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
  });
}

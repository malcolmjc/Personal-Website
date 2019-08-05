const PagesEnum = Object.freeze({ "ABOUT": 0, "EXPERIENCE": 1, "PROJECTS": 2, "INTERESTS": 3 });

function setupHomepageLinks() {
  const aboutHomepageLink = createHomepageLink($(".about"), "About Me", PagesEnum.ABOUT);
  const experienceHomepageLink = createHomepageLink($(".experience"), "My Experience", PagesEnum.EXPERIENCE);
  const projectsHomepageLink = createHomepageLink($(".projects"), "My Projects", PagesEnum.PROJECTS);
  const interestsHomepageLink = createHomepageLink($(".interests"), "My Interests", PagesEnum.INTERESTS);
  
  const pagesArr = [ $("#about-page"), $("#experience-page"), $("#projects-page"), $("#interests-page") ];
  const homepageLinks = [aboutHomepageLink, experienceHomepageLink, projectsHomepageLink, interestsHomepageLink];
  homepageLinks.forEach((homepageLink) => {
    homepageLink.elementRef.click(() => {
      switchPage(homepageLink.enumRef, homepageLink.pageTitle, pagesArr, homepageLinks);
    });
  });
}

function showHomepageButtons() {
  $.each($('.inpage-link-container'), (index, link) => {
    setTimeout(() => {
      $(link).removeAttr('hidden');
    }, (index + 1) * 700);
  });
}

function showBottomBar() {
  $.each($(".bottom-bar-img"), (index, image) => {
    setTimeout(() => {
      $( image ).show(500);
    }, 300 * (index + 1));
  });
}

function hideBottomBar() {
  $.each($(".bottom-bar-img"), (index, image) => {
    $(image).hide();
  });
}

function startHomepage() {
  showHomepageButtons();
  setupHomepageLinks();
  setupHomepage($(".homepage"));
}

function setupHomepage(homepage) {
  // if link is clicked close homepage
  $('.inpage-link-btn' ).on('click', () => {
    homepage.hide();
  });

  $('.navbar-toggler').on('click', () => {
    $('.home-button').attr('hidden', 'true');
    disableScroll();
    hideBottomBar();
    homepage.show();
  });
}

function disableScroll() {
  $('body').css('overflow', 'hidden');
}

function enableScroll() {
  $('body').css('overflow', 'auto');
}

function createHomepageLink(elementRef, pageTitle, enumRef) {
  return {
    elementRef: elementRef,
    pageTitle: pageTitle,
    enumRef: enumRef
  };
}

function switchPage(selectedPage, pageTitle, pagesArr, homepageLinks) {
  $( '.home-button' ).removeAttr('hidden');
  enableScroll();
  showBottomBar();

  pagesArr.forEach((page, index) => {
    if (index !== selectedPage) {
      page.hide();
    } else {
      page.show();
      document.title = pageTitle;
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}

function imageLinkButtonHover(elem) {
  elem.style.opacity = 0.8;

  const imageLink = elem.children[0];
  if (!imageLink) {
    return;
  }

  for (let child of imageLink.children) {
    if (child.tagName === 'svg' && child.hasAttribute('hidden')) {
      child.removeAttribute('hidden');
    }
  }
}

function imageLinkButtonLeave(elem) {
  elem.style.opacity = 1.0;

  const imageLink = elem.children[0];
  if (!imageLink) {
    return;
  }

  for (let child of imageLink.children) {
    if (child.tagName === 'svg' && !child.hasAttribute('hidden')) {
      child.setAttribute('hidden', 'true');
    }
  }
}

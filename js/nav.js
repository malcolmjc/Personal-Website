const PagesEnum = Object.freeze({ "ABOUT": 0, "EXPERIENCE": 1, "PROJECTS": 2, "INTERESTS": 3 });
const sidebarClosedWidth = 80, sidebarOpenWidth = 196;

function setupSidebarLinks() {
  const aboutSidebarLink = createSidebarLink($(".about"), "About Me", PagesEnum.ABOUT);
  const experienceSidebarLink = createSidebarLink($(".experience"), "My Experience", PagesEnum.EXPERIENCE);
  const projectsSidebarLink = createSidebarLink($(".projects"), "My Projects", PagesEnum.PROJECTS);
  const interestsSidebarLink = createSidebarLink($(".interests"), "My Interests", PagesEnum.INTERESTS);
  
  const pagesArr = [ $("#about-page"), $("#experience-page"), $("#projects-page"), $("#interests-page") ];
  const sidebarLinks = [aboutSidebarLink, experienceSidebarLink, projectsSidebarLink, interestsSidebarLink];
  sidebarLinks.forEach((sidebarLink) => {
    sidebarLink.elementRef.click(() => {
      switchPage(sidebarLink.enumRef, sidebarLink.pageTitle, pagesArr, sidebarLinks);
    });
  });

  aboutSidebarLink.elementRef.css("color", primaryColor);
  aboutSidebarLink.elementRef.css("background", secondaryColor);
}

function setupSidebar() {
  setupSidebarLinks();

  const sections = $(".section");
  const sidebar = $(".sidebar");

  if (/Mobi|Android/i.test(navigator.userAgent) || screen.width <= 575) {
    console.log("User on mobile device");
    console.log("Disabling sidebar expansion");

    setupMobileSidebar(sections, sidebar);
    return;
  }

  setupSidebarAnimations(sections, sidebar);
}

function setupSidebarAnimations(sections, sidebar) {
  let hovered = false;
  sidebar.hover(() => {
    if (!hovered) {
      sidebar.addClass("inactive");
      sidebar.removeClass("active");
      $(sections).css("margin-left", '' + sidebarOpenWidth + 'px');
      hovered = true;
    }
  });

  sidebar.mouseleave(() => {
    hovered = false;
    sidebar.addClass("active");
    sidebar.removeClass("inactive");
    $(sections).css("margin-left", '' + sidebarClosedWidth + 'px');
  });
}

function setupMobileSidebar(sections, sidebar) {
  // remove margin from normal sidebar
  $(sections).css("margin-left", "0px");

  $(".large-name").css("text-align", "left");
  $('.mobile-button').show();
  
  sidebar.hide();
  sidebar.addClass('inactive');
  sidebar.removeClass('active');
  sidebar.css('width', '100%');

  // if link is clicked close sidebar
  $('.inpage-link').on('click', () => {
    sidebar.hide()
    // enable scrolling
    document.ontouchmove = (e) => { 
      return true;
    }
    $('.animated-mobile-menu').toggleClass('open');
  });

  $('.navbar-toggler').on('click', () => {
    console.log('here');
    if (sidebar.is(':hidden')) {
      // prevent scrolling
      document.ontouchmove = (e) => { 
        e.preventDefault(); 
      }
      sidebar.show();
    } else {
      sidebar.hide();
      // enable scrolling
      document.ontouchmove = (e) => { 
        return true;
      }
    }

    $('.animated-mobile-menu').toggleClass('open');  
  });
}

function createSidebarLink(elementRef, pageTitle, enumRef) {
  return {
    elementRef: elementRef,
    pageTitle: pageTitle,
    enumRef: enumRef
  };
}

function switchPage(selectedPage, pageTitle, pagesArr, sidebarLinks) {
  pagesArr.forEach((page, index) => {
    const pageLink = sidebarLinks[index].elementRef;
    if (index != selectedPage) {
      page.hide();
      pageLink.css("color", secondaryColor);
      pageLink.css("background", primaryColor);
    } else {
      page.show();
      pageLink.css("color", primaryColor);
      pageLink.css("background", secondaryColor);
      document.title = pageTitle;
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
}

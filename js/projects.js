const slideshowTimeout = 2500;
const animationHideTime = 0;
const animationShowTime = 500;

activeLoops = []
function loop(slideshow) {
  console.log(activeLoops);
  if (activeLoops.includes(slideshow.id)) {
    return;
  }
  activeLoops.push(slideshow.id);
  $(slideshow.children[slideshow.children.length - 1]).hide(slideshowTimeout - animationShowTime);
  for (let i = 1; i <= slideshow.children.length; i++) {
    const storedIndex = i;
    setTimeout(() => {
      if (storedIndex < slideshow.children.length) {
        $(slideshow.children[storedIndex - 1]).hide(animationHideTime);
        $(slideshow.children[storedIndex]).show(animationShowTime);
      } else {
        const index = activeLoops.indexOf(slideshow.id);
        activeLoops.splice(index, 1);
      }
    }, slideshowTimeout * i);
  }
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

function buildSlideshowString(projectImageLinks, slideshowClass) {
  if (projectImageLinks.length === 1) {
    return `<img src="${projectImageLinks[0]}"></img>\n`;
  }

  slideshowString = '';
  let first = true;
  for (imageLink of projectImageLinks) {
    slideshowString += first ? `<img src="${imageLink}" class="${slideshowClass}"></img>\n`
                             : `<img src="${imageLink}" class="${slideshowClass}" style="display: none;"></img>\n`;
    first = false;
  }
  return slideshowString;
}

function buildProjects() {
  const dyeStats = {
    id: 'dye-stats',
    projectImageLinks: [
      'images/projects/dye-stats/add-game.png',
      'images/projects/dye-stats/group-stats.png',
      'images/projects/dye-stats/group.png',
      'images/projects/dye-stats/groups.png',
      'images/projects/dye-stats/leaderboard.png',
      'images/projects/dye-stats/signup.png'
    ],
    slideshowClass: 'dye-stats-slideshow',
    techImageLinks: [
      'images/projects/forrest-run/node-js.png',
      'images/projects/dye-stats/angular.png',
      'images/projects/dye-stats/mongodb.jpg'
    ],
    projectTitle: 'Dye Stats (Ongoing)',
    description: `
      A full stack web app built with the MEAN stack. A beta version is going to be
      released very soon via AWS.
    `,
    githubLink: 'https://github.com/malcolmjc/Stat-Tracking-App'
  };

  const iosApp = {
    id: 'ios-app',
    projectImageLinks: [
      'images/projects/ios-app/posts-phone.png',
      'images/projects/ios-app/ar-change.png',
      'images/projects/ios-app/ar-drawing.png',
      'images/projects/ios-app/groups.png'
    ],
    slideshowClass: 'ios-slideshow',
    techImageLinks: [
      'images/projects/ios-app/firebase-logo.png',
      'images/projects/ios-app/arkit-logo.jpg',
      'images/projects/ios-app/swift-logo.jpg'
    ],
    projectTitle: 'iOS App (Ongoing)',
    description: `
      A mobile application that allows for anonymous posts and group creation.
      Posts can be both in text format and virtual AR Graffiti.
    `,
    githubLink: 'https://github.com/malcolmjc/Mobile-App-Dev-Final-Project'
  };

  const androidApp = {
    id: 'android-app',
    projectImageLinks: [
      'images/projects/amazon-capstone/login.png',
      'images/projects/amazon-capstone/artisans.png',
      'images/projects/amazon-capstone/artisan-detail.png',
      'images/projects/amazon-capstone/messages.png',
      'images/projects/amazon-capstone/reports.png'
    ],
    slideshowClass: 'android-slideshow',
    techImageLinks: [
      'images/projects/amazon-capstone/spring.png',
      'images/projects/amazon-capstone/mysql.jpg',
      'images/projects/amazon-capstone/hibernate.png'
    ],
    projectTitle: 'Amazon Capstone',
    description: `
      I led an agile team of students to create an Android application for Amazon Handmade. The application 
      was given a strict set of requirements to give rural communities the opportunity to sell
      their products on the service. 
    `,
    githubLink: 'https://github.com/zacharynoel/Capstone'
  };

  const graphicsMaze = {
    id: 'graphics-maze',
    projectImageLinks: [
      'images/projects/graphics-game/maze.png'
    ],
    slideshowClass: null,
    techImageLinks: [
      'images/projects/graphics-game/cpp.png',
      'images/projects/graphics-game/opengl.svg',
      'images/projects/graphics-game/visual-studio.png'
    ],
    projectTitle: 'Graphics Maze',
    description: `
      This project set out to create a randomly generated 3d maze game that a user will have to run through.
      The user runs through the maze in a first person view, which is disorienting and makes the game more difficult.
      Along the way I also decided to add some stretch goals, like an AI that will chase after the player, and an edit mode 
      so that a player can build their own maze.
    `,
    githubLink: 'https://github.com/malcolmjc/Graphics-Final-Project'
  };

  const forestRun = {
    id: 'forrest-run',
    projectImageLinks: [
      'images/projects/forrest-run/forest-run.png'
    ],
    slideshowClass: null,
    techImageLinks: [
      'images/projects/forrest-run/node-js.png',
      'images/projects/forrest-run/typescript.png',
      'images/projects/forrest-run/javascript.png'
    ],
    projectTitle: 'Online Multiplayer Game',
    description: `
      An online platformer race with a unique twist: Team Based Racing. Each player within a team is given a unique role at the start of the 
      match. The racer runs through the map, the helper places objects that will help their racer, and the blocker places obstacles that will 
      slow down the other team's racer.
    `,
    githubLink: 'https://github.com/malcolmjc/Forest-Run/'
  };

  const chineseCheckers = {
    id: 'chinese-checkers',
    projectImageLinks: [
      'images/projects/multi-threaded-games/chinese-checkers.png'
    ],
    slideshowClass: null,
    techImageLinks: [
      'images/projects/multi-threaded-games/java-logo.png',
    ],
    projectTitle: 'Chinese Checkers',
    description: `
      Constructed GUIs and gameplay mechanics for Chinese Checkers.
      Developed an enemy AI that will play against you at different difficulty levels.
    `,
    githubLink: null
  };

  const chess = {
    id: 'chess',
    projectImageLinks: [
      'images/projects/multi-threaded-games/chess.png',
    ],
    slideshowClass: null,
    techImageLinks: [
      'images/projects/multi-threaded-games/java-logo.png',
      'images/projects/multi-threaded-games/aws-logo.jpg',
    ],
    projectTitle: 'Chess',
    description: `
      Constructed GUIs and gameplay mechanics for Chess.
      Enabled multiplayer connectivity with Sockets & AWS and gameplay with concurrency.
    `,
    githubLink: null
  };

  return buildProjectFullWidth(dyeStats) + 
         buildProjectsFullWidth(iosApp, androidApp) + 
         buildProjectsFullWidth(graphicsMaze, forestRun) + 
         buildProjectsFullWidth(chineseCheckers, chess);
}

function buildTechImagesString(techImageLinks) {
  techImagesString = ''
  for (imageLink of techImageLinks) {
    techImagesString += `<img src="${imageLink}" class="tech-img"></img>`;
  }

  return techImagesString;
}

function buildGithubSection(githubLink) {
  if (!githubLink) {
    return '';
  }
  return `
  <div>
    <a href="${githubLink}" target="_blank">
      <img src="images/bottom-bar/github.png" class="tech-img">
    </a>
  </div>`;
}

function possibleAdditionalEvent(slideshowString) {
  if (slideshowString.split('\n').length <= 1) {
    return '';
  }
  return 'onmouseover="loop(this)"';
}
function buildProjectCardContents(projectTitle, slideshowString, githubLink, techImagesString, description, projectId) {
  return `
  <div class="project-card-front">
    <h1>${projectTitle}</h1>
    <hr>
    <div id="${projectId}" class="project-card-images" style="height: 400px" ${possibleAdditionalEvent(slideshowString)}>
      ${slideshowString}
    </div>
  </div>
  <div class="project-card-back" style="display: none">
    ${buildGithubSection(githubLink)}

    <div class="project-card-header">Technologies</div>
    ${techImagesString}

    <div class="project-card-header">Description</div>
    <div class="card-desc">
      ${description}
    </div>
  </div>`;
}

function buildProjectFullWidth(project) {
  slideshowString = buildSlideshowString(project.projectImageLinks, project.slideshowClass);
  techImagesString = buildTechImagesString(project.techImageLinks);

  return `
  <div class="container margin-top-md">
    <div class="row">
      <div class="col-md-12 project-card card">
        ${buildProjectCardContents(project.projectTitle, slideshowString, project.githubLink, techImagesString, project.description, project.id)}
      </div>
    </div>
  </div>`
}

function buildProjectsFullWidth(projectOne, projectTwo) {
  slideshowStringOne = buildSlideshowString(projectOne.projectImageLinks, projectOne.slideshowClass);
  techImagesStringOne = buildTechImagesString(projectOne.techImageLinks);

  slideshowStringTwo = buildSlideshowString(projectTwo.projectImageLinks, projectTwo.slideshowClass);
  techImagesStringTwo = buildTechImagesString(projectTwo.techImageLinks);

  return `
  <div class="container margin-top-md">
    <div class="row card-row">
      <div class="col-md-5 project-card card">
        ${buildProjectCardContents(projectOne.projectTitle, slideshowStringOne, projectOne.githubLink, techImagesStringOne, projectOne.description, projectOne.id)}
      </div>
      <div class="col-md-5 project-card card">
        ${buildProjectCardContents(projectTwo.projectTitle, slideshowStringTwo, projectTwo.githubLink, techImagesStringTwo, projectTwo.description, projectTwo.id)}
      </div>
    </div>
  </div>`
}

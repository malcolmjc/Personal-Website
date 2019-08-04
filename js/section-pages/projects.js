const projectsPage = `
<div class="section">
  <div>
    <div class="main-header">Projects</div>
    <hr>

    <div class="left-border">
      Here are some examples of larger projects I've worked on recently
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-5 project-card">
          <div class="project-card-front">
              <div class="project-card-header">iOS App (Ongoing)</div>
              <div class="project-card-images" style="height: 400px">
                <img src="images/projects/ios-app/posts-phone.png" class="ios-slideshow">
                <img src="images/projects/ios-app/ar-change.png" class="ios-slideshow" style="display: none;">
                <img src="images/projects/ios-app/ar-drawing.png" class="ios-slideshow" style="display: none;">
                <img src="images/projects/ios-app/groups.png" class="ios-slideshow" style="display: none;">
              </div>
          </div>

          <div class="project-card-back" style="display: none">
            <div>
              <a href="https://github.com/malcolmjc/Mobile-App-Dev-Final-Project" target="_blank">
                <img src="images/bottom-bar/github.png" class="tech-img">
              </a>
            </div>

            <div class="project-card-header">Technologies</div>
            <img src="images/projects/ios-app/firebase-logo.png" alt="Firebase" class="tech-img">
            <img src="images/projects/ios-app/arkit-logo.jpg" alt="ARKit" class="tech-img">
            <img src="images/projects/ios-app/swift-logo.jpg" alt="Swift" class="tech-img">

            <div class="project-card-header">Description</div>
            <div style="text-align: left;">
              A mobile application that allows for anonymous posts and group creation. Posts can be both in text format and 
              virtual AR Graffiti.
            </div>
          </div>
        </div>

        <div class="col-md-5 project-card">
          <div class="project-card-front">
            <div class="project-card-header">Amazon Capstone</div>
            <div class="project-card-images" style="height: 400px">
              <img src="images/projects/amazon-capstone/login.png" class="android-slideshow">
              <img src="images/projects/amazon-capstone/artisans.png" class="android-slideshow" style="display: none;">
              <img src="images/projects/amazon-capstone/artisan-detail.png" class="android-slideshow" style="display: none;">
              <img src="images/projects/amazon-capstone/messages.png" class="android-slideshow" style="display: none;">
              <img src="images/projects/amazon-capstone/reports.png" class="android-slideshow" style="display: none;">
            </div>
          </div>

          <div class="project-card-back" style="display: none">
            <div>
              <a href="https://github.com/zacharynoel/Capstone" target="_blank">
                <img src="images/bottom-bar/github.png" class="tech-img">
              </a>
            </div>

            <div class="project-card-header">Technologies</div>
            <img src="images/projects/amazon-capstone/spring.png" alt="Spring" class="tech-img">
            <img src="images/projects/amazon-capstone/mysql.jpg" alt="MySQL" class="tech-img">
            <img src="images/projects/amazon-capstone/hibernate.png" alt="Hibernate" class="tech-img">

            <div class="project-card-header">Description</div>
            <div style="text-align: left;">
              I'm leading an agile team of students to create an Android application for Amazon Handmade. The application 
              was given a strict set of requirements that we are fulfilling to give rural communities the opportunity to sell
              their products on the service. 
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-5 project-card">
          <div class="project-card-front">
            <div class="project-card-header">Graphics Maze</div>
            <div class="project-card-images" style="height: 240px">
                <img src="images/projects/graphics-game/maze.png">
            </div>
          </div>

          <div class="project-card-back" style="display: none">
            <div>
              <a href="https://github.com/malcolmjc/Graphics-Final-Project" target="_blank">
                <img src="images/bottom-bar/github.png" class="tech-img">
              </a>
            </div>

            <div class="project-card-header">Technologies</div>
            <img src="images/projects/graphics-game/cpp.png" alt="C++" class="tech-img">
            <img src="images/projects/graphics-game/opengl.svg" alt="OpenGL" class="tech-img">
            <img src="images/projects/graphics-game/visual-studio.png" alt="Visual Studio" class="tech-img">

            <div class="project-card-header">Description</div>
            <div style="text-align: left;">
              This project set out to create a randomly generated 3d maze game that a user will have to run through.
              The user runs through the maze in a first person view, which is disorienting and makes the game more difficult.
              Along the way I also decided to add some stretch goals, like an AI that will chase after the player, and an edit mode 
              so that a player can build their own maze.
            </div>
          </div>
        </div>

        <div class="col-md-5 project-card">
          <div class="project-card-front">
            <div class="project-card-header">Online Multiplayer Game</div>
            <div class="project-card-images" style="height: 240px">
              <img src="images/projects/forrest-run/forest-run.png">
            </div>
          </div>

          <div class="project-card-back" style="display: none">
            <div>
              <a href="https://github.com/malcolmjc/Forest-Run/" target="_blank">
                <img src="images/bottom-bar/github.png" class="tech-img">
              </a>
            </div>

            <div class="project-card-header">Technologies</div>
            <img src="images/projects/forrest-run/node-js.png" alt="Node.js" class="tech-img">
            <img src="images/projects/forrest-run/typescript.png" alt="TypeScript" class="tech-img">
            <img src="images/projects/forrest-run/javascript.png" alt="JavaScript" class="tech-img">

            <div class="project-card-header">Description</div>
            <div style="text-align: left;">
              An online platformer race with a unique twist: Team Based Racing. Each player within a team is given a unique role at the start of the 
              match. The racer runs through the map, the helper places objects that will help their racer, and the blocker places obstacles that will 
              slow down the other team's racer.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-12 project-card">
          <div class="project-card-front">
            <div class="project-card-header">Multi-Threaded Games</div>
            <div class="project-card-vids" style="height: 320px">
              <div class="row">
                <div class="embed-responsive embed-responsive-16by9 col-sm-6">
                  <video src="videos/chess.mp4"  type="video/mp4" class="embed-responsive-item" muted autoplay loop></video>
                </div>
                <div class="embed-responsive embed-responsive-16by9 col-sm-6">
                  <video src="videos/chinesecheckers.mp4" type="video/mp4" class="embed-responsive-item" muted autoplay loop></video>
                </div>
              </div>
            </div>
          </div>
          <div class="project-card-back" style="display: none">
            <div class="project-card-header">Technologies</div>
            <img src="images/projects/multi-threaded-games/java-logo.png" alt="Java" class="tech-img-50">
            <img src="images/projects/multi-threaded-games/aws-logo.jpg" alt="AWS" class="tech-img-50">

            <div class="project-card-header">Description</div>
            <div style="text-align: left;">
                Constructed GUIs and gameplay mechanics for two common games - Chess & Chinese Checkers.
                Enabled multiplayer connectivity with Sockets & AWS and gameplay with concurrency. Also developed
                enemy AI that will play automatically for Chinese Checkers.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('projects-page').innerHTML = projectsPage;
});

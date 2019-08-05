const aboutPage = `
<div class="section">
  <div class="about-me">
    <div class="container margin-top-md">
      <div class="row">
        <div class="col-md-10 card bio">      
          <img src="images/about/me.jpg" class="profile-image" height="200" width="200">
          <br>
          <hr>

          <h2>Software Engineering Student at Cal Poly</h1>
          <hr>
          <h2>Graduating December 2019<h1>
          <hr>
          <h2>3.7+ Major GPA</h2>
          <hr>
          <h2>3.5+ GPA</h2>
          <hr>
          <p class="card-desc">
            Hi, I'm Malcolm, the creator of this website. I switched into software engineering a
            year and a half into my studies because I became so passionate about programming and computer science.
            I really couldn't see myself doing anything else for my full-time career. Unfortunately, this 
            made it very difficult to get all the major classes I needed, and I had to postpone my
            graduation by 1 quarter. I am currently pursuing a career for after graduation.
          </p>
        </div
      </div
    </div
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('about-page').innerHTML = aboutPage;
});

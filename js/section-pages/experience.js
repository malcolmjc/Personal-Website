const experiencePage = `
<div class="section">
  <div class="container margin-top-md">
    <div class="row">
      <div class="col-md-10 card bio"> 
        <img src="images/experience/comscore-logo.png" alt="Comscore" height="100" width="500" class="company-logo">
        <hr>
        <h1>Software Engineering Intern</h1>
        <hr>
        <h2><b>Skills</b></h2>
        <h3>Angular, Node.js, Git, Jira, Teamwork</h3>
        <hr>
        <h2><b>Languages</b></h2>
        <h3>TypeScript, JavaScript, Python</h3>
        <hr>
        <p class="card-desc">
          Worked on the frontend team to produce high-quality artifacts. Learned advanced source control
          techniques and how to better produce artifacts in a team environment. Produced an extensible UI
          Library to be reused across various teams.
        </p>
      </div>
    </div>
  </div>
  <div class="container margin-top-md">
    <div class="row">
      <div class="col-md-10 card bio"> 
        <img src="images/experience/surescripts-logo.png" alt="Surescripts" height="120" width="500" class="company-logo">
        <hr>
        <h1>Software Engineering Intern</h1>
        <hr>
        <h2><b>Skills</b></h2>
        <h3>Web Dev, OOP, Jira, JPA, .NET, Git, Docker, OAuth</h3>
        <hr>
        <h2><b>Testing Frameworks</b></h2>
        <h3>Selenium, JUnit, xUnit, NUnit, SpecFlow</h3>
        <hr>
        <h2><b>Languages</b></h2>
        <h3>C#, Java, JavaScript</h3>
        <hr>
        <div class="surescripts-project">
          In Summer 2018 I interned with Surescripts, the United States' largest e-prescription network.
          <h3 class="experience-header">Summer Project Main Features:</h3>
          <ul>
            <li>Persists tests details and history</li>
            <li>Interface in Jira to view test history/details associated with a particular issue</li>
            <li>Allows Jira users to watch Selenium tests as they run</li>
            <li>
              Allows users to outline BDD test steps which will create a skeleton test with those steps in
              the project associated with that issue.
            </li 
          </ul>
          <br>
          At the end of my internship, I got to travel to Washington D.C. to present about my project to 
          Surescript's executive board.
        </div>
      </div>
    </div>
  </div>

  <div class="container margin-top-md">
    <div class="row">
      <div class="col-md-10 card bio"> 
        <div class="flex-row image-row">
          <img src="images/experience/gap-logo.png" alt="Gap" height="120">
          <img src="images/experience/jcpenney-logo.png" alt="JCPenney" height="120">
        </div>
        <hr>
        <h1>Retail Experience</h1>
        <hr>
        <h2><b>Skills</b></h2>
        <h3>Communication, Conflict Resolution, Leadership, Teamwork</h3>
        <hr>
        <p class="card-desc">
          I worked at JCPenney during the Summer & Winter Break 2015, and Gap during Summer 2016 & 2017.
          Working retail provided me with something that often gets forgotten in technical careers: soft skills.
          Working retail was a great opportunity for me to develop my communication, interpersonal, and selling skills.
        </p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('experience-page').innerHTML = experiencePage;
});

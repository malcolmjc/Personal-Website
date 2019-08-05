const experiencePage = `
<div class="section">
  <div class="container margin-top-md">
    <div class="row">
      <div class="col-md-10 card bio"> 
        <img src="images/experience/surescripts-logo.png" alt="Surescripts" height="120" class="company-logo">
        <hr>
        <h1>Software Engineering Intern</h1>
        <hr>
        <h2><b>Skills</b></h2>
        <h3>Web Dev, OOP, JPA, .NET, Git, Docker, OAuth</h3>
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
        I worked at JCPenney during the Summer & Winter Break 2015, and Gap during Summer 2016 & 2017.
        Working retail provided me with something that often gets forgotten in technical careers: soft skills.
        Working retail was a great opportunity for me to develop my communication, interpersonal, and selling skills.
        </div>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('experience-page').innerHTML = experiencePage;
});

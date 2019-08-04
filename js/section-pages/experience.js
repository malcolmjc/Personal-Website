const experiencePage = `
<div class="section">
  <div>
    <div class="main-header">Experience</div>
    <hr>
  
    <div class="below-desc">
      <div>
        <img src="images/experience/surescripts-logo.png" alt="Surescripts" height="120" class="company-logo">
        <section>Software Engineering Intern</section>

        <div class="left-border experience-desc">
          This past summer, I had the awesome opportunity to work with Surescripts, the United States largest e-prescription network. I got to travel to their Minneapolis and Arlington Offices, 
          and worked out of Hillsboro for the majority of the summer. I got to work with, learn, and explore a variety of technologies. Over the course of the summer I developed a project capable of
          persisting and dynamically updating test details and history within company-wide JIRA issues. To accomplish this I used programming languages <b>Java</b>, <b>C#</b>, and <b>Javascript</b>, 
          along with technologies like <b>Docker</b>, <b>WebSockets</b>, <b>JPA</b>, <b>OAuth</b>, <b>jQuery</b>, <b>NuGet</b>, and <b>Maven</b>. I also got to delve deeply into various testing frameworks
          such as <b>xUnit</b>, <b>NUnit</b>, <b>SpecFlow</b>, <b>JUnit</b>, and <b>Selenium</b>. The whole project was completed utilizing the <b>Agile Scrum</b> development process and using the <b>Atlassian</b>
          family of products.
        </div>
      </div>

      <div>
        <section>Retail</section>

        <div class="left-border experience-desc">
          Although completely non-technical beyond working with PoS software, retail provided me with something a lot of software engineers are lacking: <b>soft skills</b>.
          Working retail was a great opportunity for me to develop my communication, interpersonal, and selling skills.  
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <img src="images/experience/gap-logo.png" alt="Gap" height="120" class="company-logo">
              
              <div class="experience-desc">
                I worked at Gap during the summers of 2016 and 2017. I gained valuable teamwork and leadership skills by working on various projects. I also developed
                important communication skills through my numerous interactions with customers, and really learned how to "pitch" a product.
              </div>
            </div>

            <div class="col-md-7">
              <img src="images/experience/jcpenney-logo.png" alt="JCPenney" height="120" class="company-logo">

              <div class="experience-desc">
                Working at JCPenney in the Summer and Winter Break of 2015 was my first real experience in the corporate world.
                It taught me what it's like and what's expected from you while working for a large company, and how to both meet and
                exceed those expectations. Most importantly, it taught me how to work with and help customers, which is very relevant
                when collaborating with users in the creation of software.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="images/experience/dvi-logo.jpg" alt="DVI" height="120" class="company-logo">
        <section>Summer 2014 Intern</section>

        <div class="left-border experience-desc">
          In my first real job I got to work at Digital Vision Incorporated, a local and small software development company. Although I 
          didn't get to engineer any actual software, I did learn the basics of how a software company functions, which has definitely helped me 
          with the learning curve.
        </div>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('experience-page').innerHTML = experiencePage;
});

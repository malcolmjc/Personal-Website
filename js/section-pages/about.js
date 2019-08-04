const aboutPage = `
<div class="section" style="margin-left: 80px;">
  <div class="about-me">
    <div class="main-header">About Me</div>
    <hr>
    <img src="images/about/me.jpg" class="profile-image" height="200" width="200">
    <br>
    <div class="left-border">
        I'm Malcolm Craney, a fourth-year Software Engineering student at Cal Poly in San Luis Obispo, set to graduate <b>December 2019</b>. 
        When I'm not in California, you will likely find me in my hometown of Portland, OR. I originally started my career here at college in a different major,
        but soon realized my passion and appreciation for programming, computer science, and the mathematics behind it. What really
        captured me was the magical feeling I got after learning a new language, tool, or framework, and the ability to manipulate
        these incredibly complex devices and technologies at ease. If you're reading this website you're likely reviewing me as a 
        prospective candidate, so I hope this provides you with a more holistic depiction of myself both as a programmer and as a person.
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('about-page').innerHTML = aboutPage;
});

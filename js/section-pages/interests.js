const interestsPage = `
<div class="section">
  <div>
    <div class="main-header">My Interests</div>
    <hr>
    <div class="left-border">
      When I'm not busy writing code, I find other ways to occupy my time.
    </div>

    <div class="below-desc">
      <section>Sports</section>
      <div class="pad-left">
        <div>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <header>Soccer</header>
                I've been an avid soccer player and fan my entire life. Nowadays I stay active by playing intramural soccer.
              </div>

              <div class="col-md-4">
                <header>Basketball</header>
                I enjoy playing pick-up basketball whenever I can.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>Hiking</section>
      <div class="pad-left">
        <div>
          <header>Central Coast</header>
          Living in San Luis Obispo while attending college gives me great opportunities to hike and appreciate nature. 
          <div>
            <img src="images/interests/hiking/mdo.jpg" alt="Hiking at Montana de Oro" height="300" width="400" title="Montana de Oro">
            <img src="images/interests/hiking/waterfall.jpg" alt="Waterfall at Ragged Point" height="300" width="200" title="Big Sur Waterfall">
          </div>

          <header>Pacific Northwest</header>
          I've hiked all over Oregon and Southern Washington, including nearly every spot within the greater Portland area.
          <div>
            <img src="images/interests/hiking/tryon-creek.jpg" alt="Green landscape at Tryon Creek" height="300" width="400" title="Tryon Creek">
            <img src="images/interests/hiking/wash-hike.jpg" alt="Underneath a Waterfall at the Gorge" height="300" width="200" title="The Gorge">
          </div>
        </div>
      </div>

      <section>Travel</section>
      <div class="pad-left">
        <div>
          <header>International</header>
          In the words of Mark Twain, <q>Travel is fatal to prejudice, bigotry, and narrow-mindedness.</q>
          Visiting and experiencing the various cultures of our world is very important to me. Thus far I've been fortunate enough
          to visit Spain, Costa Rica, and Mexico. I'd love to visit more of Europe in the future.
          <div>
            <img src="images/interests/travel/fountain.jpg" alt="A fountain in Spain" height="300" width="400" title="Spain Fountain">
            <img src="images/interests/travel/sagrada-familia.jpg" alt="The Sagrada Familia in Barcelona" height="300" width="200" title="La Sagrada Familia">
          </div>

          <header>U.S.</header>
          The majority of my traveling within the US has been limited to the West Coast, but I've been as far east as D.C. and way out west to Hawaii.
          <div>
            <img src="images/interests/travel/chicago.jpg" alt="The Chicago River" height="320" width="240" title="Chicago River">
            <img src="images/interests/travel/dc.jpg" alt="The Washington Monument" title="The Washington Monument" height="320" width="240">
          </div>
        </div>
      </div>

      <section>Music</section>
      <div class="pad-left">
        <div>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <header>Piano</header>
                Classical piano is truly timeless, and I appreciate it through both playing and listening.
              </div>

              <div class="col-md-6">
                <header>Favorite Genres</header>
                I have diverse musical tastes but my favorites include <i>Alternative, Hip Hop, and Oldies.</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

$(document).ready(() => {
  document.getElementById('interests-page').innerHTML = interestsPage;
});

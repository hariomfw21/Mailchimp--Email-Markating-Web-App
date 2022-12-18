function Sign() {
    window.location.href = "login.html";

}

function openNav() {
    document.getElementById("mySidenav").style.width = "520px";
    document.querySelector("#resource-nav").innerHTML = `
    <p class="side-barP" style="color: #727070">WE'ALL HELP YOU</p>
      <a href="#" onmouseover="openinnernav()">Get Your Buisness Online ></a>
      <a href="#">Market Your Buisness ></a>
      <br />
      <br />
      <hr />
      <p class="side-barP" style="color: #727070">PLATFORM FEATURES</p>
      <a href="#">Aduence Managemnt ></a>
      <a href="#">Creative Tool ></a>
      <a href="#">Markating Automation></a>
      <a href="#">Insight & Analitics</a>
      <br />
      <br />
      <hr />
      <br />
      <p class="side-barP" style="color: #727070">NOT SURE WHRER TO START</p>
      <a href="#">What's Right for Me? ></a>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <a href="#">Talk to Sales: +1 (800) 315-5939</a>
      <br />
      <h2 class="side-barh2"> Product Updates</h2>
      <p class="side-barP">Get the latest on new features, product improvements, and other announcements.</p>
      <p class="side-barP" style="color: #007c89;">see Whats New --></p>
      <br>
      <br>
     
    `;
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openNavRes() {
    document.getElementById("mySidenav").style.width = "520px";
    document.querySelector("#resource-nav").innerHTML = `
      <p class="side-barP" style="color: #727070">Learn</p>
      <a href="#"> MailChimp 101 ></a>
      <a href="#">Help Center ></a>
      <a href="#">Markating Library></a>
      <br />
      <br />
      <hr />
      <p class="side-barP" style="color: #727070">PLATFORM FEATURES</p>
      <a href="#">For Freelancers & Agencies ></a>
      <a href="#">For Developers ></a>
      <a href="#">Hire A Trusted Partner></a>
      <a href="#">Insight & Analitics</a>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <a href="#">Talk to Sales: +1 (800) 315-5939</a>
      <h2 class="side-barh2"> App Integrations</h2>
      <p class="side-barP">Connect your digital tools so you can do more with your marketing.</p>
      <p class="side-barP" style="color: #007c89;">See all integrations--></p>
      </div>
      <br />
      <br />
    
    `;
  }

  function openNavIns() {
    document.getElementById("mySidenav").style.width = "520px";
    document.querySelector("#resource-nav").innerHTML = `
        <p class="side-barP" style="color: #727070">WE'ALL HELP YOU</p>
        <a href="#">Get Your Buisness Online ></a>
        <a href="#">Market Your Buisness ></a>
        <br />
        <br />
        <hr />
        <p class="side-barP" style="color: #727070">PLATFORM FEATURES</p>
        <a href="#">Aduence Managemnt ></a>
        <a href="#">Creative Tool ></a>
        <a href="#">Markating Automation></a>
        <a href="#">Insight & Analitics</a>
        <br />
        <br />
        <hr />
        <p style="color: #727070"></p>
        <a href="#">Get Your Buisness Online ></a>
        <a href="#">Market Your Buisness ></a>
        <br />
        <br />
        <hr />
        <p style="color: #727070">WE'ALL HELP YOU</p>
        <a href="#">Get Your Buisness Online ></a>
        <a href="#">Market Your Buisness ></a>
        <br />
        <br />
        <hr />
        <p style="color: #727070">WE'ALL HELP YOU</p>
        <a href="#">Get Your Buisness Online ></a>
        <a href="#">Market Your Buisness ></a>
        <br />
        <br />
        <hr />

        <h2 class="side-barh2">App Integrations</h2>
        <p class="side-barP">
          Connect your digital tools so you can do more with your marketing.
        </p>
        <p class="side-barP" style="color: #007c89">See all integrations--></p>
    
    `;

  }

 // inner nav sliding window-->

  function openinnernav(){
    document.getElementById("myinnerreside-nav").style.width = "410px";
  }

  function closeInnerNav(){
    document.getElementById("myinnerreside-nav").style.width = "0px";

  }

 // inner nav sliding window-->

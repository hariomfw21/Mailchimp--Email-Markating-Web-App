
    function openNav() {
        document.getElementById("mySidenav").style.width = "520px";
        document.querySelector("#resource-nav").innerHTML = `
    <p class="side-barP" style="color: #727070">WE'ALL HELP YOU</p>
      <a href="#" onmouseover="openinnernav()">Get Your Buisness Online ></a>
      <a href="#" onmouseover="openinnernav2()">Market Your Buisness ></a>
      <br />
      <br />
      <hr />
      <p class="side-barP" style="color: #727070">PLATFORM FEATURES</p>
      <a href="#" onmouseover="openinnernav3()">Audience Management></a>
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

    // inner nav sliding window--> 1

    function openinnernav() {
        document.getElementById("myinnerreside-nav").style.width = "410px";
        document.getElementById("innerresorce-nav").innerHTML = `
     
    <ul class="ullist-innernev">
          <li>
          <a class="innernevAnc" href="/MarketingCRM/MarketingCRM.html">Marketing CRM</a>
            <p class="innernavp">
              Create a free website that comes with built-in markating tool
            </p>
          </li>

          <br />

          <li>
          <a class="innernevAnc" href="/contentStudio/contentStudio.html">Content Studio</a>
            <p class="innernavp">
              Get beautiful onbrand design made for you with the power Of AI
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Dynamic Content</a>
            <p class="innernavp">
              Pretionlise Individual content Block with You Emails.
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Subject Line Helper</a>
            <p class="innernavp">
              Get real-time feedback on how to refine your subject lines.
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Campaign Templates</a>
            <p class="innernavp">
              100+ pre-designed email and landing page templates that fit any
              message.
            </p>
          </li>

          <br />

          <hr />
        </ul>
    `

    }

    function closeInnerNav() {
        document.getElementById("myinnerreside-nav").style.width = "0px";
    }

    // innner nav sliding window--> 2

    function openinnernav2() {
        document.getElementById("myinnerreside-nav").style.width = "410px";
        document.getElementById("innerresorce-nav").innerHTML = `
      
    <ul class="ullist-innernev">
          <li>
            <a class="innernevAnc" href="#">Emails</a>
            <p class="innernavp">
              Ingage Your Audiance with beautiful brange Email
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Loading Pages</a>
            <p class="innernavp">
                Design landing pages that grow your audience and help you sell more stuff. 
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Degital Ads</a>
            <p class="innernavp">
              Reach People on Facebook, Instagram and all over the world
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Social Media</a>
            <p class="innernavp">
             Build your following with targeted ads and organic posting on Facebook, Instagram, and Twitter.
            </p>
          </li>

          <br />

          <li>
            <a class="innernevAnc" href="#">Campaign Templates</a>
            <p class="innernavp">
              100+ pre-designed email and landing page templates that fit any
              message.
            </p>
          </li>

          <br />

          <hr />
        </ul>

    
    `
    }


   function openinnernav3(){
    document.getElementById("myinnerreside-nav").style.width = "410px";
    document.getElementById("innerresorce-nav").innerHTML = `
    
    

    `
    
   }

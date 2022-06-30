const components = {};
components.homeScreen = `
  <main>
  <div class="welcome">
        <h1>Well-cum to PioTech</h1>
      </div>
      <div class="introduction">
        <h3>What is PioTech?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">PioTech’s mission is to bring the world together through gaming. This website has the best snake game ever. </p>
        <h3>How popular?</h3>
        <p style="padding: 0px 300px; color: rgb(204,205,211); font-size: 20px;">PioTech is ranked as one of the most popular websites in the world.</p>
      </div>
      

      <div class="about">
        <div class="about_text">
          <h1>Join the Community</h1>
          <h3>Meet new people, join groups, form clans, chat in-game and more! With over 100 million potential friends (or enemies), the fun never stop.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/forum.html">Visit the Forum</a>
        </div>
        <div class="about_image">
          <img src="../img/forum_image.png" width="600px" height="350px" alt="">
        </div>
      </div>


      <div class="about">
        <div class="about_image">
          <img src="../img/electronics_image.png" width="600px" height="350px" alt="">
        </div>
        <div class="about_text">
          <h1>Experience Our Best Snake Game</h1>
          <h3>Get yourself ready to play our game.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/electronics.html">Visit the Electronics shop</a>
        </div>
      </div>

      <div class="about">
        <div class="about_text">
          <h1>Install add-ons for gaming experience</h1>
          <h3>Download some of the most reliable softwares in the world. They help boosting your gaming experience as well as detecting viruses.</h3>
					<a style="font-size: 25px; color: rgb(36,191,255); text-decoration: none;" href="../html/softwares.html">Visit the Software</a>
        </div>
        <div class="about_image">
          <img src="../img/software_image.png" width="600px" height="350px" alt="">
        </div>
      </div>

      <div class="introduction login">
        <h3>Join us in bringing the world together with the best gaming experience</h3>
        <a class="special" href="#">Create an account</a>
      </div>
      </main>
      <footer class="footer-basic-centered">
      <p class="footer-links1">
        <a href="home.html">Home</a>
  ·
        <a href="forum.html">Forum</a>
  ·
        <a target=_blank href="https://www.google.com/maps/place/H%C3%A0+N%E1%BB%99i,+Ho%C3%A0n+Ki%E1%BA%BFm,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.022736,105.8018583,13z/data=!3m1!4b1!4m5!3m4!1s0x3135ab9bd9861ca1:0xe7887f7b72ca17a9!8m2!3d21.02811!4d105.8340454?hl=vi"">Getting Here</a>
  ·
        <a href="tickets.php">Tickets</a>
  ·
        <a href="help.html">Contact</a>
      </p>
  
      <p class="footer-links">
          <a href="#">Privacy Policy</a>
          ·
          <a href="#">Terms of Use</a>
          ·
          <a href="">&amp;Gameric</a>
      </p>
  
      <p class="footer-company-name">Copyright &copy; PioTech 2020</p>
  
  </footer>
  `
  components.playScreen = `
  <style>
        html,body{
            height: 100%;
            margin: 0
        }
        body{
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("");
        }
        div#app{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        canvas{
            border: 1px solid white
        }
    </style>
    <p id="score" style="color: white; font-size: 30px;">Use arrrow keys to move.</p>
    <p id="highestscore" style="color: white; font-size: 30px;">Good luck!!!</p>
    <canvas width = "400" height = "400" id="game"></canvas>
    <button id = "return">Return</button>
  `  

components.leaderBoard = `
    <main>
    <div class="wrapper">
      <div class="lboard_section">
        <div class="lboard_tabs">
          <div class="tabs">
            <ul>
              
              <li class="active" data-li="month">Greatest scores of all time</li>
              
            </ul>
          </div>
        </div>
    
        <div class="lboard_wrap">
          <div class="lboard_item month" style="display: block;">
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>1.</span> Dương</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 95%"></div>
                </div>
              </div>
              <div class="points">
                1195 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>2.</span>Johnson</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 85%"></div>
                </div>
              </div>
              <div class="points">
                1185 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>3.</span>Charles John</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 75%"></div>
                </div>
              </div>
              <div class="points">
                1160 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>4.</span>Scarlett Angela</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 65%"></div>
                </div>
              </div>
              <div class="points">
                1130 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>5.</span>Rosey</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 55%"></div>
                </div>
              </div>
              <div class="points">
                1110 points
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </main>
`  

components.helpScreen = `
    <main>
    <form class="help _form" action="">
      <h3>Contact Information</h3>
      <input class="input-field" type="text" placeholder="First Name">
      <input class="input-field" type="text" placeholder="Email Address">
      <p class="label">If you are under 13 years old, please provide your parent's email address</p>
      <input class="input-field" type="text" placeholder="Confirm Email Address">
      <input class="input-field" type="text" placeholder="Username">
      <h3>Issue Details</h3>
      <label for="">What device are you having the problem on?</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="PC" value="string:Pc">PC</option>
        <option label="Mac" value="string:Mac">Mac</option>
        <option label="Chromebook" value="string:Chromebook">Chromebook</option>
        <option label="iPhone" value="string:Iphone">iPhone</option>
        <option label="iPad" value="string:Ipad">iPad</option>
        <option label="Android Phone" value="string:AndroidPhone">Android Phone</option>
        <option label="Android Tablet" value="string:AndroidTablet">Android Tablet</option>
        <option label="Amazon Device" value="string:AmazonDevice">Amazon Device</option>
        <option label="Xbox" value="string:Xbox">Xbox</option>
      </select>
      <label for="">Type of help category</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="Account Hacked or Can't Log in" value="object:30">Account Hacked or Can't Log in</option>
        <option label="Billing &amp; Payments" value="object:31">Billing &amp; Payments</option>
        <option label="Bug Report" value="object:32">Bug Report</option>
        <option label="DMCA" value="object:35">DMCA</option>
        <option label="Gift Card" value="object:37">Gift Card</option>
        <option label="How To" value="object:38">How To</option>
        <option label="Ideas &amp; Suggestions" value="object:39">Ideas &amp; Suggestions</option>
        <option label="Moderation" value="object:40">Moderation</option>
        <option label="User Safety Concern" value="object:43">User Safety Concern</option>
        <option label="Contests &amp; Events" value="object:44">Contests &amp; Events</option>
        <option label="Technical Support" value="object:45">Technical Support</option>
      </select>
      <label for="">Description of issue</label>
      <textarea name="message" id="" placeholder="Please describe the issue that you are facing. Include any relevant information like where the issue is occurring or the error message." rows="6"></textarea>
    </form>
    <div style="text-align: center;">
      <button>Submit</button>
    </div>
    </main>
`  
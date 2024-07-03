import React from "react";
import "./First.css";

const First = () => {
  return (
    <>
      <div className="container">
        <div className="header-img">
          <img
            src="cod-removebg-preview.png"
            className="head-img img-fluid"
            alt="banner"
          />
        </div>
        <div className="header">
          <div className="row">
            <div className="col-3">
              <img
                src=" IMG_4058.jpeg 1.png"
                className="img-thumbnail logo"
                alt="logo"
              />
            </div>
            <div className="col-7">
              <h1 className="header-name ">DEZZO</h1>
              <p className="header-pera"> @DEZZO_YT</p>
              <p className="header-pera">2.42K subscribers</p>
              <p className="header-pera">2.42K subscribers</p>
              <p className="header-pera">440 videos</p>
              <p className="header-pera1"> &#9829;WELCOME SOLDIERS &#9829;</p>
              <h5>
                <a
                  href="https://youtube.com/@dezzo_yt?feature=shared"
                  className="link"
                >
                  Click Here
                </a>
              </h5>
              <button className="btn btn-dark">Mannage Video </button>
              <button className="btn btn-dark">&#xf080;</button>
              <button className="btn btn-dark">&#x270E; </button>
            </div>
          </div>
        </div>
        {/* //starting of part2 */}

        <div className="header-body">
          <div className="row">
            <div className="col-7">
              <h1 className="win-h1">
                Hey <spam className="ani">Gamers</spam>
              </h1>
              <h4 className="win-h2"> WELCOME SOLDIER</h4>
              <p className="win-para">
                🔺Hey guys! I’m DEZZO from YouTube.in this Channel you will find
                best Gaming contents.
              </p>
              <p className="win-para">
                🔺For Buisness enquiry dezzoyt007@gmail.com
              </p>
              <p className="win-para">
                {" "}
                🔺BIG Thanks for your support and the souls of beautiful hearts
                who subscribed me!
              </p>
            </div>
            <div className="col-5">
              <img src="pngwing.com 1.png" className="winner" alt="" />
            </div>
          </div>
        </div>
        {/* starting of part 3 */}

        <div className="header-body1">
          <div className="row">
            <div className="col-4">
              <img src="Action 1.png" className="imag" alt="ACTION" />
            </div>
            <div className="col-6">
              <h2 className="winner1">
                <spam>ABOUT </spam>
                <br />
                MY CHENNAL
              </h2>
              <p>
                In this You tube Channel i Post Daily Gaming Contents Of Warzone
                Mobile, Which is very Popular FPS Game on Mobile and it is
                Available on both Android and iOS Devices, Visit my Channel for
                more details.
              </p>
              <div className="row">
                <div className="col-3">
                  <h3>
                    <spam>CONTENT</spam>
                  </h3>
                  <ul>
                    <li>VIDEO</li>
                    <li>SHORTS</li>
                    <li>LIVE</li>
                    <li>STREAM</li>
                    <li>GAMEPLAY</li>
                    <li>UBDATES</li>
                  </ul>
                </div>
                <div className="col-3">
                  <img
                    src="A9367C57-366E-4B82-961E-17D6C376ADA1 2.png"
                    className="log"
                    alt="gaming"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* part5 contine */}
          <div className="header-bod">
            <h1 className="FF">POSTING NEW <spam>VIDEO</spam><br/>EVERY DAY</h1>
            <h1 className="FF1">DAILY <spam>SHORT</spam>  CONTENT</h1>
            <img
              src="IMG_4055 1.png"
              className="rounded float-start im1"
              alt="..."
            />
            <div class="text-center">
              <img src="IMG_3897 1.png" className="rounded cen"  alt="..." />
            </div>

            <img
              src="IMG_4056.jpeg 1.png"
              className="rounded float-end im2"
              alt="..."
            />
            <hr className="br"/>
            <img src="/WZM_PrimaryKeyArt_Branded_16x9 1.png" class="img-fluid bf" alt="..."></img>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div className="row">
            <div className="col-3">
            <img src="IMG_4058.jpeg 1.png" class="rounded float-start f" alt="..."/>
            </div>
            <div className="col-2">
              <h3 className="hq">LEGAL</h3>
              <ul >
                <li className="df">Teams of use</li>
                <li className="df">License agreement</li>
                <li className="df">Privacy policy</li>
                <li className="df">Copyright information</li>
                <li className="df">Cookies policy</li>
              </ul>
            </div>
            <div className="col-2">
              <h1 className="hq">Support</h1>
              <ul>
                <li className="df">FAQ</li>
                <li className="df">Search guide</li>
                <li className="df">Contact</li>
                
              </ul>
            </div>
            <div className="col-5">
              <h1 className="hq"> SOCIAL MEDIA</h1>
              <img src="social_media-removebg-preview.png" className="social" alt="social" />
              <p>Get exclusive message send strightly to inbox</p>
              <button  type="button"className="btn btn-outline-primary">Sign up</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default First;

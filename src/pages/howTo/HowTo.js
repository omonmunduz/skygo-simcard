import { Link } from "@reach/router";
import "./HowTo.css";
import howToPurchase from "./images/howToPurchase.gif";
import ios1 from "./images/ios1.png";
import ios2 from "./images/ios2.png";
import ios3 from "./images/ios3.png";
import ios4 from "./images/ios4.png";

import and1 from "./images/and1.png";
import and2 from "./images/and2.png";
import and3 from "./images/and3.png";
import and4 from "./images/and4.png";

const HowTo = () => {
  return (
    <section className="how-to">
      <h1>eSIM Service</h1>
      <p>
        An eSIM is a digital SIM that allows you to activate SkyGo Global Data
        SIM network without having to use a physical SIM. Purchase now to
        experience our eSIM service!
      </p>
      <article className="how-to-purchase">
        <div className="how-to-purchase-box">
          <h5 className="how-to-purchase-title">
            How to purchase eSIM service
          </h5>
          <ol>
            <li>
              Choose the desired package in <Link to="/store">Store</Link>
            </li>
            <li>Check out with additional Global Data SIM and eSIM</li>
          </ol>
        </div>
        <img
          className="how-to-purchase-image"
          src={howToPurchase}
          alt="how to purchase eSIM service GIF"
        />
      </article>

      <article className="compatible-devices">
        <h5 className="how-to-purchase-title">Compatible Devices</h5>
        <ul className="how-to-list">
          <li>
            {" "}
            iPhones purchased from countries outside China
            <br />
            iPhone XR, iPhone XS, iPhone XS Max, iPhone 11, iPhone Pro, iPhone
            11 Pro Max, iPhone SE2020
          </li>
          <li>
            iPhones purchased in Hong Kong/Macao SAR
            <br />
            iPhone SE2020, iPhone XS
          </li>
          <li>Samsung Fold LTE model</li>
          <li>Samsung Galaxy Z Flip</li>
          <li> Google Pixel 3 and 3XL ( Limited support )</li>
          <li>Google Pixel 4</li>
          <li>Huawei P40 (purchased outside mainland China)</li>
          <li>Huawei P40 Pro (purchased outside mainland China)</li>
        </ul>
        <p>iPhones purchased from mainland China do not support eSIM.</p>
        <Link to="/store">Purchase eSIM package now</Link>
      </article>
      <section className="how-to-download">
        <h5 className="how-to-purchase-title">
          Download eSIM profile to handset
        </h5>
        <p>
          After purchasing eSIM service, you will receive an email with QR code.
          Please use handset which supports eSIM and follow the instruction to
          download the eSIM profile. Please note each eSIM can only download in
          one handset for maximum 10 times.
        </p>
        <article className="for-ios">
          <div className="for-ios-text">
            <h5 className="how-to-purchase-title">iOS</h5>
            <ol>
              <li>In “Settings”, select “Mobile Data”</li>
              <li>Select “Add Data Plan”</li>
              <li>Scan QR code</li>
              <li>
                After downloaded the eSIM profile, the SIM can be activated
                after some basic settings
              </li>
            </ol>
          </div>
          <div className="for-ios-img">
            <img src={ios1} alt="instructions for iOS" className="ios-img" />
            <img src={ios2} alt="instructions for iOS" className="ios-img" />
            <img src={ios3} alt="instructions for iOS" className="ios-img" />
            <img src={ios4} alt="instructions for iOS" className="ios-img" />
          </div>
        </article>

        <article className="for-ios">
          <div className="for-ios-text">
            <h5 className="how-to-purchase-title">Android</h5>
            <ol>
              <li> In “Settings”, select “Network and Internet”</li>
              <li>Select “Mobile network”</li>
              <li>Select “Download a SIM instead?”</li>
              <li>Scan QR code to download eSIM profile</li>
            </ol>
          </div>
          <div className="for-ios-img">
            <img
              src={and1}
              alt="instructions for android"
              className="ios-img"
            />
            <img
              src={and2}
              alt="instructions for android"
              className="ios-img"
            />
            <img
              src={and3}
              alt="instructions for android"
              className="ios-img"
            />
            <img
              src={and4}
              alt="instructions for android"
              className="ios-img"
            />
          </div>
        </article>

        <p>
          (Display name and steps may be different, depending on the phone model
          and OS system version.) Due to eSIM is a new technology, certain
          handsets may face problems with hotspot sharing using eSIM. If you
          have difficulties on hotspot sharing, please refer to FAQ. If the
          problem persists, please contact our Customer Service team.
        </p>
        <Link to="/store">Purchase eSIM package now</Link>
      </section>
    </section>
  );
};
export default HowTo;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Faq.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Faq = () => {
  const classes = useStyles();

  const [faqs] = useState([
    {
      q: "1. What is Global Data SIM?",
      a:
        " SkyGo Global Data SIM is a global internet product launched by Global Travel Telecom (GTT). There are 2 card types for Global Data SIM, includes physical SIM and eSIM. Physical SIM is a 3-in-1 SIM card that supports nano, micro and normal formats.",
      id: 1,
    },
    {
      q: "2. Does SkyGo Global Data SIM support voice call and SMS?",
      a:
        "SkyGo Global Data SIM supports data service only. It does not support voice call and SMS.",
      id: 2,
    },
    {
      q: "3. What is the coverage of the SkyGo Global Data SIM?",
      a:
        " SkyGo Global Data SIM can access applications like Google, Facebook etc.",
      id: 3,
    },
    {
      q: "4.SkyGo  Does Global Data SIM support applications like Google Map?",
      a:
        "SkyGo Global Data SIM can access applications like Google, Facebook etc.",
      id: 4,
    },
    {
      q: "5. What type of devices does SkyGo Global Data SIM support?",
      a:
        "SkyGo Global Data SIM is applicable to devices which support OTA standard, including majority mobile phones (except those old models phones), Apple iPAD which supports cellular, and some MiFi devices (requires individual testing. Models with positive result includes Huawei MiFi E5885, E5577Bs-937).",
      id: 5,
    },
    {
      q: "6. How do I access internet after arrived destination?",
      a:
        "After arrived destination, please insert SIM in mobile phone and wait for a few minutes, the network will be selected automatically. Normally you don’t have to do manual setup, but please manual select the operator if you can’t access internet.",
      id: 6,
    },
    {
      q: "7. Do I need to manual activate the SIM?",
      a:
        "The default activation mode is auto. That means when you arrived destination, the data package can be activated after you insert the SIM in phone. However, since there are Multi regional data packages, in order to facilitate customers who purchased these packages, we provide the manual activation mode option for customers. (For example, a customer in Hong Kong purchased Multi regional package and wants to use outside Hong Kong, the data package will be activated when customer inserts the SIM in phone under auto mode.) If the customer choose manual activation mode, customer has to access official website to manual activate data package after arrived the destination.By default, Global Data SIM does not need to manual activate, you just need to switch on the roaming function and the data package will be activated automatically.",
      id: 7,
    },
    {
      q: "8 . How to calculate the data usage time after activated?",
      a:
        "Package will be counting continuously once activated. Every 24 hours will be counted as 1 day. If the customer arrived Hong Kong and use data starting from 1 January 2019 07:38, and the Hong Kong 1 day data package is activated. The customer can access internet in Hong Kong until 2 January 2019 07:37.",
      id: 8,
    },
    {
      q: "9. Is there any daily speed limitation after data package activated?",
      a:
        "There are 2 types of SkyGo Global Data SIM product, limited speed unlimited data product and fixed data product. For limited speed unlimited data product, there is 500MB daily high speed data usage, thereafter unlimited restricted speed data usage with speed 768kbps (384kbps for upstream and downstream). After the speed is restricted, high speed data will be reset at 00:00 on the next day (Europe destinations reset at 08:00 Beijing time, while other destinations rest at 00:00 Beijing time). Customer can resume high speed internet access.",
      id: 9,
    },
    {
      q:
        "10. How about if I am going from 1 destination to another within 24 hours after activated?",
      a:
        "If the destination is within the package coverage, the data package will be continued automatically if you going from 1 destination to another within 24 hours. If the destination is not covered by the data package, you will not be able to access internet.",
      id: 10,
    },
    {
      q: "11.  Why it shows 2G network after I inserted the SIM card in phone?",
      a:
        "Please check whether the SIM is inserted in 3/4G network slot in phone.",
      id: 11,
    },
    {
      q:
        "12. What happens if I go to the destination that Global Data SIM does not support?",
      a:
        "If you go to the destination that SkyGo Global Data SIM does not support, you can’t access internet.",
      id: 12,
    },
    {
      q: "13. Does it support personal hotspot?",
      a:
        "SkyGo Global Data SIM supports personal hotspot sharing to other phone. However, in hotspot mode, the network speed may be lower than normal, and the daily high speed data will be consumed faster.",
      id: 13,
    },
    {
      q: "14. Why does my phone say forbidden network?",
      a:
        "Forbidden network is the network which doesn’t allow your sim card to register. If you have this problem after manually selecting network, please retry selecting network.",
      id: 14,
    },
    {
      q: "15. How to Check Data Usage ?",
      a:
        "Please contact our CS team to check your data usage. Online self-check currently is not supported.",
      id: 15,
    },
    {
      q: "16. Can I use SIM Toolkit Application ?",
      a:
        "SIM Toolkit Application is used to trouble shooting and updating V-IMSI manually when the V-IMSI isn’t updated automatically. But the toolkit would affect other functions on phone. Please consult our customer service before using it.",
      id: 16,
    },
  ]);

  return (
    <section className="faq">
      <div className="product-intro">
        <h4>Product Introduction</h4>
        <p className="product-desc">
          SkyGo Global data SIM is a reusable SIM card. You don’t need to switch
          local SIM card or carry other MiFi devices, only need to subscribe
          different combinations of data packages and can access internet in
          over 100 destinations.
          <br />
          Before your next trip or when you need to use mobile data abroad, you
          just subscribe data package from the SkyGo Global Data SIM APP or
          website in the same card, and enjoy the data service.
        </p>
      </div>
      <div className="activation">
        <div className="package activate">
          <h4>How to activate package</h4>
          <ol>
            <li>Insert SIM card into mobile after arrival</li>
            <li>Switch on Mobile Data and Data Roaming</li>
            <li>Enjoy the service</li>
          </ol>
        </div>
        <div className="package top-up">
          <h4>How to top up data package packages</h4>
          <ol>
            <li>Bind SIM card</li>
            <li>Subscribe to Data Package</li>
            <li>Make Payment</li>
          </ol>
        </div>
      </div>
      <h2>FAQ</h2>

      <div className={classes.root}>
        {faqs.map((faq) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{faq.q}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.a}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
export default Faq;

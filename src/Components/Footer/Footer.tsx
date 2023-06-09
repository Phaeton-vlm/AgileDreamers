import React from "react";
import { AgileDreamers } from "../../Assets/Logo/AgileDreamers";
import { LogoIconFooter } from "../../Assets/Logo/LogoIconFooter";
import { LinkedinIcon } from "../../Assets/Footer/LinkedinIcon";
import { FacebookIcon } from "../../Assets/Footer/FacebookIcon";
import { TwitterIcon } from "../../Assets/Footer/TwitterIcon";
import { YoutubeIcon } from "../../Assets/Footer/YoutubeIcon";
import { InstagramIcon } from "../../Assets/Footer/InstagramIcon";
import { MediumIcon } from "../../Assets/Footer/MediumIcon";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerTop}>
        <div>
          <div className={styles.containerLogo}>
            <LogoIconFooter />
            <AgileDreamers />
          </div>
        </div>

        <div>
          <div className={styles.title}>Sitemap</div>
          <div className={styles.block}>
            <div className={styles.link}>SaaS Service Providers</div>
            <div className={styles.link}>Outsourcing Software Teams</div>
            <div className={styles.link}>Outstaffing Service</div>
            <div className={styles.link}>Software Developers</div>
          </div>
        </div>

        <div>
          <div className={styles.title}>Offices</div>
          <div className={styles.text}>Tel-Aviv Israel</div>
        </div>

        <div>
          <div className={styles.title}>Contacts</div>
          <div className={styles.block}>
            <div className={styles.text}>Slack: @AgileDreamers</div>
            <div className={styles.text}>Telegram: @AgileDreamers</div>
            <div className={styles.text}>contact@agiledreamers.com</div>
            <div className={styles.icons}>
              <LinkedinIcon /> <FacebookIcon /> <TwitterIcon /> <YoutubeIcon />
              <InstagramIcon />
              <MediumIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.containerBottom}>
        <div className={styles.containerBottomText}>
          <div className={styles.link}>Privacy policy</div>
          <div className={styles.link}>Terms and conditions</div>
          <div className={styles.link}>Media Kit</div>
        </div>
        <div className={styles.text}>All rights reserved 2023©</div>
      </div>
    </div>
  );
};

export default Footer;

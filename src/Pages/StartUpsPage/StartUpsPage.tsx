import React from "react";
import { HeadLine } from "../../Assets/StartUpsPage/HeadLine";
import { StartUpEight } from "../../Assets/StartUpsPage/StartUpEight";
import { StartUpFive } from "../../Assets/StartUpsPage/StartUpFive";
import { StartUpFour } from "../../Assets/StartUpsPage/StartUpFour";
import { StartUpNine } from "../../Assets/StartUpsPage/StartUpNine";
import { StartUpOne } from "../../Assets/StartUpsPage/StartUpOne";
import { StartUpSeven } from "../../Assets/StartUpsPage/StartUpSeven";
import { StartUpSix } from "../../Assets/StartUpsPage/StartUpSix";
import { StartUpThree } from "../../Assets/StartUpsPage/StartUpThree";
import { StartUpTwo } from "../../Assets/StartUpsPage/StartUpTwo";
import Button, { ButtonTypes } from "../../Components/Button";

import classNames from "classnames";

import styles from "./StartUpsPage.module.css";
import { CardIcon } from "../../Assets/StartUpsPage/CardIcon";
import { Circles } from "../../Assets/StartUpsPage/StartUpCards/Circles";
import { ArrowCircle } from "../../Assets/StartUpsPage/StartUpCards/ArrowCircle";
import { Line } from "../../Assets/StartUpsPage/StartUpCards/Line";
import { Waves } from "../../Assets/StartUpsPage/StartUpCards/Waves";
import { RightLine } from "../../Assets/StartUpsPage/RightLine";
import { LeftLine } from "../../Assets/StartUpsPage/LeftLine";

const FullTeam = [
  { icon: <StartUpOne />, name: "Project Manager" },
  { icon: <StartUpTwo />, name: "CTO-as-a-service" },
  { icon: <StartUpThree />, name: "Product Owners" },
  { icon: <StartUpFour />, name: "UX/UI designers" },
  { icon: <StartUpFive />, name: "Front-end developers" },
  { icon: <StartUpSix />, name: "Back-end developers" },
  { icon: <StartUpSeven />, name: "Mobile developers" },
  { icon: <StartUpEight />, name: "AI developers" },
  { icon: <StartUpNine />, name: "QA" },
];

const StartUpsPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.darkBlock}>
        <div className={styles.headLine}>
          <div className={styles.title}>Startup Program</div>
          <div className={styles.headLineDescription}>
            <div className={styles.headLineText}>
              Agile Dreamers has created a unique AD Startup Program that simply
              provides new startups with a dedicated development team to set the
              easiest path to build an MVP with a successful GO-TO- MARKET
              STRATEGY.
            </div>
            <div className={styles.headLineText}>
              We combine a team of ambitious professionals with a team of
              ambitious junior developers, working together to deliver the
              maximum possible results to the startup.
            </div>
          </div>
          <div className={styles.headLineContainer}>
            <Button
              className={styles.buttonSignIn}
              title={"Become a Startup Program"}
              type={ButtonTypes.BigPrimary}
              onClick={() => {}}
            />
            <HeadLine />
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.whiteBlock}>
          <div className={styles.container}>
            <div
              className={classNames(
                styles.subtitle,
                styles.darkSubtitle,
                styles.borderSubtitle
              )}
            >
              Your way
            </div>
            <div className={styles.yourWay}>
              <div className={styles.yourWayLeft}>
                <div className={styles.yourWaySubtitle}>MVP Stage</div>
                <div className={styles.yourWaySubtitle}>
                  After-launched stage
                </div>
                <div className={styles.yourWaySubtitle}>Go-to-Market</div>
              </div>
              <div className={styles.yourWayRight}>
                <div>
                  <CardIcon />
                </div>
                <div className={styles.yourWayDescription}>
                  Junior developers will be provided as a free-of-charge part of
                  service for MVP development - up to 20 developers and experts.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className={classNames(styles.subtitle, styles.darkSubtitle)}>
              Full team adopted to the existing needs may consist from
            </div>
            <div className={styles.table}>
              {FullTeam.map(({ icon, name }) => {
                return (
                  <div className={styles.team}>
                    <div className={styles.teamIcon}>{icon}</div>
                    <div className={styles.teamName}>{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={classNames(styles.darkBlock, styles.padding)}>
          <div className={styles.container}>
            <div
              className={classNames(
                styles.subtitle,
                styles.lightSubtitle,
                styles.borderSubtitle
              )}
            >
              Your Future
            </div>
            <div className={styles.futureCards}>
              <div className={classNames(styles.futureCard, styles.blueCard)}>
                <div className={styles.firstFutureCard}>
                  <div className={styles.futureCardTitle}>
                    unique valuable opportunity{" "}
                  </div>
                  <div className={styles.futureCardText}>
                    Agile Dreamers provides startups with a unique valuable
                    opportunity to launch a new product and expand by getting an
                    MVP in the shortest period of time while investing in the
                    success of the talents of the future that will become of
                    your team.
                  </div>
                  <div className={styles.positionArrowCircle}>
                    <ArrowCircle />
                  </div>
                </div>
              </div>
              <div className={classNames(styles.futureCard, styles.whiteCard)}>
                <div className={styles.secondFutureCard}>
                  <Circles />
                  <div
                    className={classNames(
                      styles.futureCardText,
                      styles.futureCardTextBlue
                    )}
                  >
                    We help juniors developers to gain team development and
                    commercial project experience by leading our teams with
                    mentors and senior developers. We oversee their work to
                    ensure you will be thrilled with your new MVP and through
                    ongoing further stages.
                  </div>
                  <div
                    className={classNames(
                      styles.futureCardSubtitle,
                      styles.futureCardSubtitleRight
                    )}
                  >
                    team development and commercial project experience
                  </div>
                  <div className={styles.positionLine}>
                    <Line />
                  </div>
                </div>
              </div>

              <div className={classNames(styles.futureCard, styles.blueCard)}>
                <div className={styles.thirdFutureCard}>
                  <div className={styles.futureCardSubtitle}>
                    minimal efforts to bring your vision to life
                  </div>

                  <div className={styles.futureCardText}>
                    Our experienced teams require minimal efforts to bring your
                    vision to life. It guarantees modern professional
                    architecture and user friendly design.
                  </div>
                </div>
                <div className={styles.positionWaves}>
                  <Waves />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div
              className={classNames(
                styles.subtitle,
                styles.lightSubtitle,
                styles.borderSubtitle,
                styles.paddingSubtitle
              )}
            >
              What do you need so we can start?
            </div>
            <div className={styles.containerStart}>
              <div className={styles.containerStartOne}>
              <div className={styles.startDesc}>You need to prepare all the 
necessary resources for the website</div>
              </div>

              <div className={styles.containerStartTwo}>
                <div className={styles.startDesc}>Business requirements and one person to be in charge from your side</div>
              </div>

              <div className={styles.containerStartThree}>
              <div className={styles.startDesc}>Your early requirements will allow to prepare a for discovery stage that will allow our product owners to create Product Requirements Spefications and work on user stories</div>
              </div>
              
              <div className={styles.startRightLine}><RightLine /></div>
              <div className={styles.startLeftLine}> <LeftLine /></div>
            </div>

            <div className={classNames(styles.startDesc, styles.startDescBlue)}>If you don't have specifications - don't worry, our product manager will help you prepare before getting any development.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpsPage;

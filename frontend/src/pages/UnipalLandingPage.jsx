import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UnipalLandingPage.module.css";

const UnipalLandingPage = () => {
  const navigate = useNavigate();

  const onButtonGetStartedNowClick = useCallback(() => {
    navigate("/SignupPage");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutUsEducaELearningLand']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onButtonLoginContainerClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/Login");
  }, [navigate]);

  const onButtonSignInContainerClick = useCallback(() => {
    navigate("/SignupPage");
  }, [navigate]);

  const onChatButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/Chat");
  }, [navigate]);

  const onProfessorButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/professor-reviews");
  }, [navigate]);


  const onCalendarButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/Calendar");
  }, [navigate]);

  const onTranscriptButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/UploadTranscripts");
  }, [navigate]);

  const onRateProfButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/ProfReview");
  }, [navigate]);

  const onProfileButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/ProfilePage");
  }, [navigate]);

  const ongetButtonClick = useCallback(() => {
    // Please sync "Login" to the project
    navigate("/SignupPage");
  }, [navigate]);


  const onFillClick = useCallback(() => {
    // Please sync "Signup Page" to the project
  }, []);

  return (
    <div className={styles.unipalLandingPage}>
      <div className={styles.featuredEducaELearningLand}>
        <div className={styles.featured}>
          <div className={styles.featured1}>Featured</div>
          <div className={styles.frame}>
            <div className={styles.development}>
              <div className={styles.bg} />
              <div className={styles.registeringForClasses}>
                Registering for classes can be a daunting task, especially when
                faced with confusing registration pages and waitlists. UniPal
                simplifies the process by providing a user-friendly interface
                that guides you through each step of registration.
              </div>
              <b className={styles.seamlessRegistrationExperienContainer}>
                <p
                  className={styles.seamlessRegistration}
                >{`Seamless Registration `}</p>
                <p className={styles.seamlessRegistration}>Experience</p>
              </b>
              <img
                className={styles.developmentChild}
                alt=""
                src="/group-1000001423.svg"
              />
            </div>
            <div className={styles.uiuxDesign}>
              <div className={styles.bg} />
              <div className={styles.joinTheChorus}>
                Join the chorus of student voices on UniPal by sharing your
                professorial experiences. Rate, review, and be heard—your
                feedback not only shapes the academic landscape but also fosters
                a vibrant community of empowered learners.
              </div>
              <b className={styles.yourVoiceMattersContainer}>
                <p
                  className={styles.seamlessRegistration}
                >{`Your Voice Matters: `}</p>
                <p className={styles.seamlessRegistration}>
                  Rate Your Professor
                </p>
              </b>
              <img
                className={styles.developmentChild}
                alt=""
                src="/wirefirmingicon.svg"
              />
            </div>
            <div className={styles.graphicDesign}>
              <div className={styles.bg} />
              <div className={styles.oneOfThe}>
                One of the biggest challenges for students is managing
                prerequisite courses. UniPal takes the guesswork out of the
                equation by analyzing your academic history and interests to
                recommend courses that align with your goals.
              </div>
              <b className={styles.navigatePrerequisitesWithContainer}>
                <p
                  className={styles.seamlessRegistration}
                >{`Navigate Prerequisites `}</p>
                <p className={styles.seamlessRegistration}>with Ease</p>
              </b>
              <img
                className={styles.developmentChild}
                alt=""
                src="/wirefirmingicon1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.footerEEducaELearningLand}>
          <div className={styles.footer}>
            <div className={styles.frame1}>
              <div className={styles.frame1}>
                <div className={styles.bg3} />
              </div>
              <div className={styles.bg4} />
            </div>
            <div className={styles.frame3}>
              <div className={styles.frameIcon}>
                <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                <div className={styles.frame5}>
                  <div className={styles.unipalgmailcomParent}>
                    <b className={styles.unipalgmailcom}>unipal@gmail.com</b>
                    <div className={styles.contact}>CONTACT</div>
                  </div>
                </div>
              </div>
              <div className={styles.frame6}>
                <div className={styles.frame7}>
                  <div className={styles.stayUpToDate}>
                    <input
                      className={styles.buttonYourEmailAddress}
                      placeholder="Your email address"
                      type="text"
                    />
                    <div className={styles.stayInformedOn}>
                      Stay Informed On How You Can Make a Difference
                    </div>
                    <div className={styles.stayUpTo}>Stay up to date</div>
                  </div>
                </div>
                <div className={styles.frame8}>
                  <div className={styles.resources}>
                    <div className={styles.resources1}>Resources</div>
                    <div className={styles.blogNewsUpdatesContainer}>
                      <p className={styles.seamlessRegistration}>Blog</p>
                      <p className={styles.seamlessRegistration}>
                        News Updates
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.frame9}>
                  <div className={styles.frame10}>
                    <div className={styles.allRightsReserved}>
                      © 2024 All Rights Reserved - Unipal
                    </div>
                  </div>
                  <div className={styles.frame11}>
                    <div className={styles.navigation}>
                      <div className={styles.resources1}>Navigation</div>
                      <div className={styles.blogNewsUpdatesContainer}>
                        <p className={styles.seamlessRegistration}>About</p>
                        <p className={styles.seamlessRegistration}>Course</p>
                        <p className={styles.seamlessRegistration}>Professors</p>
                        <div
                            className={styles.buttonLogin}
                            onClick={onButtonLoginContainerClick}
                        >
                          {/* <div className={styles.underline}/> */}
                          <div className={styles.logIn}>Chat</div>
                        </div>
                        <p className={styles.seamlessRegistration} onClick={onButtonLoginContainerClick}>Chat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features03EducaELearningLa}>
        <div className={styles.features03}>
        <div className={styles.mockupParent}>
            <div className={styles.mockup}>
              <div className={styles.bg5} />
              <img className={styles.shpaeIcon} alt="" src="/shpae.svg" />
              <div className={styles.card09}>
                <div className={styles.bg6} />
                <div className={styles.shpae}>
                  <div className={styles.shpaeChild} />
                  <div className={styles.shpaeItem} />
                </div>
                <img className={styles.shpaeIcon1} alt="" src="/shpae1.svg" />
              </div>
              <div className={styles.card08}>
                <div className={styles.bg7} />
                <div className={styles.ongoing}>
                  <div className={styles.ongoing1}>Ongoing</div>
                  <div className={styles.ongoingChild} />
                </div>
                <div className={styles.pending}>
                  <div className={styles.pending1}>Pending</div>
                  <div className={styles.pendingChild} />
                </div>
                <img className={styles.shapeIcon} alt="" src="/shape.svg" />
                <b className={styles.courseActivity}>Course Activity</b>
              </div>
              <img className={styles.card07Icon} alt="" src="/card07.svg" />
              <img className={styles.card06Icon} alt="" src="/card06.svg" />
              <div className={styles.card05}>
                <div className={styles.bg8} />
                <div className={styles.div}>
                  <div className={styles.div1}>+120</div>
                  <div className={styles.child} />
                </div>
                <div className={styles.k}>
                  <div className={styles.kChild} />
                  <div className={styles.div1}>25,3K</div>
                </div>
                <img className={styles.shapeIcon1} alt="" src="/shape1.svg" />
                <div className={styles.shape}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameInner} />
                    <div className={styles.rectangleDiv} />
                  </div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild1} />
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameDiv}>
                    <div className={styles.frameChild3} />
                    <div className={styles.frameChild4} />
                  </div>
                  <div className={styles.rectangleParent1}>
                    <div className={styles.frameChild5} />
                    <div className={styles.frameChild6} />
                  </div>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild7} />
                    <div className={styles.frameChild8} />
                  </div>
                  <div className={styles.rectangleParent3}>
                    <div className={styles.frameChild9} />
                    <div className={styles.frameChild10} />
                  </div>
                </div>
              </div>
              <div className={styles.card04}>
                <div className={styles.bg9} />
                <div className={styles.icon}>
                  <div className={styles.iconChild} />
                  <img
                    className={styles.image128Icon}
                    alt=""
                    src="/image-128@2x.png"
                  />
                </div>
                <div className={styles.happyUsers}>Happy users</div>
                <b className={styles.k2}>398K</b>
              </div>
              <img className={styles.card03Icon} alt="" src="/card03.svg" />
              <img className={styles.card02Icon} alt="" src="/card02.svg" />
              <img className={styles.card01Icon} alt="" src="/card01.svg" />
            </div>
            <div className={styles.frame12}>
              <div className={styles.stepIntoAWorldOfAcademicParent}>
                <div className={styles.stepIntoA}>
                  Step into a world of academic clarity and simplicity with
                  UniPal's elegantly crafted visualizations. Navigate your
                  course selections with ease, guided by a user interface
                  designed to inspire and empower.
                </div>
                <b className={styles.visualizeYourSuccessContainer}>
                  <p
                    className={styles.seamlessRegistration}
                  >{`Visualize Your Success `}</p>
                  <p className={styles.seamlessRegistration}>
                    with UniPal's Intuitive UI
                  </p>
                </b>
                <img className={styles.icon1} alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features02EducaELearningLa}>
        <div className={styles.features02}>
          <div className={styles.mockpuParent}>
            <div className={styles.mockpu}>
              <div className={styles.bg10} />
              <div className={styles.card03}>
                <div className={styles.bg11} />
                {/* <div className={styles.buttonGetStartedNow}>
                  <div className={styles.buttonGetStartedNowChild} />
                  <div className={styles.getStartedNow}>Get Started Now</div>
                </div> */}
                <div className={styles.full50OnlineContainer}>
                  <p className={styles.seamlessRegistration}>
                    Full 50+ Online class
                  </p>
                  <p className={styles.seamlessRegistration}>
                    24h Support customer
                  </p>
                  <p
                    className={styles.seamlessRegistration}
                  >{`Premium service `}</p>
                </div>
                <div className={styles.div2}>
                  <b className={styles.b}>$ 9.</b>
                  <div className={styles.div3}>99</div>
                </div>
                <div className={styles.yearlyPackage}>Yearly Package</div>
                <div className={styles.basic}>BASIC</div>
              </div>
              <div className={styles.card02}>
                <div className={styles.bg12} />
                {/* <div className={styles.buttonGetStartedNow1}>
                  <div className={styles.buttonGetStartedNowItem} />
                  <div className={styles.getStartedNow1}>Get Started Now</div>
                </div> */}
                <div className={styles.fullyPersonalizedRecommendatContainer}>
                  <p className={styles.seamlessRegistration}>
                    Fully personalized recommendation
                  </p>
                  <p className={styles.seamlessRegistration}>
                    24h Support customer
                  </p>
                  <p
                    className={styles.premiumService1}
                  >{`Premium service`}</p>
                </div>
                <div className={styles.div4}>
                  <b className={styles.b1}>$79.</b>
                  <div className={styles.div5}>99</div>
                </div>
                <div className={styles.yearlyPackage1}>Yearly Package</div>
                <div className={styles.basic1}>BASIC</div>
              </div>
              <div className={styles.card01}>
                <div className={styles.bg13} />
                <div className={styles.icon}>
                  <div className={styles.iconItem} />
                  <img
                    className={styles.image128Icon}
                    alt=""
                    src="/image-128@2x.png"
                  />
                </div>
                <div className={styles.happyUsers1}>Happy users</div>
                <b className={styles.k3}>398K</b>
              </div>
            </div>
            <div className={styles.frame13}>
              <div className={styles.buttonParent}>
                {/* <div className={styles.button}>
                  <div className={styles.buttonChild} />
                  <img
                    className={styles.buttonItem}
                    alt=""
                    src="/rectangle-118.svg"
                  />
                  <div className={styles.monthly}>Monthly</div>
                  <div className={styles.yearly}>Yearly</div>
                </div> */}
                <div className={styles.whetherYourePondering}>
                  Whether you're pondering your next course move or need a quick
                  rundown on prerequisites, our chat assistant is at your beck
                  and call, ready to offer sage advice and lightning-fast
                  assistance.
                </div>
                <b className={styles.visualizeYourSuccessContainer}>
                  <p
                    className={styles.seamlessRegistration}
                  >{`Your Personal `}</p>
                  <p className={styles.seamlessRegistration}>
                    Academic Assistant
                  </p>
                </b>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features01EducaELearningLa}>
        <div className={styles.features01}>
          <div className={styles.mockupGroup}>
            <div className={styles.mockup1}>
              <div className={styles.bg14} />
              <div className={styles.card031}>
                <div className={styles.bg15} />
                <div className={styles.div6}>
                  <div className={styles.members}>Members</div>
                  <div className={styles.frame14}>
                    <div className={styles.frameChild11} />
                    <div className={styles.div7}>+15</div>
                  </div>
                </div>
                <img className={styles.imageIcon} alt="" src="/image@2x.png" />
                <div className={styles.icon4}>
                  <div className={styles.iconInner} />
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-100.svg"
                  />
                </div>
                <div className={styles.total20Users}>Total 20+ users</div>
                <b className={styles.ourOnlineRecommender}>
                  Our online recommender
                </b>
              </div>
              <div className={styles.card021}>
                <div className={styles.card02Child} />
                <div className={styles.rectangleParent4}>
                  <div className={styles.frameChild12} />
                  <div className={styles.frame15}>
                    <div className={styles.ellipseDiv} />
                    <div className={styles.frameChild13} />
                  </div>
                </div>
                <div className={styles.discount}>
                  <span>50%</span>
                  <span className={styles.discount1}> Discount</span>
                </div>
                <div className={styles.shape1} />
                <img
                  className={styles.undrawOrderConfirmedReG0ifIcon}
                  alt=""
                  src="/undraw-order-confirmed-re-g0if-1.svg"
                />
              </div>
              <div className={styles.card011}>
                <div className={styles.bg16} />
                <img className={styles.icon5} alt="" src="/icon2.svg" />
                <div className={styles.allCourses}>All Courses</div>
              </div>
            </div>
            <div className={styles.iconParent}>
              <img className={styles.icon1} alt="" src="/icon3.svg" />
              <div className={styles.frame16}>
                <b className={styles.effortlesslyPlanYourContainer}>
                  <p
                    className={styles.seamlessRegistration}
                  >{`Effortlessly Plan Your`}</p>
                  <p className={styles.seamlessRegistration}>
                    Course Structure
                  </p>
                </b>
                <div className={styles.providesAComprehensive}>
                  Provides a comprehensive platform where you can visualize and
                  plan your entire academic journey. From mapping out your major
                  requirements to scheduling elective courses, UniPal's
                  intuitive interface makes it easy to create a personalized
                  roadmap for success..
                </div>
              </div>
            </div>
          </div>
          <div className={styles.unipalFeatures}>UniPal Features</div>
        </div>
      </div>
      <div
        className={styles.aboutUsEducaELearningLand}
        data-scroll-to="aboutUsEducaELearningLand"
      >
        <div className={styles.aboutUs}>
          <div className={styles.bg17} />
          <div className={styles.atHandParent}>
            <div className={styles.atHand}>
              <div className={styles.atHand1}>At hand</div>
              <div className={styles.fill} />
              <img className={styles.iconchat} alt="" src="/iconchat.svg" />
            </div>
            <div className={styles.cheaper}>
              <div className={styles.bgOutlines}>
                <div className={styles.outline} />
                <div className={styles.outline1} />
              </div>
              <div className={styles.cheaper1}>Cheaper</div>
              <div className={styles.fill1} />
              <img
                className={styles.icondecrease}
                alt=""
                src="/icondecrease.svg"
              />
            </div>
            <div className={styles.faster}>
              <div className={styles.fill2} />
              <div className={styles.atHand1}>Faster</div>
              <img className={styles.iconchat} alt="" src="/iconenergy.svg" />
            </div>
          </div>
          <div className={styles.frame17}>
            {/* <div className={styles.buttonViewAll}>
              <img className={styles.bgLinesIcon} alt="" src="/bg-lines.svg" />
              <div className={styles.viewAll}>View all</div>
              <img
                className={styles.iconarrow}
                alt=""
                src="/iconarrow@2x.png"
              />
            </div> */}
            <div className={styles.getStartedWithUnipalParent}>
              <b className={styles.getStartedWithContainer}>
                <p className={styles.seamlessRegistration}>Get Started With UniPal.</p>
                {/* <p className={styles.seamlessRegistration}>UniPal.</p> */}
              </b>
              <div className={styles.aboutUs1}>ABOUT US</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.frameIcon1} alt="" src="/frame3.svg" />
      <div className={styles.headerEducaELearningLandin}>
        <div className={styles.header}>
          {/* <div className={styles.bg18}> */}
          <div className={styles.bg19} />
          {/* </div> */}
          <div className={styles.mockup2}>
            <img
              className={styles.mockupChild}
              alt=""
              src="/group-1000001426@2x.png"
            />
            <div className={styles.image}>
              <div className={styles.imageChild} />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <div className={styles.watchOurPlatform} onClick={ongetButtonClick}>
            <button className={styles.watchButton} onClick={ongetButtonClick}>
              <img
                className={styles.watchOurPlatformChild}
                alt=""
                src="/group-233.svg"
                onClick={ongetButtonClick}
              />
            </button>
            <div className={styles.watchOurPlatform1} onClick={ongetButtonClick}>Watch our platform!</div>
          </div>
          <div className={styles.buttonGetStartedNowParent}>
            <button
              className={styles.buttonGetStartedNow2}
              onClick={onButtonGetStartedNowClick}
            >
              <div
                className={styles.buttonGetStartedNowInner}
                onClick={onRectangleClick}
              />
              <div className={styles.getStartedNow2}>Get Started Now</div>
            </button>
            <b className={styles.siteMakesTailored}>
              Site makes tailored course recommendations just for you!
            </b>
            <b className={styles.discoverLearnSucceedContainer}>
              <p className={styles.seamlessRegistration}>{`Discover `}</p>
              <p className={styles.seamlessRegistration}>Learn</p>
              <p className={styles.seamlessRegistration}>Succeed</p>
            </b>
            <div className={styles.courseRecommender}>Course Recommender</div>
          </div>
          <div className={styles.navigationBarParent}>
            <div className={styles.navigationBar}>
              {/* <div className={styles.logo}>
                <div className={styles.text}>{` `}</div>
              </div> */}
              {/* <div className={styles.menu}> */}
                <div className={styles.about1} onClick={onAboutTextClick}>
                  About
                </div>
                <div className={styles.profile} onClick={onProfileButtonClick}>Profile</div>
                <div className={styles.calendar} onClick={onCalendarButtonClick}>Calendar</div>
                <div className={styles.chat1} onClick={onChatButtonClick}>Chat</div>
                <div className={styles.profReview} onClick={onProfessorButtonClick}>Professor Reviews</div>
                <div className={styles.rateProf} onClick={onRateProfButtonClick}>Rate Professor</div>
                <div className={styles.transcripts} onClick={onTranscriptButtonClick}>Upload Transcripts</div>
              {/* </div> */}
              <div className={styles.button1}>
                <div
                    className={styles.buttonLogin}
                  onClick={onButtonLoginContainerClick}
                >
                  <div className={styles.underline} />
                  <div className={styles.logIn}>Log In</div>
                </div>
                <div
                  className={styles.buttonSignIn}
                  onClick={onButtonSignInContainerClick}
                >
                  <div className={styles.fill3} onClick={onFillClick} />
                  <div className={styles.signUp}>Sign Up</div>
                </div>
              </div>
            </div>
            <img className={styles.logoIcon} alt="" src="/Logo_White.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnipalLandingPage;

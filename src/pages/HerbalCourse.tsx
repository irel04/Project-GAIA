import { FunctionComponent, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "./HerbalCourse.module.css";
import CourseLayout from "../layouts/CourseLayout";
import TakeQuiz from "../components/TakeQuiz";
const HerbalCourse = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(String);

  const onHerbal1ContainerClick = () => {
    setSelectedPlant("plant-10");

    setShowInfo(true);
  };

  const onHerbal2ContainerClick = () => {
    setSelectedPlant("plant-11");
    setShowInfo(true);
  };

  const onHerbal3ContainerClick = () => {
    setSelectedPlant("plant-12");
    setShowInfo(true);
  };
  const onHerbal4ContainerClick = () => {
    setSelectedPlant("plant-13");
    setShowInfo(true);
  };
  const onHerbal5ContainerClick = () => {
    setSelectedPlant("plant-14");
    setShowInfo(true);
  };

  const onHerbal6ContainerClick = () => {
    setSelectedPlant("plant-15");
    setShowInfo(true);
  };

  const onHerbal7ContainerClick = () => {
    setSelectedPlant("plant-16");
    setShowInfo(true);
  };

  const onHerbal8ContainerClick = () => {
    setSelectedPlant("plant-17");
    setShowInfo(true);
  };

  const onHerbal9ContainerClick = () => {
    setSelectedPlant("plant-18");
    setShowInfo(true);
  };

  const handleReset = () => {
    setShowInfo(false);
  };
  // Search
  const [query, setQuery] = useState("");
  const search = () => {
    let filter = query.toUpperCase();
    let item = document.getElementsByClassName(
      styles.herbal1
    ) as HTMLCollectionOf<HTMLElement>;
    let nameLen = document.getElementsByClassName(
      styles.herbal21
    ) as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < nameLen.length; i++) {
      let a = item[i].getElementsByClassName(styles.herbal21)[0] as HTMLElement;
      let value = a.innerHTML || a.textContent;

      if (value != undefined)
        if (value?.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "";
        } else {
          item[i].style.display = "none";
        }
    }
  };

  return (
    <CourseLayout
      plantChosen={selectedPlant}
      handleReset={handleReset}
      clicked={showInfo}
    >
      <MainLayout
        ownClass={showInfo ? styles.herbalCourseBlur : styles.herbalCourse}
        clickable={
          showInfo
            ? { pointerEvents: "none", height: "2500px" }
            : { pointerEvents: "inherit", height: "2290px" }
        }
      >
        <div className={styles.sideInfo} />
        <div className={styles.sideBarherbal}>
          <div className={styles.trivias}>
            <div className={styles.theyreMainlySought}>
              they’re mainly sought by those looking to quit smoking since they
              contain no tobacco or menthol. People who share their experiences
              with herbal cigarettes claim that it makes them feel more relaxed
              and calmer.
            </div>
            <div className={styles.thePracticeOf}>
              The practice of smoking herbal cigarettes has come to light as an
              alternative to cigarettes;
            </div>
            <div className={styles.theFragranceOf}>
              The fragrance of lavender is believed to help promote relaxation
              and improve sleep quality. In fact, studies have shown that the
              scent of lavender can reduce stress levels and even lower heart
              rate.
            </div>
            <div className={styles.didYouKnow}>
              Did you know that lavender, known for its calming and soothing
              properties, has been used for centuries as a natural remedy for
              anxiety and insomnia?
            </div>
            <div className={styles.funFacts}>Fun Facts</div>
          </div>
          <div className={styles.recommendedlinks}>
            <div className={styles.therapyRecommended}>
              <a
                className={styles.thingsYouDidnt}
                href='https://fightershots.co.uk/blogs/blog/31-things-you-didn-t-know-about-spices-and-herbs'
                target='_blank'
              >
                31 Things you didn’t know about spices and herbs!
              </a>
              <img src='31Things.png' className={styles.therapyReco} />
              <a
                className={styles.readMore}
                href='https://fightershots.co.uk/blogs/blog/31-things-you-didn-t-know-about-spices-and-herbs'
                target='_blank'
              >
                Read more
              </a>
            </div>
            <div className={styles.therapyRecommended1}>
              <a
                className={styles.importanceOfHerbal}
                href='https://www.betterhealth.vic.gov.au/health/healthyliving/herbs#:~:text=Consuming%20herbs%20may%20help%20to,lemongrass%20may%20help%20lower%20cholesterol.'
                target='_blank'
              >
                Importance of herbal plant
              </a>
              <img
                src='herbal-theraphy-reco.png'
                className={styles.therapyReco1}
              />
              <a
                className={styles.readMore1}
                href='https://www.betterhealth.vic.gov.au/health/healthyliving/herbs#:~:text=Consuming%20herbs%20may%20help%20to,lemongrass%20may%20help%20lower%20cholesterol.'
                target='_blank'
              >
                Read more
              </a>
            </div>
            <b className={styles.recommended}>Recommended</b>
          </div>
          <img
            className={styles.questionMarkPlantImage}
            alt=''
            src='/question-mark-plant-image@2x.png'
          />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.herbalContents}>
            {/* Search bar */}
            <div className={styles.searchBar}>
              <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={search}
                placeholder='Search Plant'
              ></input>
              <img src='./search-icon.svg' alt='' />
            </div>
            <div className={styles.header}>
              <div className={styles.herbalPlants}>
                <span>HERBAL</span>
                <span className={styles.plants}> PLANTS</span>
              </div>
              <div className={styles.learningMaterials}>Listed Indivuals</div>
            </div>
            <div className={styles.contents}>
              {/* First Row */}
              <div className={styles.herbal1} onClick={onHerbal1ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-1@2x.png'
                />
                <div className={styles.herbal21}>Basil</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal2ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-2@2x.png'
                />
                <div className={styles.herbal21}>Oregano</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal3ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-3@2x.png'
                />
                <div className={styles.herbal21}>Rosemary</div>
              </div>
              {/* Second row */}
              <div className={styles.herbal1} onClick={onHerbal4ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-4@2x.png'
                />
                <div className={styles.herbal21}>Thyme</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal5ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-5@2x.png'
                />
                <div className={styles.herbal21}>Sage</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal6ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-6@2x.png'
                />
                <div className={styles.herbal21}>Arugula</div>
              </div>

              {/* Third Row */}
              <div className={styles.herbal1} onClick={onHerbal7ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-7@2x.png'
                />
                <div className={styles.herbal21}>Marjoram</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal8ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-8@2x.png'
                />
                <div className={styles.herbal21}>Tarragon</div>
              </div>
              <div className={styles.herbal1} onClick={onHerbal9ContainerClick}>
                <img
                  className={styles.herbal2Icon}
                  alt=''
                  src='/herbal-9@2x.png'
                />
                <div className={styles.herbal21}>Spinach</div>
              </div>
            </div>
          </div>
          <TakeQuiz category={"Herbal"} />
        </div>
      </MainLayout>
    </CourseLayout>
  );
};

export default HerbalCourse;

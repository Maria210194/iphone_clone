import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { animateWithGsap } from "../utils/animations";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWorks = () => {
  const videoRef = useRef();
  const { t } = useTranslation();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            {t("HIW.TITLE1")}
            <br /> {t("HIW.TITLE2")}
          </h2>

          <p className="hiw-subtitle">{t("HIW.SUBTITLE")}</p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            {t("HIW.GAME")}
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              {t("HIW.CHIP")}{" "}
              <span className="text-white"> {t("HIW.PERF")}</span>.
            </p>

            <p className="hiw-text g_fadeIn">
              <span className="text-white">{t("HIW.TEXT1")}</span>
              {t("HIW.TEXT2")}
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">{t("HIW.NEW1")}</p>
            <p className="hiw-bigtext">{t("HIW.NEW2")}</p>
            <p className="hiw-text">{t("HIW.NEW3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

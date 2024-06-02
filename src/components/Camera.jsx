import React from "react";
import { iguana } from "../utils";
import { animateWithGsap } from "../utils/animations";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";

const Camera = () => {
  const { t } = useTranslation();

  useGSAP(() => {
    animateWithGsap("#camera_title", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
    animateWithGsap(".camera_subtitle", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
    animateWithGsap(".camera_bigtext", {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="flex flex-col">
          <h2 id="camera_title" className="text-white camera_title">
            {t("CAMERA.TITLE1")} <br />
            {t("CAMERA.TITLE2")}
          </h2>
          <p className="camera_subtitle">{t("CAMERA.SUBTITLE")}</p>
        </div>
        <div>
          <img src={iguana} alt="iguana" />
        </div>
        <div className="flex items-center">
          <p className="camera_bigtext">{t("CAMERA.TEXT")}</p>
        </div>
      </div>
    </section>
  );
};

export default Camera;

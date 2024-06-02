import React from "react";
import { footerLinks } from "../constants";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            {t("FOOTER.TITLE1")}{" "}
            <span className="underline text-blue">{t("FOOTER.TITLE2")}</span>
            or <span className="underline text-blue">
              {t("FOOTER.TITLE3")}
            </span>{" "}
            {t("FOOTER.TITLE4")}
          </p>
          <p className="font-semibold text-gray text-xs">
            {t("FOOTER.TITLE5")}
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">{t("FOOTER.COPY")}</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

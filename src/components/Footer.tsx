import { useTranslation } from "react-i18next";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="grid md:grid-cols-7 grid-cols-1 md:p-20 p-4">
        <div className="space-y-2 mb-5 md:col-span-2">
          <h1 className="text-xl font-bold">
            {t("footer.saas_website.title")}
          </h1>
          <p className="text-gray-500">
            {t("footer.saas_website.description")}
          </p>
          <div className="space-x-3 flex">
            <FaFacebook size={20} />
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">{t("footer.why_slack.title")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.why_slack.vs_email")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {" "}
            {t("footer.why_slack.channels")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.why_slack.engagement")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.why_slack.scale")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.why_slack.watch_demo")}
          </h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">{t("footer.product.title")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.product.features")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.product.integrations")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.product.enterprise")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.product.solutions")}
          </h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold"> {t("footer.pricing.title")}</h1>
          <h1 className="text-gray-500 text-sm">{t("footer.pricing.plans")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.pricing.paid_vs_free")}
          </h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">{t("footer.resources.title")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.resources.partners")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.resources.developer")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.resources.community")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.resources.apps")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.resources.help_center")}
          </h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">{t("footer.company.title")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.company.about_us")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.company.leadership")}
          </h1>
          <h1 className="text-gray-500 text-sm"> {t("footer.company.news")}</h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.company.media_kit")}
          </h1>
          <h1 className="text-gray-500 text-sm">
            {t("footer.company.careers")}
          </h1>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 border-t-2  py-5">
        <p>{t("footer.footer_text")}</p>
      </div>
    </>
  );
};

export default Footer;

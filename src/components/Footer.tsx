import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-7 grid-cols-1 md:p-20 p-4">
        <div className="space-y-2 mb-5 md:col-span-2">
          <h1 className="text-xl font-bold">SaaS Website</h1>
          <p className="text-gray-500">
            saas website enhances team communication boosts productivity with
            user-friendly features
          </p>
          <div className="space-x-3 flex">
            <FaFacebook size={20} />
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />
          </div>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">Why Slack ?</h1>
          <h1 className="text-gray-500 text-sm">Slack Vs. Email</h1>
          <h1 className="text-gray-500 text-sm">channels</h1>
          <h1 className="text-gray-500 text-sm">Engagement</h1>
          <h1 className="text-gray-500 text-sm">Scale</h1>
          <h1 className="text-gray-500 text-sm">Watch Demo</h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">Product</h1>
          <h1 className="text-gray-500 text-sm">Features</h1>
          <h1 className="text-gray-500 text-sm">Integrations</h1>
          <h1 className="text-gray-500 text-sm">Enterprise</h1>
          <h1 className="text-gray-500 text-sm">Solutions</h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">Pricing</h1>
          <h1 className="text-gray-500 text-sm">Plans</h1>
          <h1 className="text-gray-500 text-sm">Paid vs. Free</h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">Resources</h1>
          <h1 className="text-gray-500 text-sm">Partners</h1>
          <h1 className="text-gray-500 text-sm">Developer</h1>
          <h1 className="text-gray-500 text-sm">Community</h1>
          <h1 className="text-gray-500 text-sm">Apps</h1>
          <h1 className="text-gray-500 text-sm">Help Center</h1>
        </div>
        <div className="space-y-5 mb-5 md:col-span-1">
          <h1 className="font-bold">Company</h1>
          <h1 className="text-gray-500 text-sm">About Us</h1>
          <h1 className="text-gray-500 text-sm">Leadership</h1>
          <h1 className="text-gray-500 text-sm">News</h1>
          <h1 className="text-gray-500 text-sm">Media Kit</h1>
          <h1 className="text-gray-500 text-sm">Careers</h1>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 border-t-2  py-5">
        <p>
          © 2024 SaaS website Technologies, LLC, a Salesforce company. All
          rights reserved. Various trademarks held by their respective owners
        </p>
      </div>
    </>
  );
};

export default Footer;

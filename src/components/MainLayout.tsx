import React from "react";
import Section, { SectionProps } from "./Section";
import cardone from "../assets/card1.png";
import cardtwo from "../assets/card2.png";
import cardthree from "../assets/card3.png";

const MainLayout: React.FC = () => {
  const sections: SectionProps[] = [
    {
      image: cardone,
      title: "Customize features to your specific needs.",
      description: `Apps keep work and information right at your fingertips, and Slack keeps it all securely working together.`,
      features: [
        "Apps with org-wide deployment enabled can be installed at the org level in an Enterprise Grid org and ring subsequently",
      ],
      button: "Learn More",
      reverse: false,
    },
    {
      image: cardtwo,
      title: "Customize work style for peak and efficiency.",
      description: `In Slack, you’ve got all the flexibility to work when, where and how its best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.`,
      features: ["Workflow Builder", "Slack APIs"],
      button: "Learn More",
      reverse: true,
    },
    {
      image: cardthree,
      title: "Bring your team together",
      description: `At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.`,
      stats: [
        { value: "28%", text: "Increase in time saved due to automation" },
        { value: "80%", text: "Of those who build Slack are non-technical" },
      ],
      button: "Learn More",
      reverse: false,
    },
  ];

  return (
    <div className="md:space-y-20 py-10 max-sm:text-center">
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};

export default MainLayout;

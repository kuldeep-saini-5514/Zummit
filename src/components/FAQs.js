import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <div className=" bg-[#0090b0] text-white rounded-xl m-2 p-2">
      <div className="flex gap-x-5 cursor-pointer" onClick={toggleVisibility}>
      <h3 className="font-bold text-xl">{title}</h3>
      <button >
        {isVisible ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x animate-spin-slow" width="30" height="30" viewBox="0 0 24 24" stroke-width="1" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>}
      </button>
      </div>
      <div>
      {isVisible && <p className="text-start">{description}</p>}
      </div>
    </div>
  );
};

const FAQs = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });

  const toggleVisibility = (sectionName) => {
    setSectionConfig((prevConfig) => ({
      ...prevConfig,
      [sectionName]: !prevConfig[sectionName],
    }));
  };

  return (
    <>
      <h1 className="text-4xl font-bold">InstaMart</h1>
      <h1 className="text-2xl font-bold">100s of companies inside it</h1>
      <Section
        title={"About Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showAbout}
        toggleVisibility={() => toggleVisibility("showAbout")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showTeam}
        toggleVisibility={() => toggleVisibility("showTeam")}
      />
      <Section
        title={"Careers Instamart"}
        description={
          "Unveil my *PORTFOLIO*, a reflection of my dedication to delivering impactful web solutions, blending technical expertise with a keen eye for design and user experience that demonstrate proficiency …"
        }
        isVisible={sectionConfig.showCareers}
        toggleVisibility={() => toggleVisibility("showCareers")}
      />
    </>
  );
};

export default FAQs;
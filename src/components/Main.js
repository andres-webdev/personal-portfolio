import React from "react";
import SectionAbout from "./SectionAbout";
import SectionContact from "./SectionContact";
import SectionExperience from "./SectionExperience";
import SectionHome from "./SectionHome";
import SectionSkills from "./SectionSkills";
import SectionWork from "./SectionWorks";

/**
 * The Main contains several sections of the projects, there are 6 in total.
 */

function Main(){
    return(
        <main className="main">
            <SectionHome />
            <SectionAbout />
            <SectionExperience />
            <SectionSkills />
            <SectionWork />
            <SectionContact />
        </main>
    );
}

export default Main;
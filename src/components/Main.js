import React from "react";
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
            <SectionWork />
            <SectionSkills />
            <SectionExperience />
            <SectionContact />
        </main>
    );
}

export default Main;
import React from "react";
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
        </main>
    );
}

export default Main;
import AboutMe from "./AboutMe";
import Image from "./Image";
import JediName from "./JediName";
import Objectives from "./Objectives";
import Linkedin from "./Linkedin";
import Github from "./Github";
import Motivations from "./Motivations";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";

function Background() {
    return (
        <div className="background">
            <div className="bottom">
                <AboutMe />
                <Objectives />
                <Motivations />
                <PersonalInfo />
            </div>
            <div className="right">
                <Image />
                <JediName />
                <Linkedin />
                <Github />
            </div>
        </div>
    );
}

export default Background
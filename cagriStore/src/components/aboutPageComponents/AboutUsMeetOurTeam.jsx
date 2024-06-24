

import React from 'react';
import MeetOurTeamCard from '../generalComponents/MeetOurTeamCard';


const teamMembers = [
    {
        username: "Cuneyt Cagri YILMAZ",
        profession: "Full Stack Developer",
        imageUrl: "img/teamPage/CuneytCagriYilmaz.jpeg",
    },
    {
        username: "Erhan FIRAT",
        profession: "Project Owner",
        imageUrl: "img/teamPage/ErhanFirat.jpeg",
    },
    {
        username: "Gökhan OZDEMIR",
        profession: " Scrum Master",
        imageUrl: "img/teamPage/gokhanOzdemir.jpeg",
    }

];

function AboutUsMeetOurTeam() {

    return (
        <div className=" w-[92%] mx-auto">
            <div className=" flex flex-col">
                <h1 className="text-center text-textColorDarkGray text-[40px] mt-28 ">Meet Our Team</h1>
                <p className="text-textColorLightGray text-md items-center text-center mb-28">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

                <div className="flex flex-wrap justify-center gap-8 md:flex-row">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-full  md:w-1/4">
                            <MeetOurTeamCard member={member} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default AboutUsMeetOurTeam;

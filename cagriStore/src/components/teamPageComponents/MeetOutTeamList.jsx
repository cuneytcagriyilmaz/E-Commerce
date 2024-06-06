import React from 'react';
import MeetOurTeamCard from '../generalComponents/MeetOurTeamCard';


const teamMembers = [
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m1.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m2.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m3.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m4.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m5.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m6.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m7.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m8.jpeg",
    },
    {
        username: "username",
        profession: "Profession",
        imageUrl: "src/assets/img/teamPage/m9.jpeg",
    },

];

function MeetOutTeamList() {

    return (
        <div className=" w-[92%] mx-auto">
        <div className=" flex flex-col">
            <h1 className="text-center text-textColorDarkGray text-[40px] mt-28 mb-28">Meet Our Team</h1>
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

export default MeetOutTeamList;
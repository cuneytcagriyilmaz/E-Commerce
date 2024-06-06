
// import React from 'react';

// const teamMembers = [
//     {
//         id: 1,
//         imageUrl: 'src/assets/img/aboutUs/1.jpeg',
//         username: 'Username',
//         profession: 'Profession'
//     },
//     {
//         id: 2,
//         imageUrl: 'src/assets/img/aboutUs/2.jpeg',
//         username: 'Username',
//         profession: 'Profession'
//     },
//     {
//         id: 3,
//         imageUrl: 'src/assets/img/aboutUs/3.jpeg',
//         username: 'Username',
//         profession: 'Profession'
//     },
// ];

// function AboutUsMeetOurTeam() {
//     return (
//         <div className=" w-[92%] mx-auto p-8">
//             <div className="flex flex-col items-center">
//                 <div className='pb-12'>
//                     <h2 className="font-bold items-center text-center justify-center text-4xl  text-textColorDarkGray">Meet Our Team</h2>
//                     <p className="text-textColorLightGray items-center text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
//                 </div>
//                 <div className="flex flex-col  md:flex-row ">
//                     {teamMembers.map(member => (
//                         <div key={member.id} className="flex flex-col items-center">
//                             <div className="text-center flex-col ">
//                                 <img src={member.imageUrl} alt="Profile" className=" h-1/2  " />
//                                 <p className="font-semibold pt-4 pb-8">{member.username}</p>
//                                 <p className="text-textColorLightGray  pb-8">{member.profession}</p>
//                                 <div className="flex pt-4 pb-8 text-2xl gap-3 items-center justify-center">
//                                     <i className="fa-brands fa-square-facebook text-facebookIconBlue md:text-buttonFullBlue cursor-pointer"></i>
//                                     <i className="fa-brands fa-instagram text-instagramIconRed md:text-buttonFullBlue cursor-pointer"></i>
//                                     <i className="fa-brands fa-twitter text-twitterIconBlue md:text-buttonFullBlue cursor-pointer"></i>
//                                 </div>
//                             </div>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AboutUsMeetOurTeam;


import React from 'react';
import MeetOurTeamCard from '../generalComponents/MeetOurTeamCard';

const teamMembers = [
    {
        id: 1,
        imageUrl: 'src/assets/img/aboutUs/1.jpeg',
        username: 'Username',
        profession: 'Profession'
    },
    {
        id: 2,
        imageUrl: 'src/assets/img/aboutUs/2.jpeg',
        username: 'Username',
        profession: 'Profession'
    },
    {
        id: 3,
        imageUrl: 'src/assets/img/aboutUs/3.jpeg',
        username: 'Username',
        profession: 'Profession'
    },
];

function AboutUsMeetOurTeam() {
    return (
        <div className="w-[92%] mx-auto p-8">
            <div className="flex flex-col items-center">
                <div className='pb-12'>
                    <h2 className="font-bold items-center text-center justify-center text-4xl  text-textColorDarkGray">Meet Our Team</h2>
                    <p className="text-textColorLightGray items-center text-center">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    {teamMembers.map(member => (
                        <MeetOurTeamCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutUsMeetOurTeam;

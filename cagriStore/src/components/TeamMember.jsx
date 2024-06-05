import React from 'react';

const TeamMember = () => {
    const memberData = [
        {
            image: "src/assets/img/outTeam/1.jpeg",
            name: "Username",
            profession: "Profession"
        },
        {
            image: "src/assets/img/outTeam/2.jpeg",
            name: "Username",
            profession: "Profession"
        },
        {
            image: "src/assets/img/outTeam/3.jpeg",
            name: "Username",
            profession: "Profession"
        },
    ];

    return (
        <div className="bg-mainBackgroundWhite py-12">
            <div className="px-4 py-2 flex flex-col items-center w-[92%] mx-auto">
                <div className='text-center mb-10'>
                    <h1 className='font-bold text-textColorDarkGray text-2xl mb-2'>Meet Our Team</h1>
                    <h4 className='text-textColorLightGray'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</h4>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {memberData.map((member, index) => (
                        <div key={index} className="bg-white m-6 pb-6 shadow-lg flex flex-col items-center max-w-xs flex-grow h-full">
                            <div className="flex flex-col items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="  object-cover  mb-4"
                                />
                                <h2 className="text-lg font-semibold">{member.name}</h2>
                                <h3 className="text-sm text-gray-500">{member.profession}</h3>
                            </div>
                            <div className="flex space-x-4 mt-4">
                                <i className="fa-brands fa-lg fa-square-facebook text-blue-500 md:text-navbarLigthBlue cursor-pointer"></i>
                                <i className="fa-brands fa-lg fa-instagram text-red-500 md:text-navbarLigthBlue cursor-pointer"></i>
                                <i className="fa-brands fa-lg fa-twitter text-blue-500 md:text-navbarLigthBlue cursor-pointer"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TeamMember;

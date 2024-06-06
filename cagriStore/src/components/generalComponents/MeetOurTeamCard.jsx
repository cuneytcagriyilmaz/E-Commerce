// MeetOurTeamCard.jsx

import React from 'react';

function MeetOurTeamCard({ member }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center flex-col">
                <img src={member.imageUrl} alt="Profile" className="h-1/4" />
                <p className="font-semibold pt-4 pb-8">{member.username}</p>
                <p className="text-textColorLightGray pb-8">{member.profession}</p>
                <div className="flex pt-4 pb-8 text-2xl gap-3 items-center justify-center">
                    <i className="fa-brands fa-square-facebook text-facebookIconBlue md:text-buttonFullBlue cursor-pointer"></i>
                    <i className="fa-brands fa-instagram text-instagramIconRed md:text-buttonFullBlue cursor-pointer"></i>
                    <i className="fa-brands fa-twitter text-twitterIconBlue md:text-buttonFullBlue cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
}

export default MeetOurTeamCard;

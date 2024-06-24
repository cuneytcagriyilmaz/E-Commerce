import React from 'react';

function MeetOurTeamCard({ member }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center flex-col">
                <img
                    src={member.imageUrl}
                    alt="Profile"
                    className="h-80 w-80 object-cover "
                />
                <p className="font-semibold pt-4 pb-2">{member.username}</p>
                <p className="text-textColorLightGray pb-2">{member.profession}</p>
                <div className="flex pt-2 pb-4 text-2xl gap-3 items-center justify-center">
                    <i className="fa-brands fa-square-facebook text-facebookIconBlue md:text-buttonFullBlue cursor-pointer"></i>
                    <i className="fa-brands fa-instagram text-instagramIconRed md:text-buttonFullBlue cursor-pointer"></i>
                    <i className="fa-brands fa-twitter text-twitterIconBlue md:text-buttonFullBlue cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
}

export default MeetOurTeamCard;

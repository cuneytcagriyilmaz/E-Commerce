import React, { useState } from 'react';

function AboutUsVideo() {

    const mediaData = [
        {
            id: 1,
            videoSrc: '/src/assets/img/aboutUs/video.mp4',
            placeholderImg: 'src/assets/img/aboutUs/aboutUsVideo.jpeg',
        }
    ];

    const [isPlaying, setIsPlaying] = useState(Array(mediaData.length).fill(false));

    const handlePlayPause = (index) => {
        const video = document.getElementById(`video-${index}`);
        if (isPlaying[index]) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleVideoEnd = (index) => {
        setIsPlaying((prevState) => {
            const newState = [...prevState];
            newState[index] = false;
            return newState;
        });
    };

    return (
        <div className="p-8 mx-auto w-[85%]">
            <div className="flex flex-col items-center justify-center">
                {mediaData.map((media, index) => (
                    <div key={media.id} className="relative w-full mx-auto mb-8 rounded-xl overflow-hidden">
                        <div className={`absolute inset-0 flex items-center justify-center ${isPlaying[index] ? 'hidden' : 'block'}`}>
                            <img src={media.placeholderImg} alt="Placeholder" className="w-full h-full object-cover" />
                            <button
                                onClick={() => handlePlayPause(index)}
                                className="absolute inset-0 flex items-center justify-center text-2xl rounded-full z-10"
                            >
                                <i className="fa-solid fa-circle-play fa-2xl text-navbarLigthBlue"></i>
                            </button>
                        </div>
                        <video
                            id={`video-${index}`}
                            className="w-full rounded-xl"
                            src={media.videoSrc}
                            onEnded={() => handleVideoEnd(index)}
                            controls={isPlaying[index]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsVideo;

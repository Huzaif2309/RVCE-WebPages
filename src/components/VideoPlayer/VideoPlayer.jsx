import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/Rick-Roll.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };


    return (
        <div className={`Video-Player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay="autoPlay" controls muted></video>
        </div>
    );
};

export default VideoPlayer;

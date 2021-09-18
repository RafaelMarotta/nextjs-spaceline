import React, { useEffect, useRef, useState } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TimelineItem(props) {
    const audioRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    function setPlayingState(state) {
        setIsPlaying(state)
    }

    function toggleIsPlaying() {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }

        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])


    return (
        <div className="tracking-item">
            <div className="tracking-icon status-intransit" onClick={toggleIsPlaying}>
                {!isPlaying ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}

            </div>
            <div className="tracking-content">{props.title}</div>
            <audio
                src={props.mp3}
                autoPlay={true}
                ref={audioRef}
                style={{"display": "none"}}
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
            />
        </div>
    )
}
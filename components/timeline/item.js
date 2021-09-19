import React, { useEffect, useRef, useState } from 'react';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TimelineItem(props) {
    const audioRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    function setPlayingState(state) {
        setIsPlaying(state)
    }

    function setVisualizedState(state) {
        setHasFinished(state)
    }

    function toggleIsPlaying() {
        setIsPlaying(!isPlaying)
    }
    
    useEffect(() => {
        if (!audioRef.current) {
            return;
        }
        if (isPlaying) {
            setHasFinished(false)
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])


    return (
        <div className="tracking-item">
            <div className="tracking-icon status-intransit"  style={hasFinished ? {"color": "#0000ff"} : {"color": "#000"}} onClick={toggleIsPlaying}>
                {!isPlaying ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}
            </div>
            <div className="tracking-content ">
                <p className="text-uppercase">
                    {props.title}
                </p>
            </div>
            <audio
                src={props.mp3}
                autoPlay={true}
                ref={audioRef}
                style={{ "display": "none" }}
                onPlay={() => setPlayingState(true)}
                onPause={() => setPlayingState(false)}
                onEnded={() => setVisualizedState(true)}
            />
        </div>
    )
}
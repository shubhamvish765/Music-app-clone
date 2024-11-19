import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    // Audio element reference for playback control
    const audioRef = useRef();
    // Reference to the seek bar background
    const seekBg = useRef();
    // Reference to the seek bar progress
    const seekBar = useRef();

    // State to hold the current playing track
    const [track, setTrack] = useState(songsData[0]);
    // State to manage play or pause status
    const [playStatus, setPlayStatus] = useState(false);
    // State to manage current and total time of the song
    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    // Function to play the current track
    const play = () => {
       audioRef.current.play();
       setPlayStatus(true);
    };

    // Function to pause the current track
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    // Play track based on provided ID
    const playWithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        setPlayStatus(true);
    };

    // Play the previous track in the list
    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };

    // Play the next track in the list
    const next = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setPlayStatus(true);
        }
    };
    // Play song any point on seekbar
    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)  
    }

    // Update the time and progress bar during song playback
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60)
                    }
                });
            };
        }, 1000);
    }, [audioRef]);

    // Context value to provide player state and controls
    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
        playWithId,
        previous,
        next,
        seekSong
    };

    // Return the PlayerContext provider wrapping the children components
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;

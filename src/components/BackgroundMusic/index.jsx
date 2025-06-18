import { useState, useEffect, useRef } from "react";
import { Tooltip } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useLocation } from "react-router-dom";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const audio = new Audio("/nhacNen.mp3");
    audio.volume = 0.3;
    audio.loop = true;
    audio.preload = "auto";
    audio.muted = true;
    audioRef.current = audio;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          const savedMuted = localStorage.getItem("musicMuted");
          if (savedMuted !== null) {
            const shouldBeMuted = savedMuted === "true";
            setIsMuted(shouldBeMuted);
            audio.muted = shouldBeMuted;
          } else {
            setTimeout(() => {
              audio.muted = false;
              setIsMuted(false);
              localStorage.setItem("musicMuted", "false");
            }, 2000);
          }
        })
        .catch(() => {
          setShowPlayButton(true);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const startPlaying = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.muted = false;
        setIsMuted(false);
        localStorage.setItem("musicMuted", "false");
        console.log("Phát nhạc...");
        await audioRef.current
          .play()
          .then(() => {
            console.log("Đã phát thành công");
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch((error) => {
            console.error("Không thể phát:", error);
            setAudioError(true);
          });
      }
    } catch (error) {
      setAudioError(true);
    }
  };

  useEffect(() => {
    if (!showPlayButton && audioRef.current && isPlaying) {
      audioRef.current.play().catch(() => {
        console.warn("Không thể tiếp tục phát nhạc sau khi tắt nút play");
        setShowPlayButton(true);
      });
    }
  }, [showPlayButton, isPlaying]);

  const handleToggle = () => {
    if (audioRef.current) {
      const newMuted = !isMuted;
      audioRef.current.muted = newMuted;
      setIsMuted(newMuted);
      localStorage.setItem("musicMuted", newMuted.toString());
    }
  };

  const isQuizPage = location.pathname.includes("/quiz-history");
  useEffect(() => {
    if (!audioRef.current) return;

    if (isQuizPage) {
      audioRef.current.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    } else {
      setShowPlayButton(false);
      audioRef.current
        .play()
        .then(() => {
          audioRef.current.muted = false;
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          setShowPlayButton(true);
          setIsMuted(audioRef.current.muted);
        });
    }
  }, [isQuizPage]);

  if (audioError) return null;

  if (showPlayButton) {
    return (
      <Tooltip title="Bật nhạc nền">
        <button
          onClick={startPlaying}
          className="fixed bottom-5 right-5 z-30 bg-[#FFFFFFE6] p-2 rounded-full shadow-music hover:bg-white"
        >
          <PlayArrowIcon className="text-[#1976d2]" />
        </button>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={isMuted ? "Bật nhạc nền" : "Tắt nhạc nền"}>
      <button
        onClick={handleToggle}
        className="fixed bottom-5 right-5 z-30 bg-[#FFFFFFE6] p-2 rounded-full shadow-music hover:bg-white"
      >
        {isMuted ? (
          <VolumeOffIcon className="text-[#1976d2]" />
        ) : (
          <VolumeUpIcon className="text-[#1976d2]" />
        )}
      </button>
    </Tooltip>
  );
};

export default BackgroundMusic;

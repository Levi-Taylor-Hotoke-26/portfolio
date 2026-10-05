import { useState, useRef, useEffect } from "react";

interface Track {
  title: string;
  src: string;
}

interface AcRadioPlayerProps {
  playlist: Track[];
}

export default function AcRadioPlayer({ playlist }: AcRadioPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = playlist[currentIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.log("Playback blocked:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
    }
  }, [currentIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setCurrentIndex((prev) => (prev + 1) % playlist.length);
      setIsPlaying(true);
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [playlist.length]);

  return (
    <div className={`ac-radio-container ${isMinimized ? "minimized" : ""}`}>
      <audio ref={audioRef} src={currentTrack.src} />

      <div className="ac-radio-header">
        <span className="ac-radio-icon">🍃</span>
        <span className="ac-radio-title">K.K. Slider Stereo</span>
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="ac-minimize-btn"
          title={isMinimized ? "Expand Radio" : "Minimize Radio"}
        >
          {isMinimized ? "▲" : "▼"}
        </button>
      </div>

      {!isMinimized && (
        <>
          <div className="ac-dialogue-box">
            <p className="track-label">Now Playing:</p>
            <p className="track-name"><strong>{currentTrack.title}</strong></p>
          </div>

          <div className="ac-controls">
            <button onClick={handlePrev} className="ac-btn" title="Previous Track">
              ⏮
            </button>
            <button onClick={togglePlay} className="ac-btn ac-play-btn" title={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={handleNext} className="ac-btn" title="Next Track">
              ⏭
            </button>
          </div>

          <div className="ac-volume-container">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="ac-volume-slider"
            />
          </div>
        </>
      )}
    </div>
  );
}
import { useEffect, useRef, useState } from 'react';

/**
 * Manages the optional background music track.
 * Drop an mp3 (e.g. shehnai/instrumental) at /public/audio/background.mp3 to enable it.
 * Fails silently if the file is missing so the rest of the site is unaffected.
 */
export default function useBackgroundMusic(src = '/audio/background.mp3') {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = 'auto';
    audio.addEventListener('error', () => setAvailable(false));
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setAvailable(false));
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? pause() : play());

  return { playing, available, play, pause, toggle };
}

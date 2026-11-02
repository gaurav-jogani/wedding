import { useEffect, useState } from 'react';
import SvgDefs from './components/SvgDefs';
import Envelope from './components/Envelope';
import ParticleBurst from './components/ParticleBurst';
import MusicToggle from './components/MusicToggle';
import Hero from './components/Hero';
import SaveTheDate from './components/SaveTheDate';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import Wardrobe from './components/Wardrobe';
import Footer from './components/Footer';
import useBackgroundMusic from './hooks/useBackgroundMusic';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [burstActive, setBurstActive] = useState(false);
  const music = useBackgroundMusic();

  useEffect(() => {
    const handler = () => setBurstActive(true);
    window.addEventListener('invitation:particles', handler);
    return () => window.removeEventListener('invitation:particles', handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-royal-velvet">
      <SvgDefs />
      <Envelope onOpened={() => setOpened(true)} onSealClick={() => music.play()} />
      <ParticleBurst active={burstActive} onComplete={() => setBurstActive(false)} />

      {opened && (
        <>
          <main>
            <Hero />
            <SaveTheDate />
            <Countdown />
            <Timeline />
            <Venue />
            <Wardrobe />
            <Footer />
          </main>
          <MusicToggle playing={music.playing} toggle={music.toggle} />
        </>
      )}
    </div>
  );
}

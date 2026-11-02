let ctx;

function getCtx() {
  if (!ctx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    ctx = new AudioCtx();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

/** Synthesized wax-seal crack + paper unfold sound. No external audio file needed. */
export function playSealSound() {
  try {
    const audioCtx = getCtx();
    const now = audioCtx.currentTime;

    // Wax "crack": short filtered noise burst
    const bufferSize = audioCtx.sampleRate * 0.18;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1800;
    noiseFilter.Q.value = 0.8;
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.5, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    noise.connect(noiseFilter).connect(noiseGain).connect(audioCtx.destination);
    noise.start(now);
    noise.stop(now + 0.2);

    // Soft paper rustle: longer, quieter filtered noise
    const rustleSize = audioCtx.sampleRate * 0.9;
    const rustleBuffer = audioCtx.createBuffer(1, rustleSize, audioCtx.sampleRate);
    const rustleData = rustleBuffer.getChannelData(0);
    for (let i = 0; i < rustleSize; i++) {
      rustleData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / rustleSize, 1.5);
    }
    const rustle = audioCtx.createBufferSource();
    rustle.buffer = rustleBuffer;
    const rustleFilter = audioCtx.createBiquadFilter();
    rustleFilter.type = 'highpass';
    rustleFilter.frequency.value = 2200;
    const rustleGain = audioCtx.createGain();
    rustleGain.gain.setValueAtTime(0, now);
    rustleGain.gain.linearRampToValueAtTime(0.12, now + 0.08);
    rustleGain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    rustle.connect(rustleFilter).connect(rustleGain).connect(audioCtx.destination);
    rustle.start(now + 0.05);
    rustle.stop(now + 1);

    // Warm bell-like tone for celebratory feel
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, now + 0.1);
    osc.frequency.exponentialRampToValueAtTime(784, now + 0.5);
    const oscGain = audioCtx.createGain();
    oscGain.gain.setValueAtTime(0, now + 0.1);
    oscGain.gain.linearRampToValueAtTime(0.15, now + 0.2);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    osc.connect(oscGain).connect(audioCtx.destination);
    osc.start(now + 0.1);
    osc.stop(now + 1.2);
  } catch (err) {
    // Audio is a progressive enhancement; silently ignore failures.
  }
}

/** Light shimmering chime used for scratch-card reveals. */
export function playChimeSound() {
  try {
    const audioCtx = getCtx();
    const now = audioCtx.currentTime;
    const notes = [784, 988, 1175];
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const gain = audioCtx.createGain();
      const start = now + i * 0.07;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.1, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start(start);
      osc.stop(start + 0.55);
    });
  } catch (err) {
    // ignore
  }
}

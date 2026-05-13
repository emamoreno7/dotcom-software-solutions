import { useRef, useEffect, useCallback } from 'react';

export function useWaterDrop() {
  const audioContextRef = useRef<AudioContext | null>(null);
  const isUnlockedRef = useRef(false);

  useEffect(() => {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContextClass) {
      audioContextRef.current = new AudioContextClass();
    }
    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  useEffect(() => {
    const unlock = () => {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      isUnlockedRef.current = true;
      window.removeEventListener('click', unlock);
      window.removeEventListener('scroll', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('click', unlock);
    window.addEventListener('scroll', unlock);
    window.addEventListener('touchstart', unlock);
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('click', unlock);
      window.removeEventListener('scroll', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const playDrop = useCallback((pitch: number = 1, volume: number = 0.15) => {
    const ctx = audioContextRef.current;
    if (!ctx || !isUnlockedRef.current) return;

    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800 * pitch, now);
    osc.frequency.exponentialRampToValueAtTime(200 * pitch, now + 0.08);
    oscGain.gain.setValueAtTime(0, now);
    oscGain.gain.linearRampToValueAtTime(volume, now + 0.005);
    oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    const resonance = ctx.createOscillator();
    const resonanceGain = ctx.createGain();
    resonance.type = 'sine';
    resonance.frequency.setValueAtTime(2400 * pitch, now);
    resonance.frequency.exponentialRampToValueAtTime(1600 * pitch, now + 0.12);
    resonanceGain.gain.setValueAtTime(0, now);
    resonanceGain.gain.linearRampToValueAtTime(volume * 0.4, now + 0.008);
    resonanceGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + 0.15);
    filter.Q.value = 8;

    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseData.length; i++) {
      noiseData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / noiseData.length, 2);
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 2000;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(volume * 0.15, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(oscGain);
    oscGain.connect(filter);
    filter.connect(ctx.destination);
    resonance.connect(resonanceGain);
    resonanceGain.connect(filter);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.2);
    resonance.start(now);
    resonance.stop(now + 0.25);
    noise.start(now);
    noise.stop(now + 0.05);
  }, []);

  return { playDrop };
}
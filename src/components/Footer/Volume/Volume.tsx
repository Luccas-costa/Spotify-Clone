"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Volume.module.css";
import {
  ArrowsOutSimple,
  Desktop,
  MicrophoneStage,
  TextOutdent,
} from "@phosphor-icons/react/dist/ssr";
import { Volume1, Volume2, VolumeX, Maximize2 } from "lucide-react";

export default function Volume() {
  const [volume, setVolume] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null); // Definindo explicitamente o tipo de inputRef

  useEffect(() => {
    const input = inputRef.current;

    const setBackgroundSize = () => {
      if (input) {
        const min = +input.min || 0;
        const max = +input.max || 100;
        const value = +input.value;
        const size = ((value - min) / (max - min)) * 100;
        input.style.setProperty("--background-size", `${size}%`);
      }
    };

    if (input) {
      setBackgroundSize();
      input.addEventListener("input", setBackgroundSize);
    }

    return () => {
      if (input) {
        input.removeEventListener("input", setBackgroundSize);
      }
    };
  }, []);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Adicionando tipo para event
    const newVolume = parseInt(event.target.value, 10);
    setVolume(newVolume);
  };

  // para cima e a parte do controle de volume, ja para baixo a parte da troca de icones

  const [mic, setmic] = useState(false);
  const [fila, setfila] = useState(false);
  const [pc, setpc] = useState(false);
  const [max, setmax] = useState(false);

  const handleClick = () => {
    setmic(!mic);
  };
  const handleClick2 = () => {
    setfila(!fila);
  };
  const handleClick3 = () => {
    setpc(!pc);
  };
  const handleClick4 = () => {
    setmax(!max);
  };

  return (
    <div className='flex items-center gap-4'>
      <button onClick={handleClick} className='relative'>
        {mic ? (
          <>
            <MicrophoneStage size={23} className='text-green-500' />
            <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500 mt-1'></div>
          </>
        ) : (
          <MicrophoneStage size={23} className='text-zinc-200' />
        )}
      </button>
      <button onClick={handleClick2} className='relative'>
        {fila ? (
          <>
            <TextOutdent size={23} className='text-green-500' />
            <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500 mt-1'></div>
          </>
        ) : (
          <TextOutdent size={23} className='text-zinc-200' />
        )}
      </button>
      <button onClick={handleClick3} className='relative'>
        {pc ? (
          <>
            <Desktop size={23} className='text-green-500' />
            <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500 mt-1'></div>
          </>
        ) : (
          <Desktop size={23} className='text-zinc-200' />
        )}
      </button>
      <div className='flex items-center gap-2'>
        {volume === 0 && <VolumeX size={23} />}
        {volume > 0 && volume <= 66 && <Volume1 size={23} />}
        {volume > 66 && <Volume2 size={23} />}
        <div className={styles.Container}>
          <input
            ref={inputRef}
            className={styles.volume}
            id='volume'
            type='range'
            min={0}
            max={100}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <button onClick={handleClick4} className='relative'>
        {max ? (
          <>
            <ArrowsOutSimple size={23} className='text-green-500' />
          </>
        ) : (
          <ArrowsOutSimple size={23} className='text-zinc-200' />
        )}
      </button>
    </div>
  );
}

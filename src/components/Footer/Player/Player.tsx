"use client";
import React from "react";
import { useState } from "react";

import {
  Play,
  SkipBack,
  SkipForward,
  Pause,
  Shuffle,
  Repeat,
  RepeatOnce,
} from "@phosphor-icons/react/dist/ssr";

export default function Player() {
  const [pause_play, setpause_play] = useState(false);
  const [shufle, setshufle] = useState(false);
  const [repeatSequence, setRepeatSequence] = useState(0);

  const handleClick = () => {
    setpause_play(!pause_play);
  };

  const handleClick2 = () => {
    setshufle(!shufle);
  };

  const handleClick3 = () => {
    setRepeatSequence((prev) => (prev + 1) % 4); // Alternar entre 0 e 3
  };

  const renderRepeatIcon = () => {
    if (repeatSequence === 0) {
      return <Repeat size={23} weight='fill' className='text-zinc-200' />;
    } else if (repeatSequence === 1 || repeatSequence === 2) {
      return (
        <>
          <Repeat size={23} weight='fill' className='text-green-500' />
          <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500'></div>
        </>
      );
    } else {
      return (
        <>
          <RepeatOnce size={23} weight='fill' className='text-green-500' />
          <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500'></div>
        </>
      );
    }
  };

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='flex items-center gap-6'>
        <button onClick={handleClick2} className='relative'>
          {shufle ? (
            <>
              <Shuffle size={23} weight='fill' className='text-green-500' />
              <div className='rounded-full w-1 h-1 absolute left-2.5 bg-green-500'></div>
            </>
          ) : (
            <Shuffle size={23} weight='fill' className='text-zinc-200' />
          )}
        </button>

        <SkipBack size={20} weight='fill' className='text-zinc-200' />

        <button
          className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black'
          onClick={handleClick}
        >
          {pause_play ? (
            <Pause size={20} weight='fill' />
          ) : (
            <Play size={20} weight='fill' />
          )}
        </button>

        <SkipForward size={20} weight='fill' className='text-zinc-200' />

        <button onClick={handleClick3} className='relative'>
          {renderRepeatIcon()}
        </button>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-xs text-zinc-500'>0:31</span>

        <div className='h-1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
        </div>

        <span className='text-xs text-zinc-500'>2:14</span>
      </div>
    </div>
  );
}

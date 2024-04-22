import React from "react";
import Image from "next/image";

export default function Create_Like() {
  return (
    <div className='mt-12 space-y-5'>
      <div className='flex gap-3 items-center text-lg font-semibold text-zinc-400 hover:text-zinc-100 transition-colors transition-duration-400 cursor-pointer'>
        <Image
          src='/Create.png'
          width={30}
          height={30}
          alt='teste'
          className='rounded-sm hover:scale-125 hover:transition-all'
        />
        Create Playlist
      </div>
      <div className='flex gap-3 items-center text-lg font-semibold text-zinc-400 hover:text-zinc-100 transition-colors transition-duration-400 cursor-pointer'>
        <Image
          src='/Like.jpg'
          width={30}
          height={30}
          alt='teste'
          className='rounded-sm hover:scale-125 hover:transition-all'
        />
        Liked Songs
      </div>
    </div>
  );
}

import React from "react";

interface Playlist_SugestoesProps {
  plalist: string;
}

export default function Playlist_Sugestoes(props: Playlist_SugestoesProps) {
  return (
    <div>
      <a
        href=''
        className='text-sm text-zinc-400 hover:text-zinc-100 transition-colors transition-duration-200'
      >
        {props.plalist}
      </a>
    </div>
  );
}

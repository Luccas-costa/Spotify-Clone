import React from "react";
import Image from "next/image";

import Image1 from "../../../public/bootleg Rascal stycky fingers.webp";
import Image2 from "../../../public/costa gold 155.png";
import Image3 from "../../../public/drake Honestly nevermind.jpg";
import Image4 from "../../../public/jack jhonson in between dreams.jpg";
import Image5 from "../../../public/matue Kenny G.jpg";
import Image6 from "../../../public/KayBlack Contradicoes.jpg";

import { Play } from "@phosphor-icons/react/dist/ssr";

interface Playlist_RecentesProps {
  imagem: string;
  album: string;
}

export default function Playlist_Recentes(props: Playlist_RecentesProps) {
  return (
    <div>
      <a
        href=''
        className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'
      >
        <Image
          src={props.imagem}
          width={100}
          height={100}
          alt='capa do album'
        />
        <strong>{props.album}</strong>
        <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
          <Play weight='fill' size={24} />
        </button>
      </a>
    </div>
  );
}

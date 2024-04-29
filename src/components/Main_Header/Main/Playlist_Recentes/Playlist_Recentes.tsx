import React from "react";
import Image from "next/image";

import { Play } from "@phosphor-icons/react/dist/ssr";

interface Playlist_RecentesProps {
  imagem: string;
  album: string;
  index: number;
  conexao: (key: number) => void;
}

export default function Playlist_Recentes({
  imagem,
  album,
  conexao,
  index,
}: Playlist_RecentesProps) {
  var teste = 0;

  if (index === 0) {
    teste = 0;
  } else if (index === 1) {
    teste = 1;
  } else if (index === 2) {
    teste = 2;
  } else if (index === 3) {
    teste = 3;
  } else if (index === 4) {
    teste = 4;
  } else if (index === 5) {
    teste = 5;
  } else {
    teste = 6;
  }

  return (
    <div onClick={() => conexao(teste)}>
      <a className='bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
        <Image src={imagem} width={100} height={100} alt='capa do album' />
        <strong>{album}</strong>
        <button className='w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-10 invisible group-hover:visible'>
          <Play weight='fill' size={24} />
        </button>
      </a>
    </div>
  );
}

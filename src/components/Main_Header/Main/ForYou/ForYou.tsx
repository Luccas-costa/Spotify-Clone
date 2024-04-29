import React from "react";
import Image from "next/image";

import { Play } from "@phosphor-icons/react/dist/ssr";

interface ForYouProps {
  imagem: string;
  titulo: string;
  subtitulo: string;
  conexao: (key: number) => void;
}

export default function ForYou({
  imagem,
  titulo,
  subtitulo,
  conexao,
}: ForYouProps) {
  return (
    <div onClick={() => conexao(7)}>
      <a className='bg-white/5 p-3 rounded-lg flex flex-col gap-2 hover:bg-white/10 group'>
        <div className='relative'>
          <Image
            src={imagem}
            className='w-full'
            width={100}
            height={100}
            alt='capa do album'
          />
          <button className='w-14 h-14 mr-3 mb-3 transition-duration-200 flex items-center justify-center rounded-full bg-green-400 text-black absolute bottom-0 right-0 invisible group-hover:visible'>
            <Play weight='fill' size={24} />
          </button>
        </div>
        <strong className='font-semibold'>{titulo}</strong>
        <span className='text-sm text-zinc-400'>{subtitulo}</span>
      </a>
    </div>
  );
}

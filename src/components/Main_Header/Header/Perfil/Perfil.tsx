import { Bell, Download } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function Perfil() {
  return (
    <div className='flex space-x-3 items-center'>
      <button className='flex gap-2 items-center rounded-full bg-black/40 pl-2.5 pr-2.5 pt-1 pb-1 font-semibold text-base hover:scale-105 hover:bg-black/25'>
        <Download size={18} /> Instalar Spotify
      </button>
      <div>
        <button className='rounded-full bg-black/40 p-2.5 hover:bg-black/25'>
          <Bell size={23} color='#E0E0E0' />
        </button>
      </div>
      <button className='rounded-full bg-black/40 p-2 hover:bg-black/25'>
        <Image
          src='/foto_pf.png'
          alt='imagem do perfil'
          width={30}
          height={18}
          className='rounded-full'
        />
      </button>
    </div>
  );
}

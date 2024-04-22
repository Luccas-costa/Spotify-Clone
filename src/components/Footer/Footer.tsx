import React from "react";
import Image from "next/image";
import Image1 from "../../../public/jack jhonson in between dreams.jpg";

import Expositorio from "./Expositorio/Expositorio";
import Player from "./Player/Player";

import { MicrophoneStage } from "@phosphor-icons/react/dist/ssr";
import { LayoutList, Laptop2, Volume as Vol, Maximize2 } from "lucide-react";
import Volume from "./Volume/Volume";

export default function Footer() {
  return (
    <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between sticky bottom-0'>
      <Expositorio
        imagem='/jack jhonson in between dreams.jpg'
        nome='Between Dreams'
        artista='Jack Jhonson'
      />

      <Player />

      <Volume />
    </footer>
  );
}

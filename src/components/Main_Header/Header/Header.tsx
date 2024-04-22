"use client";
import React from "react";

import Perfil from "@/components/Main_Header/Header/Perfil/Perfil";
import Setas from "@/components/Main_Header/Header/Setas/Setas";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className='sticky top-0'>
      <div className='flex justify-between bg-zinc-900 pt-3 pb-3 pl-6 pr-6'>
        <div className=' flex items-center gap-3'>
          <Setas>
            <ChevronLeft size={30} />
          </Setas>
          <Setas>
            <ChevronRight size={30} />
          </Setas>
        </div>
        <Perfil />
      </div>
    </header>
  );
}

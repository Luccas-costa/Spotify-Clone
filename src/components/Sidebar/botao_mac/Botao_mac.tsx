import React from "react";

export default function Botao_mac() {
  return (
    <div>
      <div className='flex items-center group gap-2'>
        <div className='w-3 h-3 bg-zinc-500 rounded-full group-hover:bg-red-500'></div>
        <div className='w-3 h-3 bg-zinc-500 rounded-full group-hover:bg-yellow-500'></div>
        <div className='w-3 h-3 bg-zinc-500 rounded-full group-hover:bg-green-500'></div>
      </div>
    </div>
  );
}

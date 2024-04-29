"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Heart } from "@phosphor-icons/react/dist/ssr";

interface ExpositorioProps {
  imagem: string;
  nome: string;
  artista: string;
  setarcoracao: (coracaoPreenchido: boolean) => void;
}

export default function Expositorio(props: ExpositorioProps) {
  const [coracaoPreenchido, setCoracaoPreenchido] = useState(false);

  useEffect(() => {
    // Se a prop imagem mudar, desmarcar o coração
    setCoracaoPreenchido(false);
  }, [props.imagem]);

  const handleClick = () => {
    // Alterar o estado do coração e chamar a função de callback
    setCoracaoPreenchido(!coracaoPreenchido);
    props.setarcoracao(!coracaoPreenchido);
  };

  return (
    <div className='flex items-center gap-3 min-w-72'>
      <Image src={props.imagem} width={56} height={56} alt='capa do album' />
      <div className='flex flex-col'>
        <strong className='font-normal'>{props.nome}</strong>
        <span className='text-xs text-zinc-400'>{props.artista}</span>
      </div>
      <button onClick={handleClick} style={{ marginLeft: "1vw" }}>
        {coracaoPreenchido ? (
          <Heart size={25} weight='fill' />
        ) : (
          <Heart size={25} weight='light' />
        )}
      </button>
    </div>
  );
}

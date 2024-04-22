import { House } from "@phosphor-icons/react";
import React from "react";

interface OpcoesProps {
  texto: string;
  children: React.ReactNode;
  hover: boolean;
}

export default function Opcoes(props: OpcoesProps) {
  return (
    <div>
      <a
        href=''
        className='flex items-center gap-3 text-base font-semibold text-zinc-400 hover:text-zinc-100 transition-colors transition-duration-400'
        style={{
          ...(props.hover && {
            color: "rgb(244 244 245 / var(--tw-text-opacity))",
          }),
        }}
      >
        {props.children}
        {props.texto}
      </a>
    </div>
  );
}

import React from "react";

interface SetasProps {
  children: React.ReactNode;
}

export default function Setas(props: SetasProps) {
  return (
    <div>
      <button className='rounded-full bg-black/40 p-1 hover:bg-black/25'>
        {props.children}
      </button>
    </div>
  );
}

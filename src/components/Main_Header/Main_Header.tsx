import React from "react";

import Main from "../Main_Header/Main/Main";
import Header from "../Main_Header/Header/Header";

interface Main_HeaderProps {
  conexao: (key: number) => void;
}

export default function Main_Header({ conexao }: Main_HeaderProps) {
  return (
    <div className='flex-1'>
      <Header />
      <div className='p-6'>
        <Main conexao={conexao} />
      </div>
    </div>
  );
}

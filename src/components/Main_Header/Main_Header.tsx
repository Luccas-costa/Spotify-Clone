import React from "react";

import Maim from "../Main_Header/Main/Main";
import Header from "../Main_Header/Header/Header";

export default function Main() {
  return (
    <div className='flex-1'>
      <Header />
      <div className='p-6'>
        <Maim />
      </div>
    </div>
  );
}

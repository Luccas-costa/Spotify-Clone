import React from "react";

import Dados from "../../../../public/assets/dados";

import ForYou from "@/components/Main_Header/Main/ForYou/ForYou";
import Playlist_Recentes from "@/components/Main_Header/Main/Playlist_Recentes/Playlist_Recentes";

interface MainProps {
  conexao: (key: number) => void;
}

export default function Main({ conexao }: MainProps) {
  return (
    <main>
      <h1 className='font-semibold text-3xl mt-5'>Good Afternoon</h1>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        <Playlist_Recentes
          imagem='/matue Kenny G.jpg'
          album={Dados[0].Album}
          index={Dados[0].key}
          conexao={conexao}
        />
        <Playlist_Recentes
          imagem='/jack jhonson in between dreams.jpg'
          album={Dados[1].Album}
          index={Dados[1].key}
          conexao={conexao}
        />
        <Playlist_Recentes
          imagem='/Red_Hot.png'
          album={Dados[2].Album}
          index={Dados[2].key}
          conexao={conexao}
        />
        <Playlist_Recentes
          imagem='/bootleg Rascal stycky fingers.webp'
          album={Dados[3].Album}
          index={Dados[3].key}
          conexao={conexao}
        />
        <Playlist_Recentes
          imagem='/drake Honestly nevermind.jpg'
          album={Dados[4].Album}
          index={Dados[4].key}
          conexao={conexao}
        />
        <Playlist_Recentes
          imagem='/KayBlack Contradicoes.jpg'
          album={Dados[5].Album}
          index={Dados[5].key}
          conexao={conexao}
        />
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Made for Luccas Costa</h2>

      <div className='grid grid-cols-6 gap-4 mt-4'>
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
        <ForYou
          imagem='/costa gold 155.png'
          titulo='Costa Gold'
          subtitulo='Wallows, Coin girl in red and more'
          conexao={conexao}
        />
      </div>
    </main>
  );
}

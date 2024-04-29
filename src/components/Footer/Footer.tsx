"use client";
import React, { useEffect, useState } from "react";
import { Howl } from "howler";

import Expositorio from "./Expositorio/Expositorio";
import Player from "./Player/Player";
import Volume from "./Volume/Volume";

interface FooterProps {
  chave: number;
}

//lembrar da biblioteca howler

export default function Footer({ chave }: FooterProps) {
  const [confirmakey, setconfirmakey] = useState(false);
  const [confirmacoracao, setconfirmacoracao] = useState(false);
  // const [audioPlaying, setAudioPlaying] = useState(false); // Estado para controlar a reprodução do áudio

  // const [audio, setaudio] = useState("");
  const [imagem, setImagem] = useState("/load.png");
  const [nome, setNome] = useState("=========");
  const [artista, setArtista] = useState("======= =========");

  useEffect(() => {
    if (chave === 0) {
      setconfirmakey(true);
      // setaudio("/matue.mp3");
      setImagem("/matue Kenny G.jpg");
      setNome("Kenny 6");
      setArtista("matue");
      setconfirmacoracao(true);
    } else if (chave === 1) {
      setconfirmakey(true);
      // setaudio("/jack-jhonson.mp3");
      setImagem("/jack jhonson in between dreams.jpg");
      setNome("Good People");
      setArtista("Jack Jhonson");
      setconfirmacoracao(true);
    } else if (chave === 2) {
      setconfirmakey(true);
      // setaudio("/red-hot.mp3");
      setImagem("/Red_Hot.png");
      setNome("Don't Forget Me");
      setArtista("Red Hot Chili Peppers");
      setconfirmacoracao(true);
    } else if (chave === 3) {
      setconfirmakey(true);
      // setaudio("/Bootleg-Rascal.mp3");
      setImagem("/bootleg Rascal stycky fingers.webp");
      setNome("The Bootleg Tapes");
      setArtista("Bootleg Rascal");
      setconfirmacoracao(true);
    } else if (chave === 4) {
      setconfirmakey(true);
      // setaudio("/drake.mp3");
      setImagem("/drake Honestly nevermind.jpg");
      setNome("A Keeper");
      setArtista("Drake");
      setconfirmacoracao(true);
    } else if (chave === 5) {
      setconfirmakey(true);
      // setaudio("/kayblack.mp3");
      setImagem("/KayBlack Contradicoes.jpg");
      setNome("Desejos");
      setArtista("KayBlack");
      setconfirmacoracao(true);
    } else if (chave === 6) {
      setconfirmakey(false);
      setconfirmacoracao(false);
    } else if (chave === 7) {
      setconfirmakey(true);
      // setaudio("/costa gold.mp3");
      setImagem("/costa gold 155.png");
      setNome("Das Arabias 2");
      setArtista("Costa Gold");
    } else {
      setconfirmakey(false);
      setconfirmacoracao(false); // Define o estado do coração como false quando a chave não corresponde a nenhum valor conhecido
    }
  }, [chave]);

  // // Função para reproduzir o áudio
  // const playAudio = () => {
  //   const sound = new Howl({
  //     // src: [`/${audio}`],
  //     src: ["../../public/music/matue.mp3"],
  //     autoplay: true,
  //     volume: 0.5,
  //   });
  //   sound.play();
  // };

  // useEffect(() => {
  //   setAudioPlaying(false);
  //   if (audio !== "") {
  //     setAudioPlaying(true);
  //   }
  // }, [audio]);

  return (
    <footer className='bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between sticky bottom-0'>
      {confirmakey ? (
        <Expositorio
          imagem={imagem}
          nome={nome}
          artista={artista}
          setarcoracao={setconfirmacoracao} // Passa a função setconfirmacoracao diretamente
        />
      ) : (
        <Expositorio
          imagem='/load.png'
          nome='========='
          artista='======= ========='
          setarcoracao={setconfirmacoracao} // Passa a função setconfirmacoracao diretamente
        />
      )}
      <audio></audio>
      <Player />
      {/* audioPlaying={audioPlaying} playAudio={playAudio}  */}
      {/* Passa o estado audioPlaying e a função playAudio para o componente Player */}
      <Volume />
    </footer>
  );
}

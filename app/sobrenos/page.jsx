"use client";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import './sobrenos.css';

export default function Sobrenos() {
  
  function toggleMenu() {
    const menu = document.querySelector(".dropdownMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.classList.add("hide");
      setTimeout(() => {
        menu.style.display = "none";
      }, 500); // Tempo da animação
    } else {
      menu.classList.remove("hide");
      menu.classList.add("show");
      menu.style.display = "block";
    }
  }

  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop className="videoBg">
          <source src="/teste.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
        </video>
        <div className="overlay"></div>
      </div>
      <header>
        <div className="navbar">
          <div className="logo">
            <h1 className="logoImg">Nauru</h1>
          </div>
          <ul className="links">
            <li><Link href="#">Home</Link></li>
            <li><Link href="/historia">Historia</Link></li>
            <li><Link href="/download">Download</Link></li>
            <li><Link href="/sobrenos">Sobre-nós</Link></li>
          </ul>
          <Link href="#" className="actionButton">Bora lá</Link>
          <div className="toggleButton">
            <button onClick={toggleMenu}>
              <IoMdMenu />
            </button>
          </div>
        </div>

        <div className="dropdownMenu">
          <li><Link href="#">Home</Link></li>
          <li><Link href="/historia">Historia</Link></li>
          <li><Link href="/download">Download</Link></li>
          <li><Link href="/sobrenos">Sobre-nós</Link></li>
          <li><Link href="#" className="actionButton">Bora lá</Link></li>
        </div>
      </header>



      <main>

        
        <section id="hero">
          <div>
          <h1 className="titulo">Sobre-nós</h1>
          <p>Naurú foi um projeto de TCC do curso de Desenvolvimento de Sistemas na ETEC Martinho Di Ciero. </p>
          <h1 className="titulo">Integrantes</h1>
          </div>
        </section>
        
        <section id="images">
          <div id="img">
        <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139074637725728/gabriel.jpeg?ex=682cf63d&is=682ba4bd&hm=84e37968328ba180a292d577d3786c429938f6b1b59340a620ddb8f284b04453&=&format=webp&width=655&height=874"/>
            <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139075581186129/matheus.jpeg?ex=682cf63d&is=682ba4bd&hm=7bd91fe79d18d09a5cd74299359c912215731d2714ed7f3a056ce99a2aa3bcfe&=&format=webp&width=655&height=874"/>
            <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139075136852091/joao.png?ex=682cf63d&is=682ba4bd&hm=e18c99327b30e2097582faaeb1170bc61c898d423127736946fe4d96068c1d88&=&format=webp&quality=lossless&width=655&height=874"/>
            <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139076554522769/diego.jpeg?ex=682cf63e&is=682ba4be&hm=55c3f899e1d6049b2b9be62d5171ea9218aff4e39abc602af708b3a430812205&=&format=webp&width=656&height=874"/>
            <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139076009267352/rafael.jpeg?ex=682cf63d&is=682ba4bd&hm=940463d4642371143a64c89b3f29fe71d18e0fd91ec35d14849b691cd5fa1556&=&format=webp&width=655&height=874"/>
            <img src="https://media.discordapp.net/attachments/1374138982299861125/1374139077036736634/enzox.jpeg?ex=682cf63e&is=682ba4be&hm=8f8404adc9ef70ca7481d5c6f661a66e59e0d18370188924c814771bc108d1e4&=&format=webp&width=655&height=874"/>
            </div>
        </section>
      </main>
    </>
  );
}
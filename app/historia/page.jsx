"use client";

import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import "./historiona.css";
import { Devonshire } from "next/font/google";

export default function Historia() {

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
            <li><Link href="#">Download</Link></li>
            <li><Link href="#">Sobre-nós</Link></li>
          </ul>
          <Link href="#" className="actionButton">Bora lá</Link>
          <div className="toggleButton">
            <button onClick={toggleMenu}>
              <IoMdMenu />
            </button>
          </div>
        </div>

        <div className="dropdownMenu">
          <li><Link href="page">Home</Link></li>
          <li><Link href="historia.jsx">Historia</Link></li>
          <li><Link href="#">Download</Link></li>
          <li><Link href="#">Sobre-nós</Link></li>
          <li><Link href="#" className="actionButton">Bora lá</Link></li>
        </div>
      </header>

      <main>
        <section id="hero">
          <div>
            <h1 className="titulo">Nauru</h1>
            <p>Um jogo Metroidvania com elementos da cultura índigena brasileira!</p>
            <li><Link id="jogar" href="#" className="actionButton">JOGAR</Link></li>
          </div>

        </section>
      </main>

      <section className="personagens">
        <div id="personagensdiv">
          <img id="imgPerso" src="https://trello.com/1/cards/67daa4d2c02b3bb0f1111fcb/attachments/67f50a7cfe736851b91a3bf0/download/pixil-frame-0_(5).png" alt="personagens" />

          <div id="textosdivperso">
          <h1 className="tituloPerso">Personagens</h1>
          <p className="textoPerso">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit rhoncus sem, eget efficitur nisl viverra sit amet. Vivamus nunc libero, auctor vel odio quis, imperdiet consequat erat. Nullam ut faucibus nibh. In id enim gravida, commodo leo at, faucibus turpis. Donec vestibulum, metus convallis cursus eleifend, mauris dui venenatis risus, eu sagittis sem nisl vitae augue. Nunc sodales ornare condimentum. Proin volutpat augue erat, id aliquam mi rutrum sed. Vivamus sed nisi aliquet, scelerisque nulla quis, cursus nibh. Etiam a iaculis nisi, eu molestie sem. Nunc hendrerit massa nec mauris aliquam rhoncus. Nam porttitor tortor nunc, non efficitur sapien accumsan id.</p>
          </div>
          
        </div>
      </section>
    </>
  );
}
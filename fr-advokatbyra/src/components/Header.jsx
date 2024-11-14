import React from "react";

function Header() {
  return (
    <header className="bg-primary ">
      <h1>FR Advokatbyrå</h1>
      <nav>
        <ul>
            <li><a href="#home">Hem</a></li>
            <li><a href="#tjanster">Tjänster</a></li>
            <li><a href="#medarbetare">Medarbetare</a></li>
            <li><a href="#nyheter">Nyheter</a></li>
            <li><a href="#about">Om oss</a></li>
            <li><a href="#kontakt">Kontakta oss</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";

import './estilo.css';


export default function LandingPage(){



const [imagem, setImagem] = useState("assets/moon.png");

const[texto, setTexto] = useState("Dark");

const[fundo, setFundo] = useState("modo-claro")

function trocaImagemEtexto(){
    if (imagem === "assets/moon.png" && texto==="Dark"){
        setImagem("assets/sun.png");
        setTexto("Light");
        setFundo("modo-escuro");
    } else{
        setImagem("assets/moon.png");
        setTexto("Dark");
        setFundo("modo-claro");
    }
}


    return(
        <div className={fundo}>
            <header className="topo">
                <div>
                    <img className="img-logo" src="assets/barbearia-logo.png" alt="imagem logo"/>
                    <button className={fundo} onClick={trocaImagemEtexto}>
                        <img src={imagem} alt="imagem botão light"/>
                        <p>{texto}</p>
                    </button>
                </div>
            </header>
            <section className="secao-banner">
                
            </section>
            <section className="secao-informacoes">
                <div>
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>
                    Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                    </p>
                    <p>
                    Nossos serviços são dedicados ao seu sucesso pessoal. 
                    Aqui temos uma equipe premiada que demonstrou o talento 
                    de mestres barbeiros em vários concursos de estilo. Deixe 
                    nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                    </p>

                    <p>
                        S. Kelly
                    </p>
                </div>
            </section>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['apaixonada por livros', 'programadora', 'desenvolvedora', 'apaixonada por cultura'];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentWord === words[index]) {
          setIsDeleting(true);
        } else {
          setCurrentWord((prevWord) => prevWord + words[index][currentWord.length]);
        }
      } else {
        if (currentWord === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % words.length);
        } else {
          setCurrentWord((prevWord) => prevWord.slice(0, -1));
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, currentWord, isDeleting]);

  return (
    <>
      <div className="background">
        <div className="text-container">
          <h1>Bem-vindo ao meu portfólio!</h1>
          <h2>Meu nome é Letícia</h2>
          <h3>
            E eu sou <span className="palavras">{currentWord}</span>
          </h3>
        </div>
        <img src="/imgs/eu.jpg" alt="Profile" className="profile-pic" />
      </div>

      <div className='container'>
        <h2>Um pouco sobre mim</h2>
        <div className='colunash'>
          <div className='coluna1'>
            <p>Olá! Me chamo Letícia, tenho 19 anos e sou apaixonada por desenvolvimento de software.</p>
            <p>
              Atualmente estudo na FATEC de São José dos Campos e estou no meu 3° semestre do curso de Desenvolvimento de Software Multiplataforma.
              Neste curso, aprendi a criar aplicações web, mobile e desktop, utilizando diversas linguagens de programação, frameworks e ferramentas.
            </p>
            <p>
              Apesar de não ter experiência profissional na área de desenvolvimento de software, tenho muita vontade de aprender e me desenvolver. Estou em
              busca de uma oportunidade de estágio, onde possa colocar em prática os meus conhecimentos e adquirir novas habilidades, trabalhando em equipe e
              seguindo as boas práticas de engenharia de software e metodologias ágeis.
            </p>
            <p>
              O meu objetivo é me tornar uma desenvolvedora de software de alto nível, capaz de resolver problemas complexos e criar soluções inovadoras.
              Para isso, estou sempre buscando me atualizar e aprender novas tecnologias e tendências do mercado.
            </p>
          </div>
          <div className='coluna2'>
            <img src="/imgs/foto-profile.jpg"></img>
          </div>
        </div>
      </div>

      <blockquote className='quote'>
        <p>Todas as pessoas grandes foram um dia crianças - mas poucas se lembram disso.</p>
      </blockquote>
      <div className='ass'>
        <i><p>- O Pequeno Príncipe</p></i>
      </div>

    </>
  );
}

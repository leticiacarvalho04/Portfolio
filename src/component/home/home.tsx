import React, { useState, useEffect } from 'react';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Adiciona estado para o modo escuro
  const words = ['amo ler', 'sou programadora', 'sou desenvolvedora', 'amo aprender'];

  const idade = new Date().getFullYear() - 2004;

  const dataInicio = new Date(2023, 0, 1); // Janeiro de 2023
  const dataAtual = new Date();
  
  const mesesPassados = (dataAtual.getFullYear() - dataInicio.getFullYear()) * 12 + dataAtual.getMonth() - dataInicio.getMonth();
  const semestreAtual = Math.floor(mesesPassados / 6) + 1;
  
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
    }, 150);

    return () => clearInterval(interval);
  }, [index, currentWord, isDeleting]);

  useEffect(() => {
    const handleDarkModeChange = (event: Event) => {
      const darkModeEnabled = (event.target as HTMLBodyElement).classList.contains('dark-mode');
      setDarkMode(darkModeEnabled);
    };

    window.addEventListener('themeChange', handleDarkModeChange);

    return () => {
      window.removeEventListener('themeChange', handleDarkModeChange);
    };
  }, []);

  return (
    <>
      <div className={`background ${darkMode ? 'dark-mode' : ''}`}>
        <div className="text-container">
          <h1>Bem-vindo ao meu portfólio!</h1>
          <h2>Meu nome é Letícia</h2>
          <h3>
            E eu <span className="palavras">{currentWord}</span>
          </h3>
        </div>
        <img src="/imgs/eu.jpg" alt="Profile" className="profile-pic" />
      </div>

      <div className='container'>
        <h2>Um pouco sobre mim</h2>
        <div className='colunash'>
          <div className='coluna1'>
            <p>Olá! Me chamo Letícia, tenho {idade} anos e sou apaixonada por desenvolvimento de software.</p>
            <p>
              Atualmente estudo na FATEC de São José dos Campos e estou no meu {semestreAtual}° semestre do curso de Desenvolvimento de Software Multiplataforma.
              Neste curso, aprendi a criar aplicações web, mobile e desktop, utilizando diversas linguagens de programação, frameworks e ferramentas.
            </p>
            <p>
              Atualmente estagio na empresa Codex Utilities, uma empresa especializada em soluções tecnológicas para gestão de serviços públicos e utilidades. 
              Na Codex Utilities, estou envolvida em projetos que visam otimizar a gestão de recursos como energia, utilizando tecnologias avançadas para 
              monitoramento e análise de dados. Minha experiência na empresa tem sido extremamente enriquecedora, permitindo-me aplicar os conhecimentos adquiridos 
              na faculdade em situações reais e desafiadoras, além de aprender novas técnicas e ferramentas que são amplamente utilizadas no mercado.
            </p>
            <p>
              O meu objetivo é me tornar uma desenvolvedora de software de alto nível, capaz de resolver problemas complexos e criar soluções inovadoras.
              Para isso, estou sempre buscando me atualizar e aprender novas tecnologias e tendências do mercado.
            </p>
          </div>
          <div className='coluna2'>
            <img src="/imgs/foto-profile.jpg" alt="Profile" />
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

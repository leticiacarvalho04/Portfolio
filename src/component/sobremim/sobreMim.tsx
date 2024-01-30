import './sobreMim.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef, useState } from 'react';
import Navbar from "../navbar/navbar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Footer from '../footer/footer';

export default function SobreMim(){
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 13; 

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        afterChange: (current: number) => setCurrentSlide(current)
    };

    useEffect(() => {
        if (currentSlide + 1 === totalSlides) {
            setTimeout(() => {
                sliderRef.current?.slickGoTo(0);
            }, 1);
        }
    }, [currentSlide]);   

    return(
        <>
            <Navbar />
            <div className="container">
                <div className="content">
                    <h1>Acadêmico</h1>
                    <hr />
                    <div className="escolaridade">
                        <h3>Escolaridade</h3>
                        <ul>
                            <li>
                                Ensino Fundamental: Henriqueta Costa Porto (2011-2015), Matarazzo (2016), Sebastiana Cobra (2017 - 2019)
                            </li>
                            <li>
                                Ensino Médio: Nelson do Nascimento Monteiro (2020-2022)
                            </li>
                            <li>
                                Ensino superior: Fatec SJC no curso Desenvolvimento de Software Multiplataforma (2023 - atual)
                            </li>
                        </ul>
                    </div>

                    <div className="cursos">
                        <h3>Cursos</h3>
                        <ul>
                            <li>HTML Básico e avançado</li>
                            <li>Fundamentos do design gráfico</li>
                            <li>Python</li>
                            <li>Microsoft 365- Planner</li>
                            <li>Básico de programação para games (Unity e Unreal)</li>
                            <li>Scientific Computing with Python</li>
                            <li>Javascript Algorithms and Data Structures</li>
                        </ul>
                    </div>

                    <div className="pessoal">
                        <h2>Pessoal</h2>
                        <div className="colunas">
                            <div className="coluna1">
                                <div className="hobbies">
                                    <h3>Hobbies</h3>
                                    <ul>
                                        <li>Ler</li>
                                        <li>Ouvir música</li>
                                        <li>Aprender coisas novas</li>
                                        <li>Estudar</li>
                                        <li>Desenhar</li>
                                        <li>Cozinhar</li>
                                        <li>Ver filmes e séries</li>
                                        <li>Andar de bicicleta (como lazer)</li>
                                    </ul>
                                </div>

                                <div className="Filmes-series">
                                    <h3>Filmes e séries</h3>
                                    <ul>
                                        <li>Gilmore Girls</li>
                                        <li>Anne with E</li>
                                        <li>Extraordinário</li>
                                        <li>Your eyes tell (Seus olhos dizem)</li>
                                        <li>Continência ao Amor</li>
                                        <li>Manifest</li>
                                        <li>O rei do show</li>
                                        <li>Malévola</li>
                                        <li>Alladin</li>
                                        <li>Garota do século 20</li>
                                        <li>The Good Doctor</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Segunda coluna */}
                            <div className="coluna2">
                                    <h2>Minhas playlist</h2>
                                    <div className="imagens">
                                        <div className="imagem-container">
                                            <a href="https://open.spotify.com/playlist/2SXO4DF0ROudOQIr0T91Eb?si=7d5226382e8b4f93" target="_blank">
                                                <img src="/imgs/playlist1.png" alt="Imagem 1" />
                                                <p>Acesse <u>aqui</u></p>
                                            </a>
                                        </div>
                                        <div className="imagem-container">
                                            <a href="https://open.spotify.com/playlist/2Fgoq3r1sVrzOySlRvtV2h?si=6e6899770e854207" target="_blank">
                                                <img src="/imgs/playlist2.png" alt="Imagem 2" />
                                                <p>Acesse <u>aqui</u></p>
                                            </a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                     <div className="livros">
                        <h1>Meus livros preferidos:</h1>
                        <Slider ref={sliderRef} {...settings}>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/Bem-vindos à livraria Hyunam-dong.jpg" alt="Livro 1" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/toda-luz.jpg" alt="Livro 2" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/é assim que começa.jpg" alt="livro2" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/É Assim que Acaba.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/A paciente silenciosa.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/Luzes do Leste.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/Ondas do Oeste.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/quatro tias e um casamento.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/A Hipótese do Amor.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/anne de green gables.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/O príncipe cruel capa.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/boneco de neve.jpg" />
                            </div>
                            <div>
                                <img className="imagem-carousel" src="/imgs/livros/O ódio que você semeia.jpg" />
                            </div>
                        </Slider>
                    </div>
                    <br />
                    <div className="mais">
                        <i>Para ver mais clique <a href="https://www.skoob.com.br/usuario/8777550">AQUI</a></i>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}
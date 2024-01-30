import React from 'react';
import './contatos.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

export default function Contatos(){
    return(
        <>
            <Navbar />
            <div className="container2">
                <h1>Contato</h1>
                <p>Você pode entrar em contato comigo através das minhas redes sociais ou do meu email:</p>
                <div className="redes">
                    <div className="github">
                        <a href="https://github.com/leticiacarvalho04" target="_blank"><img src="/imgs/icons/github.png" alt="github" /></a>
                        <p>Link para o meu <a href="https://github.com/leticiacarvalho04" target="_blank"> GitHub</a></p>
                    </div>
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/let%C3%ADcia-helena-carvalho/" target="_blank"><img src="/imgs/icons/linkedin-logo.png" alt="linkedin" /></a>
                        <p>Link para o meu<a href="https://www.linkedin.com/in/let%C3%ADcia-helena-carvalho/" target="_blank"> Linkedin</a></p>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/carvalho_leticia04/" target="_blank"><img src="/imgs/icons/instagram.png" alt="instragram" /></a>
                        <p>Link para o meu <a href="https://www.instagram.com/carvalho_leticia04/" target="_blank"> Instagram</a></p>
                    </div>
                    <div className="email">
                        <a href="mailto:leticiahelena.oliveira@outlook.com"><img src="/imgs/icons/mail.png" alt="email" /></a>
                        <p>Link para o meu<a href="mailto:leticiahelena.oliveira@outlook.com"> Email</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
import React, { useState } from 'react';
import './projetos.css';
import { faCss3Alt, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { Mysql, TypeScriptIcon } from './icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from '../home/home';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

interface Project {
    title: string;
    image: string;
    description: string;
    sobre: string;
    technologies: any[]; 
    link: string;
}

export default function Projetos(){
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleModal = (project: Project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setShowModal(false);
    };

    const projects: Project[] = [
        {
            title: "API 1° semestre - Covidinho",
            image: "/imgs/projetos/api-1semestre.png",
            description: "API do 1° semestre de DSM de 2023 sobre a Covid Longa.",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° semestre de Desenvolvimento de 
            Software Multiplataforma (DSM) em parceria com a Vanguarda sobre dados relacionados à covid longa no Vale do Paraíba 
            para um site de uso jornalístico.
            \n
            Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, 
            ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas 
            da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região 
            do Vale do Paraíba, visando criar novas matérias para o jornal.`,
            technologies: [faHtml5, faCss3Alt, faPython, faJs,Mysql],
            link:'https://github.com/Equipe-01-DSM-2023/API-2023.1'
        },
        {
            title: "API 2° semestre - Callnet",
            image: "/imgs/projetos/api-2semestre.png",
            description: "API do 2° semestre de DSM de 2023 sobre um sistema de gerenciamento de chamadas",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 2° semestre de Desenvolvimento 
            de Software Multiplataforma (DSM). O projeto se refere à um sistema de Gestão de Chamadas de Serviço. 
            A plataforma deve conter informações detalhadas sobre a disponibilização de funcionalidades sobre o planejamento, 
            além do acompanhamento completo e controle no atendimento das chamadas.
            \n
            O sistema desenvolvido, chamado CallNet, é focado em fornecer auxílio aos problemas relacionados a Internet Fixa, 
            e busca aprimorar o sistema de Gerenciamento de Chamadas de Serviço. Nosso objetivo é que nossos clientes tenham 
            acesso à soluções de seus problemas sobre Internet, de forma mais rápida e eficaz.` ,
            technologies: [faReact, faNodeJs, faHtml5, faCss3Alt,TypeScriptIcon,Mysql],
            link:'https://github.com/Equipe-CodeLand/API-2023.2'
        },
        {
            title: 'Meu Portfólio',
            image:'/imgs/projetos/portfolio.png',
            description:'Meu portfólio pessoal',
            sobre:`Este projeto tem por objetivo apresentar todos os trabalhos desenvolvidos por mim ao longo do período da fatec, 
            além de contar com algumas informações pessoais e acadêmicas.`,
            technologies:[faReact,TypeScriptIcon, faHtml5,faCss3Alt],
            link:'https://github.com/leticiacarvalho04/Portfolio-Atualizado'
        },
        {
            title: 'Grupo World Beauty',
            image:'/imgs/projetos/wb.png',
            description:'Site gerenciador de lojas do grupo World Beauty',
            sobre:` Este é um sistema de gestão desenvolvido para gerenciar um grupo que possui um modelo de negócio focado em pequenas 
            unidades espalhadas por várias cidades no país. O projeto foi desenvolvido em várias iterações.
            \n
            O WB é um sistema abrangente projetado para ajudar o Grupo World Beauty na organização e gerenciamento de suas pequenas unidades 
            espalhadas pelas várias cidades no país. Ele abrange desde o gerenciamento dos produtos e serviços prestados até o gerenciamento destes e do cliente.`,
            technologies:[faReact,TypeScriptIcon, faHtml5,faCss3Alt, faNodeJs],
            link:'https://github.com/leticiacarvalho04/WB'
        },
        {
            title: 'Relógio',
            image:'/imgs/projetos/relogio-python.png',
            description:'Repositório do Widget de um relógio digital desenvolvido em Python Tkinter',
            sobre:` Este projeto pessoal foi desenvolvido utilizando python de forma a criar um widget de um relógio que pega o nome do seu usuário do computador 
            e imprime-o juntamente com as boas vindas, a data e hora. Tmabém é possível trocar o tema para a versão clara clicando no icon da lua.`,
            technologies:[faPython],
            link:'https://github.com/leticiacarvalho04/Relogio.py'
        },
        {
            title: 'Projeto Unes ',
            image:'/imgs/projetos/unes-projeto.png',
            description:'Site Web para por em prática meus conhecimentos',
            sobre:` Projeto desenvolvido para uma universidade fictícia com o objetivo de aprender o básico de desenvolvimento Web usando o framework Flask com as linguagens e 
            markdowns: mysql, python, html e css.`,
            technologies:[Mysql, faHtml5,faCss3Alt, faPython],
            link:'https://github.com/leticiacarvalho04/Dev-Web-1-Sem'
        },
    ];

    return(
        <>
            <Navbar />
            <div className='container'>
                <div className='content'>
                    <div className="projetos">
                            <h1>Projetos</h1>
                            <h5>Bem vindo à página de projetos! Aqui você poderá encontrar todos os projetos realizados por mim até agora.</h5>
                            <p color="grey"><i>Para visualização clique nos cards para mais informações sobre os projetos</i></p>
                            <div className="card-container">
                                {projects.map((project, index) => (
                                    <div key={index} className="card-wrapper">
                                        <Card onClick={() => handleModal(project)}>
                                        <Card.Img variant="top" src={project.image} alt="Imagem do projeto" />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
            <Footer />

            <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do Projeto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedProject && (
                    <>
                    <p><b>Sobre o projeto:</b></p>
                    <p>{selectedProject.sobre.split('\n').map((line, index) => (
                        <span key={index}>
                        {line}
                        <br />
                        </span>
                    ))}</p>
                    <p><b>Tecnologias utilizadas:</b></p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                        {selectedProject.technologies.map((icon: any, index: any) => {
                            if (typeof icon === 'function') {
                                const IconComponent = icon;
                                return <IconComponent style={{ fontSize: '48px', marginRight: '10px' }} />;
                            } else {
                                return <FontAwesomeIcon icon={icon} style={{ fontSize: '48px', marginRight: '10px' }} />;
                            }
                        })}
                    </div>
                    <Button href={selectedProject.link} target="_blank">Ver Projeto</Button>
                    </>
                )}
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Fechar
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )

}
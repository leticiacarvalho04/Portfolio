import React, { useState } from 'react';
import './projetos.css';
import { faCss3Alt, faFigma, faGithub, faHtml5, faJava, faJira, faJs, faNodeJs, faPython, faReact, faSlack, faTrello } from '@fortawesome/free-brands-svg-icons';
import { SiChartdotjs, SiDocker, SiExpo, SiFirebase, SiFlask, SiPrisma } from "react-icons/si";
import { Mysql, SpringBootIcon, TypeScriptIcon } from './icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../footer/footer';
import Header from '../navbar/navbar';

interface Project {
    title: string;
    image: string;
    description: string;
    sobre: string;
    technologies: any[]; 
    contribuicoesPessoais: string;
    hardSkil: any[];
    softSkil: any[];
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
            
            Nosso projeto consiste em um site focado em dados relacionados a Covid-19, seus efeitos e seus sintômas prolongados, 
            ou Covid longa de acordo com a Organização Mundial da Saúde (OMS). Este projeto é destinado à usuários jornalistas 
            da rede Vanguarda com a necessidade de um site de fácil acesso à dados e informações sobre a Covid longa na região 
            do Vale do Paraíba, visando criar novas matérias para o jornal.`,
            technologies: [faFigma, faGithub, faTrello, SiChartdotjs, faHtml5, faCss3Alt, faPython, faJs, Mysql],
            link:'https://github.com/Equipe-01-DSM-2023/API-2023.1',
            hardSkil: ['Manipulação de dados com Python', 'Criação dos gráficos com JavaScript', 'Estilização com HTML', 'Estilização com CSS', 
                'Criação do banco de dados e armazenamento de dados com o MySQL'
            ],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados', 'Adaptabilidade', 'Flexibilidade'],
            contribuicoesPessoais: `Neste projeto, atuei como membro da equipe de desenvolvimento seguindo a metodologia Scrum. Contribuí 
            no desenvolvimento tanto do front-end quanto do back-end. Além disso, realizei a manipulação de dados obtidos através da 
            raspagem do site DataSusTabnet, integrando-os aos gráficos que desenvolvi, a fim de facilitar a visualização e interpretação dessas 
            informações. 
            Participei também das etapas de pesquisa e coleta de dados para a execução do nosso projeto.`
        },
        {
            title: "API 2° semestre - Callnet",
            image: "/imgs/projetos/api-2semestre.png",
            description: "API do 2° semestre de DSM de 2023 sobre um sistema de gerenciamento de chamadas",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 2° semestre de Desenvolvimento 
            de Software Multiplataforma (DSM). O projeto se refere à um sistema de Gestão de Chamadas de Serviço. 
            A plataforma deve conter informações detalhadas sobre a disponibilização de funcionalidades sobre o planejamento, 
            além do acompanhamento completo e controle no atendimento das chamadas.
            
            O sistema desenvolvido, chamado CallNet, é focado em fornecer auxílio aos problemas relacionados a Internet Fixa, 
            e busca aprimorar o sistema de Gerenciamento de Chamadas de Serviço. Nosso objetivo é que nossos clientes tenham 
            acesso à soluções de seus problemas sobre Internet, de forma mais rápida e eficaz.` ,
            technologies: [faFigma, faJira, faSlack, faReact, faNodeJs, faJs, faHtml5, faCss3Alt,TypeScriptIcon,Mysql],
            link:'https://github.com/Equipe-CodeLand/API-2023.2',
            hardSkil: ['Desenvolvimento Front-End em React, Node.js, HTML e CSS','Desenvolvimento do Back-End em TypeScript e JavaScript', 
                'Banco de dados desenvolvido no MySQL'
            ],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados', 'Empatia', 'Organização e planejamento',
                'Resolução de problemas', 'Adaptabilidade', 'Flexibilidade', 'Liderança'
            ],
            contribuicoesPessoais: `Neste projeto, desempenhei o papel de Scrum Master, liderando e orientando minha equipe com eficácia. Fui responsável 
            por impulsionar o desenvolvimento integrado do front-end e do back-end, garantindo a entrega de soluções robustas e eficientes. Além disso, 
            tive um papel crucial na concepção e implementação do banco de dados, bem como na coleta e análise dos dados vitais para o sucesso do projeto. 
            Contribuí significativamente para o design do site, assegurando uma interface intuitiva e uma arquitetura de banco de dados bem estruturada.`
        },
        {
            title: "API 3° semestre - Youtan",
            image: "/imgs/projetos/youtan.png",
            description: "API do 3° semestre de DSM de 2024 sobre um sistema de gerenciamento de ativos",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 3° semestre de Desenvolvimento de 
            Software Multiplataforma (DSM). O objetivo do projeto é o desenvlvimento de uma solução para o gerenciamento de ativos 
            de uma empresa. A plataforma deve conter informações detalhadas sobre ativos, cadastro e histórico de manutenções dos 
            ativos e dashboard com indicativos relevantes sobre os ativos.
            
            O objetivo do projeto é o desenvovimento de uma solução para o gerenciamento de ativos de uma empresa. A plataforma deve 
            conter informações detalhadas sobre ativos, cadastro e histórico de manutenções dos ativos e dashboard com indicativos 
            relevantes sobre os ativos.` ,
            technologies: [faFigma, faJira, faSlack, faGithub, faReact, faJava, SpringBootIcon, faNodeJs, faHtml5, faCss3Alt,TypeScriptIcon,Mysql],
            link:'https://github.com/Equipe-CodeLand/API-2024.1',
            hardSkil: ['Desenvolvimento Front-End em React, Node.js, HTML e CSS','Desenvolvimento do Back-End em Java, SpringBoot e MySQL'],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados','Adaptabilidade', 'Flexibilidade', 
                'Organização e Planejamento', 'Inteligência Emocional'
            ],
            contribuicoesPessoais: `Neste projeto, atuei como membro da equipe de desenvolvimento, trabalhando tanto no Front-End quanto no Back-End. 
            Minhas responsabilidades incluíram a criação da página inicial, funcionalidades de edição e exclusão de manutenções, histórico de usuários, 
            troca de senha com verificação por e-mail e manipulação de arquivos de nota fiscal, além do filtro de manutenção.`
        
        },
        {
            title: "API 4° semestre - Tecsus",
            image: "/imgs/projetos/api-4semestre.png",
            description: "API do 3° semestre de DSM de 2024 sobre um sistema de coleta de dados de uma estação metereológica",
            sobre: `Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 4° semestre de Desenvolvimento de Software Multiplataforma (DSM). 
            O objetivo do projeto é o desenvolvimento de um sistema de coleta de dados de estações meteorológicas. A plataforma deve receber as informações da estação metereológica e em caso de emergência mostrar uma notificação alertando a população.` ,
            technologies: [faFigma, faJira, faPython, SiFirebase, SiDocker, faGithub, faReact,  faNodeJs, faHtml5, faCss3Alt,TypeScriptIcon],
            link:'https://github.com/Equipe-CodeLand/API-2024.2',
            hardSkil: ['Desenvolvimento Front-End em React, Node.js, HTML, CSS, TypeScript, Jest','Desenvolvimento do Back-End em TypeScript, Python, Firebase, Docker, Jest'],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados','Adaptabilidade', 'Flexibilidade', 
                'Organização e Planejamento', 'Inteligência Emocional'
            ],
            contribuicoesPessoais: `Neste projeto, atuei como membro da equipe de desenvolvimento, trabalhando tanto no Front-End quanto no Back-End. 
            Minhas responsabilidades incluíram realizar o CRUD de usuários, auxiliar na estruturação dos códigos tanto no Back quanto no Front-End, além de também atuar na parte de testes para o DevOps do projeto, relizando testes de integração no front e no back.`
        },
        {
            title: 'Meu Portfólio',
            image:'/imgs/projetos/portfolio.png',
            description:'Meu portfólio pessoal',
            sobre:`Este projeto tem por objetivo apresentar todos os trabalhos desenvolvidos por mim ao longo do período da fatec, 
            além de contar com algumas informações pessoais e acadêmicas.`,
            technologies:[faReact,TypeScriptIcon, faHtml5,faCss3Alt],
            link:'https://github.com/leticiacarvalho04/Portfolio',
            hardSkil: ['Desenvolvimento do front-end em React usando TypeScript, HTML e CSS'],
            softSkil: ['Proatividade', 'Organização e planejamento', 'Autonomia'],
            contribuicoesPessoais: `Este foi um projeto de cunho pessoal, onde fui responsável por todo o desenvolvimento do front-end do site. Foi uma ótima
            oportunidade para colocar em prática os conhecimentos adquiridos ao longo do curso e habilidades socioemocionais, como : organização, autogestão e 
            proatividade.`
        },
        {
            title: 'Grupo World Beauty',
            image:'/imgs/projetos/wb.png',
            description:'Site gerenciador de lojas do grupo World Beauty',
            sobre:` Este é um sistema de gestão desenvolvido para gerenciar um grupo que possui um modelo de negócio focado em pequenas 
            unidades espalhadas por várias cidades no país. O projeto foi desenvolvido em várias iterações.
            
            O WB é um sistema abrangente projetado para ajudar o Grupo World Beauty na organização e gerenciamento de suas pequenas unidades 
            espalhadas pelas várias cidades no país. Ele abrange desde o gerenciamento dos produtos e serviços prestados até o gerenciamento destes e do cliente.`,
            technologies:[SiPrisma, faReact, TypeScriptIcon, faHtml5,faCss3Alt, faNodeJs],
            link:'https://github.com/leticiacarvalho04/WB',
            hardSkil: ['Desenvolvimento front-end em React TypeScript, HTML e CSS', 'Desenvolvimento do back-end em TypeScript, Node.js e Prisma'],
            softSkil: ['Trabalho em equipe', 'Comunicação', 'Proatividade', 'Autonomia', 'Entrega de Resultados'],
            contribuicoesPessoais: `Neste projeto, atuei no desenvolvimento tanto do Front-End quanto do Back-End, além de criar o banco de dados utilizando o Prisma ORM.`
        },
        {
            title: 'Atlantis',
            image:'/imgs/projetos/atlantis.jpg',
            description:'Site gerenciador de um parque aquático fictício',
            sobre:`O Sistema de Gestão Atlantis foi desenvolvido para atender uma empresa com um modelo de negócio baseado em pequenas unidades distribuídas por várias 
            cidades no país. O projeto passou por várias iterações de desenvolvimento.
            
            O Atlantis foi criado para gerenciar o cadastro de clientes de um parque aquático e uma rede hoteleira. Ele oferece funcionalidades completas para o CRUD 
            (Create, Read, Update, Delete) de clientes titulares, clientes dependentes e acomodações.`,
            technologies:[faReact,TypeScriptIcon, faHtml5,faCss3Alt, faNodeJs],
            link:'https://github.com/leticiacarvalho04/Atlantis',
            hardSkil: ['Desenvolvimento Front-End em React TypeScript, HTML e CSS', 'Desenvolvimento do Back-End em TypeScript e Node.js'],
            softSkil: ['Proatividade', 'Organização e planejamento', 'Autonomia', 'Autogestão', 'Entrega de resultados'],
            contribuicoesPessoais: `Este foi um projeto para a matéria de Técnicas de Programação II, ministrada pelo professor Gerson Penha, onde fui responsável por 
            todo o desenvolvimento do front-end do site. Foi uma ótima oportunidade para colocar em prática os conhecimentos adquiridos ao longo do curso e habilidades 
            socioemocionais, como : organização, autogestão e proatividade.`
        },
        {
            title: 'AutoBots',
            image:'/imgs/projetos/autobots.png',
            description:'Site para gerenciar uma startup fictícia',
            sobre:`O AutoBots é um sistema projetado para otimizar operações, melhorar a eficiência e impulsionar as vendas da startup AutoBots. 
            Ele visa aprimorar os processos internos e aumentar a produtividade da organização.`,
            technologies:[faJava, SpringBootIcon],
            link:'https://github.com/leticiacarvalho04/Autobots',
            hardSkil: ['Desenvolvimento em Java e Spring Boot'],
            softSkil: ['Proatividade', 'Organização e planejamento', 'Autonomia'],
            contribuicoesPessoais: `Este foi um projeto para a matéria de Técnicas de Programação II, ministrada pelo professor Gerson Penha, onde fui responsável por 
            todo o desenvolvimento do back-end do site. Foi uma ótima oportunidade para colocar em prática os conhecimentos adquiridos ao longo do curso e habilidades 
            socioemocionais, como : organização, autogestão e proatividade.`
        },
        {
            title: 'LiFin',
            image: '/imgs/projetos/lifin.png',
            description: 'App mobile de finanças pessoais',
            sobre: `LiFin é um aplicativo de finanças pessoais, projetado para tornar a gestão do dinheiro do usuário fácil e perspicaz. 
                    Com uma interface elegante e recursos poderosos, o LiFin ajuda a rastrear despesas, gerenciar orçamentos e alcançar suas metas financeiras.`,
            technologies: [faReact, TypeScriptIcon, SiFirebase, SiExpo],
            link: 'https://github.com/leticiacarvalho04/LiFin',
            hardSkil: ['Desenvolvimento em React Native', 'TypeScript', 'Firebase', 'Expo'],
            softSkil: ['Proatividade', 'Organização e planejamento', 'Autonomia'],
            contribuicoesPessoais: `Este foi um projeto desenvolvido para a disciplina de Dispositivos Móveis no 4° semestre da Fatec onde fui responsável por todo o desenvolvimento do aplicativo, desde a concepção da ideia até a implementação final. 
            Utilizei React Native, TypeScript, Firebase e Expo para criar uma solução robusta e eficiente para a gestão de finanças pessoais. 
            Foi uma excelente oportunidade para aprimorar minhas habilidades técnicas e socioemocionais, como organização, autogestão e proatividade.`
        },
        {
            title: 'Relógio',
            image:'/imgs/projetos/relogio-python.png',
            description:'Repositório do Widget de um relógio digital desenvolvido em Python Tkinter',
            sobre:`Este projeto pessoal foi desenvolvido utilizando python de forma a criar um widget de um relógio que pega o nome do seu usuário do computador 
            e imprime-o juntamente com as boas vindas, a data e hora. Também é possível trocar o tema para a versão clara clicando no icon da lua.`,
            technologies:[faPython],
            link:'https://github.com/leticiacarvalho04/Relogio.py',
            hardSkil: ['Desenvolvimento em Python'],
            softSkil: ['Proatividade', 'Autonomia'],
            contribuicoesPessoais: `Desenvolvi um projeto pessoal em Python que resultou em um widget de relógio. A ideia era criar uma aplicação simples e útil que pegasse 
            o nome do usuário do computador e exibisse uma saudação personalizada, juntamente com a data e a hora atual.`
        },
        {
            title: 'Projeto Unes ',
            image:'/imgs/projetos/unes-projeto.png',
            description:'Site Web para por em prática meus conhecimentos',
            sobre:`Projeto desenvolvido para uma universidade fictícia com o objetivo de aprender o básico de desenvolvimento Web usando o framework Flask com as linguagens e 
            markdowns: mysql, python, html e css.`,
            technologies:[SiFlask, faHtml5,faCss3Alt, faPython, Mysql],
            link:'https://github.com/leticiacarvalho04/Dev-Web-1-Sem',
            hardSkil: ['Desenvolvimento do Back-End em Python e MySQL', 'Desenvolvimento do Front-End em HTML, CSS e Flask'],
            softSkil: ['Proatividade', 'Autonomia'],
            contribuicoesPessoais: `Desenvolvi um projeto para uma universidade fictícia, focado em aprender os conceitos básicos de desenvolvimento web. Nesse projeto, 
            utilizei o framework Flask e criei um banco de dados MySQL. Além disso, personalizei o front-end com HTML e CSS.`
        },
    ];

    return(
        <>
            <Header />
            <div className='container1'>
                <div className='content1'>
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
                    <hr />
                    <div className='skills'>
                        <div className='hardSkill'>
                            <p><b>Hard Skills:</b></p>
                            <ul>
                                {selectedProject.hardSkil.map((skill, index) => (
                                <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='softSkill'>
                            <p><b>Soft Skills:</b></p>
                            <ul>
                                {selectedProject.softSkil.map((skill, index) => (
                                <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p><b>Contribuições pessoais:</b></p>
                    <p>{selectedProject.contribuicoesPessoais.split('\n').map((line, index) => (
                        <span key={index}>
                        {line}
                        <br />
                        </span>
                    ))}</p>
                    <p><b>Tecnologias utilizadas:</b></p>
                    <div className='tecnologias'>
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
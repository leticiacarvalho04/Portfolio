import React from 'react';
import './navbar.css'

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="/imgs/logo.jpg" alt="Seu Logo" className="logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Início <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/sobreMim">Sobre Mim</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projetos">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

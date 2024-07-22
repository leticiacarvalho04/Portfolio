import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center custom-footer">
                <div className="container pt-4 d-flex flex-column align-items-center">
                    {/* Section: Social media */}
                    <section className="mb-4 d-flex justify-content-center">
                        <a
                            className="btn btn-link btn-floating btn-lg m-1"
                            href="mailto:leticiahelena.oliveira@outlook.com"
                            target='_blank'
                            role="button" rel="noreferrer"
                        ><FontAwesomeIcon icon={faGoogle} /></a>

                        <a
                            className="btn btn-link btn-floating btn-lg m-1"
                            href="https://www.instagram.com/carvalho_leticia04/"
                            target='_blank'
                            role="button" rel="noreferrer"
                        ><FontAwesomeIcon icon={faInstagram} /></a>

                        <a
                            className="btn btn-link btn-floating btn-lg m-1"
                            href="https://www.linkedin.com/in/let%C3%ADcia-helena-carvalho/"
                            target='_blank'
                            role="button" rel="noreferrer"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a
                            className="btn btn-link btn-floating btn-lg m-1"
                            href="https://github.com/leticiacarvalho04"
                            target='_blank'
                            role="button" rel="noreferrer"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                    </section>

                    {/* Copyright */}
                    <div className="text-center pt-3">
                        ©2024 Copyright:
                        <a className="text-body" href="https://github.com/leticiacarvalho04">leticiacarvalho04</a>
                    </div>
                </div>
            </footer>
        )
    }
}

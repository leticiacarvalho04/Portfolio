import React from 'react';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="text-center bg-body-tertiary m-0">
                <div className="container pt-4 d-flex flex-column align-items-center m-0">

                    {/* Section: Social media */}
                    <section className="mb-4 d-flex justify-content-center m-0">
                        {/* Google */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="mailto:leticiahelena.oliveira@outlook.com"
                            target='_blank'
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faGoogle} /></a>

                        {/* Instagram */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.instagram.com/carvalho_leticia04/"
                            target='_blank'
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faInstagram} /></a>

                        {/* Linkedin */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://www.linkedin.com/in/let%C3%ADcia-helena-carvalho/"
                            target='_blank'
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>

                        {/* Github */}
                        <a
                            data-mdb-ripple-init
                            className="btn btn-link btn-floating btn-lg text-body m-1"
                            href="https://github.com/leticiacarvalho04"
                            target='_blank'
                            role="button"
                            data-mdb-ripple-color="dark"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                    </section>
                    <div className="text-center pt-3">
                     © 2020 Copyright:
                    <a className="text-body" href="https://github.com/leticiacarvalho04">leticiacarvalho04</a>
                </div>
                </div>
                {/* Copyright */}
            </footer>
        )
    }
}

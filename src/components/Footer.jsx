
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-white">
            {/* Grid container */}
            <div className="container p-4 pb-0">
                {/* Section: Social media */}
                <section className="mb-4">
                    {/* Linkedin */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/in/birol-alkan/"
                        role="button"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                    {/* Github */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="https://github.com/BirolAlkan"
                        role="button"
                        target="_blank"
                    >
                        <i className="fab fa-github" />
                    </a>
                    {/* Facebook */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#3b5998" }}
                        href="https://tr-tr.facebook.com/"
                        role="button"
                        target="_blank"
                    >
                        <i className="fab fa-facebook-f" />
                    </a>
                    {/* Twitter */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#55acee" }}
                        href="https://twitter.com/"
                        role="button"
                        target="_blank"
                    >
                        <i className="fab fa-twitter" />
                    </a>
                
                    {/* Instagram */}
                    <a
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: "#ac2bac" }}
                        href="https://www.instagram.com/"
                        role="button"
                        target="_blank"
                    >
                        <i className="fab fa-instagram" />
                    </a>

                </section>
                {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © {new Date().getFullYear()} Copyright by BirolALKAN
            </div>
            {/* Copyright */}
        </footer>
    )
}

export default Footer
import "../styles/contact.css"

export default function Contact() {

    return (

        <section id="contact">

            <div className="contact-container">

                <div className="contact-left">
                    <div className="contact-left-inner">

                        <h2>Contact Me</h2>

                        <p>
                            If you'd like to collaborate, discuss ideas, or explore
                            opportunities, feel free to reach out.
                        </p>

                    </div>
                </div>

                <div className="contact-details">
                    <div className="contact-details-inner">

                        <div className="contact-item">
                            <span>Email</span>
                            <a href="mailto:aditigiri001@gmail.com">
                                aditigiri001@gmail.com
                            </a>
                        </div>

                        <div className="contact-item">
                            <span>Phone</span>
                            <p>+91 94040 74754</p>
                        </div>

                        

                        <div className="contact-item">
                            <span>LinkedIn</span>
                            <a href="https://www.linkedin.com/in/aditi-giri-1b668b257/">linkedin.com/in/aditi-giri</a>
                        </div>

                        <div className="contact-item">
                            <span>GitHub</span>
                            <a href="https://github.com/aditi-giri">github.com/aditi-giri</a>
                        </div>

                    </div>
                </div>

            </div>

            <div className="footer-bar">
                © 2026 Aditi Giri
            </div>

        </section>

    )

}
import "../styles/hero.css"

export default function Hero() {

    return (

        <section className="hero">

            <div className="hero-container">

                <div className="hero-image">
                    <div className="hero-image-wrapper-wrapper">
                        <div className="hero-image-wrapper">
                            <img src="/profile1.jpeg" alt="Aditi" />
                        </div>
                    </div>
                </div>

                <div className="hero-text">

                    <div className="hero-heading-box">
                        <h1>Hi, I'm Aditi</h1>
                    </div>

                    <div className="hero-info-box">
                        <p>
                            Developer, thinker and builder. I enjoy creating meaningful
                            systems and reflecting on ideas around technology, learning
                            and growth.
                        </p>
                    </div>

                </div>

            </div>

        </section>

    )

}
export function renderHero() {
    return `
        <section
            class="hero"
            id="hero"
            aria-labelledby="hero-title"
        >

            <div class="hero__media">

                <div class="hero__image-frame">

                    <img
                        src="assets/images/profile.png"
                        alt="Portrait of Brian Mutune"
                        class="hero__image"
                    >

                </div>

            </div>

            <div class="hero__content">

                <p class="hero__eyebrow">
                    Software Developer · AI · Cloud
                </p>

                <h1
                    class="hero__title"
                    id="hero-title"
                >
                    Brian Mutune
                </h1>

                <p class="hero__description">
                    I build modern software across web, mobile,
                    artificial intelligence, and cloud technologies,
                    with a focus on practical products, clean systems,
                    and thoughtful user experiences.
                </p>

                <div class="hero__meta">

                    <span>Full Stack</span>
                    <span>AI & Machine Learning</span>
                    <span>Cloud Computing</span>
                    <span>Mobile Development</span>

                </div>

                <div class="hero__actions">

                    <a
                        href="#projects"
                        class="hero__button hero__button--primary"
                    >
                        View Projects
                    </a>

                    <a
                        href="https://docs.google.com/document/d/18M4on7thbzxYuCXUKgrEn34iGECKTGu388wHd5CzkuM/export?format=pdf"
                        class="hero__button hero__button--secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        Download CV
                    </a>

                    <a
                        href="#contact"
                        class="hero__button hero__button--secondary"
                    >
                        Get In Touch
                    </a>

                </div>

                <div class="hero__scroll">

                    <span class="hero__scroll-line"></span>

                    <p>
                        Scroll to Explore
                    </p>

                </div>

            </div>

        </section>
    `;
}
const projects = [
    {
        category: "Artificial Intelligence",
        title: "Neural Agent Modeling Engine",
        summary: "Local AI platform for language models, agents, and automation.",
        year: "2026",
        stack: "Flutter • Python • llama.cpp • Firebase",
        image: "https://res.cloudinary.com/de9qmnrmi/image/upload/v1781986268/SAS6W.jpg",
        alt: "Neural Agent Modeling Engine",
        link: "https://github.com/Neural-Agent-Modelling-Engine/"
    },
    {
        category: "IoT",
        title: "Portable Soil Laboratory",
        summary: "IoT-powered soil analysis platform for agricultural decision-making.",
        year: "2026",
        stack: "Flutter • Firebase • IoT",
        image: "https://res.cloudinary.com/de9qmnrmi/image/upload/v1782773700/IAE2W.jpg",
        alt: "Portable Soil Laboratory",
        link: "https://github.com/Portable-Soil-Laboratory/"
    },
    {
        category: "Full Stack",
        title: "Bornelabs Community Page",
        summary: "Bornelabs Official Community Page.",
        year: "2026",
        stack: "Next.js • TypeScript • PostgreSQL • TailwindCSS",
        image: "https://res.cloudinary.com/de9qmnrmi/image/upload/v1767865169/BornelabsWallpaper.jpg",
        alt: "Bornelabs Community Page",
        link: "https://www.bornelabs.org/"
    }
];

function createProjectCard(project, index) {
    return `
        <article class="project">

            <a
                href="${project.link}"
                class="project__image"
                aria-label="View ${project.title}"
            >
                <img
                    src="${project.image}"
                    alt="${project.alt}"
                    loading="${index === 0 ? "eager" : "lazy"}"
                >
            </a>

            <div class="project__content">

                <div class="project__top">

                    <span class="project__category">
                        ${project.category}
                    </span>

                    <span class="project__year">
                        ${project.year}
                    </span>

                </div>

                <h3 class="project__title">
                    ${project.title}
                </h3>

                <p class="project__summary">
                    ${project.summary}
                </p>

                <div class="project__footer">

                    <span class="project__stack">
                        ${project.stack}
                    </span>

                    <a
                        href="${project.link}"
                        class="project__link"
                        aria-label="View ${project.title}"
                    >
                        View
                    </a>

                </div>

            </div>

        </article>
    `;
}

export function renderProjects() {
    return `
        <section
            class="projects"
            id="projects"
            aria-labelledby="projects-title"
        >

            <div class="projects__intro">

                <p class="projects__eyebrow">
                    Selected Work
                </p>

                <h2
                    class="projects__title"
                    id="projects-title"
                >
                    Projects built across AI, IoT, web, and cloud.
                </h2>

            </div>

            <div class="projects__grid">

                ${projects.map(createProjectCard).join("")}

            </div>

        </section>
    `;
}
const skills = [
    {
        number: "01",
        title: "Mobile Development",
        focus: "Cross-platform applications"
    },
    {
        number: "02",
        title: "Full Stack Web Development",
        focus: "Frontend & backend applications"
    },
    {
        number: "03",
        title: "UI / UX Design",
        focus: "User-centered interface design"
    },
    {
        number: "04",
        title: "Cloud Computing",
        focus: "Cloud infrastructure & services"
    },
    {
        number: "05",
        title: "ML Model Training",
        focus: "Model development & evaluation"
    },
    {
        number: "06",
        title: "LLM Inference",
        focus: "Local & cloud AI inference"
    },
    {
        number: "07",
        title: "Linux & Shell Scripting",
        focus: "Automation & command-line tools"
    },
    {
        number: "08",
        title: "Git / GitHub",
        focus: "Version control & collaboration"
    }
];

export function renderSkills() {
    return `
        <section class="skills" id="skills" aria-labelledby="skills-title">

            <div class="skills__intro">

                <p class="skills__eyebrow">
                    Expertise
                </p>

                <h2 class="skills__title" id="skills-title">
                    Areas of expertise.
                </h2>

            </div>

            <div class="skills__table">

                <div class="skills__header">
                    <span>No.</span>
                    <span>Area</span>
                    <span>Focus</span>
                </div>

                ${skills.map(skill => `
                    <article class="skill">

                        <span class="skill__number">
                            ${skill.number}
                        </span>

                        <h3 class="skill__title">
                            ${skill.title}
                        </h3>

                        <p class="skill__focus">
                            ${skill.focus}
                        </p>

                    </article>
                `).join("")}

            </div>

        </section>
    `;
}
const experience = [
    {
        period: "2025 — Present",
        role: "Founder & Software Developer",
        organization: "BorneLabs",
        focus: "AI, mobile, web, cloud & open-source development"
    },
    {
        period: "2024 — Present",
        role: "Independent Software Developer",
        organization: "Freelance",
        focus: "Web, mobile, Linux & machine learning"
    },
    {
        period: "2023 — Present",
        role: "Open Source Contributor",
        organization: "GitHub",
        focus: "Personal projects & software engineering"
    }
];

function createExperienceRow(item, index) {
    return `
        <article class="experience__item">

            <span class="experience__number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="experience__period">
                ${item.period}
            </span>

            <div class="experience__content">

                <h3 class="experience__role">
                    ${item.role}
                </h3>

                <p class="experience__organization">
                    ${item.organization}
                </p>

            </div>

            <p class="experience__focus">
                ${item.focus}
            </p>

        </article>
    `;
}

export function renderExperience() {
    return `
        <section
            class="experience"
            id="experience"
            aria-labelledby="experience-title"
        >

            <div class="experience__intro">

                <p class="experience__eyebrow">
                    Experience
                </p>

                <h2
                    class="experience__title"
                    id="experience-title"
                >
                    Experience & professional journey.
                </h2>

            </div>

            <div class="experience__table">

                <div class="experience__header">
                    <span>No.</span>
                    <span>Period</span>
                    <span>Role</span>
                    <span>Focus</span>
                </div>

                ${experience.map(createExperienceRow).join("")}

            </div>

        </section>
    `;
}
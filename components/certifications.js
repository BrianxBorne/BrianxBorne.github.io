const education = [
    {
        period: "2023 — Present",
        qualification: "Bachelor of Science in Computer Science",
        institution: "Kenyatta University"
    }
];

const certifications = [
    {
        year: "2026",
        title: "Introduction To Generative AI",
        issuer: "Google",
        link: "https://www.skills.google/public_profiles/346d5df2-2838-4fae-b2b5-54651a5cdd16/badges/11201518?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
        year: "2024",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        link: "https://www.credly.com/badges/ae67ba3d-5e74-4348-8c84-ea81223ae341/linked_in_profile"
    },
];

function renderEducationItem(item, index) {
    return `
        <article class="education__item">

            <span class="education__number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="education__period">
                ${item.period}
            </span>

            <div class="education__content">

                <h4 class="education__qualification">
                    ${item.qualification}
                </h4>

                <p class="education__institution">
                    ${item.institution}
                </p>

            </div>

        </article>
    `;
}

function renderCertificationItem(item, index) {
    return `
        <article class="certification">

            <span class="certification__number">
                ${String(index + 1).padStart(2, "0")}
            </span>

            <span class="certification__year">
                ${item.year}
            </span>

            <div class="certification__content">

                <h4 class="certification__title">
                    <a
                        href="${item.link}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ${item.title}
                    </a>
                </h4>

                <p class="certification__issuer">
                    ${item.issuer}
                </p>

            </div>

        </article>
    `;
}

export function renderCertifications() {
    return `
        <section
            class="credentials"
            id="certifications"
            aria-labelledby="credentials-title"
        >

            <div class="credentials__intro">

                <p class="credentials__eyebrow">
                    Education & Certifications
                </p>

                <h2
                    class="credentials__title"
                    id="credentials-title"
                >
                    Education and professional credentials.
                </h2>

            </div>

            <div class="credentials__section">

                <h3 class="credentials__heading">
                    Education
                </h3>

                <div class="education">

                    <div class="education__header">
                        <span>No.</span>
                        <span>Period</span>
                        <span>Qualification</span>
                    </div>

                    ${education.map(renderEducationItem).join("")}

                </div>

            </div>

            <div class="credentials__section">

                <h3 class="credentials__heading">
                    Certifications
                </h3>

                <div class="certifications">

                    <div class="certifications__header">
                        <span>No.</span>
                        <span>Year</span>
                        <span>Certification</span>
                    </div>

                    ${certifications.map(renderCertificationItem).join("")}

                </div>

            </div>

        </section>
    `;
}
const contact = {
    title: "Let's build something meaningful together.",
    description:
        "Have a project, idea, or collaboration in mind? Let's talk.",

    email: "brianxborne@gmail.com",
    github: "https://github.com/BrianxBorne",
    linkedin: "https://www.linkedin.com/in/brian-mutune/",
    location: "Nairobi, Kenya"
};

const links = [
    {
        label: "Email",
        value: contact.email,
        href: `mailto:${contact.email}`
    },
    {
        label: "GitHub",
        value: "@BrianxBorne",
        href: contact.github
    },
    {
        label: "LinkedIn",
        value: "Brian Mutune",
        href: contact.linkedin
    },
    {
        label: "Location",
        value: contact.location,
        href: null
    }
];

function renderContactItem(link, index) {
    const number = String(index + 1).padStart(2, "0");

    if (link.href) {
        return `
            <article class="contact__item">

                <span class="contact__number">
                    ${number}
                </span>

                <span class="contact__label">
                    ${link.label}
                </span>

                <a
                    href="${link.href}"
                    class="contact__value"
                    ${link.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}
                >
                    ${link.value}
                </a>

            </article>
        `;
    }

    return `
        <article class="contact__item">

            <span class="contact__number">
                ${number}
            </span>

            <span class="contact__label">
                ${link.label}
            </span>

            <span class="contact__value">
                ${link.value}
            </span>

        </article>
    `;
}

export function renderContact() {
    return `
        <section
            class="contact"
            id="contact"
            aria-labelledby="contact-title"
        >

            <div class="contact__intro">

                <p class="contact__eyebrow">
                    Contact
                </p>

                <h2
                    class="contact__title"
                    id="contact-title"
                >
                    ${contact.title}
                </h2>

                <p class="contact__description">
                    ${contact.description}
                </p>

                <a
                    href="mailto:${contact.email}"
                    class="contact__button"
                >
                    Get In Touch
                </a>

            </div>

            <div class="contact__details">

                <div class="contact__header">
                    <span>No.</span>
                    <span>Contact</span>
                    <span>Details</span>
                </div>

                ${links.map(renderContactItem).join("")}

            </div>

            <footer class="footer">

                <p>
                    © ${new Date().getFullYear()} brianxborne.
                    Designed & developed by Brian Mutune.
                </p>

            </footer>

        </section>
    `;
}
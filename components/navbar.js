export function renderNavbar() {
    return `
        <nav
            class="navbar"
            aria-label="Primary Navigation"
        >

            <a
                href="#hero"
                class="navbar__brand"
                aria-label="Brian Mutune Home"
            >
                <img
                    src="favicon.ico"
                    alt="Brian Mutune"
                    class="navbar__logo"
                >
            </a>

            <button
                class="navbar__toggle"
                id="navbarToggle"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navbarMenu"
                type="button"
            >
                <span></span>
                <span></span>
            </button>

            <ul
                class="navbar__menu"
                id="navbarMenu"
            >

                <li>
                    <a href="#skills">
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#projects">
                        Work
                    </a>
                </li>

                <li>
                    <a href="#experience">
                        Experience
                    </a>
                </li>

                <li>
                    <a href="#certifications">
                        Credentials
                    </a>
                </li>

                <li>
                    <a
                        href="#contact"
                        class="navbar__button"
                    >
                        Contact
                    </a>
                </li>

            </ul>

        </nav>
    `;
}
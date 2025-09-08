import { MailIcon } from "../ui/Icons";

export function Contact() {
    return (
        <section id="contact" className="py-20 text-center">
            <div className="container mx-auto max-w-4xl px-6 lg:px-0">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                    Let's build something great together!
                </h2>
                <p className="mb-8 text-gray-600">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>
                <a
                    href="mailto:alditositompul198@gmail.com"
                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                    <MailIcon />
                    alditositompul198@gmail.com
                </a>
            </div>
        </section>
    );
}
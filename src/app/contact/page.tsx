'use client'

import { ContactForm } from "./components/contact-form"
import { ContactHero } from "./components/contact-hero"
import { ContactInfo } from "./components/contact-info"
import { ContactMap } from "./components/contact-map"

export default function ContactPage() {
    return (
        <main className="pt-24">
            <ContactHero />

            <section className="px-6 md:px-12 py-24 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>

            <ContactMap />
        </main>
    )
}
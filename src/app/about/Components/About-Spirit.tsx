'use client'

import { motion } from "motion/react"

export function AboutSpirit() {
    return (
        <section className="bg-surface-container-low py-32 rounded-xl mx-4 md:mx-12 mb-32">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.span
                    className="font-label uppercase tracking-[0.3em] text-xs text-primary mb-6 block"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Our Vision
                </motion.span>
                <motion.h2
                    className="text-4xl md:text-5xl font-headline text-foreground mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Dny Deco Furniture Jepara
                </motion.h2>

                <motion.div
                    className="space-y-8 text-xl text-muted-foreground leading-loose font-light italic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ex voluptates neque molestiae!
                    </p>
                </motion.div>

                <div className="mt-16 flex justify-center">
                    <div className="h-1 w-24 bg-outline-variant/30"></div>
                </div>
            </div>
        </section>
    )
}
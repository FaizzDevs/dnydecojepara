'use client'

import { Card, CardContent } from "@/Components/ui/card"
import { motion } from "motion/react"

const timeline = [
    {
        year: 2012,
        title: ' Lorem, ipsum dolor.',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum cum accusamus voluptatibus hic.'
    },
    {
        year: 2015,
        title: 'Lorem, ipsum.',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi deserunt esse totam sit.',
    },
    {
        year: 2019,
        title: ' Lorem, ipsum dolor.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at animi ipsa optio.'
    },
    {
        year: 2024,
        title: 'Lorem ipsum dolor sit.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste maxime mollitia, voluptas iusto itaque nisi!'
    }
]

export function AboutTimeline() {
    return (
        <section className="px-6 md:px-12 mb-32">
            <div className="mb-16">
                <h2 className="text-3xl font-headline text-primary">The Journey</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                    <motion.div
                        key={item.year}
                        className={`group ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-surface-container border-none rounded-xl hover:scale-[1.02] transition-all hover:shadow-lg cursor-default relative overflow-hidden">
                            <CardContent className="p-10">
                                <span className="text-muted-foreground/30 font-headline text-6xl absolute top-4 right-6 opacity-40 group-hover:text-primary transition-colors">
                                    {item.year}
                                </span>
                                <h3 className="text-xl font-bold mb-4 mt-8">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
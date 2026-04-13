'use client'

import { Button } from "@/Components/ui/button"
import { ShoppingBag } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function AboutCta() {
    return (
        <section className="px-6 md:px-12 mb-32">
            <div className="relative h-125 md:h-150 rounded-xl overflow-hidden flex items-center justify-center text-center p-6">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src='https://lh3.googleusercontent.com/aida-public/AB6AXuCruqe_PUEqDbLZ7rQ6tbs-lmOGotHhAfbMJjtW3qCrHFJ3HG6WnTukf85gPQjLxWgWBackE826cbEmtKdG4wgcRyfdC85AIp9p3EMGisUzK_jVY8HxxxUuhc9fWlVbB0FvFgxnA0Pwi-H0V9y6sgNhBllG_8Hu8heSF26aReQt6ypl7YqKjXiwHGMcovmvsiiXfgssxtL2y3cT8drUPV_ExcUf34W0Kmf2sA33LIoFOtuR0c1cyDWIXVc0kZlSS0R6FkhZTjtF2_E'
                        alt="Interior Design"
                        fill
                        className="object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-stone-900/40" />
                </div>

                <div className="relative z-10 max-w-2xl text-white">
                    <motion.h2
                        className="text-4xl md:text-5xl font-headline mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Ready to curate your living?
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-left mb-12 font-light"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi impedit dolore libero doloribus!
                    </motion.p>
                    
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button 
                            asChild
                            size='lg'
                            className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-6"
                        >
                            <Link href="/products">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Shop the Collection
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant='outline'
                            size='lg'
                            className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 rounded-full px-10 py-6"
                        >
                            <Link href='/about#process'>
                                Our Process
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
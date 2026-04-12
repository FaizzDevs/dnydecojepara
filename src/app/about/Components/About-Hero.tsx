'use client'

import { Card, CardContent } from "@/Components/ui/card"
import { motion } from "motion/react"
import Image from "next/image"

export function AboutHero() {
    return (
        <section className="pt-32 px-6 md:px-12 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-7">
                    <motion.h1
                        className="text-6xl md:text-8xl font-headline leading-tight text-primary mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Crafting the <br />
                        <span className="italic">Atmosphere</span>
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, ratione?,
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam maiores non! Officiis, quibusdam.
                    </motion.p>
                </div>

                <motion.div
                    className="md:col-span-5 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="relative w-full h-125">
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBWnDXmPkgAt1Zn6uUZ5nAskZ0S-hQTiG999SvlVyHqjaRQE28eT4EJr53eNgFsVGduO2-MdoSNzN6H5QeQXezkBBEQraiadm9ownAONyukv6v6ruQYDW5Kus-fGmSQGUfKBUn3YdWbBdzZNW842GkQtZmqXJyetbnJHmoHsX1avsF1GovdvqNE3ToirPPG_r2mpps1cjYi-6lc7w7wm1iY0ykN2ocAzI3aPIBK_WCNR2cdlgB5VtDqpneuib8tFgC5luq3iM0Wlg"
                            alt="Workshop Atmosphere"
                            fill
                            className="rounded-xl object-cover shadow-2xl"
                        />
                    </div>

                    <Card className="absolute -bottom-8 -left-8 bg-tertiary text-white border-none rounded-xl hidden md:block shadow-xl">
                        <CardContent className="p-8">
                            <p className="font-headline italic text-2xl">
                                "Wood has a memory"
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
'use client'

import { Avatar, AvatarImage } from "@/Components/ui/avatar"
import { motion } from "motion/react"

export function AboutFounders() {
    return (
        <section className="px-6 md:px-12 mb-32 bg-surface py-24 border-t border-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <motion.div
                        className="order-2 md:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-headline text-foreground mb-8">The Faces of Dny Deco Furniture</h2>
                        <p className="text-muted-foreground leading-relaxed mb-12 italic">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eos similique, voluptate odit eaque impedit neque.
                        </p>

                        <div className="flex gap-12">
                            <div>
                                <h4 className="font-bold text-lg">Luthfiana Dini L</h4>
                                <p className="text-sm text-muted-foreground">Founder</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">Muhammad Faizz</h4>
                                <p className="text-sm text-muted-foreground">Programmer</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="order-1 md:order-2 flex justify-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-full max-w-md">
                            <Avatar className="w-full h-auto aspect-square rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                                <AvatarImage 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYWfqvqFwXo01_qJBp0AtjQVWSRTuQhCHhJBOdd0DbQ8fSWHkZMcW3GmKB2kiCi_00qn4f_bBn0-Z3Coef-Au16Bi82Abod8SyJsXJtmQ98eGAWrgEZzhuFTq6CQKRkPfOcXnB89tLdL1f2lyDP-SSl2pDEHV2TytmAbdbj0I4NDDWHC7EwNkP_6OIBQVDQ9JL-LhQ7i9WeIzg8Tz8Gx6He0QHKuwpn8hOyrCT-bnDgdSfMgjxXtWu4uCBMgElwiyCgCo4InRJUnE"
                                    alt="Founders"
                                />
                            </Avatar>

                            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-primary rounded-full animate-pulse opacity-20" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
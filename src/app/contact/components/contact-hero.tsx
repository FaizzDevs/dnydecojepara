'use client'

import { motion } from "motion/react"

export function ContactHero() {
    return (
        <section className="relative h-125 md:h-150 flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr9snku5FZoHse77vxkHeawl2MVZQc9Aq7yjm3_7sVH6INYXIYaOhBAX-JRKnMlegd0AlmlHK0pyNlXtYo_I8eEOL3IwdG2yDhN077u16-Cx6XpycQ2XIHhSNfZHpXABeEJVfaCXGMQlIi2PEZfT6-afhALkM6VBRdThauxXWeF7zwrZdAK-_a3UcFbj5vJsYrv9sJzM4NJIaT-1S5_j3HCPTrFsM91tX0o6Cru4VYLR9iEx7qGYf8-Bdp2-J_u6SUh71Xx3vMjv4" 
                    alt="Minimalist sun-drenched living room" 
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-10" />  
                
            </div>
            
            <div className="relative z-30 px-6 md:px-12 max-w-4xl">
                <motion.h1
                    className="font-headline text-6xl md:text-8xl text-primary leading-tight tracking-tight italic"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Let's Create Your <br /> Perfect Space
                </motion.h1>
                <motion.p
                    className="mt-6 text-xl text-muted-foreground max-w-lg font-light leare"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis aliquam a quo rem blanditiis doloremque incidunt recusandae vitae fuga?
                </motion.p>
            </div>
        </section>
    )
}
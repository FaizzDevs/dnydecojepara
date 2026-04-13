'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { Wrench } from 'lucide-react'

export function AboutWorkshop() {
    return (
        <section className="px-6 md:px-12 mb-32 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-200">
                <motion.div
                    className="md:col-span-8 relative rounded-xl overflow-hidden group h-100 md:h-full"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Image 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF4lcktbZ0wGNj3BVW3G5yLI11rlTQhPEosTLfBS0vB03_5VabvXb1cBxL5i92Orwbmyxjv4iqZpHddJoT7HkLErCQFTQFGEEDUetFNB28R7ObvR3a7aqmo7ybXJrW5IfjIzzMJg-Kwwzvh_xLbIvnIhQqTcW6v6AfEWwpfRuMtQP-S7vFgdMXzb5Mxji9V7roiwDR1qgMXI4ITbp30txKt4bFvQlSxrzwJQOqvp6iBWwiCwEQiZVMigHz0_c11StxUujL0-VPvAg"
                        alt="Wood Texture"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute bottom-12 left-12 text-white">
                        <span className="font-label uppercase tracking-widest text-xs">The Raw Material</span>
                        <h4 className="text-3xl font-headline mt-2">Sourced with Integrity</h4>
                    </div>
                </motion.div>

                <div className="md:col-span-4 grid grid-rows-2 gap-6">
                    <motion.div
                        className="bg-surface-container rounded-xl flex flex-col justify-center p-12"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Wrench className="text-primary w-12 h-12 mb-6" />
                        <h4 className="text-2xl font-headline mb-4">Precision in Hands</h4>
                        <p className="text-muted-foreground text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo consequuntur dolor aliquid vero.
                        </p>
                    </motion.div>

                    <motion.div
                        className="rounded-xl overflow-hidden relative group h-50 md:h-full"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Image 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuADjrjWLC33wUR7JrNf5hkmy5Pu0AjI7nadkc7Stagx1qn2Lta5Z7Jm347TvS4Y2VpwVkYWwdsEsCgrLSvAY14nGozhcYzbWQk9-FM7T7iS6h5Nazg36mM41Sxvax8hftP-Ku-aXlTX81_TWQAqaGp16jwDBPzTX4RzPkXj2g_mr2DcimhEBncCSdYoWIFrkSlwDdfS2noexaz02PGYDza-7UPI9Jn5254EVVnnl5v0LgXIMAuYMYPrcMzJTS-bfn64GtC6Mvvy-wg"
                            alt="Tools of the trade"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
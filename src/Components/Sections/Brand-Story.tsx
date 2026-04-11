'use client'

import { motion } from "motion/react"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

export function BrandStory() {
    return (
        <section className="mt-32 mb-32 grid grid-cols-1 md:grid-cols-2 min-h-204.75 items-center">
            <motion.div
                className="relative h-full min-h-125"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRPfvAv6yuPTiNUXiAz5f3w4EqySpwxiDciWEXe8S_qJnChoXtTjxBzYDUl0F1tXLScaz2-597AVji7yyeZaipNrC9vI39L21iGCMsi-LF8wCF1MWgHGsmdxnGXKRIa01kEYX1rAEw-809TRG0pl5Qw4JOrGFv1okhOsUAJK3Mdpqpw_RdAFGfsPrEEConbVLQaBwSnYk45L654Mleoq3Oc3kt-jZVhSCDpy1ksJutj_PstpSVhaLJAWlSg9z1YVkHpRhPvIPDac0"
                    alt="Craftsmanship"
                    fill
                    className="object-cover rounded-r-xl"
                />

                <Card className="absolute bottom-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 max-w-xs hidden lg:block shadow-none">
                    <CardContent className="p-8">
                        <p className="text-white text-sm font-medium italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga perspiciatis animi incidunt maxime et.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                className="p-12 md:p-24"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-tertiary font-bold tracking-widest uppercase text-sm">
                    Our Philosophy
                </span>
                <h2 className="text-4xl md:text-6xl font-headline mt-6 mb-10 leading-tight">
                    The Art of <br />
                    <span className="italic">Craft</span>
                </h2>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure temporibus pariatur id exercitationem. Aspernatur omnis dignissimos perspiciatis, debitis culpa cumque blanditiis, commodi natus illo voluptatem repudiandae dolorem, tempore eveniet. Placeat!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa officiis aliquid placeat enim cumque velit cupiditate totam eius molestias laborum!
                    </p>
                </div>

                <div className="mt-12">
                    <Button
                        variant='link'
                        className="border-b-2 cursor-pointer border-primary text-primary font-bold pb-2 hover:opacity-70 transition-opacity"
                    >
                        Discover Our Process
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}
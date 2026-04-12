'use client'

import Image from "next/image"
import { motion } from "motion/react"
import { Button } from "@/Components/ui/button"
import Link from "next/link"
import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react"
import { FeaturedProducts } from "@/Components/Sections/Featured-Products"
import { BrandStory } from "@/Components/Sections/Brand-Story"
import { Testimonials } from "@/Components/Sections/Testimonials"
import { Card } from "@/Components/ui/card"

export default function HomePage() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/gambar1.jpeg"
                        alt="Luxurious modern living room"
                        fill
                        className="object-cover scale-105"
                        priority
                    />

                    <div className="absolute inset-0 bg-stone-900/20"></div>
                </div>

                <div className="z-10 text-center px-4 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-headline text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
                    >
                        Elevating <br />
                        <span className="italic">Curated</span> Living
                    </motion.h1>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Button
                            asChild
                            size='lg'
                            className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform rounded-full px-10 py-6 text-lg"
                        >
                            <Link href='/products'>
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Shop Collection
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant='outline'
                            size='lg'
                            className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-transform rounded-full px-10 py-6 text-lg"
                        >
                            <Link href='/contact'>
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Chat via WhatsApp
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <FeaturedProducts />
            <BrandStory />
            <Testimonials />

            <section className="py-32 px-6 md:px-12 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Card className="bg-surface-container-highest border-none rounded-xl p-12 min-h-100 flex flex-col items-start justify-between">
                            <div>
                                <MessageCircle className="text-primary w-12 h-12 mb-6" />
                                <h3 className="text-3xl font-headline mb-4">
                                    Talk to out Experts
                                </h3>
                                <p className="text-muted-foreground max-w-sm mb-8">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime amet eligendi, fugiat officia sint laudantium odio aliquam alias nesciunt?
                                </p>
                            </div>

                            <Button className="bg-[#25D366] text-white hover:bg-[#25D366]/90 rounded-full px-8 py-6">
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp Consulting
                            </Button>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group hover:-translate-y-2 transition-transform duration-500"
                    >
                        <Card className="bg-stone-900 text-white border-none rounded-xl p-12 min-h-100 flex flex-col items-start justify-between">
                            <div>
                                <ShoppingBag className="text-primary-fixed-dim w-12 h-12 mb-6" />
                                <h3 className="text-3xl font-headline mb-4">
                                    Visit our Shopee Store
                                </h3>
                                <p className="text-stone-400 max-w-sm mb-8">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id accusantium quod hic.
                                </p>
                            </div>

                            <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Show Now on Shopee
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
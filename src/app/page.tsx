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
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Y52vbDAXFdacMmeuCAb0sTfP_Cs1D6M9Sn61anDOrjhHIJGq3aK2eH8v53xP2Z2bDRqntG5hFlj2eW_CEIPzqXneOrEg5IQUOsxQibgCqiv4rPGgsnrKhN9eq0EQ9LXuWqPD5r_capj-YgGfnc6G4GN3GOuDh2XhxHUHhqt6wRePJmbNDLFapFtg22LH0NJ9EFYy-KWGWeh8LPK0Hu7774HF8pspBv2wVfEBGnFQbT2ooEdRY-pyv36oX-L5HsWF20vICqJY1ks"
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
                    <div>
                        <Card>
                            <div>
                                <MessageCircle />
                                <h3>
                                    Talk to out Experts
                                </h3>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime amet eligendi, fugiat officia sint laudantium odio aliquam alias nesciunt?
                                </p>
                            </div>

                            <Button>
                                <MessageCircle />
                                WhatsApp Consulting
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
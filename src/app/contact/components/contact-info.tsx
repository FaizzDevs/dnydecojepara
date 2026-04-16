'use client'

import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import { ArrowRight, Clock, MapPin, MessageCircle, Share2, Link as LinkIcon } from "lucide-react"
import { motion } from "motion/react"
import { FaInstagram } from "react-icons/fa"

export function ContactInfo() {
    const handleWhatsApp = () => {
        window.open('https://wa.me/', '_blank')
    }

    return (
        <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="bg-secondary-container border-none rounded-xl overflow-hidden cursor-pointer hover:bg-secondary-container/80 transition-all group">
                <CardContent className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary">
                            <MessageCircle className="w-8 h-8" />
                        </div>

                        <div>
                            <h3 className="font-headline text-xl text-foreground">
                                Chat with us
                            </h3>
                        </div>
                    </div>

                    <ArrowRight className="text-muted-foreground group-hover:translate-x-2 transition-transform" />
                </CardContent>
            </Card>

            <Card className="bg-surface-container-low border-none rounded-xl">
                <CardContent className="p-10">
                    <h3 className="font-headline text-2xl text-primary mb-6">
                        Our Showroom
                    </h3>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <MapPin className="text-primary w-6 h-6 shrink-0" />

                            <div>
                                <p className="font-semibold text-foreground">Langon, Tahunan</p>
                                <p className="text-muted-foreground text-sm">Jl. Berkah abadi nan jaya</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Clock className="text-primary w-6 h-6 shrink-0" />

                            <div>
                                <p className="font-semibold text-foreground">Every Day</p>
                                <p className="text-muted-foreground text-sm mt-1 italic">Private viewings available upon request</p>
                            </div>
                        </div>

                        <div className="pt-6 flex gap-6">
                            <Button
                                variant='outline'
                                size='icon'
                                className="rounded-full cursor-pointer w-12 h-12 bg-surface-container-high border-none hover:bg-primary hover:text-white transition-all"
                            >
                                <FaInstagram className="w-5 h-5" />
                            </Button>
                            <Button
                                variant='outline'
                                size='icon'
                                className="rounded-full cursor-pointer w-12 h-12 bg-surface-container-high border-none hover:bg-primary hover:text-white transition-all"
                            >
                                <Share2 className="w-5 h-5" />
                            </Button>
                            <Button
                                variant='outline'
                                size='icon'
                                className="rounded-full cursor-pointer w-12 h-12 bg-surface-container-high border-none hover:bg-primary hover:text-white transition-all"
                            >
                                <LinkIcon className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </motion.div>
    )
}
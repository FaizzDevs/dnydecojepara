'use client'

import { Quote } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"

const testimonials = [
    {
        id: '1',
        name: 'Muhammad Faiz Al Izza',
        role: 'Senior Interior Architect, NY',
        content: 'The texture of the Cloud Lounge is unlike anything I\'ve sourced for my clients. It brings an immediate sense of tactile luxury and grounding to any room.',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLpt6J3lI37d3flPdFS_0j7uPpj6aNd-4R1UVHJfptaIcCQ_UxHkRZp_0146h0nVsY8vIu_KtUnupI7OByjb744Q1v3aMnLsiusAxlyN6KOM_g5KLgL0SezjzIRlS1KHfg5rj-FKyN3K9YyA0seNtLT_DVpWxZaivfo5rW1nxg1ThZFrfUbr3Bno-TAxL8iUlAYjh57yKHilcQeAdgzAhTNqHWVb_CJN1Jvjy8IQaxkbE9eRUVg2tDQu2HzMlJs7huy_598DAj8Ic',
    },
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <section className="py-32 bg-surface-container-low px-6">
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex justify-center mb-12">
                    <Quote className="text-muted-foreground/30 w-16 h-16" />
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card className="bg-transparent border-none shadow-none">
                                <CardContent className="p-0">
                                    <p className=" text-2xl font-headline italic text-foreground leading-snug mb-12">
                                        {testimonials[currentIndex].content}
                                    </p>

                                    <div className="flex flex-col items-center">
                                        <Avatar className="w-16 h-16 mb-4 border-2 border-primary/20">
                                            <AvatarImage 
                                                src={testimonials[currentIndex].avatar}
                                                alt={testimonials[currentIndex].name}
                                            />
                                        </Avatar>

                                        <h4 className="font-bold text-lg">
                                                {testimonials[currentIndex].name}
                                        </h4>
                                        <p className="text-muted-foreground text-sm uppercase tracking-widest">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="mt-20 flex justify-center gap-2">
                    {testimonials.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex ? 'w-8 bg-tertiary' : 'bg-muted-foreground/30'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
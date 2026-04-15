'use client'

import React, { useState } from "react"
import { Product } from "../data/Products-Data"
import { useCartStore } from "@/Store/Cart-Store"
import { motion } from "motion/react"
import { Card, CardContent } from "@/Components/ui/card"
import Image from "next/image"
import { Button } from "@/Components/ui/button"
import { MessageCircle, ShoppingBag } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
    product: Product
    index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        addItem({
            ...product,
            images: [product.image],
            materials: '',
            dimensions: '',
            origin: '',
            inStock: true
        })
    }

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        window.open('https://wa.me/', '_blank')
    }

    return (
        <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            
        >
            <Link
                href={`/products/${product.id}`}
            >
                <Card 
                    className="bg-surface-container-low border-none rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="aspect-4/5 relative overflow-hidden">
                        <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <motion.div
                            className="absolute inset-0 bg-primary/40 backdrop-blur-sm flex flex-col justify-end p-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex flex-col gap-3">
                                <Button
                                    className="w-full bg-white text-primary cursor-pointer hover:bg-white/90 rounded-full py-6 gap-2"
                                    // onClick={handleAddToCart}
                                >
                                    <ShoppingBag className="w-4 h-4" />
                                    Buy on Shopee
                                </Button>
                                <Button
                                    className="w-full bg-white cursor-pointer text-primary hover:bg-white/90 rounded-full py-6 gap-2"
                                    onClick={handleWhatsApp}
                                >
                                    <MessageCircle />
                                    Chat via Whatsapp
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="font-headline text-2xl text-foreground">
                                    {product.name}
                                </h3>
                                <p className="font-label text-sm text-secondary tracking-wide uppercase mt-1">
                                    {product.category}
                                </p>
                            </div>

                            <span className="font-label font-bold text-primary text-lg">
                                Rp.{product.price.toLocaleString()}
                            </span>
                        </div>

                        <p className="text-muted-foreground text-sm line-clamp-2">
                            {product.description}
                        </p>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}
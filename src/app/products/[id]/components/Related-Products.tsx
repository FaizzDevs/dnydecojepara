'use client'

import { Button } from "@/Components/ui/button"
import { Card, CardContent } from "@/Components/ui/card"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

interface RelatedProduct {
    id: string
    name: string
    price: number
    image: string
}

interface RelatedProductsProps {
    products: RelatedProduct[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <section className="mt-40">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-4xl md:text-5xl font-headline leading-tight text-foreground">
                    You might also love
                </h2>
                <Button variant='link' asChild className="text-primary gap-2 p-0">
                    <Link href="/products">
                        View Collection
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >
                        <Link href={`/products/${product.id}`}>
                            <Card className="bg-surface-container-low border-none rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                                <div className="aspect-4/5 overflow-hidden">
                                    <Image 
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={625}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="font-headline text-2xl mb-2 italic text-foreground">
                                        {product.name}
                                    </h3>
                                    <p className="text-primary font-bold">
                                        Rp.{product.price.toLocaleString()}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
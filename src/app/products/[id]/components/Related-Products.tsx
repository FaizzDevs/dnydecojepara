'use client'

import { motion } from "motion/react"
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
        <div>
            {products.map((product, index) => (
                <div
                    key={product.id}
                >   
                    <Link
                        href={`/products/${product.id}`}
                    >

                    </Link>
                </div>
            ))}
        </div>
    )
}
'use client'

import { ProductDetail } from "../data/Product-Data"

interface ProductInfoProps {
    product: ProductDetail
}

export function ProductInfo({ product }: ProductInfoProps) {
    return (
        <header>
            <h1 className="text-5xl md:text-6xl font-headline text-foreground leading-tight mb-4">
                {product.name}
            </h1>

            <div className="flex items-baseline gap-4 flex-wrap">
                <span className="text-3xl font-body text-primary font-bold">
                    Rp.{product.price.toLocaleString()}
                </span>

                {product.inStock && (
                    <span className="text-sm text-muted-foreground font-label uppercase tracking-widest">
                        In Stock &amp; Ready to ship
                    </span>
                )}
            </div>
        </header>
    )
}
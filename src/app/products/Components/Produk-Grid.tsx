'use client'

import { useMemo } from "react"
import { products } from "../data/Products-Data"
import { ProductCard } from "./Product-Card"
import { ProductsSkeleton } from "./Produk-Skeleton"

interface ProductsGridProps {
    activeCategory: string
    isLoading?: boolean
}

export function ProductsGrid({ activeCategory, isLoading = false }: ProductsGridProps) {
    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') return products
        return products.filter((p) => p.category === activeCategory)
    }, [activeCategory])

    if (isLoading) {
        return <ProductsSkeleton />
    }

    if (filteredProducts.length === 0) {
        return (
            <div>
                <p>
                    No products found in this category.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
            ))}
        </div>
    )
}
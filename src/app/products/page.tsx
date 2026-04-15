'use client'

import { useState, useTransition } from "react"
import { products } from "./data/Products-Data"
import { ProductsHeader } from "./Components/Products-Header"
import { ProductCard } from "./Components/Product-Card"
import { ProductsGrid } from "./Components/Produk-Grid"
import { ProductsPagination } from "./Components/Products-Pagination"

const ITEMS_PER_PAGE = 6

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const [isPending, startTransition] = useTransition()

    const handleCategoryChange = (category: string) => {
        startTransition(() => {
            setActiveCategory(category)
            setCurrentPage(1)
        })
    }

    const handleLoadMore = () => {
        startTransition(() => {
            setCurrentPage((prev) => prev + 1)
        })
    }

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter((p) => p.category === activeCategory)

    const totalItems = filteredProducts.length
    const displayedProducts = filteredProducts.slice(0, currentPage * ITEMS_PER_PAGE)

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <ProductsHeader 
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
            />

            <ProductsGrid 
                activeCategory={activeCategory}
                isLoading={isPending}
            />

            <ProductsPagination 
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                onLoadMore={handleLoadMore}
            />
        </main>
    )
}
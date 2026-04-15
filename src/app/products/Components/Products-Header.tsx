'use client'

import { cn } from "@/lib/utils"
import { categories } from "../data/Products-Data"

interface ProductsHeaderProps {
    activeCategory: string
    onCategoryChange: (category: string) => void
}

export function ProductsHeader({ activeCategory, onCategoryChange }: ProductsHeaderProps) {
    return (
        <header className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <span className="font-label text-sm uppercase tracking-widest text-primary font-bold mb-2 block">
                        Our Collection
                    </span>
                    <h1 className="font-headline text-5xl md:text-7xl text-foreground tracking-tight">
                        The Modern <span className="italic">Archive.</span>
                    </h1>
                </div>

                <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={cn(
                                'px-6 py-2 rounded-full font-label text-sm whitespace-nowrap transition-all duration-300',
                                activeCategory === category
                                    ? 'bg-primary text-white shadow-md'
                                    : 'bg-surface-container-highest text-muted-foreground hover:bg-secondary-container hover:text-foreground'
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}
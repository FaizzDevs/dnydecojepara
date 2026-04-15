'use client'

import { Button } from "@/Components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductsPaginationProps {
    currentPage: number
    totalItems: number
    itemsPerPage: number
    onLoadMore: () => void
}

export function ProductsPagination({
    currentPage,
    totalItems,
    itemsPerPage,
    onLoadMore
}: ProductsPaginationProps) {
    const showingCount = Math.min(currentPage * itemsPerPage, totalItems)
    const hasMore = showingCount < totalItems

    return (
        <div className="mt-20 flex flex-col items-center gap-6">
            {hasMore && (
                <Button
                    onClick={onLoadMore}
                    variant="outline"
                    className="group px-12 py-6 bg-surface-container-highest text-foreground hover:bg-secondary-container rounded-full text-sm gap-4 transition-all hover:px-16 cursor-pointer"
                >
                    Explore More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
            )}

            <div className="w-full max-w-xs">
                <div className="h-0.5 bg-outline-variant/30 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-tertiary transition-all duration-500"
                        style={{ width: `${(showingCount / totalItems) * 100}%` }}
                    />
                </div>
            </div>

            <p className="font-label text-xs tracking-tighter">
                Showing {showingCount} of {totalItems} pieces
            </p>
        </div>
    )
}
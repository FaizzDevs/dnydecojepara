'use client'

import { useCartStore } from "@/Store/Cart-Store"
import { ProductDetail } from "../data/Product-Data"
import { Button } from "@/Components/ui/button"
import { MessageCircle, ShoppingBag } from "lucide-react"

interface ProductActionsProps {
    product: ProductDetail
}

export function ProductActions({ product }: ProductActionsProps) {
    const addItem = useCartStore((state) => state.addItem)

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            category: product.subcategory,
            price: product.price,
            description: product.description,
            images: [product.mainImage],
            materials: product.material,
            dimensions: product.dimensions,
            origin: product.origin,
            inStock: product.inStock
        })
    }

    const handleWhatsApp = () => {
        window.open('https://wa.me/', '_blank')
    }

    return (
        <div className="flex flex-col gap-4 mt-4">
            <Button
                size='lg'
                className="bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg gap-3 shadow-xl shadow-primary/20 cursor-pointer"
            >
                <ShoppingBag className="w-5 h-5" />
                Buy on Shopee
            </Button>
            <Button
                variant='outline'
                size='lg'
                className="bg-secondary-container text-primary border-none hover:bg-secondary-container/80 rounded-full py-6 text-lg gap-3 cursor-pointer"
            >
                <MessageCircle className="w-5 h-5" />
                Chat via WhatsApp
            </Button>
        </div>
    )
}
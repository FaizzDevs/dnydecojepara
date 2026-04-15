'use client'

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"

interface ProductImageGalleryProps {
    mainImage: string
    galleryImages: string[]
    productName: string
}

export function ProductImageGallery({ mainImage, galleryImages, productName }: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(mainImage)

    return (
        <div className="flex flex-col-reverse md:flex-row gap-6">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar">
                {[mainImage, ...galleryImages].map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                            'w-20 h-24 md:w-24 md:h-32 shrink-0 rounded-lg overflow-hidden transition-all duration-300',
                                selectedImage === image
                                    ? 'ring-2 ring-primary ring-offset-2'
                                    : 'opacity-60 hover:opacity-100'
                        )}
                    >
                        <Image 
                            src={image}
                            alt={`${productName} view ${index + 1}`}
                            width={96}
                            height={128}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            <div className="flex-1 relative group overflow-hidden rounded-xl bg-surface-container-low">
                <motion.div
                    className="relative w-full h-125 md:h-175"
                >  
                    <Image 
                        src={selectedImage}
                        alt={productName}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    )
}
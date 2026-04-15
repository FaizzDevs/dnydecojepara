'use client'

import { ProductDetail } from "../data/Product-Data"

interface ProductSpecsProps {
    product: ProductDetail
}

export function ProductSpecs({ product }: ProductSpecsProps) {
    return (
        <div className="p-8 bg-surface-container-low rounded-xl">
            <h3 className="font-heading text-xl mb-4 italic">
                Dny Deco Furniture Jepara
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
                {product.longDescription}
            </p>

            <div className="grid grid-cols-2 gap-y-6 pt-6 border-t border-outline-variant/20">
                {product.specifications.map((spec) => (
                    <div key={spec.label}>
                        <span className="block text-xs font-label uppercase tracking-widest text-muted-foreground/70 mb-1">
                            {spec.label}
                        </span>

                        <span className="font-bold text-foreground">
                            {spec.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
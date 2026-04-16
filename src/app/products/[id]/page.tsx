import { notFound } from "next/navigation"
import { productData, relatedProducts } from "./data/Product-Data"
import { ProductImageGallery } from "./components/Product-Image-Gallery"
import { ProductInfo } from "./components/Product-Info"
import { ProductSpecs } from "./components/Product-Specs"
import { ProductBespoke } from "./components/Product-Bespoke"
import { ProductActions } from "./components/Product-Actions"
import { ProductCare } from "./components/Product-Care"
import { RelatedProducts } from "./components/Related-Products"

interface ProductDetailPageProps {
    params: {
        id: string
    }
}

function getRandomRelatedProducts(currentId: string, count: number = 3) {
    const otherProductIds = Object.keys(productData).filter(id => id !== currentId)

    const shuffled = [...otherProductIds]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const selectedIds = shuffled.slice(0, count)

    return selectedIds.map(id => {
        const product = productData[id]
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.mainImage,
            category: product.subcategory
        }
    })
}

export async function generateStaticParams() {
    return Object.keys(productData).map((id) => ({
        id: id,
    }))
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
    const { id } = await params
    const product = productData[id]

    if (!product) {
        notFound()
    }

    const relatedProducts = getRandomRelatedProducts(id, 3)

    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <nav className="mb-12 flex gap-4 text-sm text-muted-foreground font-label">
                <span className="hover:text-primary transition-colors cursor-pointer">
                    Furniture
                </span>
                <span className="opacity-30">/</span>
                <span className="hover:text-primary transition-colors cursor-pointer">
                    {product.category}
                </span>
                <span className="opacity-30">/</span>
                <span className="text-primary font-bold">
                    {product.name}
                </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-7">
                    <ProductImageGallery 
                        mainImage={product.mainImage}
                        galleryImages={product.galleryImages}
                        productName={product.name}
                    />
                </div>

                <div className="lg:col-span-5 flex flex-col gap-8">
                    <ProductInfo product={product} />
                    <ProductSpecs product={product} />
                    <ProductBespoke />
                    <ProductActions product={product} />
                    <ProductCare />
                </div>
            </div>

            <RelatedProducts products={relatedProducts} />
        </main>
    )
}
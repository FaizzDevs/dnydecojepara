'use client'

import { useCartStore } from "@/Store/Cart-Store"
import { Button } from "../ui/button"
import Link from "next/link"
import { ArrowRight, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import Image from "next/image"
import { motion } from "motion/react"

const products = [
    {
        id: '1',
        name: 'The Aurelius Sofa',
        price: '5.000.000',
        category: 'Living Room',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla veniam necessitatibus, delectus error voluptatem!',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8sc0iHMEnb0dgwwAbXmbNMKIbRMrYu0xtlZzdGsqEPJnHCa0shh1nGv_SEIOxJ24lHEhIk3AHf5WBUfrNhR6sDZZoUXKYiQ0123lkYMrvr8xIh3RPtR0EcW29Uir0A0L9CKR5Ci3163OMFOPkr7fXOizr3VmBBuV_Hz3uwhITrV0DU9UofJ58FjFbRiGDiZUqZ0vMfutc6zSsDB1aMYM_XRdK9cxmS09glE0xFa739BMgoidRHIek8QZaoJZ5U8l-SDByO1WxYL4',
        offset: false
    },
    {
        id: '2',
        name: 'The Aurelius Sofa',
        price: '5.000.000',
        category: 'Living Room',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla veniam necessitatibus, delectus error voluptatem!',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8sc0iHMEnb0dgwwAbXmbNMKIbRMrYu0xtlZzdGsqEPJnHCa0shh1nGv_SEIOxJ24lHEhIk3AHf5WBUfrNhR6sDZZoUXKYiQ0123lkYMrvr8xIh3RPtR0EcW29Uir0A0L9CKR5Ci3163OMFOPkr7fXOizr3VmBBuV_Hz3uwhITrV0DU9UofJ58FjFbRiGDiZUqZ0vMfutc6zSsDB1aMYM_XRdK9cxmS09glE0xFa739BMgoidRHIek8QZaoJZ5U8l-SDByO1WxYL4',
        offset: true
    },
    {
        id: '3',
        name: 'The Aurelius Sofa',
        price: '5.000.000',
        category: 'Living Room',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla veniam necessitatibus, delectus error voluptatem!',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8sc0iHMEnb0dgwwAbXmbNMKIbRMrYu0xtlZzdGsqEPJnHCa0shh1nGv_SEIOxJ24lHEhIk3AHf5WBUfrNhR6sDZZoUXKYiQ0123lkYMrvr8xIh3RPtR0EcW29Uir0A0L9CKR5Ci3163OMFOPkr7fXOizr3VmBBuV_Hz3uwhITrV0DU9UofJ58FjFbRiGDiZUqZ0vMfutc6zSsDB1aMYM_XRdK9cxmS09glE0xFa739BMgoidRHIek8QZaoJZ5U8l-SDByO1WxYL4',
        offset: false
    }
]

export function FeaturedProducts() {
    const addItem = useCartStore((state) => state.addItem)

    return (
        <section className="py-32 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Selection 2026</span>
                        <h2 className="text-4xl md:text-5xl font-headline mt-2">Signature Pieces</h2>
                    </div>

                    <Button
                        asChild
                        variant='link'
                        className="text-muted-foreground hover:text-primary gap-2 font-medium p-0"
                    >
                        <Link href='/products'>
                            View all pieces
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group ${product.offset ? 'md:translate-y-12' : ''}`}
                        >
                            <Card className="bg-surface-container-low border-none rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
                                <div className=" overflow-hidden ">
                                    <Image 
                                        src={product.image}
                                        alt={product.name}
                                        width={500}
                                        height={650}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-4xl px-2"
                                    />
                                </div>

                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-headline">
                                            {product.name}
                                        </h3>
                                        <span className="text-lg font-medium text-primary">
                                            Rp. {product.price.toLocaleString()}
                                        </span>
                                    </div>
                                    
                                    <p className="text-muted-foreground mb-6 text-sm">
                                        {product.description}
                                    </p>

                                    <Button
                                        className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 gap-2"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                        Buy on Shopee
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
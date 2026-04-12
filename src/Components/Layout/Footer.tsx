'use client'

import Link from "next/link"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { CreditCard, Lock, Send, Truck } from "lucide-react"

const footerLinks = {
    discover: [
        { name: 'Collections', href: '/products' },
        { name: 'Materials', href: '/about#materials' },
        { name: 'Custom Studio', href: '/contact' }
    ],
    connect: [
        { name: 'WhatsApp', href: 'https://wa.me/' },
        { name: 'Shopee', href: '#' },
        { name: 'Instagram', href: '#' }
    ],
    support: [
        { name: 'Shipping Policy', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'FAQ', href: '/faq' }
    ],
}

export function Footer() {
    return (
        <footer className="bg-stone-100 dark:bg-stone-900 w-full pt-24 pb-12 rounded-t-xl mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="col-span-1">
                    <div className="text-xl font-headline text-stone-800 dark:text-stone-200 mb-6">
                        Dny Deco & Furniture Jepara
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad libero repudiandae! Suscipit.
                    </p>
                </div>

                <div>
                    <h5 className="font-sans text-sm tracking-wide uppercase font-bold mb-6 text-foreground">
                        Discover
                    </h5>
                    <ul className="space-y-4">
                        {footerLinks.discover.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-muted-foreground text-sm uppercase tracking-wide hover:text-foreground hover:underline decoration-stone-300 underline-offset-4 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h5 className="font-sans text-sm tracking-wide uppercase font-bold mb-6 text-foreground">
                        Connect
                    </h5>
                    <ul className="space-y-4">
                        {footerLinks.connect.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-muted-foreground text-sm uppercase tracking-wide hover:text-foreground hover:underline decoration-stone-300 underline-offset-4 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h5 className="font-sans text-sm tracking-wide uppercase font-bold mb-6 text-foreground">
                        Journal
                    </h5>
                    <p className="text-muted-foreground text-sm mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>

                    <div className="relative">
                        <Input 
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-white dark:bg-stone-800 border-none rounded-full px-6 py-3 text-sm focus-visible:ring-1 focus-visible:ring-primary"
                        />

                        <Button
                            size='icon'
                            className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white hover:bg-primary/90 rounded-full w-8 h-8 p-0"
                        >
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="font-sans text-xs tracking-wide uppercase text-muted-foreground">
                    © 2026 DnyDeco. The Digital Atelier Strategy.
                </p>
                <div className="flex gap-8">
                    <CreditCard className="w-5 h-5 text-muted-foreground" />
                    <Truck className="w-5 h-5 text-muted-foreground" />
                    <Lock className="w-5 h-5 text-muted-foreground" />
                </div>
            </div>
        </footer>
    )
}
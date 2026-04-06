'use client'

import { cn } from "@/lib/utils"
import { useThemeStore } from "@/Store/Theme-Store"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, Moon, Search, Sun } from 'lucide-react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' }
]

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const { isDark, toggleTheme } = useThemeStore()

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-stone-900/70 backdrop-blur-xl border-b border-stone-200/10 shadow-sm">
            <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-full">
                <Link href='/' className="text-2xl font-serif italic tracking-widest text-primary dark:text-[#D2B48C]">
                    Dny Deco Jepara
                </Link>

                <div className="hidden md:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <Link
                            href={item.href}
                            key={item.href}
                            className={cn(
                                'text-stone-600 dark:text-stone-400 hover:text-primary dark:hover:text-[#D2B48C] transition-colors font-label text-sm tracking-wide uppercase',
                                pathname === item.href && 'text-primary dark:text-[#D2B48C] font-semibold border-b-2 border-primary'
                            )}  
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10">
                        <Search className="w-4 h-4 text-on-surface-variant" />
                        <Input 
                            type="text"
                            placeholder="Curate your space...."
                            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm ml-2 w-40 outline-none shadow-none p-0 h-auto"
                        />
                    </div>

                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={toggleTheme}
                        className='text-stone-900 dark:text-stone-50 hover:bg-transparent hover:opacity-80'
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>

                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='md:hidden text-stone-900 dark:text-stone-50'
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className='w-75 sm:w-100 p-0'>
                            <SheetHeader className="p-6 border-b">
                                <SheetTitle className='text-2xl font-serif italic text-primary'>
                                    Dny Deco Jepara
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-8 p-6">
                                {navItems.map((item) => (
                                    <SheetClose key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={cn(
                                                'py-3 px-4 rounded-lg text-stone-600 dark:text-stone-400 hover:text-primary hover:bg-surface-container-low transition-colors font-label text-sm tracking-wide uppercase',
                                                pathname === item.href && 'text-primary bg-surface-container-low font-semibold'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </SheetClose>
                                ))}

                                <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/10 mt-4">
                                    <Search className="w-4 h-4 text-on-surface-variant" />
                                    <Input 
                                        type="text"
                                        placeholder="Search..."
                                        className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm ml-2 flex-1 outline-none shadow-none p-0 h-auto"
                                    />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
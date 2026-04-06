import { useCartStore } from "@/Store/Cart-Store"
import { useThemeStore } from "@/Store/Theme-Store"
import { usePathname } from "next/navigation"
import { useState } from "react"

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
    const totalItems = useCartStore((state) => state.totalItems)

    return (
        <div>
            Ini merupakan tampilan navbar
        </div>
    )
}
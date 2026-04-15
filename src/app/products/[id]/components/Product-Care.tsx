'use client'

import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function ProductCare() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="pt-6 border-t border-border">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left group"
            >
                <span className="font-headline italic text-lg text-foreground">
                    Care &amp; Maintenance
                </span>
                <ChevronDown className={cn(
                    'w-5 h-5 text-muted-foreground transition-transform duration-300',
                    isOpen && 'rotate-180'
                )} />
            </button>
            
            {isOpen && (
                <div className="mt-4 text-muted-foreground text-sm space-y-2">
                    <p>• Clean with a soft, dry cloth</p>
                    <p>• Avoid direct sunlight to prevent fading</p>
                    <p>• Professional cleaning recommended for upholstery</p>
                    <p>• Apply wood polish every 6 months</p>
                </div>
            )}
        </div>
    )
}
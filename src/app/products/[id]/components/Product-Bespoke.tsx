'use client'

import { Palette } from "lucide-react"

export function ProductBespoke() {
    return (
        <div className="p-6 bg-surface-container-high rounded-lg flex items-start gap-4">
            <Palette className="text-primary w-6 h-6 shrink-0" />

            <div>
                <h4 className="font-bold text-sm uppercase tracking-wide mb-1 text-foreground">
                    Bespokse Options
                </h4>
                <p className="text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, fugit maiores. Deleniti, molestiae dolore!
                </p>
            </div>
        </div>
    )
}
'use client'

import { motion } from "motion/react"
import { Button } from "./button"
import { MessageCircle } from "lucide-react"

export function WhatsAppFab() {
    const handleClick = () => {
        window.open('https://wa.me/', '_blank')
    }

    return (
        <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.5 }}
        >
            <Button
                className="bg-[#25D366] cursor-pointer text-white hover:bg-[#25D366]/90 rounded-full w-14 h-14 shadow-2xl"
            >
                <MessageCircle className="w-6 h-6" />
            </Button>
        </motion.div>
    )
}
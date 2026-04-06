// store/cart-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types'

interface CartItem extends Product {
    quantity: number
}

interface CartStore {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    clearCart: () => void
    totalItems: number
    totalPrice: number
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                const items = get().items
                const existingItem = items.find((item) => item.id === product.id)
                
                if (existingItem) {
                    set({
                        items: items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    })
                } else {
                    set({ items: [...items, { ...product, quantity: 1 }] })
                }
            },

            removeItem: (productId) => {
                set({ items: get().items.filter((item) => item.id !== productId) })
            },

            updateQuantity: (productId, quantity) => {
                set({
                    items: get().items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    ),
                })
            },

            clearCart: () => set({ items: [] }),

            get totalItems() {
                return get().items.reduce((sum, item) => sum + item.quantity, 0)
            },

            get totalPrice() {
                return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0)
            },
        }),
        
        {
            name: 'cart-storage',
        }
    )
)
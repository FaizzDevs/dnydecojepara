export interface Product {
    id: string
    name: string
    category: string
    price: number
    description: string
    images: string[]
    materials: string
    dimensions: string
    origin: string
    inStock: boolean
}

export interface Testimonial {
    id: string
    name: string
    role: string
    content: string
    avatar: string
}

export interface ContactFormData {
    name: string
    email: string
    message: string
}
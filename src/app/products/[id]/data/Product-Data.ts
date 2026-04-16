export interface ProductDetail {
    id: string
    name: string
    category: string
    subcategory: string
    price: number
    description: string
    longDescription: string
    material: string
    upholstery: string
    dimensions: string
    origin: string
    inStock: boolean
    mainImage: string
    galleryImages: string[]
    specifications: {
        label: string
        value: string
    }[]
}

export const productData: Record<string, ProductDetail> = {
    '1': {
        id: '1',
        name: 'Solstice Chair',
        category: 'Furniture',
        subcategory: 'Living Room',
        price: 1240,
        description: 'Minimalist sculptural ash wood lounge chair with white linen cushions.',
        longDescription: 'Inspired by mid-century modern design, the Solstice Chair combines the warmth of ash wood with the comfort of premium linen cushions. Each piece is hand-finished in our atelier with natural oils.',
        material: 'Solid Ash Wood',
        upholstery: 'Premium Linen',
        dimensions: '72cm x 78cm x 80cm',
        origin: 'Handcrafted in Italy',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHei84MB1gTUZfoa3AOnIqA3JmNRXLvMoNlufCiYNAuVNbVp5gXjSzWS53xsIp3cDZYGL-h1jVfVdex4VUrAIje-p1DgqHlPl2YvIJqD9uuSq4ynRyyQXskEPoL5mW1Ma79v2MbXN1b_eFLoKcDn0_qin4ZMrFlM-ZYp1ydqPIxjX__F7IlwFh6ymRhTmMFqxJuGfayAKmIqgoIZXg2A-JihAmp-ifBT_N56LqQw1gbWx5S1konv_GOgVm52KZghcsYho-zyPDk',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHei84MB1gTUZfoa3AOnIqA3JmNRXLvMoNlufCiYNAuVNbVp5gXjSzWS53xsIp3cDZYGL-h1jVfVdex4VUrAIje-p1DgqHlPl2YvIJqD9uuSq4ynRyyQXskEPoL5mW1Ma79v2MbXN1b_eFLoKcDn0_qin4ZMrFlM-ZYp1ydqPIxjX__F7IlwFh6ymRhTmMFqxJuGfayAKmIqgoIZXg2A-JihAmp-ifBT_N56LqQw1gbWx5S1konv_GOgVm52KZghcsYho-zyPDk',
        ],
        specifications: [
            { label: 'Material', value: 'Solid Ash Wood' },
            { label: 'Upholstery', value: 'Premium Linen' },
            { label: 'Dimensions', value: '72cm x 78cm x 80cm' },
            { label: 'Origin', value: 'Handcrafted in Italy' },
        ],
    },
    '2': {
        id: '2',
        name: 'Aura Table',
        category: 'Furniture',
        subcategory: 'Dining',
        price: 2850,
        description: 'Large solid walnut dining table with smooth organic curved edges.',
        longDescription: 'The Aura Table celebrates the natural beauty of walnut wood with its organic curved edges and smooth matte finish. Perfect for modern dining spaces.',
        material: 'Solid Walnut',
        upholstery: 'None',
        dimensions: '200cm x 100cm x 75cm',
        origin: 'Handcrafted in Italy',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlk4Lba2Zwqi6Ee49ZB-YV75nSOGxhtcG4HqrBlkyR9RV76j2i0imJHnd3vlgfx3XnrWtwZxUq8FTmChu7mGgiX6_yzA6hQnScM7HWbTVwm_BlqcUKjJ5BeTY40UZh48lcOe5f-dFi-CL0B7y0vN2S-hDPKyhJb-QXx1Q9qOicyCQI7dFVaMAV0kYAFS10W0U9UpZSvuDrRXWv2tHpHqpYnycE8Z4TyNmWYtPmLAxSRieyNAPmykg-vkcybG1LR42fSXCHAkDukZ8',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAlk4Lba2Zwqi6Ee49ZB-YV75nSOGxhtcG4HqrBlkyR9RV76j2i0imJHnd3vlgfx3XnrWtwZxUq8FTmChu7mGgiX6_yzA6hQnScM7HWbTVwm_BlqcUKjJ5BeTY40UZh48lcOe5f-dFi-CL0B7y0vN2S-hDPKyhJb-QXx1Q9qOicyCQI7dFVaMAV0kYAFS10W0U9UpZSvuDrRXWv2tHpHqpYnycE8Z4TyNmWYtPmLAxSRieyNAPmykg-vkcybG1LR42fSXCHAkDukZ8',
        ],
        specifications: [
            { label: 'Material', value: 'Solid Walnut' },
            { label: 'Dimensions', value: '200cm x 100cm x 75cm' },
            { label: 'Origin', value: 'Handcrafted in Italy' },
        ],
    },
    '3': {
        id: '3',
        name: 'Nocturne Lamp',
        category: 'Lighting',
        subcategory: 'Decor',
        price: 450,
        description: 'Sleek tall architectural floor lamp in black matte metal.',
        longDescription: 'The Nocturne Lamp brings architectural elegance to any room with its sleek matte black finish and warm ambient lighting.',
        material: 'Matte Black Metal',
        upholstery: 'None',
        dimensions: '150cm x 30cm x 30cm',
        origin: 'Designed in Denmark',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoAT9ufyn2xMdcVgaf5obUPvaH2o7UrT7-0U5ZxTIUJrbAdlSZvHQAqlcKNBDBzXg7ZyzQJMlWP3XOHxNEi3p9jQV518-SggS6_SQCvLQt8lj7aByQhsAIT_E0Vwy2pj0NeWLWU7FAngo3V4kc-iA6XD6QgR_qZnpEc3-EikRjlpQ6wVojGwNW3Qa4MSiJKTxxNlS483KoszJcSjbHG8jGQU6Bwtm34AMPVwhqF05ROPZDvPLgnqDsrGoKt4F1dXz9eozQOc2oVzE',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCoAT9ufyn2xMdcVgaf5obUPvaH2o7UrT7-0U5ZxTIUJrbAdlSZvHQAqlcKNBDBzXg7ZyzQJMlWP3XOHxNEi3p9jQV518-SggS6_SQCvLQt8lj7aByQhsAIT_E0Vwy2pj0NeWLWU7FAngo3V4kc-iA6XD6QgR_qZnpEc3-EikRjlpQ6wVojGwNW3Qa4MSiJKTxxNlS483KoszJcSjbHG8jGQU6Bwtm34AMPVwhqF05ROPZDvPLgnqDsrGoKt4F1dXz9eozQOc2oVzE',
        ],
        specifications: [
            { label: 'Material', value: 'Matte Black Metal' },
            { label: 'Dimensions', value: '150cm x 30cm x 30cm' },
            { label: 'Origin', value: 'Designed in Denmark' },
        ],
    },
    '4': {
        id: '4',
        name: 'Ethos Desk',
        category: 'Furniture',
        subcategory: 'Workspace',
        price: 1680,
        description: 'Contemporary ergonomic home office desk crafted from natural oak.',
        longDescription: 'The Ethos Desk combines functionality with natural beauty. Crafted from premium oak with a leather inlay, this desk creates an inspiring workspace that elevates your daily routine.',
        material: 'Natural Oak',
        upholstery: 'Leather Inlay',
        dimensions: '140cm x 70cm x 75cm',
        origin: 'Handcrafted in Portugal',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKWVp73k1Www7_YHtMiDNLPy8kNirSjditjft4Qd-4q7Dm1e3GMYJs6cVEDOQTOLESqHEKyT34lftF6PrWTIHZL7UZh1qfpgNZ0h2tPvftEEIviJKUwVMTcnvsac1WqHdFnKgREFIP75MYMsAagjq45PqYrhI5dR1jo9sqB4lniB6MTxgcXFxag2ybRB7TprZ3sT6J_-Qp6GvEVoYwbJMB2z0LTcVQ7ZQXuJ-ODt1uPWALXhuM_HNEl0-RSWHa_OVyj3kU3tLeH8',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKWVp73k1Www7_YHtMiDNLPy8kNirSjditjft4Qd-4q7Dm1e3GMYJs6cVEDOQTOLESqHEKyT34lftF6PrWTIHZL7UZh1qfpgNZ0h2tPvftEEIviJKUwVMTcnvsac1WqHdFnKgREFIP75MYMsAagjq45PqYrhI5dR1jo9sqB4lniB6MTxgcXFxag2ybRB7TprZ3sT6J_-Qp6GvEVoYwbJMB2z0LTcVQ7ZQXuJ-ODt1uPWALXhuM_HNEl0-RSWHa_OVyj3kU3tLeH8',
        ],
        specifications: [
            { label: 'Material', value: 'Natural Oak' },
            { label: 'Upholstery', value: 'Leather Inlay' },
            { label: 'Dimensions', value: '140cm x 70cm x 75cm' },
            { label: 'Origin', value: 'Handcrafted in Portugal' },
        ],
    },
    '5': {
        id: '5',
        name: 'Lunar Side Table',
        category: 'Furniture',
        subcategory: 'Living Room',
        price: 420,
        description: 'Minimalist wooden coffee table with organic curved edges.',
        longDescription: 'The Lunar Side Table brings a touch of organic elegance to your living space. Its curved edges and warm oak finish make it a versatile piece for any interior.',
        material: 'Solid Oak',
        upholstery: 'None',
        dimensions: '50cm x 50cm x 45cm',
        origin: 'Handcrafted in Poland',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgs3M_nuHH_BYOXoihH5AE1RQHRLdcH0bAuhtsBnBMLcM87nKteox-7cGLOP8fo4iMjMJMmS7t4z-Sfla2oFj4jf4C2CVre-VZQ6XyVwyP48vkHeP071wauECXn3qhkLrTRFmaSXatUIGRXsTHGFrcoGRYtWzhEAwla0xNeYiZEjxKHCm8khNn5Oh6kCbWtJugRUIiIGLpXprHsoGFPppYQy5whSSjz65Q3hThI4tfOb0QqInl1OZOef4cjCF6jYIzEJzgNZDLJik',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDgs3M_nuHH_BYOXoihH5AE1RQHRLdcH0bAuhtsBnBMLcM87nKteox-7cGLOP8fo4iMjMJMmS7t4z-Sfla2oFj4jf4C2CVre-VZQ6XyVwyP48vkHeP071wauECXn3qhkLrTRFmaSXatUIGRXsTHGFrcoGRYtWzhEAwla0xNeYiZEjxKHCm8khNn5Oh6kCbWtJugRUIiIGLpXprHsoGFPppYQy5whSSjz65Q3hThI4tfOb0QqInl1OZOef4cjCF6jYIzEJzgNZDLJik',
        ],
        specifications: [
            { label: 'Material', value: 'Solid Oak' },
            { label: 'Dimensions', value: '50cm x 50cm x 45cm' },
            { label: 'Origin', value: 'Handcrafted in Poland' },
        ],
    },
    '6': {
        id: '6',
        name: 'Vessel No. 4',
        category: 'Decor',
        subcategory: 'Accessories',
        price: 215,
        description: 'Sculptural terracotta floor vase with a matte finish.',
        longDescription: 'Vessel No. 4 is a sculptural masterpiece hand-thrown by artisans. Its organic form and matte terracotta finish make it a statement piece for any minimalist interior.',
        material: 'Terracotta',
        upholstery: 'None',
        dimensions: '45cm x 30cm x 30cm',
        origin: 'Handcrafted in Mexico',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlPhXfKCYr3CkSvT77ZkUeUleV9a9AtwrA8SKO4ahM0wBlUKqBpc2vK4YLRgq1Xie9-i7ZnIoDVpAsbMHFp_3Ia41omfl9PERoGwNP3hwjPiH_OGflbL56vP87vs1nu3O5HNlZwEHfxxvOs5SNWxMG107ju-uRqz4IvgLAr6cCQj2IBlqNwMjozMs3IWHRKRnm0sCdBlQKbjdl-Z6ScV1keIcIzVDAcMtLY2cpL7_SRnD5Mbsm90q_K6Sn-ATYg1k3FqPBJ0RBf5A',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDlPhXfKCYr3CkSvT77ZkUeUleV9a9AtwrA8SKO4ahM0wBlUKqBpc2vK4YLRgq1Xie9-i7ZnIoDVpAsbMHFp_3Ia41omfl9PERoGwNP3hwjPiH_OGflbL56vP87vs1nu3O5HNlZwEHfxxvOs5SNWxMG107ju-uRqz4IvgLAr6cCQj2IBlqNwMjozMs3IWHRKRnm0sCdBlQKbjdl-Z6ScV1keIcIzVDAcMtLY2cpL7_SRnD5Mbsm90q_K6Sn-ATYg1k3FqPBJ0RBf5A',
        ],
        specifications: [
            { label: 'Material', value: 'Terracotta' },
            { label: 'Dimensions', value: '45cm x 30cm x 30cm' },
            { label: 'Origin', value: 'Handcrafted in Mexico' },
        ],
    },
    '7': {
        id: '7',
        name: 'Kanso Floor Lamp',
        category: 'Lighting',
        subcategory: 'Decor',
        price: 680,
        description: 'Contemporary floor lamp with a thin bronze stem and pleated paper shade.',
        longDescription: 'The Kanso Floor Lamp embodies Japanese simplicity with its thin bronze stem and warm pleated paper shade. It casts a soft, diffused light that creates a serene atmosphere.',
        material: 'Bronze and Paper',
        upholstery: 'None',
        dimensions: '130cm x 35cm x 35cm',
        origin: 'Designed in Japan',
        inStock: true,
        mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvVJxyaiD73qJJeDqMEVVNqjBETljlxgnWwFF3HRrkmfa1AVlPNqoP9gP8SnkWnwaEamWTZJUSQ7UQ-ShHBsoT_Q3398V742le1CO-HJRDnW7U0tlB2FEf6ka7UYR2j1smTudUuQorteZ-AdrxDDaMn6DbKO2U5BxO4raO86zxqFprVrnQNjl9ajLu13nb8AGMPmNa2xfNN1M_dHXFfNixlGYPanpj18LI5LP0YlcXFLamz-R0PdrCiZSq89gAP1NdyIyNerwJhsk',
        galleryImages: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBvVJxyaiD73qJJeDqMEVVNqjBETljlxgnWwFF3HRrkmfa1AVlPNqoP9gP8SnkWnwaEamWTZJUSQ7UQ-ShHBsoT_Q3398V742le1CO-HJRDnW7U0tlB2FEf6ka7UYR2j1smTudUuQorteZ-AdrxDDaMn6DbKO2U5BxO4raO86zxqFprVrnQNjl9ajLu13nb8AGMPmNa2xfNN1M_dHXFfNixlGYPanpj18LI5LP0YlcXFLamz-R0PdrCiZSq89gAP1NdyIyNerwJhsk',
        ],
        specifications: [
            { label: 'Material', value: 'Bronze and Paper' },
            { label: 'Dimensions', value: '130cm x 35cm x 35cm' },
            { label: 'Origin', value: 'Designed in Japan' },
        ],
    },
}

export const relatedProducts = [
    {
        id: 'lunar-side-table',
        name: 'Lunar Side Table',
        price: 420,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgs3M_nuHH_BYOXoihH5AE1RQHRLdcH0bAuhtsBnBMLcM87nKteox-7cGLOP8fo4iMjMJMmS7t4z-Sfla2oFj4jf4C2CVre-VZQ6XyVwyP48vkHeP071wauECXn3qhkLrTRFmaSXatUIGRXsTHGFrcoGRYtWzhEAwla0xNeYiZEjxKHCm8khNn5Oh6kCbWtJugRUIiIGLpXprHsoGFPppYQy5whSSjz65Q3hThI4tfOb0QqInl1OZOef4cjCF6jYIzEJzgNZDLJik',
    },
    {
        id: 'vessel-no-4',
        name: 'Vessel No. 4',
        price: 215,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlPhXfKCYr3CkSvT77ZkUeUleV9a9AtwrA8SKO4ahM0wBlUKqBpc2vK4YLRgq1Xie9-i7ZnIoDVpAsbMHFp_3Ia41omfl9PERoGwNP3hwjPiH_OGflbL56vP87vs1nu3O5HNlZwEHfxxvOs5SNWxMG107ju-uRqz4IvgLAr6cCQj2IBlqNwMjozMs3IWHRKRnm0sCdBlQKbjdl-Z6ScV1keIcIzVDAcMtLY2cpL7_SRnD5Mbsm90q_K6Sn-ATYg1k3FqPBJ0RBf5A',
    },
    {
        id: 'kanso-floor-lamp',
        name: 'Kanso Floor Lamp',
        price: 680,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvVJxyaiD73qJJeDqMEVVNqjBETljlxgnWwFF3HRrkmfa1AVlPNqoP9gP8SnkWnwaEamWTZJUSQ7UQ-ShHBsoT_Q3398V742le1CO-HJRDnW7U0tlB2FEf6ka7UYR2j1smTudUuQorteZ-AdrxDDaMn6DbKO2U5BxO4raO86zxqFprVrnQNjl9ajLu13nb8AGMPmNa2xfNN1M_dHXFfNixlGYPanpj18LI5LP0YlcXFLamz-R0PdrCiZSq89gAP1NdyIyNerwJhsk',
    },
]
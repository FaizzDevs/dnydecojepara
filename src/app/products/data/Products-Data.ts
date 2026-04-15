export interface Product {
    id: string
    name: string
    category: string
    price: number
    description: string
    image: string
    featured?: boolean
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Solstice Chair',
        category: 'Living Room',
        price: 1240,
        description: 'Minimalist sculptural ash wood lounge chair with white linen cushions.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7SHei84MB1gTUZfoa3AOnIqA3JmNRXLvMoNlufCiYNAuVNbVp5gXjSzWS53xsIp3cDZYGL-h1jVfVdex4VUrAIje-p1DgqHlPl2YvIJqD9uuSq4ynRyyQXskEPoL5mW1Ma79v2MbXN1b_eFLoKcDn0_qin4ZMrFlM-ZYp1ydqPIxjX__F7IlwFh6ymRhTmMFqxJuGfayAKmIqgoIZXg2A-JihAmp-ifBT_N56LqQw1gbWx5S1konv_GOgVm52KZghcsYho-zyPDk',
    },
    {
        id: '2',
        name: 'Aura Table',
        category: 'Dining',
        price: 2850,
        description: 'Large solid walnut dining table with smooth organic curved edges.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlk4Lba2Zwqi6Ee49ZB-YV75nSOGxhtcG4HqrBlkyR9RV76j2i0imJHnd3vlgfx3XnrWtwZxUq8FTmChu7mGgiX6_yzA6hQnScM7HWbTVwm_BlqcUKjJ5BeTY40UZh48lcOe5f-dFi-CL0B7y0vN2S-hDPKyhJb-QXx1Q9qOicyCQI7dFVaMAV0kYAFS10W0U9UpZSvuDrRXWv2tHpHqpYnycE8Z4TyNmWYtPmLAxSRieyNAPmykg-vkcybG1LR42fSXCHAkDukZ8',
    },
    {
        id: '3',
        name: 'Nocturne Lamp',
        category: 'Decor',
        price: 450,
        description: 'Sleek tall architectural floor lamp in black matte metal.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoAT9ufyn2xMdcVgaf5obUPvaH2o7UrT7-0U5ZxTIUJrbAdlSZvHQAqlcKNBDBzXg7ZyzQJMlWP3XOHxNEi3p9jQV518-SggS6_SQCvLQt8lj7aByQhsAIT_E0Vwy2pj0NeWLWU7FAngo3V4kc-iA6XD6QgR_qZnpEc3-EikRjlpQ6wVojGwNW3Qa4MSiJKTxxNlS483KoszJcSjbHG8jGQU6Bwtm34AMPVwhqF05ROPZDvPLgnqDsrGoKt4F1dXz9eozQOc2oVzE',
    },
    {
        id: '4',
        name: 'Ethos Desk',
        category: 'Workspace',
        price: 1680,
        description: 'Contemporary ergonomic home office desk crafted from natural oak.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrKWVp73k1Www7_YHtMiDNLPy8kNirSjditjft4Qd-4q7Dm1e3GMYJs6cVEDOQTOLESqHEKyT34lftF6PrWTIHZL7UZh1qfpgNZ0h2tPvftEEIviJKUwVMTcnvsac1WqHdFnKgREFIP75MYMsAagjq45PqYrhI5dR1jo9sqB4lniB6MTxgcXFxag2ybRB7TprZ3sT6J_-Qp6GvEVoYwbJMB2z0LTcVQ7ZQXuJ-ODt1uPWALXhuM_HNEl0-RSWHa_OVyj3kU3tLeH8',
    },
    {
        id: '5',
        name: 'Lunar Side Table',
        category: 'Living Room',
        price: 420,
        description: 'Minimalist wooden coffee table with organic curved edges.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgs3M_nuHH_BYOXoihH5AE1RQHRLdcH0bAuhtsBnBMLcM87nKteox-7cGLOP8fo4iMjMJMmS7t4z-Sfla2oFj4jf4C2CVre-VZQ6XyVwyP48vkHeP071wauECXn3qhkLrTRFmaSXatUIGRXsTHGFrcoGRYtWzhEAwla0xNeYiZEjxKHCm8khNn5Oh6kCbWtJugRUIiIGLpXprHsoGFPppYQy5whSSjz65Q3hThI4tfOb0QqInl1OZOef4cjCF6jYIzEJzgNZDLJik',
    },
    {
        id: '6',
        name: 'Vessel No. 4',
        category: 'Decor',
        price: 215,
        description: 'Sculptural terracotta floor vase with a matte finish.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlPhXfKCYr3CkSvT77ZkUeUleV9a9AtwrA8SKO4ahM0wBlUKqBpc2vK4YLRgq1Xie9-i7ZnIoDVpAsbMHFp_3Ia41omfl9PERoGwNP3hwjPiH_OGflbL56vP87vs1nu3O5HNlZwEHfxxvOs5SNWxMG107ju-uRqz4IvgLAr6cCQj2IBlqNwMjozMs3IWHRKRnm0sCdBlQKbjdl-Z6ScV1keIcIzVDAcMtLY2cpL7_SRnD5Mbsm90q_K6Sn-ATYg1k3FqPBJ0RBf5A',
    },
    {
        id: '7',
        name: 'Kanso Floor Lamp',
        category: 'Decor',
        price: 680,
        description: 'Contemporary floor lamp with a thin bronze stem and pleated paper shade.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvVJxyaiD73qJJeDqMEVVNqjBETljlxgnWwFF3HRrkmfa1AVlPNqoP9gP8SnkWnwaEamWTZJUSQ7UQ-ShHBsoT_Q3398V742le1CO-HJRDnW7U0tlB2FEf6ka7UYR2j1smTudUuQorteZ-AdrxDDaMn6DbKO2U5BxO4raO86zxqFprVrnQNjl9ajLu13nb8AGMPmNa2xfNN1M_dHXFfNixlGYPanpj18LI5LP0YlcXFLamz-R0PdrCiZSq89gAP1NdyIyNerwJhsk',
    },
]

export const categories = ['All', 'Living Room', 'Dining', 'Workspace', 'Decor']
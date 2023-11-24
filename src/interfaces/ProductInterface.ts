export interface IProduct {
    id: string,
    name: string,
    price: number,
    originalPrice: number,
    rating: number,
    image: string,
    discount: string
}

export interface ICart {
    productId: string,
    quantity: number,
    name: string,
    price: number
}
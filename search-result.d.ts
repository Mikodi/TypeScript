declare module 'search-result'

export interface Hotel {
    city: string,
    checkInDate: Date
    checkOutDate: Date
    priceLimit: number
}

export interface Callback<R> {
    (error?: Error, result?: R)
}

export function searchFlat(parametrs: Hotel, callback: Callback<Hotel>): void
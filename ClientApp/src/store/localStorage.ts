export const loadCart = () => {
    try {
        const stringifiedState = localStorage.getItem('cart')
        if (stringifiedState === null) {
            return undefined
        }
        return JSON.parse(stringifiedState)
    } catch (err) {
        return undefined
    }
}

export const saveCart = (cart) => {
    try {
        const stringifiedState = JSON.stringify(cart)
        localStorage.setItem('cart', stringifiedState)
    } catch (err) {

    }
}
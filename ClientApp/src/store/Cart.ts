import { Action, Reducer } from 'redux'
import { AppThunkAction } from './'
import { Product } from './Products'

// Define some types and consts for Type strings
// This helps avoid typo errors and type mismatches
// in the Type strings we use for the actionCreators and the reducer later.
// It also makes them much easier to update in the future if we need to add a prefix to avoid naming collisions with other actions
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const ADJUST_QUANTITY = 'ADJUST_QUANTITY'
const SUBMIT_ORDER = 'SUBMIT_ORDER'

type ADD_TO_CART = typeof ADD_TO_CART
type REMOVE_FROM_CART = typeof REMOVE_FROM_CART
type ADJUST_QUANTITY = typeof ADJUST_QUANTITY
type SUBMIT_ORDER = typeof SUBMIT_ORDER

export interface CartItem {
    quantity: number
    product: Product
}

// STATE
export interface CartState {
    cartItems: Array<CartItem>
    total: number
}

// ACTIONS
export interface AddToCartAction extends CartItem {
    type: ADD_TO_CART
}
export interface RemoveFromCartAction {
    type: REMOVE_FROM_CART
    cartIndex: number
}
export interface AdjustQuantityAction {
    type: ADJUST_QUANTITY
    cartIndex: number
    newQuantity: number
}

export interface SubmitOrderAction {
    type: SUBMIT_ORDER
}

// Declaring a union of the actions is a nice shorthand in case we need to type these frequently later
// And guards against accidentally typing the action incorrectly later.
export type CartAction =
    | AddToCartAction
    | RemoveFromCartAction
    | AdjustQuantityAction
    | SubmitOrderAction

// ACTION CREATORS
export const actionCreators = {
    addToCart: (product: Product, quantity: number) =>
        ({ type: ADD_TO_CART, product, quantity } as AddToCartAction),
    removeFromCart: (cartIndex: number) =>
        ({ type: REMOVE_FROM_CART, cartIndex } as RemoveFromCartAction),
    adjustQuantity: (cartIndex: number, newQuantity: number) =>
    ({
        type: ADJUST_QUANTITY,
        cartIndex,
        newQuantity,
    } as AdjustQuantityAction),
    submitOrder: (cart: CartState): AppThunkAction<CartAction> => dispatch => {
        fetch('/api/order', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(cart),
        }).then(response => {
            if (response.status === 201) {
                dispatch({ type: SUBMIT_ORDER })
            } else {
                return
            }
        })
    },
}

function calculateTotalPrice(cartItems: Array<CartItem>) {
    let totalPrice = 0
    for (let cartItem of cartItems) {
        let itemQuantity = isNaN(cartItem.quantity) ? 0 : cartItem.quantity
        totalPrice += cartItem.product.price * itemQuantity
    }

    return totalPrice
}

// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
export const reducer: Reducer<CartState> = (
    state: CartState | undefined,
    incomingAction: Action
): CartState => {
    let cartItems: Array<CartItem> = []
    if (state === undefined) {
        return { cartItems, total: 0 }
    }

    const action = incomingAction as CartAction
    switch (action.type) {
        // Don't need to check if the item is already in the cart here
        // That should be done before we get to this point

        case ADD_TO_CART:
            cartItems = [
                ...state.cartItems,
                { product: action.product, quantity: action.quantity },
            ]

            return { cartItems, total: calculateTotalPrice(cartItems) }
        case REMOVE_FROM_CART:
            cartItems = [
                ...state.cartItems.slice(0, action.cartIndex),
                ...state.cartItems.slice(action.cartIndex + 1),
            ]

            return { cartItems, total: calculateTotalPrice(cartItems) }
        case ADJUST_QUANTITY:
            cartItems = [
                ...state.cartItems.slice(0, action.cartIndex),
                {
                    ...state.cartItems[action.cartIndex],
                    quantity: action.newQuantity,
                },
                ...state.cartItems.slice(action.cartIndex + 1),
            ]

            return { cartItems, total: calculateTotalPrice(cartItems) }
        case SUBMIT_ORDER:
            return { cartItems: [], total: 0 }
        default:
            return state
    }
}

import { Action, Reducer } from 'redux'
import { AppThunkAction } from './'

// Define some types and consts for Type strings
// This helps avoid typo errors and type mismatches
// in the Type strings we use for the actionCreators and the reducer later.
// It also makes them much easier to update in the future if we need to add a prefix to avoid naming collisions with other actions
const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const CLEAR_SEARCH = 'CLEAR_SEARCH'

type REQUEST_PRODUCTS = typeof REQUEST_PRODUCTS
type RECEIVE_PRODUCTS = typeof RECEIVE_PRODUCTS
type CLEAR_SEARCH = typeof CLEAR_SEARCH

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ProductsState {
    isLoading: boolean
    searchTerm: string | undefined
    products: Product[]
}

export interface Product {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
}

// ACTIONS
interface RequestProductsAction {
    type: REQUEST_PRODUCTS
    searchTerm: string
}

interface ReceiveProductsAction {
    type: RECEIVE_PRODUCTS
    searchTerm: string
    products: Product[]
}

interface ClearSearchAction {
    type: CLEAR_SEARCH
}

type KnownAction = RequestProductsAction | ReceiveProductsAction | ClearSearchAction

// ACTION CREATORS
export const actionCreators = {
    requestProducts: (searchTerm: string): AppThunkAction<KnownAction> => (
        dispatch,
        getState
    ) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState()
        if (
            appState &&
            appState.products &&
            searchTerm !== appState.products.searchTerm
        ) {
            const searchParams = new URLSearchParams({ searchTerm })
            fetch(`/api/product?` + searchParams)
                .then(response => response.json() as Promise<Product[]>)
                .then(data => {
                    dispatch({
                        type: RECEIVE_PRODUCTS,
                        searchTerm,
                        products: data,
                    })
                })

            dispatch({ type: REQUEST_PRODUCTS, searchTerm })
        }
    },
    clearSearch: () => ({ type: CLEAR_SEARCH } as ClearSearchAction)
}

// REDUCER
const unloadedState: ProductsState = { products: [], searchTerm: undefined, isLoading: false }

export const reducer: Reducer<ProductsState> = (
    state: ProductsState | undefined,
    incomingAction: Action
): ProductsState => {
    if (state === undefined) {
        return unloadedState
    }

    const action = incomingAction as KnownAction
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                products: state.products,
                searchTerm: action.searchTerm,
                isLoading: true,
            }
        case RECEIVE_PRODUCTS:
            return {
                products: action.products,
                searchTerm: action.searchTerm,
                isLoading: false,
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                searchTerm: ''
            }
        default:
            return state
    }
}

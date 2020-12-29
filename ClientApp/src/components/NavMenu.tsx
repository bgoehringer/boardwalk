import * as React from 'react'
import {
    Container,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Badge,
    Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ApplicationState } from '../store'

import './NavMenu.css'

type ConnectedNavMenuProps = {
    itemsInCart: number
}

type NavMenuProps = ConnectedNavMenuProps

class NavMenu extends React.PureComponent<NavMenuProps> {
    public render() {
        const { itemsInCart } = this.props

        return (
            <header>
                <Navbar
                    className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3"
                    light
                >

                    <Container>
                        <div className="w-25">
                            <NavbarBrand tag={Link} to="/">
                                A to Z
                            </NavbarBrand>
                        </div>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink
                                    tag={Link}
                                    className="text-dark"
                                    to="/cart"
                                >
                                    <Button color="primary">
                                        {itemsInCart > 0 && (
                                            <Badge color="info">
                                                {itemsInCart}
                                            </Badge>
                                        )}
                                        View Cart
                                        <span className="fas fa-cart-plus mx-1" />
                                    </Button>
                                </NavLink>
                            </NavItem>
                        </ul>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default connect((state: ApplicationState): ConnectedNavMenuProps => {
    let itemsInCart = 0
    if (state.cart && state.cart.cartItems.length) {
        itemsInCart = state.cart.cartItems.reduce((prev, curr) => {
            return {
                product: curr.product,
                quantity: prev.quantity + curr.quantity,
            }
        }).quantity
    }
    return {
        itemsInCart,
    }
})(NavMenu)

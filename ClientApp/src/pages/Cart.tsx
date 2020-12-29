import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Jumbotron, Col, Row, Button } from 'reactstrap'

import { ApplicationState } from '../store'
import { CartState, actionCreators as CartActionCreators } from '../store/Cart'

import CartItem from '../components/CartItem'

type ConnectedCartProps = {
    cart: CartState | undefined
}

type CartProps = ConnectedCartProps &
    CartState &
    typeof CartActionCreators &
    RouteComponentProps<{}>

class Cart extends React.PureComponent<CartProps> {
    private validateOrder() {
        if (this.props.cart.cartItems.length > 0) {
            console.log(this.props.cart)
            this.props.submitOrder(this.props.cart)
        }
    }

    public render() {
        const { cart } = this.props
        const { cartItems } = cart

        return (
            <React.Fragment>
                <Jumbotron className="mt-5">
                    <Row>
                        <Col>
                            {cartItems && cartItems.length > 0 ? (
                                cartItems.map((cartItem, cartItemIndex) => {
                                    return (
                                        <div key={cartItem.product.id}>
                                            <CartItem
                                                cartItem={cartItem}
                                                cartItemIndex={cartItemIndex}
                                            />
                                        </div>
                                    )
                                })
                            ) : (
                                <span>Your Cart is currently Empty</span>
                            )}
                        </Col>
                        <Col xs={{ size: 2, offset: 1 }}>
                            {cartItems.length > 0 && (
                                <>
                                    <span>Order Total: ${cart.total.toFixed(2)}</span> <br />
                                    <Button
                                        color="primary"
                                        onClick={() => this.validateOrder()}
                                    >
                                        Submit Order
                                    </Button>
                                </>
                            )}
                        </Col>
                    </Row>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default connect((state: ApplicationState) => {
    return { cart: state.cart }
}, CartActionCreators)(Cart)

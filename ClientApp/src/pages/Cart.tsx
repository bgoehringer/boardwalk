import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Jumbotron, Col, Row, Button } from 'reactstrap'

import { ApplicationState } from '../store'
import { actionCreators as CartActionCreators } from '../store/Cart'

import CartItem from '../components/CartItem'

const mapState = (state: ApplicationState) => {
    return { cart: state.cart }
}

const mapDispatch = CartActionCreators
const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type CartProps = PropsFromRedux & RouteComponentProps<{}>

class Cart extends React.PureComponent<CartProps> {
    private validateOrder() {
        const { cart } = this.props
        if (cart) {
            if (cart.cartItems.length > 0) {
                console.log(this.props.cart)
                this.props.submitOrder(cart)
            }
        }
    }

    public render() {
        const { cart } = this.props
        let cartItems: any[] = []
        if (cart) {
            cartItems = cart.cartItems
        }

        return (
            <React.Fragment>
                <Jumbotron className="mt-5">
                    <Row>
                        <Col>
                            {cartItems.length > 0 ? (
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
                                    <span>
                                        Order Total: ${cart &&
                                            cart.total.toFixed(2)}
                                    </span>{' '}
                                    <br />
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

export default connector(Cart)

import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import {
    CartItem as CartItemType,
    actionCreators as CartActionCreators,
} from '../store/Cart'

import {
    Row,
    Col,
    CardImg,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap'

type BaseCartItemProps = {
    cartItem: CartItemType
    cartItemIndex: number
}

const mapState = null
const mapDispatch = CartActionCreators

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type CartItemProps = BaseCartItemProps & PropsFromRedux

class CartItem extends React.PureComponent<CartItemProps> {
    private adjustQuantity(quantity: number, storeItemIndex: number) {
        const error = quantity <= 0 ? 'Quantity must be greater than 0' : ''

        if (!error) {
            this.props.adjustQuantity(storeItemIndex, quantity)
        }
    }

    public render() {
        const {
            cartItem: { product, quantity },
            cartItemIndex,
        } = this.props

        const { name, description, price, imageUrl } = product

        const itemQuantity = isNaN(quantity) ? 0 : quantity

        const subTotal = price * itemQuantity

        return (
            <React.Fragment>
                {product && (
                    <Row className="cart-item" key={product.id}>
                        <Col xs="4">
                            <CardImg
                                top
                                width="300px"
                                height="150px"
                                src={`https://localhost:5001/images/${imageUrl}`}
                                alt={name}
                            />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h5>{name}</h5>
                                    <p>{description}</p>
                                    <p>${price.toFixed(2)}</p>
                                </Col>
                                <Col xs="3">
                                    <Button
                                        onClick={() =>
                                            this.props.removeFromCart(
                                                cartItemIndex
                                            )
                                        }
                                    >
                                        Remove from Cart
                                    </Button>
                                    <br />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            Quantity
                                        </InputGroupAddon>
                                        <Input
                                            type="text"
                                            pattern="[0-9]+"
                                            defaultValue={itemQuantity}
                                            onInput={event =>
                                                this.adjustQuantity(
                                                    parseInt(
                                                        event.currentTarget
                                                            .value
                                                    ),
                                                    cartItemIndex
                                                )
                                            }
                                        />
                                    </InputGroup>
                                </Col>
                                <Col xs={{ size: 3, offset: 5 }}>
                                    Item Total: ${subTotal.toFixed(2)}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                )}
            </React.Fragment>
        )
    }
}

export default connector(CartItem)

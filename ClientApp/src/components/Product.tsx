import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { ApplicationState } from '../store'
import { actionCreators } from '../store/Cart'
import { Product as ProductType } from '../store/Products'

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col,
    Alert,
} from 'reactstrap'

type BaseProductProps = {
    product: ProductType
}

const mapState = (state: ApplicationState, ownProps: BaseProductProps) => {
    return {
        cart: state.cart,
        product: ownProps.product,
    }
}

const mapDispatch = actionCreators

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type ProductProps = PropsFromRedux

type ProductState = {
    quantity: number
    error: string
}

export class Product extends React.PureComponent<ProductProps, ProductState> {
    state = {
        quantity: 1,
        error: '',
    }

    private isQuantityNegative(quantity: number) {
        const error =
            typeof quantity !== 'number' || quantity <= 0
                ? 'Quantity must be greater than 0'
                : ''
        this.setState({
            quantity,
            error,
        })
    }

    private itemIsAlreadyInCart(productId: number) {
        const { cart } = this.props
        if (!cart) return

        const cartIndex = cart.cartItems.findIndex(cartItem => {
            return cartItem.product.id === productId
        })

        if (cartIndex > -1) {
            return true
        }

        return false
    }

    private addToCart(product: ProductType, quantity: number) {
        if (this.state.error) return // If there is already an active error we can return immediately
        if (this.itemIsAlreadyInCart(product.id)) {
            this.setState({
                ...this.state,
                error: 'This item is already in your cart',
            })
            return
        }

        this.props.addToCart(product, quantity)
    }

    public render() {
        const { product } = this.props

        const { name, description, price, imageUrl } = product
        const { quantity, error } = this.state

        return (
            <React.Fragment>
                <Card className="h-100">
                    <CardImg
                        top
                        width="300px"
                        height="200px"
                        src={`https://localhost:5001/images/${imageUrl}`}
                        alt={name}
                    />
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <CardText>{description}</CardText>
                        <CardSubtitle>{price.toFixed(2)}</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <Row>
                            <Col xs={{ size: 6 }}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        Quantity
                                    </InputGroupAddon>
                                    <Input
                                        type="text"
                                        pattern="[0-9]+"
                                        defaultValue="1"
                                        onInput={event =>
                                            this.isQuantityNegative(
                                                parseInt(
                                                    event.currentTarget.value
                                                )
                                            )
                                        }
                                    />
                                </InputGroup>
                            </Col>
                            <Col
                                xs={{ size: 5, offset: 1 }}
                                className="right-align"
                            >
                                <Button
                                    color="primary"
                                    onClick={() =>
                                        this.addToCart(product, quantity)
                                    }
                                >
                                    Add to Cart
                                </Button>
                            </Col>
                        </Row>
                        {error && (
                            <Alert color="danger" className="mt-2 mb-0">
                                {error}
                            </Alert>
                        )}
                    </CardBody>
                </Card>
            </React.Fragment>
        )
    }
}

export default connector(Product)

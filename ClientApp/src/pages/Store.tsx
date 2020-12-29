import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { ApplicationState } from '../store'
import {
    ProductsState as ProductsStateType,
    actionCreators as ProductsActions,
} from '../store/Products'

import { Row, Col } from 'reactstrap'
import Product from '../components/Product'
import SearchBar from '../components/SearchBar'

type ProductsProps = ProductsStateType &
    typeof ProductsActions &
    RouteComponentProps<{}>

type ProductsState = {
    searchTerm: string
}

class Products extends React.PureComponent<ProductsProps, ProductsState> {
    state = {
        searchTerm: ''
    }

    public componentDidMount() {
        this.ensureDataFetched()
    }

    async updateSearchTerm(searchTerm: string) {
        await this.setState({ searchTerm: searchTerm })
    }

    submitSearch() {
        const { searchTerm } = this.state
        this.props.requestProducts(searchTerm);
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.isLoading && <span>Loading...</span>}
                {!this.props.isLoading && (
                    <>
                        <Row>
                            <SearchBar searchTerm={this.props.searchTerm} updateSearchTerm={(searchTerm) => this.updateSearchTerm(searchTerm)} submitSearch={() => this.submitSearch()} />
                        </Row>
                        <Row>
                        {this.props.products &&
                            this.props.products.map(product => {
                                return (
                                    <Col
                                        key={product.id}
                                        lg="4"
                                        md="6"
                                        sm="12"
                                        className="mt-3"
                                    >
                                        <Product product={product} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </>
                )}
            </React.Fragment>
        )
    }

    private ensureDataFetched() {
        if (!this.props.isLoading) {
            this.props.requestProducts('')
        }
    }
}

export default connect(
    (state: ApplicationState) => state.products,
    ProductsActions
)(Products)

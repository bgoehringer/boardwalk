import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { Col, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap'

import { actionCreators } from '../store/Products'

const mapState = null
const mapDispatch = actionCreators

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type SearchBarProps = PropsFromRedux & {
    searchTerm: string | undefined
    updateSearchTerm: (newString: string) => void
    submitSearch: () => void
}

class SearchBar extends React.PureComponent<SearchBarProps> {
    public render() {
        return (
            <React.Fragment>
                <Col xs="4">
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            Search Items:
                        </InputGroupAddon>
                        <Input
                            type="text"
                            defaultValue={this.props.searchTerm ? this.props.searchTerm : ''}
                            onInput={event =>
                                this.props.updateSearchTerm(
                                    event.currentTarget.value
                                )
                            }
                        />
                    </InputGroup>
                </Col>
                <Col xs="1">
                    <Button
                        onClick={() => this.props.submitSearch()}
                        color="primary"
                    >
                        Search
                    </Button>
                </Col>
                <Col xs={{ size: 2, offset: 5 }}>
                    <Button
                        onClick={async () => {
                            await this.props.updateSearchTerm('')
                            this.props.submitSearch()
                        }}
                        color="secondary"
                    >
                        View All
                    </Button>
                </Col>
            </React.Fragment>
        )
    }
}

export default connector(SearchBar)

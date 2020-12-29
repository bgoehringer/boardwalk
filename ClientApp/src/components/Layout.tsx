import * as React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

export default class Layout extends React.PureComponent<{}, { children?: React.ReactNode }> {
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                <Container className="h-100">
                    {this.props.children}
                </Container>
            </React.Fragment>
        );
    }
}
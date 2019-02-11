import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { Container } from './style.css';
import { Row, Col } from '../common/grid.css';
import Item from './item';
import IconAdd from '../icons/iconAdd';

export class List extends Component {

    handleAdd = () => {
        const { history } = this.props;
        history.push('search');
    }

    render() {
        const { dataList } = this.props;

        if(dataList.loading) {
            return (
                <div className="waiting-container">
                  <ClipLoader color={'#784CC0'} size={42} sizeUnit={'px'} />
                </div>
            )
        }

        return (
            <Container>
                <div className="header-area">
                    <Row alignItems="center">
                        <h1 className="title">NASA Collection</h1>
                        <button className="button-primary" onClick={this.handleAdd}><IconAdd color="#FFFFFF" /> Add new item</button>
                    </Row>
                </div>
                <div className="content-area">
                    <Row>
                        {
                            (dataList.data && dataList.data.length > 0) 
                                ?
                                    dataList.data.map((item) => <Item item={item} />)
                                :
                                    <h1>Collection is empty</h1>
                        }
                    </Row>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}

export default connect(mapStateToProps)(List);
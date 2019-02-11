import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { Container } from './style.css';
import { Col, Row } from '../common/grid.css'; 
import IconBack from '../icons/iconBack';
import { fetchDataSearch } from '../../actions/search';
import Item from '../list/item';

export class Search extends Component {

    state = {
        strSearch: '',
        submit: false,
    }

    handleBack = () => {
        const { history } = this.props;

        history.goBack();
    }

    handleSearch(e) {
        e.preventDefault();
        const { fetchDataSearch } = this.props;

        let strSearch = e.target.value;

        this.setState({strSearch, submit: true});

        if(strSearch === '') return false;

        fetchDataSearch(strSearch);

    }

    render() {
        const { dataSearch } = this.props;
        const { strSearch, submit } = this.state;
        console.log(this.props);

        // if(dataSearch.loading) {
        //     return (
        //         <div className="waiting-container">
        //           <ClipLoader color={'#784CC0'} size={42} sizeUnit={'px'} />
        //         </div>
        //     )
        // }

        return (
            <Container>
                <Col>
                    <div className="header-area">
                        <button type="button" onClick={this.handleBack} className="button-back">
                            <IconBack /><span>Back to Collection</span>
                        </button>
                    </div>
                    <div className="search-area">
                        <h2 className="title">Search from Nasa</h2>
                        <div className="form-area">
                            <input type="text" name="search" required onChange={e => this.handleSearch(e)}></input>
                            <label>Type something to search...</label>
                        </div>
                    </div>

                    {
                        submit &&
                            <p>{ (dataSearch.collection && dataSearch.collection.metadata && dataSearch.collection.metadata.total_hits) ? dataSearch.collection.metadata.total_hits : 0 } result for {strSearch}</p>
                    }
                    {
                        (dataSearch.collection && dataSearch.collection.items && dataSearch.collection.items.length > 0) &&
                            <Row>
                                { dataSearch.collection.items.map((item, index) => <Item item={item} key={`search-${index}`} />) }
                            </Row>
                    }
                </Col>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataSearch: (strSearch) => { dispatch(fetchDataSearch(strSearch)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
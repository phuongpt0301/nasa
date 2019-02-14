import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './style.css';
import { Row, Col } from '../common/grid.css';
import Item from './item';
import IconAdd from '../icons/iconAdd';
import ModalItem from './ModalItem';
import ModalEdit from './ModalEdit';
import { handleDataItemCurrent, fetchDataList, handleModalEditItem } from '../../actions/list';
import { toastHide } from '../../actions/toast';

export class List extends Component {

    componentDidMount() {
        const { fetchDataList } = this.props;
        fetchDataList();
    }

    componentDidUpdate(prevProps) {
        const { dataToast, toastHide } = this.props;

        if(dataToast.isShow !== prevProps.dataToast.isShow && dataToast.isShow) {
            toast("Update successfully", { autoClose: 3000 });
            toastHide();
        }
    }

    handleAdd = () => {
        const { history } = this.props;
        history.push('search');
    }

    render() {
        const { dataList, handleDataItemCurrent, handleModalEditItem } = this.props;

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
                                    dataList.data.map((item, index) => <Item item={item} handleDataItemCurrent={handleDataItemCurrent} handleModalEditItem={handleModalEditItem} key={`list-${index}`} />)
                                :
                                    <h1>Collection is empty</h1>
                        }
                    </Row>
                </div>
                <ModalItem />
                { dataList.isEditShow && <ModalEdit /> }
                <ToastContainer />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { ...state }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataList: () => { dispatch(fetchDataList()) },
        handleDataItemCurrent: (item) => { dispatch(handleDataItemCurrent(item)) },
        handleModalEditItem: (item) => { dispatch(handleModalEditItem(item)) },
        toastHide: () => {dispatch(toastHide())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
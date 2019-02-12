import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { handleDataItemCurrent } from '../../actions/list';
import IconClose from '../icons/iconClose';

class ModalItem extends Component {

    handleModal() {
        const { handleDataItemCurrent, dataList } = this.props;

        handleDataItemCurrent({
            currentItem: {},
            isShow: !dataList.isShow
        });
    }

    render() {
        const { dataList } = this.props;

        return (
            <Modal backdrop="static" isOpen={dataList.isShow} className="modal-item">
                <ModalBody>
                    <div className="header-area">
                        <h1 className="title">
                        { 
                            (dataList.currentItem && dataList.currentItem.title ) 
                            ? dataList.currentItem.title : 'Unknown'
                        }
                        </h1>
                        <button type="submit" className="btn-close" onClick={() => this.handleModal()}><IconClose color="#FFFFFF" /></button>
                    </div>
                    <div className="video-area">
                    <video controls id={`video-player`}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    </div>
                </ModalBody>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {...state }
}

const mapDispatchToProps = dispatch => {
    return {
        handleDataItemCurrent: (item) => { dispatch(handleDataItemCurrent(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalItem);
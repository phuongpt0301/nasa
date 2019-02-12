import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { handleDataItemCurrent, fetchDataUpdate, handleModalEditItem } from '../../actions/list';
import IconClose from '../icons/iconClose';

class ModalEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            mediaType: '',
            imageUrl: '',
            fileUrl: '',
            center: '',
            dateCreated: '',
        }
    }

    componentDidMount() {
        const { dataList } = this.props;

        if(dataList.currentItem) {
            this.setState({
                id: dataList.currentItem.id ? dataList.currentItem.id : null,
                title: dataList.currentItem.title ? dataList.currentItem.title : '',
                description: dataList.currentItem.description ? dataList.currentItem.description : '',
                mediaType: dataList.currentItem.mediaType ? dataList.currentItem.mediaType : 'image',
                imageUrl: dataList.currentItem.imageUrl ? dataList.currentItem.imageUrl : '',
                fileUrl: dataList.currentItem.fileUrl ? dataList.currentItem.fileUrl : '',
                center: dataList.currentItem.center ? dataList.currentItem.center : '',
                dateCreated: dataList.currentItem.dateCreated ? dataList.currentItem.dateCreated : ''
            })
        }

    }

    handleEditCollection = () => {
        const { id, title, description, mediaType, imageUrl, fileUrl, center, dateCreated } = this.state;

        const { fetchDataUpdate } = this.props;
        fetchDataUpdate({id, title, description, mediaType, imageUrl, fileUrl, center, dateCreated});
    }

    handleModal() {
        const { handleModalEditItem, dataList } = this.props;

        handleModalEditItem({
            currentItem: {},
            isEditShow: !dataList.isEditShow
        });
    }

    handleData(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { dataList } = this.props; 
        const { title, description, mediaType, imageUrl, fileUrl } = this.state;

        return (
            <Modal backdrop="static" isOpen={dataList.isEditShow} className="modal-edit">
                <ModalBody>
                    <div className="header-area">
                        <h3 className="title">Add to collection</h3>
                        <button type="submit" className="btn-close" onClick={() => this.handleModal()}><IconClose color="#979797" /></button>
                    </div>
                    <div className="form-container">
                        <div className="form-area">
                            <input type="text" name="title" id="title" onChange={e => this.handleData(e)} required value={title}></input>
                            <label>Title</label>
                        </div>

                        <div className="form-area">
                            <textarea name="description" id="description" onChange={e => this.handleData(e)} required value={description}></textarea>
                            <label>Description</label>
                        </div>

                        <div className="form-area">
                            <div className="select-style">
                                <select name="mediaType" id="mediaType" onChange={e => this.handleData(e)} value={mediaType}>
                                    <option value="video">Video</option>
                                    <option value="image">Image</option>
                                </select>
                            </div>
                            <label>Type</label>
                        </div>

                        <div className="form-area">
                            <input type="text" name="imageUrl" id="imageUrl" onChange={e => this.handleData(e)} required value={imageUrl}></input>
                            <label>Link preview image url <span className="text-red">*</span></label>
                        </div>

                        <div className="form-area">
                            <input type="text" name="fileUrl" id="fileUrl" onChange={e => this.handleData(e)} required value={fileUrl}></input>
                            <label>Link file url <span className="text-red">*</span></label>
                        </div>

                        <button type="button" className="btn-add" onClick={this.handleEditCollection}><i className="icon-check" />Save</button>
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
        handleDataItemCurrent: (item) => { dispatch(handleDataItemCurrent(item)) },
        handleModalEditItem: (item) => { dispatch(handleModalEditItem(item)) },
        fetchDataUpdate: (item) => { dispatch(fetchDataUpdate(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
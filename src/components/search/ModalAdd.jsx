import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';

import { handleDataItemCurrent } from '../../actions/list';
import { handleModalAddItem, fetchDataAdd } from '../../actions/search';
import IconClose from '../icons/iconClose';
import uniqueId from '../common/uniqueId';

class ModalAdd extends Component {

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
        const { dataSearch } = this.props;
        let title = '';
        let description = '';
        let mediaType = '';
        let imageUrl = '';
        let fileUrl = '';
        let center = '';
        let dateCreated = '';

        if(dataSearch.currentItem) {
            if(dataSearch.currentItem.data && dataSearch.currentItem.data.length > 0) {
                title = dataSearch.currentItem.data[0].title;
                description = dataSearch.currentItem.data[0].description;
                mediaType = dataSearch.currentItem.data[0].media_type;
                center = dataSearch.currentItem.data[0].center;
                dateCreated = dataSearch.currentItem.data[0].date_created;
            }

            if(dataSearch.currentItem.links && dataSearch.currentItem.links.length > 0) {
                imageUrl = dataSearch.currentItem.links[0].href;
                fileUrl = dataSearch.currentItem.links[0].href;
            }
        }

        this.setState({
            title,
            description,
            mediaType,
            imageUrl,
            fileUrl,
            center,
            dateCreated
        })
    }

    handleAddCollection = () => {
        const { title, description, mediaType, imageUrl, fileUrl, center, dateCreated } = this.state;

        const { fetchDataAdd } = this.props;
        const id = uniqueId();
        fetchDataAdd({id, liked: false, title, description, mediaType, imageUrl, fileUrl, center, dateCreated});
    }

    handleModal() {
        const { handleModalAddItem, dataSearch } = this.props;

        handleModalAddItem({
            currentItem: {},
            isShow: !dataSearch.isShow
        });
    }

    handleData(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { dataSearch } = this.props; 
        const { title, description, mediaType, imageUrl, fileUrl } = this.state;

        return (
            <Modal backdrop="static" isOpen={dataSearch.isShow} className="modal-add">
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

                        <button type="button" className="btn-add" onClick={this.handleAddCollection}><i className="icon-check" />Add to collection</button>
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
        handleModalAddItem: (item) => { dispatch(handleModalAddItem(item)) },
        fetchDataAdd: (item) => { dispatch(fetchDataAdd(item)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAdd);
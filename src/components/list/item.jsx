import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ItemContainer } from './item.css';
import IconAdd from '../icons/iconAdd';
import IconPlay from '../icons/iconPlay';
import ProgressiveImage from '../common/ProgressiveImage';
import { deleteDataItem, likeDataItem } from '../../actions/list';

const defaultImage = 'http://www.rangerwoodperiyar.com/images/joomlart/demo/default.jpg';

class Item extends Component {

    handleAdd(item) {
        const { handleModalAddItem, dataSearch } = this.props;

        const data = {
            currentItem: item,
            isShow: !dataSearch.isShow
        }

        handleModalAddItem(data);
    }

    handlePlay(item) {
        const { handleDataItemCurrent, dataList } = this.props;

        handleDataItemCurrent({
            currentItem: item,
            isShow: !dataList.isShow
        });
    }

    handleEdit(item) {
        const { handleModalEditItem, dataList } = this.props;

        handleModalEditItem({
            currentItem: item,
            isEditShow: !dataList.isEditShow
        })
    }

    handleDelete(item) {
        const { deleteDataItem } = this.props;
        deleteDataItem(item);
    }

    handleLike(item) {
        const { likeDataItem } = this.props;
        likeDataItem(item);
    }

    render() {
        const { item } = this.props;
        let link = defaultImage;

        if(item.imageUrl) {
            link = item.imageUrl;
        }

        return(
            <ItemContainer>
                <div className="item">
                    <div className="imgage-area">
                        <ProgressiveImage src={link} />
                        <div className="group-icon">
                            <button type="button" className="btn-play" onClick={() => this.handlePlay(item)}><IconPlay /></button>
                        </div>
                    </div>
                    <div className="info-area">
                        <span className="center-area">{ item.center ? item.center : 'Unknown' }</span>
                        <span className="date-created-area">{ item.dateCreated ? item.dateCreated : 'Unknown' }</span>
                    </div>
                    <div className="content-area">
                        <h3 className="title">{ item.title ? item.title : 'Unknown' }</h3>
                        <p className="description">{ item.description ? item.description : 'Unknown' }</p>
                    </div>
                    <div className="icon-area icon-list-area">
                       <button type="button" className={`${item.liked ? 'btn-heart-active' : 'btn-heart' }`} onClick={() => this.handleLike(item)}><i className={`${item.liked ? 'icon-heart-active' : 'icon-heart' }`}></i></button>
                       <button type="button" className="btn-trash" onClick={() => this.handleDelete(item)}><i className="icon-trash"></i></button>
                       <button type="button" className="btn-pen" onClick={() => this.handleEdit(item)}><i className="icon-pen"></i></button>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

const mapStateToProps = state => {
    return {...state}
}

const mapDispatchToProps = dispatch => {
    return {
        deleteDataItem: (items) => { dispatch(deleteDataItem(items))},
        likeDataItem: (items) => { dispatch(likeDataItem(items))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
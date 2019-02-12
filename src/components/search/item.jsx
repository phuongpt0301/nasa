import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ItemContainer } from './item.css';
import IconAdd from '../icons/iconAdd';
import IconPlay from '../icons/iconPlay';
import ProgressiveImage from '../common/ProgressiveImage';

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

    render() {
        const { item } = this.props;
        let link = defaultImage;

        if(item.links && item.links.length > 0 && !item.links[0].href.includes('.srt')) {
            link = item.links[0].href;
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
                        <span className="center-area">{ (item.data.length > 0 && item.data[0].center) ? item.data[0].center : 'Unknown' }</span>
                        <span className="date-created-area">{ (item.data.length > 0 && item.data[0].date_created) ? item.data[0].date_created : 'Unknown' }</span>
                    </div>
                    <div className="content-area">
                        <h3 className="title">{ (item.data.length > 0 && item.data[0].title) ? item.data[0].title : 'Unknown' }</h3>
                        <p className="description">{ (item.data.length > 0 && item.data[0].description) ? item.data[0].description : 'Unknown' }</p>
                    </div>
                    <div className="icon-area">
                       <button type="button" className="btn-add" onClick={() => this.handleAdd(item)}><IconAdd color="#000000" /><span>Add to NASA collection</span></button>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

const mapStateToProps = state => {
    return {...state}
}

export default connect(mapStateToProps)(Item);
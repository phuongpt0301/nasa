import React, { Component } from 'react';

import { ItemContainer } from './item.css';
import IconAdd from '../icons/iconAdd';

class Item extends Component {

    handleAdd(item) {
        
    }

    render() {
        const { item } = this.props;

        return(
            <ItemContainer>
                <div className="item">
                    <div className="imgage-area">
                        <img src={item.links[0].href} rel={item.links[0].rel} />
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
                       <button type="button" onClick={() => this.handleAdd(item)}><IconAdd color="#000000" />Add to NASA collection</button>
                    </div>
                </div>
            </ItemContainer>
        )
    }
}

export default Item;
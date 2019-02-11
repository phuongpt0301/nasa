import React, { Component } from 'react';

export default class IconBack extends Component {
    render() {
        const { color } = this.props;

        return (
            <svg width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>58E390BF-0CFB-4CC6-A03C-C1F9B17535D9</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Form-component" transform="translate(-612.000000, -881.000000)" fill={color || '#000000'}>
                        <g id="Icons" transform="translate(79.000000, 877.000000)">
                            <g id="back" transform="translate(533.000000, 4.000000)">
                                <polygon id="Path-2" points="0 6.66746064 6.66746064 0 7.54142936 0.873968718 1.74793744 6.66746064 7.54142936 12.4609526 6.66746064 13.3349213"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}
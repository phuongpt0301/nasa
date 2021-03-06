import React, { Component } from 'react';

export default class IconDropDown extends Component {
    render() {
        const { color } = this.props;

        return (
            <svg width="14px" height="8px" viewBox="0 0 14 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>34589EBD-2E6E-4F31-A9CC-E51BB9AE272E</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Form-component" transform="translate(-562.000000, -885.000000)" fill={color || '#000000'}>
                        <g id="Icons" transform="translate(79.000000, 877.000000)">
                            <g id="dropdown" transform="translate(483.000000, 8.000000)">
                                <polygon id="Path-4" points="0 0.845939036 6.80530489 7.65124393 13.6106098 0.845939036 12.7646707 0 6.80530489 5.95936586 0.845939036 0"></polygon>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}
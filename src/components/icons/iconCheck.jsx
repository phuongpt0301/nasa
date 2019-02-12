import React, { Component } from 'react';

export default class IconCheck extends Component {
    render() {
        const { color } = this.props;

        return (
            <svg width="22px" height="17px" viewBox="0 0 22 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>EF3575CE-3CCD-490F-B358-BFFD2A8D0EAB</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Form-component" transform="translate(-503.000000, -881.000000)" fill={color || "#000000"} fillRule="nonzero">
                        <g id="Icons" transform="translate(79.000000, 877.000000)">
                            <g id="check" transform="translate(424.000000, 4.000000)">
                                <path d="M6.76013632,15.3010109 L21.0174686,0.175208325 C21.2049769,-0.0237219022 21.5506609,-0.0584205101 21.7895754,0.0977068156 C22.0284899,0.253834141 22.0701628,0.541665159 21.8826545,0.740595386 L7.34194066,16.1670414 C7.01387665,16.5150891 6.41517773,16.4986057 6.11452032,16.1350474 L0.0970419479,8.85864365 C-0.0752021312,8.65036414 -0.0120526263,8.36525726 0.238090315,8.22183961 C0.488233256,8.07842196 0.83064559,8.13100288 1.00288967,8.3392824 L6.76013632,15.3010109 Z" id="Path"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}
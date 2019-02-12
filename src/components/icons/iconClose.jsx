import React, { Component } from 'react';

export default class IconClose extends Component {
    render() {
        const { color } = this.props;

        return (
            <svg width="20px" height="23px" viewBox="0 0 20 23" version="1.1">
                <title>E4106090-14E7-4E8F-BB10-338DB2FFE9C6</title>
                <desc>Created with sketchtool.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Form-component" transform="translate(-444.000000, -879.000000)" fill={color || '#000000'} fillRule="nonzero">
                        <g id="Icons" transform="translate(79.000000, 877.000000)">
                            <g id="close" transform="translate(365.000000, 2.000000)">
                                <path d="M18.9819608,0.192999025 C19.1945109,-0.0431580611 19.5621418,-0.0657198282 19.8030875,0.142605908 C20.0440332,0.350931644 20.0670524,0.711256165 19.8545024,0.947413252 L1.01803916,21.8759665 C0.805489147,22.1121236 0.437858227,22.1346853 0.196912519,21.9263596 C-0.0440331889,21.7180339 -0.0670524471,21.3577094 0.145497567,21.1215523 L18.9819608,0.192999025 Z" id="Path-2"></path>
                                <path d="M0.145497567,0.947413252 C-0.0670524471,0.711256165 -0.0440331889,0.350931644 0.196912519,0.142605908 C0.437858227,-0.0657198282 0.805489147,-0.0431580611 1.01803916,0.192999025 L19.8545024,21.1215523 C20.0670524,21.3577094 20.0440332,21.7180339 19.8030875,21.9263596 C19.5621418,22.1346853 19.1945109,22.1121236 18.9819608,21.8759665 L0.145497567,0.947413252 Z" id="Path-2"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        )
    }
}
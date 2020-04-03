/* eslint-disable react/prop-types */
import React from 'react';
const add = (props) => {
    const {
        fill = '#7c27ca',
        stroke = '#fff'
    } = props;
    return (
        <g>
            <g
                transform="translate(2.5 2.5)"
                fill={fill}
                stroke={fill} // because of shape of image
                strokeWidth="1"
            >
                <rect width="15" height="15" rx="7.5" stroke="none" />
                <rect
                    x="0.5"
                    y="0.5"
                    width="14"
                    height="14"
                    rx="7"
                    fill="none"
                />
            </g>
            <g transform="translate(7.968 7.725)">
                <line
                    y1="4.597"
                    transform="translate(2.177 0)"
                    fill="none"
                    stroke={stroke}
                    strokeLinecap="round"
                    strokeWidth="1.5"
                />
                <line
                    x2="4.353"
                    transform="translate(0 2.298)"
                    fill="none"
                    stroke={stroke}
                    strokeLinecap="round"
                    strokeWidth="1.5"
                />
            </g>
        </g>
    );
};

export default add;

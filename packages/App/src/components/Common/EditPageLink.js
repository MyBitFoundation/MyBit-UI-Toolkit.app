import React from 'react';
import { Tooltip, Icon } from 'antd';

const EditPageLink = ({ editLink = "/" }) => (
    <Tooltip title="Edit this page on GitHub">
        <span><a href={editLink} target="_blank" rel="noopener noreferrer"><Icon type="edit" theme="outlined" style={{ fontSize: '16px', color: "#697b8c" }} /></a></span>
    </Tooltip>
)

export default EditPageLink
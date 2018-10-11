import React from 'react';
import { Table } from 'antd';

import styled from 'styled-components'

const StyledWrapper = styled.div`
    overflow: auto;
    width: 100%;
`

const StyledTable = styled(Table)`
    min-width: 900px;
`

const defaultColumnsConfig = [
    { title: 'Property', dataIndex: 'property', width: 150 },
    { title: 'Description', dataIndex: 'description', width: 300 },
    { title: 'Type', dataIndex: 'type', width: 200, className: 'colored-props-colum' },
    { title: 'Required', dataIndex: 'required', width: 150 },
    { title: 'Default', dataIndex: 'default', width: 100 }
];

const PropsTable = ({ data, columnsConfig = defaultColumnsConfig }) => (
    <StyledWrapper>
        <StyledTable
            columns={columnsConfig} 
            dataSource={data} 
            size="middle" 
            pagination={false}
        />
    </StyledWrapper>
)

export default PropsTable
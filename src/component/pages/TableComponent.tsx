import React from 'react';
import { Table } from 'antd';
import { useMarketStatus } from '../api/useData.tsx';

const TableComponent: React.FC = () => {
    const { isLoading, isError, data } = useMarketStatus();
    console.log("table data", data);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    const columns = [
        {
            title: 'Market Type',
            dataIndex: 'market_type',
            key: 'market_type',
        },
        {
            title: 'Region',
            dataIndex: 'region',
            key: 'region',
        },
        {
            title: 'Primary Exchanges',
            dataIndex: 'primary_exchanges',
            key: 'primary_exchanges',
        },
        {
            title: 'Local Open',
            dataIndex: 'local_open',
            key: 'local_open',
        },
        {
            title: 'Local Close',
            dataIndex: 'local_close',
            key: 'local_close',
        },
        {
            title: 'Current Status',
            dataIndex: 'current_status',
            key: 'current_status',
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            key: 'notes',
        },
    ];

    return <Table dataSource={data?.data?.markets} columns={columns} />;
};

export default TableComponent;

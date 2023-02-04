import shippingRequestsData from "./shipping-requests-data";
import {Space, Table} from "antd";

const columns = [
    {
        title: 'Номер заявки',
        key: 'key',
        dataIndex: 'key',
    },
    {
        title: 'Пункт отправления',
        key: 'from',
        dataIndex: 'from',
        render: (_, record) => (
            <Space size="middle">
                <span>{record.from.lat}</span>
                <span>{record.from.lng}</span>
            </Space>
        ),
    },
    {
        title: 'Пункт назначения',
        key: 'to',
        dataIndex: 'to',
        render: (_, record) => (
            <Space size="middle">
                <span>{record.to.lat}</span>
                <span>{record.to.lng}</span>
            </Space>
        ),
    },
];

const ShippingRequestsTable = () => {
    const onShippingRequestClick = (event) => {
        console.log(event);
    }

    return <Table
        dataSource={shippingRequestsData}
        columns={columns}
        pagination={{
            position: ['none','none']
        }}
        onRow={(record, rowIndex) => {
            return {
                onClick: onShippingRequestClick,
            };
        }}
    />
}

export default ShippingRequestsTable;
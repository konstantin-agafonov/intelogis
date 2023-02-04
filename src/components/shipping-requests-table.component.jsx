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
    const onShippingRequestClick = (event,record,rowIndex) => {
        console.log(event,record,rowIndex);
    }

    return <Table
        dataSource={shippingRequestsData}
        columns={columns}
        pagination={{
            position: ['none','none']
        }}
        bordered={true}
        onRow={(record, rowIndex) => {
            return {
                onClick: (event) => {
                    onShippingRequestClick(event,record,rowIndex);
                },
            };
        }}
    />
}

export default ShippingRequestsTable;
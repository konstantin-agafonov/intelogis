import {Space} from "antd";

const shippingRequestsTableColumnsConfig = [
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

export default shippingRequestsTableColumnsConfig;

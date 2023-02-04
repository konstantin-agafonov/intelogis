import { Table } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import shippingRequestsTableColumnsConfig from './shippingRequestsTable.columns-config';

const ShippingRequestsTable = () => {
    const shippingRequestsData_from_redux = useSelector((state) => state.shippingRequestsTable.requestsData);

    const onShippingRequestClick = (event,record,rowIndex) => {
        console.log(event,record,rowIndex);
    }

    return <Table
        dataSource={shippingRequestsData_from_redux}
        columns={shippingRequestsTableColumnsConfig}
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
import { Table } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import shippingRequestsTableColumnsConfig from './shippingRequestsTable.columns-config';
import {setCurrentRequest} from "../redux/reducers/shippingMap.reducer";
import {shippingSagaActions} from "../sagas/shippingSaga.actions";

const ShippingRequestsTable = () => {
    const shippingRequestsData = useSelector(state => state.shippingRequestsTable.requestsData);
    const dispatch = useDispatch();

    const onShippingRequestClick = (event,record,rowIndex) => {
        dispatch(setCurrentRequest(record));
        dispatch({
            type: shippingSagaActions.FETCH_ROUTE_SAGA,
            payload: record
        });
    }

    return <Table
        dataSource={shippingRequestsData}
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
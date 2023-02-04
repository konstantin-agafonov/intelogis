import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import {Space} from "antd";


const ShippingMap = () => {
    const currentRequest = useSelector(state => state.shippingMap.currentRequest);

    return (
        <>
            <MapContainer
                center={[55.863321,49.224367]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <Space>
                <span>Current request is:</span>
                <span>#{currentRequest.key}</span>
                <span>From: {`${currentRequest.from.lat}, ${currentRequest.from.lng}`}</span>
                <span>To: {`${currentRequest.to.lat}, ${currentRequest.to.lng}`}</span>
            </Space>
        </>
    )
}

export default ShippingMap;
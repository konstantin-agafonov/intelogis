import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Space } from "antd";
import ShippingRoute from "./shippingRoute.component";


const ShippingMap = () => {
    const currentRequest = useSelector(state => state.shippingMap.currentRequest);

    return (
        <>
            <MapContainer
                scrollWheelZoom={false}
                style={{ height: '500px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ShippingRoute />
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
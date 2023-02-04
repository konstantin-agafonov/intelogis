import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';
import { Space } from "antd";
/*import {Marker, Polyline} from "leaflet/dist/leaflet-src.esm";*/


const ShippingMap = () => {
    const currentRequest = useSelector(state => state.shippingMap.currentRequest);
    const currentRoute = useSelector(state => state.shippingMap.currentRoute);

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
                { currentRoute ?
                    <>
                        <Marker position={[currentRequest.from.lat,currentRequest.from.lng]} />
                        <Marker position={[currentRequest.to.lat,currentRequest.to.lng]} />
                        <Polyline pathOptions={{color:'red'}} positions={currentRoute} />
                    </>
                : '' }
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
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

const ShippingMap = () => {
    return (
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
    )
}

export default ShippingMap;
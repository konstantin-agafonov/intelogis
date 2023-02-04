import {Marker, Polyline, useMap} from 'react-leaflet';
import {useSelector} from 'react-redux';

const ShippingRoute = () => {
    const currentRequest = useSelector(state => state.shippingMap.currentRequest);
    const currentRoute = useSelector(state => state.shippingMap.currentRoute);
    const map = useMap();

    if ( currentRoute ) {
        map.fitBounds([
            [Math.min(currentRequest.from.lat,currentRequest.to.lat),Math.min(currentRequest.from.lng,currentRequest.to.lng)],
            [Math.max(currentRequest.from.lat,currentRequest.to.lat),Math.max(currentRequest.from.lng,currentRequest.to.lng)],
        ]);
    }

    return (
        <>
            { currentRoute ?
                <>
                    <Marker position={[currentRequest.from.lat,currentRequest.from.lng]} />
                    <Marker position={[currentRequest.to.lat,currentRequest.to.lng]} />
                    <Polyline pathOptions={{color:'red'}} positions={currentRoute} />
                </>
            : '' }
        </>
    )
}

export default ShippingRoute;
import Axios from "axios";

const fetchRouteFromApi = async ({ from, to }) => {
    const url = `http://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`;
    return await Axios({
        url
    });
};

export default fetchRouteFromApi;

import Axios from "axios";

const fetchRouteFromApi = async ({ from, to }) => {
    const url = `http://router.project-osrm.org/route/v1/driving/${from.lat},${from.lng};${to.lat},${from.lng}?overview=false`;
    return await Axios({
        url
    });
};

export default fetchRouteFromApi;

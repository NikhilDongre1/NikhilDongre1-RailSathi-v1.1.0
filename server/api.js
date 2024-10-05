
export const pnrapi = (pnrNumber) => {
    return `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${pnrNumber}`;
};

export const stationapi = (q, limit) => {
    return `https://api.railwayapi.site/api/v1/stations?q=${q}&limit=${limit}`;
};

export const sourceApiUrl = (source, limit) => {
    return `https://api.railwayapi.site/api/v1/stations?q=${source}&limit=${limit}`;
};

export const destinationApiUrl = (destination, limit) => {
    return `https://api.railwayapi.site/api/v1/stations?q=${destination}&limit=${limit}`;
};

 
export const trainSearchApi = (fromStationCode, toStationCode) => {
    return `https://api.railwayapi.site/api/v1/trainsBtwStations?fromStation=${fromStationCode}&toStation=${toStationCode}&allTrains=true`;
};

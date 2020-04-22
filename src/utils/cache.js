const memoryCache = require('memory-cache');
const { getFromDB } = require('./db');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const getFromDBAndUpdateCache = async () => {
    const data = await getFromDB(displayCount);
    memoryCache.put(`__express__homepage`, data);
    return data;
};

const getCache = () => {
    return async (req, res, next) => {
        //const cache = memoryCache.get(`__express__homepage`);
        // const data = cache ? cache : await getFromDBAndUpdateCache();
        const data = [1, 2, 3];
        res.data = data;
        next();
    };
};

module.exports = getCache;

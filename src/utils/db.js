const MongoClient = require('mongodb').MongoClient;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const db = process.env.DB;

const uri = `mongodb+srv://${username}:${password}@${db}/test?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const getCollection = async () => {
    const client = new MongoClient(uri, options);
    const connect = await client.connect();
    const db = connect.db('news');
    const collection = db.collection('newsListings');
    return {
        client,
        collection,
    };
};

const getFromDB = async amount => {
    const { client, collection } = await getCollection();
    //get latest records
    const found = await collection.find().limit(amount).sort({ $natural: -1 }).toArray();
    client.close();
    return found || [];
};

const insertDB = async array => {
    const { client, collection } = await getCollection();
    const insert =
        array.length > 1
            ? await collection.insertMany(array)
            : await collection.insertOne(...array);
    client.close();
    //return last records first
    return insert.ops.reverse() || [];
};

module.exports = {
    getFromDB,
    insertDB,
};

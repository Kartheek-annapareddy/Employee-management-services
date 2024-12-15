const {MongoClient}=require('mongodb')
const mongoclient=new MongoClient('mongodb://localhost:27017')


async function createConnection(){
   await mongoclient.connect();
   const db=mongoclient.db('employees')
   const collection=db.collection('employee')
   return collection
}
module.export=createConnection;
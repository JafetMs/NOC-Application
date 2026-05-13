import { Collection } from './../node_modules/mongodb/src/collection';
import { envs } from "./config/plugins/envs.plugin.js";
import { LogModel, MongoDatabase } from "./data/mongo/";
import { Server } from "./presentation/server.js";


(async()=>{
    main();
})();


async function main(){

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    })

  
    Server.start();
}
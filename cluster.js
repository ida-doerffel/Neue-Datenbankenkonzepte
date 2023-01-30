import cluster from "cluster";
import http from "http";
import process from 'process';
import { setupMaster } from "@socket.io/sticky";
import { arrayBuffer } from "stream/consumers";

const WORKERS_COUNT = 4;

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`);

    for (let i = 0; i < WORKERS_COUNT.length; i++){
        cluster.fork();
    }

    cluster.on("exit", (worker) => {
        console.log(`Worker ${process.pid} died!`);
        cluster.fork();
    })
    
    const httpServer = http.createServer();
    setupMaster(httpServer, {
        loadBalancingMethod: "least-connection",
    });
    
    const PORT = process.env.PORT || 3456
    
    httpServer.listen(PORT, () => {
        console.log(`Server listening on Port ${Port}`);
    });
} else {
    console.log(`Worker ${process.pid} started`);
}

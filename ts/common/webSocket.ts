export const webSocket:WebSocket = await connect()

function connect() {
    return new Promise((resolve:(value:WebSocket)=>void,reject) => {
        const server = new WebSocket("ws://125.58.83.127:5001");
        server.onopen = function() {
            resolve(server);
        };
        server.onerror = function(err) {
            reject(err);
        };
    });
}
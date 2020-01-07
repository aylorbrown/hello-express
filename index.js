//http module 
const http = require('http');
const PORT = 3000; // variable for the port 

// call createServer 
const server = http.createServer();


// have server listen 
// two variables, second is a function 
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const server = http.createServer();
server.on('request', (req, res) => {
    let filepath = '';
    const url = req.url.split('?')[0];
    if (url === '/') {
        filepath = './index.html';
    } else {
        filepath = `.${url}`;
    }
    const basename = path.basename(filepath);
    const mimeType = mime.getType(basename);
    if (filepath) {
        res.writeHead(
            200,
            {
                'Content-Type': `${mimeType}; charset="utf-8"`,
            }
        );
        const readStream = fs.createReadStream(filepath);
        readStream.pipe(res);
    }
});
server.listen(8080, () => {
    console.log(`Server is listening in port 8080`);
});
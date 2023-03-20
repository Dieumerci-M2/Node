import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname(__filename)
app.use( '/', express.static( path.join( __dirname, './Client' ) ) )
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './Client/html/index.html'));
} );

app.listen(port);
console.log('server started at http://localhost:' + port);

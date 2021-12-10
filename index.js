'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const roleRoutes = require('./routes/roleRoutes');
const accountRoutes = require('./routes/accountRoutes');
const logRoutes = require('./routes/logRoutes');
const detailRoutes = require('./routes/detailRoutes')
const diffRoutes = require('./routes/difficultyRoutes')
const modeRoutes = require('./routes/modeRoutes')
const inventoryRoutes = require('./routes/inventoryRoutes')
const levelRoutes = require('./routes/levelRoutes')
const shopRoutes = require('./routes/shopRoutes')
const rankingRoutes = require('./routes/rankingLevelsRoutes')
const groupRoutes = require('./routes/groupRoutes')
const fbRoutes = require('./routes/feedbackRoutes')
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api', roleRoutes.routes, accountRoutes.routes, logRoutes.routes, detailRoutes.routes, diffRoutes.routes, modeRoutes.routes,
    inventoryRoutes.routes, levelRoutes.routes, shopRoutes.routes, rankingRoutes.routes, groupRoutes.routes, fbRoutes.routes);




app.listen(config.port, () => {
    console.log('app listening on url http://localhost:' + config.port)
});
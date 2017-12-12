module.exports = (express) => {
    const router = express.Router();

    const home = require('./home')(express);
    router.use('/',home);

    const users = require('./users')(express);
    router.use('/user',users);


    return router;
}
module.exports = (express) => {
    const router = express.Router();

    router.get('/',(req, res) => {
        res.json({a: 11});
    });

    return router;
}
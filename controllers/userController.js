const User = require('../models/userModel');

module.exports = {
    index: async (req, res) => {
        try {
            const allUser = await User.find({}).limit(10).sort({
                created_at: 'desc'
            });
            console.log(allUser);
            res.status(200).json(allUser);
        }catch (err){
            res.json({err: err.message});
        }
    },
    addUser: async (req, res) => {
        try{
            const addUser = await new User({
                username: req.body.username,
                password: req.body.password
            });
            addUser.password = bcrypt(addUser.password);
            await addUser.save();
            res.json(addUser);
        }catch (err) {
            res.json({err: err.message})
        }
    }
}
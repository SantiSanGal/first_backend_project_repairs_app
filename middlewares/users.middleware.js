const User = require('../models/users.model');

exports.validUser = (req, res, next) => {
    const { name, email, password, role } = req.body;
    if (!name) {
        return res.status(400).json({
            status: 'error',
            message: 'the name is required',
    });
    }

    if (!email) {
        return res.status(400).json({
            status: 'error',
            message: 'the price is required',
    });
    }

    if (!password) {
        return res.status(400).json({
            status: 'error',
            message: 'the quantity is required',
        });
    }

    if (!role) {
        return res.status(400).json({
            status: 'error',
            message: 'the role is required',
        });
    }
    next();
};

// exports.ValidExistUser = async (req, res, next) => {
//     const { id } = req.params;

//     const user = await User.findOne({
//         where: {
//             id,
//             status: true,
//         },
//     });

//     if (!user) {
//         return res.status(404).json({
//             status: 'error',
//             message: '...'
//         });
//     }

//     req.user = user;

//     next();
// };

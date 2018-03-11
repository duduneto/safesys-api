const User = require('./user')

// const sendErrorsFromDB = (res, dbErrors) => {
//     const
//         errors = []
//     _.forIn(dbErrors.errors, error => errors.push(error.message))
//     return
//     res.status(400).json({ errors })
// }

// const getUser = (email, password) => {
//     const salt = bcrypt.genSaltSync();
//     const passwordHash = bcrypt.hashSync(password, salt);

//     User.find({ email, password }, (err, user) => {
//         if(err){
//             sendErrorsFromDB(res, err);
//         }
//         return user;
//     })
// }
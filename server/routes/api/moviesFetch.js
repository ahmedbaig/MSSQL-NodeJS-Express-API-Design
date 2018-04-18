
// app.get('/api/account/logout', cors(), (req, res, next) => {
//     // GET TOKEN

//     const { query } = req;
//     const { token } = query; 
//     // ?token = test

//     // VERIFY TOKEN IS ONE OF A KIND

//     UserSession.findOneAndUpdate({
//         _id: token,
//         isDeleted: false
//     }, {
//         $set:{
//             "isDeleted":true
//         }
//     }, null, 
//     (err, sessions) => {
//         if(err){
//             return  res.send({
//                 success: false,
//                 message: 'Error: Invalid'
//             });
//         }else {
//             return res.send({
//                 success: true, 
//                 message: 'Good' 
//             });
//         }
//     });
// });

// app.post('/api/account/signup', cors(), (req, res, next) => {
//     const { body } = req;
//     const {
//         firstName,
//         lastName, 
//         password
//     } = body;
//     let {
//         email,
//     } = body;
    
//     if (!firstName){
//         return res.send({
//             success: false,
//             message: 'Error: first name cannot be blank'
//         })
//     }

//     if (!lastName){
//         return res.send({
//             success: false,
//             message: 'Error: last name cannot be blank'
//         })
//     }

//     if (!email){
//         return res.send({
//             success: false,
//             message: 'Error: email cannot be blank'
//         })
//     }

//     if (!password){
//         return res.send({
//             success: false,
//             message: 'Error: password cannot be blank'
//         })
//     }

//     email = email.toLowerCase();

//     // STEPS
//     // 1. verify email doesn't exit
//     // 2. Save

//     User.find ({
//         email: email 
//     }, (err, previousUsers) => {
//         if(err){
//             return res.send({
//                 success: false,
//                 message: 'Error: Server error'
//             }); 
//         } else if (previousUsers.length > 0){
//             return res.send({
//                 success: false,
//                 message: 'Error: Account already exists.'
//             });
//         } 

//         // Save the new user
//         const newUser = new User();
//         newUser.email = email;
//         newUser.firstName = firstName;
//         newUser.lastName = lastName;
//         newUser.password = newUser.generateHash(password);
//         newUser.save((err, user) => {
//             if(err){
//                 return res.send({
//                     success: false,
//                     message: 'Error: Server error'
//                 }); 
//             }
//             return res.send({
//                 success: true,
//                 message: 'Signed Up'
//             });
//         });
//     });

// });
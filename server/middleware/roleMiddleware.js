// // middleware/roleMiddleware.js
// module.exports = function roleMiddleware(allowedRoles) {
//     return (req, res, next) => {
//       const userRole = req.user?.role; // assumes you've decoded JWT and attached `user` to req
  
//       if (!allowedRoles.includes(userRole)) {
//         return res.status(403).json({ message: 'Access denied' });
//       }
//       next();
//     };
//   };
  
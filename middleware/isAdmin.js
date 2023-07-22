// const isAdmin = (req, res, next) => {
//   const nonSecurePaths = ["/", "/about", "/contact"];
//   if (nonSecurePaths.includes(req.path)) {
//     return next();
//   }

//   const currentUser = req.session.currentUser;

//   if (!currentUser || currentUser.isAdmin !== true) {
//     return res.redirect("/");
//   }
//   next();
// };

// module.exports = isAdmin;

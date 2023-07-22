const isAdmin = (req, res, next) => {
const currentUser = req.session.currentUser;

  if (!currentUser || currentUser.admin !== true) {
    return res.redirect("/auth/login");
  }
  next();
};

module.exports = isAdmin;

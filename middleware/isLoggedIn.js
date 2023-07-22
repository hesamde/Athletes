const isLoggedIn = (req, res, next) => {
  // Check if the user is logged in
  if (req.session.currentUser) {
    // User is logged in, proceed to the next middleware
    next();
  } else {
    // User is not logged in, redirect to the login page or handle the unauthorized access
    res.redirect("/login");
  }
};
// Export the isLoggedIn function
module.exports = isLoggedIn;

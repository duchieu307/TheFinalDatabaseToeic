module.exports = (req, res, next) => {
  console.log("da vao mdw", req.user.admin);
  if (!(req.user.admin)) {
    return res.redirect('http://localhost:5000/adminlogin');
  }
  next();
};

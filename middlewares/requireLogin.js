module.exports = (req, res, next) => {
  console.log("da vao mdw", req.user);
  if (!req.user) {
    console.log("user ", req.user);
    return res.redirect('http://localhost:5000/login');
  }
  next();
};

exports.renderHomePage = (req, res) => {
  console.log(`${req.method} on route ${req.path}`);
  res.render('home', {
    activePage: "home"});
};

exports.renderLogin = (req, res) => {
  console.log(`${req.method} on route ${req.path}`);
  res.render('login');
}
exports.index = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

exports.simulation = (req, res, next) => {
  res.render('simulation', { title: 'Express' });
};

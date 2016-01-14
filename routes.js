exports.index = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

exports.simulation = (req, res, next) => {
  res.render('simulation', { title: 'Express' });
};

exports.contact = (req, res, next) => {
  res.render('contact', { title: 'Express' });
};

exports.nmso = (req, res, next) => {
  res.render('nmso', { title: 'Express' });
};

exports.remote_sensing = (req, res, next) => {
  res.render('remote_sensing', { title: 'Express' });
};

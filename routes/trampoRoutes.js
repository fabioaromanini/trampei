const mongoose = require('mongoose');
const Trampo = mongoose.model('users');

module.exports = app => {
  app.get('/api/trampos', async (req, res) => {
    const quantity = req.query.quantity;

    let trampos;
    if (req.query.userId) {
      trampos = await Trampo.find({ userId: userId }).limit(quantity);
    } else {
      trampos = await Trampo.find().limit(quantity);
    }

    res.send(trampos);
  });

  app.post(
    '/api/trampos',
    async (req, res) => {
      const { trampo, when, where, contact, value } = req.body;

      const newTrampo = await new Trampo({
        userId: req.user.id,
        userName: req.user.name,
        trampo: trampo,
        when: when,
        where: where,
        contact: contact,
        value: value
      }).save();

      res.send();
    }
  );
};

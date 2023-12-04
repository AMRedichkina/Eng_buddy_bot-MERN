function homepage(req, res) {
    res.render('homepage', {title: 'Chat'});
};

module.exports = homepage;
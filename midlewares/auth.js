const verifyAdmin = (req, res, next) => {
    req.session.idUser && req.session.admin == 1
    ? (next())
    :res.redirect('/login');
}

const verify = (req, res, next) => {
    req.session.idUser
    ? (next())
    :res.redirect('/login');
}

module.exports = {verifyAdmin,verify};
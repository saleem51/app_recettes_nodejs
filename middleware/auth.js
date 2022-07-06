module.exports = {
    ensureAuthenticated : function (req, res, next ) {
      if(req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Veuillez vous connecter pour voir cette ressource');
      res.redirect('/user/login');
    },
    forwardAuthenticated: function(req, res, next) {
        if(!req.isAuthenticated()){
            return next();
        }
        res.redirect('/dashboard');
    }
};
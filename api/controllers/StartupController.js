/**
 * StartupController
 *
 * @description :: Server-side logic for managing startups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index : function(req,res,next){
		return res.redirect('/');
	}
};

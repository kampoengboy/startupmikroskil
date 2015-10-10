/**
 * StartupController
 *
 * @description :: Server-side logic for managing startups
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index : function(req,res,next){
		return res.redirect('/');
	},
	show : function(req,res,next){
		if(typeof req.param('name')=="undefined")
				return res.redirect('/');
		Startup.findOne({'name':req.param('name')}, function(err,startup){
				if(err) return next(err);
				if(!startup) return res.redirect('/');
				var tmp_name = startup.name;
				tmp_name = tmp_name.charAt(0).toUpperCase() + tmp_name.slice(1);
				return res.view({
						startup : startup,
						title : tmp_name + ' | Startup Mikroskil',
						image : 'http://startupmikroskil.herokuapp.com/images/kolexia/logo.jpg',
						description : startup.description,
						url : 'http://www.startupmikroskil.herokuapp.com/startup/'+startup.name
				});
		});
	}
};

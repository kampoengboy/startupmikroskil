/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index : function(req,res,next){
		var s = req.param('q');
		if(typeof req.param('q')=="undefined")
			s = '';
		var usrObj = {
			s : s
		}
		res.view({
			obj : usrObj,
			title : 'Startup Mikroskil | Search',
			image : '',
			description : 'Where All Dreams becomes True',
			url : 'http://www.startupmikroskil.herokuapp.com/search',
		});
	}
};

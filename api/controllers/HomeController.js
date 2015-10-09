/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index : function(req,res,next){
		var page;
		if(typeof req.param('page')=="undefined")
			page = 1;
		else
			page = parseInt(req.param('page'));
		var myQuery = Post.find();
		myQuery.sort('createdAt DESC');
		myQuery.exec(function(err,posts){
			if(err) return next(err);
			var post = [];
			if(page<=0)
				return res.redirect('/');
			for(var i = (3*page)-3; i<posts.length;i++)
			{
				post.push(posts[i]);
				if(post.length==3)
					break;
			}
			return res.view({
				title : 'Startup Mikroskil',
				image : '',
				description : 'Where All Dreams becomes True',
				url : 'http://www.startupmikroskil.herokuapp.com',
				post : post,
				page : page,
				allpost : posts.length
			});
		});
	},
	thestartups : function(req,res,next){
		var page;
		if(typeof req.param('page')=="undefined")
			page = 1;
		else
			page = parseInt(req.param('page'));
		var myQuery = Startup.find();
		myQuery.sort('createdAt DESC');
		myQuery.exec(function(err,startups){
			if(err) return next(err);
			var startup = [];
			if(page<=0)
				return res.redirect('/');
			for(var i = (3*page)-3; i<startups.length;i++)
			{
				startup.push(startups[i]);
				if(startup.length==3)
					break;
			}
			return res.view({
				title : 'Startup Mikroskil | The Startups',
				image : '',
				description : 'Where All Dreams becomes True',
				url : 'http://www.startupmikroskil.herokuapp.com/thestartups',
				startup : startup,
				page : page,
				allpost : startups.length
			});
		});
	},
	about : function(req,res,next){
			return res.view({
				title : 'Startup Mikroskil | About Us',
				image : '',
				description : 'Where All Dreams becomes True',
				url : 'http://www.startupmikroskil.herokuapp.com/about'
			});
	},
	contact : function(req,res,next){
			return res.view({
				title : 'Startup Mikroskil | Contact Us',
				image : '',
				description : 'Where All Dreams becomes True',
				url : 'http://www.startupmikroskil.herokuapp.com/contact'
			});
	},
	applystartup : function(req,res,next){
			return res.view({
				title : 'Startup Mikroskil | Apply Your Startup',
				image : '',
				description : 'Where All Dreams becomes True',
				url : 'http://www.startupmikroskil.herokuapp.com/applystartup'
			});
	},
};

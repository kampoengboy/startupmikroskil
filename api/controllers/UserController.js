/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var nodemailer = require('nodemailer');
module.exports = {
	sendemail : function(req,res,next){
			 var usrObj = {
				name : req.param('name'),
				email : req.param('email'),
				message : req.param('message')
			 }
			 if(typeof req.param('name')=="undefined" || typeof req.param('email')=="undefined" || typeof req.param('message')=="undefined")
			 {
				 var info = ['Ada kesalahan dalam pengiriman pesan. Mohon diulangi kembali..']

				 // Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
				 // the key of usernamePasswordRequiredError
				 req.session.flash = {
					 err: info,
				 }

				 res.redirect('/contact');
				 return;
			 }
			 var transporter = nodemailer.createTransport({
				 service:'Gmail',
				 auth:{
					 user:'tunetify@gmail.com',
					 pass:'kampoengboy@1994'
				 }
				});
				var MailOptions = {
								from:'Tunetify<tunetify@gmail.com>',
								to : 'mike.visualsoft@gmail.com',
								subject : 'Email Startup Mikroskil',
								html : 'Hai, Admin. Seseorang menghubungimu dengan informasi sebagai berikut : <br><br>Nama : '+usrObj.name+'<br>Email : '+ usrObj.email +'<br>Pesannya adalah : <br><pre>'+usrObj.message+'</pre>'
						};
				transporter.sendMail(MailOptions,function(error,info){
							if (error) {
								console.log(error);
							} else {
								console.log('Message sent: '+info.response);
							}
				});
				var info = ['Pesan Anda telah dikirimkan kepada kami. Terima Kasih']

				// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
				// the key of usernamePasswordRequiredError
				req.session.flash = {
					success: info,
				}

				res.redirect('/contact');
				return;
	},
	applystartup : function(req,res,next){
			 var usrObj = {
				name : req.param('name'),
				phone : req.param('phone'),
				url : req.param('url'),
				email : req.param('email'),
				description : req.param('description'),
			 }
			 if(typeof req.param('file_name')=="undefined")
			 		usrObj.filename = "";
			 else
			 		usrObj.filename = req.param('file_name');
			 if(typeof req.param('file_url')=="undefined")
	 			 	usrObj.fileurl = "";
	 		 else
	 			 	usrObj.fileurl = req.param('file_url');
			 if(typeof req.param('name')=="undefined" || typeof req.param('email')=="undefined" || typeof req.param('description')=="undefined" || typeof req.param('url')=="undefined" || typeof req.param('phone')=="undefined")
			 {
				 var info = ['Ada kesalahan dalam pengiriman pesan. Mohon diulangi kembali..']

				 // Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
				 // the key of usernamePasswordRequiredError
				 req.session.flash = {
					 err: info,
				 }

				 res.redirect('/applystartup');
				 return;
			 }
			 var transporter = nodemailer.createTransport({
				 		service:'Gmail',
						auth:{
							user:'tunetify@gmail.com',
							pass:'kampoengboy@1994'
						}
				});
				if(usrObj.fileurl!="")
				{
						var MailOptions = {
										from:'Tunetify<tunetify@gmail.com>',
										to : 'mike.visualsoft@gmail.com',
										subject : 'Apply Startup',
										html : 'Hai, Admin. Seseorang mengirimkan profil startupnya dengan informasi sebagai berikut : <br><br>Nama Startup: '+usrObj.name+'<br>Website URL : '+ usrObj.url+'<br>Email : '+ usrObj.email +'<br>No. Telepon : '+ usrObj.phone+'<br>Deskripsi Startupnya adalah : <br><pre>'+usrObj.description+'</pre>',
										attachments : [
											{
													filename : usrObj.filename,
													path : usrObj.fileurl
											}
										]
						};
				}
				else {
					var MailOptions = {
									from:'Tunetify<tunetify@gmail.com>',
									to : 'mike.visualsoft@gmail.com',
									subject : 'Apply Startup',
									html : 'Hai, Admin. Seseorang mengirimkan profil startupnya dengan informasi sebagai berikut : <br><br>Nama Startup: '+usrObj.name+'<br>Website URL : '+ usrObj.url+'<br>Email : '+ usrObj.email +'<br>No. Telepon : '+ usrObj.phone+'<br>Deskripsi Startupnya adalah : <br><pre>'+usrObj.description+'</pre>',
					};
				}
				transporter.sendMail(MailOptions,function(error,info){
							if (error) {
								console.log(error);
							} else {
								console.log('Message sent: '+info.response);
							}
				});
				var info = ['Informasi tentang Startup Anda telah dikirimkan kepada kami. Kami akan memprosesnya dalam waktu 1 x 24 jam. Terima Kasih']

				// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
				// the key of usernamePasswordRequiredError
				req.session.flash = {
					success: info,
				}

				res.redirect('/applystartup');
				return;
	}
};

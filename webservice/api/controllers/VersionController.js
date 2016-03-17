/**
 * VersionController
 *
 * @description :: Server-side logic for managing Documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function(req, res, next) {
    console.log("list request called");
		Document.find().exec(function(err, docs){
			if(err) {
				return next(err);
			}
			return res.json(docs);
		});
	},

	get: function(req, res, next){
		var docId = req.param('id');
		Document.findById(docId).exec(function(err, docs){
			if(err) {
				return next(err);
			}
			if(!docs || docs.length === 0) {
				res.status(404);
				res.json({
					error: "doc is not found"
				})
			}
			var doc = docs[0];
			return res.json(doc);

		});
	},

	post: function(req, res, next) {
		var params = {
			name: req.param('name'),
			content: req.param('content')
		};
		Document.create(params, function(err, doc){
			if(err) {
				return next(err);
			}
			res.status(201);
			res.json(doc);
		});
	},

	put: function(req, res, next) {
		var docId = req.param('id');
		var params = {
			name: req.param('name'),
			content: req.param('content')
		};
		Document.update(docId,params).exec(function (err, updated){
			if(err){
				return next(err);
			}
			return res.ok();
		});
	},

	delete: function(req, res, next){
		var docId = req.param('id');
		Document.destroy(docId).exec(function (err) {
			if(err) {
				return res.negotiate(err);
			}

			return res.ok();
		});

	},


};
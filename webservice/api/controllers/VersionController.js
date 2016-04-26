/**
 * VersionController
 *
 * @description :: Server-side logic for managing Documents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function(req, res, next) {
    var docId = req.param('docid');
    console.log("version list request called");

    Document.findById(docId)
    .populate('versions',{share: 1 })
    .exec(function(err, docs){
			if(err) {
				return next(err);
			}
			if(!docs || docs.length === 0) {
				res.status(404);
				res.json({
					error: "doc is not found"
				})
			}
      var versionn =docs[0].versions;
      return res.json(docs[0].versions);
  	});
	},

  list_user: function(req, res, next) {
    var userId = req.param('userid');
    var docId = req.param('docid');

    // Document.find({user: userId})
    // .populate('versions',{user: userId})
    Version.find({docu:docId, user: userId})
    .exec(function(err, versions){
      console.log("version list_user request called");
			if(err) {
				return next(err);
			}
      return res.json(versions);
  	});
	},

  get_user: function(req, res, next){
    var userId = req.param('userid');
		var docId = req.param('docid');
    var versionId = req.param('vid');
    console.log("VersionController.get_user_version");
    Version.find({id: versionId, docu: docId, user: userId}).exec(function(err, version_objects){

      if(err) {
				return next(err);
			}
			if(!version_objects || version_objects.length === 0) {
				res.status(404);
				return res.json({
					error: "this version is not found"
				})
			}

			return res.json(version_objects[0]);
    });
	},

	get: function(req, res, next){
		var docId = req.param('docid');
    var versionId = req.param('vid');

    Version.find({id: versionId, docu: docId}).exec(function(err, version_objects){

      if(err) {
				return next(err);
			}
			if(!version_objects || version_objects.length === 0) {
				res.status(404);
				return res.json({
					error: "this version is not found"
				})
			}

			return res.json(version_objects[0]);
    });
	},

	post: function(req, res, next) {
    var docId = req.param('docid');
		var params = {
			name: req.param('name'),
			content: req.param('content'),
      docu:docId
		};
    Document.findById(docId).exec(function(err, docs){
			if(err) {
				return next(err);
			}
			if(!docs || docs.length === 0) {
				res.status(404);
				res.json({
					error: "doc is not found, you cannot create a version of this document"
				})
			}

  		Version.create(params).exec(function(err, version){
  			if(err) {
  				return next(err);
  			}
  			res.status(201);
          console.log("version post request called");
  			res.json(version);
  		});
    });
	},

  post_user: function(req, res, next) {
    var userId = req.param('userid');
    var docId = req.param('docid');
		var params = {
			name: req.param('name'),
			content: req.param('content'),
      docu:docId,
      user:userId
		};

		Version.create(params).exec(function(err, version){
			if(err) {
				return next(err);
			}

      // Document.put({id: docId}, {users:userId}).exec(function (err, updated){
  		// 	if(err) {
  		// 		return next(err);
  		// 	}
  		// 	res.status(201);
      //   console.log("aaaaa");
      //   console.log(updated);
  		// 	res.ok();
  		// });

      console.log("version_user post request called");
			return res.json(version);
		});
	},

  put_user: function(req, res, next) {
    var userId = req.param('userid');
		var docId = req.param('docid');
    var versionId = req.param('vid');
		var params = {
			name: req.param('name'),
			content: req.param('content'),
      share: req.param('share'),
		};

		Version.update({id: versionId, docu: docId, user: userId},params).exec(function (err, updated){
			if(err) {
				return next(err);
			}
			res.status(201);
			return res.ok();
		});
	},

	put: function(req, res, next) {
		var docId = req.param('docid');
    var versionId = req.param('vid');
		var params = {
			name: req.param('name'),
			content: req.param('content'),
      share: req.param('share'),
		};

		Version.update({id: versionId, docu: docId},params).exec(function (err, updated){
			if(err) {
				return next(err);
			}
			res.status(201);
			return res.ok();
		});
	},

	delete: function(req, res, next){
		var docId = req.param('docid');
    var versionId = req.param('vid');
    Document.findById(docId)
    .populate('versions')
    .exec(function(err, docs){

			if(err) {
				return next(err);
			}

			if(!docs || docs.length === 0) {
				res.status(404);
				res.json({
					error: "doc is not found"
				})
			}

      Version.destroy(versionId).exec(function (err) {
        if(err) {
          return res.negotiate(err);
        }

        return res.ok();
      });
  	});
	},

  delete_user: function(req, res, next){
    var userId = req.param('userid');
		// var docId = req.param('docid');
    var versionId = req.param('vid');
    Version.destroy({id: versionId, user: userId}).exec(function (err) {
      if(err) {
        return res.negotiate(err);
      }
      return res.ok();
    });
	},
};

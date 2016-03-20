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
      var versionn =docs[0].versions;
      // if(versionn == null){
      //   Version.create({
      //     name: docs[0].name,
      //     content:docs[0].content,
      //     docu:docs[0].id
      //   }).exec(function(err,version){
      //     return res.json(version);
      //   })
      //
      // }
      return res.json(docs[0].versions);
  	});
	},

	get: function(req, res, next){
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
      var versionn = docs[0].versions;
      
      console.log("-------");
      console.log(version.docu);
      Version.findById(versionId).exec(function(err, versionn ){

        if(err) {
  				return next(err);
  			}
  			if(!versionn || versionn.length === 0) {
  				res.status(404);
  				res.json({
  					error: "this version is not found"
  				})
  			}


        if(!version.docu){
          error: "this version is not found"
        }
  			return res.json(version);
      });
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

	put: function(req, res, next) {
		var docId = req.param('docid');
    var versionId = req.param('vid');
		var params = {
			name: req.param('name'),
			content: req.param('content'),
      docu:docId
		};
    Document.findById(docId)
    .populate('versions')
    .exec(function(err, docs){
			if(err) {
				return next(err);
			}
			if(!docs || docs.length === 0) {
				res.status(404);
				res.json({
					error: "doc is not found, you cannot update a version of this document"
				})
			}
      var versionn = docs[0].versions;

  		Version.update(versionId,params).exec(function (err, updated){
  			if(err) {
  				return next(err);
  			}
  			res.status(201);
  			return res.ok();
  		});
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
};

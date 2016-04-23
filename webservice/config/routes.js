/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'post   /api/doc':     'DocumentController.post',
  'get    /api/doc/:docid': 'DocumentController.get',
  'get    /api/doc':     'DocumentController.list',
  'put    /api/doc/:docid': 'DocumentController.put',
  'delete /api/doc/:docid': 'DocumentController.delete',

  'get    /api/doc/:docid/version': 'VersionController.list',
  'get    /api/doc/:docid/version/:vid': 'VersionController.get',
  'post   /api/doc/:docid/version': 'VersionController.post',
  'put    /api/doc/:docid/version/:vid': 'VersionController.put',
  'delete /api/doc/:docid/version/:vid': 'VersionController.delete',

  // User Authentication
  'post   /api/auth/login': 'AuthController.login',
  'post   /api/auth/logout': 'AuthController.logout',
  'post   /api/auth/register': 'AuthController.register',
  'post   /api/auth/reset': 'AuthController.reset',
  'post   /api/auth/revoke_token': 'AuthController.revoke_token',

  //user doc
  'get    /api/:userid/docs/:docid': 'DocumentController.get_user',
  'get    /api/:userid/docs':     'DocumentController.list_user',

  //user version
  'get    /api/:userid/docs/:docid/version': 'VersionController.list_user',
  'get    /api/:userid/docs/:docid/version/:vid': 'VersionController.get_user',
  'post   /api/:userid/docs/:docid/version': 'VersionController.post_user',
  'put    /api/:userid/docs/:docid/version/:vid': 'VersionController.put_user',
  'delete /api/:userid/docs/:docid/version/:vid': 'VersionController.delete_user',
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

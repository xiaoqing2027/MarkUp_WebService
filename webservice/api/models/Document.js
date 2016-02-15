/**
 * Document.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//export means making current file globally availabale.

module.exports = {
  autoCreatedAt: true,
  autoUpdatedAt: true,
  schema: true,
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    content:{
      type: 'string',
      required: true
    }
  }
};

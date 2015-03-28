var extractData           = require('./request').extractData;
var checkStringParameters = require('./request').checkStringParameters;
var checkPassword         = require('./request').checkPassword;
var checkRevision         = require('./request').checkRevision;
var getUserdoc            = require('./request').getUserdoc;
var getSenderdoc          = require('./request').getSenderdoc;
var reply                 = require('./response').reply;
var replyError            = require('./response').replyError;
var updateDoc             = require('./db').updateDoc;
var updateGems            = require('./db').updateGems;

exports.handle = function(req, res) {
  // Pass request through appropriate filters before performing end goal processing.
  extractData(req, 256, function(data) {
    checkStringParameters(data, ['id', 'rev', 'pw', 'recipient'], req, function() {  //change name
      getUserdoc(data.id, res, function(userDoc) {
        checkPassword(userDoc, data.pw, res, function() {
          checkRevision(userDoc, data.rev, res, function() {
            getUserdoc(data.recipient, res, function(recipientDoc){
              processRequest(userDoc, res, recipientDoc);
            });
          });
        });
      });
    });
  });
};

function processRequest(userDoc, res, recipientDoc) {
  if (userDoc.gems <= 0) {
    return reply(res, { 'insufficientBalance': true });
  } else if (userDoc.id === recipientDoc.id) {
    return reply(res, { 'yourself': true });
  } else {
  ++recipientDoc.gems;
  updateGems(recipientDoc, function(err, result) {
    if (err) {
      console.log(err.message);
      replyError(res);
    } else if (result.old) {
      processOld(recipientDoc, res);
    } else if (result.rev) {
      recipientDoc.rev = result.rev;
      --userDoc.gems;
      updateDoc(userDoc, function(err, result) {
        if (err) {
          console.log(err.message);
          replyError(res);
        } else if (result.old) {
          processOld(userDoc, res);
        } else if (result.rev) {
          userDoc.rev = result.rev;
          reply(res, { doc: userDoc });
        } else {
          console.log('logic error');
          replyError(res);
        }
      });
      reply(res, { doc: userDoc });
    } else {
      console.log('logic error');
      replyError(res);
    }
  });
  console.log('The sender '+userDoc.id+' has this many gems left: '+userDoc.gems);
  }
};

function processOld(oldDoc, res) {
  // Get a fresh version of the doc and return it to the client.
  checkPassword(oldDoc.id, oldDoc.pw, res, function(newDoc) {
    reply(res, { old: true, doc: newDoc });
  });
}


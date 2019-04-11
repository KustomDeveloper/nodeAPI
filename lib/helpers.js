/*
*  Helpers for various tasks
*/

// Dependencies
const crypto = require('crypto');
const config = require('./config');

// Container for all the helpers
const helpers = {};

// Create a SHA256 hash
helpers.hash = function(str) {
    if(typeof(str) == 'string' && str.length > 0) {
        var hash = crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
        return hash;
    } else {
        return false; 
    }
}

// Parse a JSON string to an object in all casess without throwing an error
helpers.parseJsonToObject = function(str) {
    try{
        var obj = JSON.parse(str);
        return obj;
    } catch(e) {
        return {};
    }
}

//Create string of random alphanumeric characters, of a given length
helpers.createRandomString = (strLength) => {
    var strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
    if(strLength) {
        // Define all the possible characters that could go into a string
        var possibleCharacters = abcdefghijklmnopqrstuvwxyz0123456789;

        // Start the final string
        var str = '';
        for(i = 1; i <= strLength; i++) {
            // Get a random character from the possibleCharacters string
                  
        }
    } else {
        return false;
    }
}













// Export the module
module.exports = helpers;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
/** Make path only contains unique keys*/
function uniqueArrayObjectsPlugin(schema) {
    schema.pre('save', function (next) {
        var doc = this;
        schema.eachPath(function (pathName) {
            var pathData = schema.path(pathName);
            if (pathData.options.uniqueByKey && pathData.options.uniqueByKey.keyName) {
                doc[pathName] = lodash_1.uniqBy(doc[pathName], pathData.options.uniqueByKey.keyName);
            }
        });
        next();
    });
}
exports.uniqueArrayObjectsPlugin = uniqueArrayObjectsPlugin;

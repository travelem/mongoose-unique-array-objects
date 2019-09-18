"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotProp = __importStar(require("dot-prop"));
var lodash_1 = require("lodash");
function uniqueArrayObjectsPlugin(schema) {
    schema.pre('save', function (next) {
        var doc = this;
        schema.eachPath(function (pathName, type) {
            var schemaType = type;
            if (schemaType.options.uniqueByKey && schemaType.options.uniqueByKey.keyName) {
                var value = dotProp.get(doc.toJSON(), pathName);
                if (lodash_1.isArray(value)) {
                    var uniqueResults = lodash_1.uniqBy(value, schemaType.options.uniqueByKey.keyName);
                    dotProp.set(doc, pathName, uniqueResults);
                }
            }
        });
        next();
    });
}
exports.uniqueArrayObjectsPlugin = uniqueArrayObjectsPlugin;

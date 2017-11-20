cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com-badrit-base64.Base64",
        "file": "plugins/com-badrit-base64/www/Base64.js",
        "pluginId": "com-badrit-base64",
        "clobbers": [
            "navigator.Base64"
        ]
    },
    {
        "id": "com.synconset.imagepicker.ImagePicker",
        "file": "plugins/com.synconset.imagepicker/www/imagepicker.js",
        "pluginId": "com.synconset.imagepicker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-badrit-base64": "0.2.0",
    "com.synconset.imagepicker": "2.1.8"
};
// BOTTOM OF METADATA
});
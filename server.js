'use strict';
//require('tingyun')

global.Configs = require('./config')(__dirname);
/*var APP_ID = process.env.LC_APP_ID || Configs.av_app_id;
var APP_KEY = process.env.LC_APP_KEY || Configs.av_app_key;
var MASTER_KEY = process.env.LC_APP_MASTER_KEY || Configs.av_master_key;
AV.initialize(APP_ID, APP_KEY, MASTER_KEY);
// 如果不希望使用 masterKey 权限，可以将下面一行删除
AV.Cloud.useMasterKey();
AV.Promise._isPromisesAPlusCompliant = false;*/

//global.AV = require('leanengine');

var clc = require('cli-color');
var util = require("util");

global.logger = require('tracer').colorConsole({
    /*format: "[{{timestamp}}]" + " <{{title}}> " + "{{message}}" + " ({{file}}:{{line}})",*/
    format: [
        util.format("%s %s %s %s", "{{title}}", clc.blackBright("{{timestamp}}"), "{{message}}", clc.blackBright("({{file}}:{{line}})")),
        {
        	error:util.format("%s %s %s %s\n%s", "{{title}}", clc.blackBright("{{timestamp}}"), "{{message}}", clc.blackBright("({{file}}:{{line}})"), "{{stack}}")
        }
    ],
    dateformat: "HH:MM:ss",
    preprocess: function(data) {
        data.title = data.title.toUpperCase();
        switch (data.level) {
            case 0: //log
                data.title = util.format(clc.blackBright("[%s]"), data.title)
                break;
            case 1: //trace
                data.title = util.format(clc.yellowBright("[%s]"), data.title)
                break;
            case 2: //debug
                data.title = util.format(clc.greenBright("[%s]"), data.title)
                break;
            case 3: //info
                data.title = util.format(clc.blueBright("[%s]"), data.title)
                break;
            case 3: //warn
                data.title = util.format(clc.magentaBright("[%s]"), data.title)
                break;
            case 5: //error
                data.title = util.format(clc.redBright("[%s]"), data.title)
                break;
        };
    },
    transport: function(data) {
        console.log(data.output);
    }
});


//global.encode = require('./libs/encode');
//global.moment = require('moment');
//global.package = require('package')("./");

var http = require('http'),
    app = require('./app');

var server = http.createServer(app);
var PORT = parseInt(process.env.LC_APP_PORT || Configs.port);
server.listen(PORT, function() {
    logger.log('Server is running, port:', PORT);
});

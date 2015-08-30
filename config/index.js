var path = require('path');
module.exports = function(root) {
    return {
        host: "http://hostseditor.avosapps.com",
        port: 3000,

        av_app_id: "sgyqr6wbvjgvlwwsntucqv7ip3q6gxfi30bxdgb9ui8ttxgs",
        av_app_key: "g1ivn87jykoqk5o05bi6edw8uyqveix1af66n0dt68xkk70q",
        av_master_key: "27amqhc8h3vttlq3s36v623m0gwgmhdg6qx6g6xs3hw8jpdb",

        qiniu_ak: 'YeL_Hx8uhZGDGqn83wo3yiP0ZuF0my5j-AcH5fPd',
        qiniu_sk: '68WYcW2q97RCV7rz8XWaHvyCLkITd_NaIbxq7TbF',
        qiniu_returnUrl: null,

        secret: "1f&v(a*s8fiu7&^h$af6$kf4f7q",

        locals: {
            title: "Quotes to share",
            strftime: require('strftime'),
            email: 'dphdjy@q2s.com'
        },
        locales: {
            directory: root + '/config/locales/',
            locales: ['zh-CN', 'zh-TW', 'Jpan'],
            modes: ['cookie', 'header', 'subdomain', 'query']
        }
    };
};

var qiniu = require('qiniu');
var express = require('express');
var config = require('./config.js');
var app = express();

var mac = new qiniu.auth.digest.Mac(config.AccessKey, config.SecretKey);
var options = {
    scope: config.Bucket,
    deleteAfterDays: 7,
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var bucketManager = new qiniu.rs.BucketManager(mac, null);

app.engine('html', require('ejs').renderFile);

app.use('/toolbar.js', express.static(__dirname + '/toolbar.js'));
app.use('/toolbar.css', express.static(__dirname + '/toolbar.css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/plupload', express.static(__dirname + '/plupload'));
app.use('/qiniu.js', express.static(__dirname + '/qiniu.js'));

app.get('/uptoken', function(req, res, next) {
    var token = putPolicy.uploadToken(mac);
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token
        });
    }
});

app.get('/', function(req, res) {
    res.render('test.html', {
        domain: config.Domain,
        uptoken_url: config.UptokenUrl
    });
});

app.get('/delete', function(req, res) {
    var params = req.query;
    if (params.bucket && params.key) {
        deleteFile(params.bucket, params.key, function(err, respBody, respInfo) {
            if (err) {
                console.log('Delete file failed! error: ', err);
                //throw err;
                res.send(err);
            } else {
                console.log('Delete file result code: ', respInfo.statusCode);
                res.send(respInfo.statusCode);
            }
        });
    }
});

var deleteFile = function(bucket, key, callback) {
    bucketManager.delete(bucket, key, callback);
}

app.listen('3000', function() {
    console.log(
        '▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽  Demos  ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽ ▽');
    console.log(
        ' ▹▹▹▹▹▹▹▹▹▹▹▹▹▹▹▹  Upload: http://127.0.0.1:%d   ◁ ◁ ◁ ◁ ◁ ◁ ◁',
        3000);
    console.log(
        ' ▹▹▹▹▹▹▹  Multiple upload: http://127.0.0.1:%d/multiple  ◁ ◁ ◁',
        3000);
    console.log(
        ' ▹▹▹▹▹▹▹  Formdata upload: http://127.0.0.1:%d/formdata  ◁ ◁ ◁',
        3000);
    console.log(
        ' ▹▹▹▹▹▹▹  Up  Performance: http://127.0.0.1:%d/performance ◁ ◁',
        3000);
    console.log(
        '△ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △ △\n'
    );
});

var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');
/* 文件上传 */
router.post('/', function(req, res, next) {
  var form = new multiparty.Form({uploadDir: './upload/temp'});
    //上传完成后处理
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files,null,2);
    if(err){
      console.log('parse error: ' + err);
    } else {
      console.log('parse files: ' + filesTmp);
      files.file.forEach((inputFile) => {
        var uploadedPath = inputFile.path;
        var dstPath = './upload/file/' + inputFile.originalFilename;
        //重命名为真实文件名
        console.log(dstPath)
        fs.rename(uploadedPath, dstPath, function(err) {
          if(err){
            console.log('rename error: ' + err);
          } else {
            console.log('rename ok');
          }
        });
      })
    }
    res.send({code:0,msg:'上传成功'})
  });
});

module.exports = router;

var http = require("http");
var url = require("url");
var querystring = require("querystring");

var html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>hello world</p>
</body>

</html>`

var server = http.createServer(function (req, res) {
    if (req.url == "/Resources" && req.method == "POST") {
        var postData = "";
        req.addListener("data", function (chunk) {
            postData += chunk;
        });

        req.addListener("end", function () {
            var str = postData.toString();
            var queryObj = querystring.parse(str);
            var name = queryObj.name;
            var age = queryObj.age;
            var sex = queryObj.sex;
            console.log("有新的表单提交")
            console.log("姓名：" + name + "\n");
            res.end(html);
        });
    }
});

server.listen(55555, "127.0.0.1");
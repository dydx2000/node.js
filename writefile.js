const fs = require('fs');
var content = "更新了要写入的内容！ ";
fs.writeFile('c:/js_stu/write.txt', content, err => {

    if (err != null) {
        return
    }
    console.log("成功写入了")
    
    console.log("vs code 会使用的话还是挺好用的！")
}
);

console.log(__dirname)
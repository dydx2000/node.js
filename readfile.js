const fs = require("fs");
// fs.readFile('./04.js','utf8' ,(err,doc) =>{
fs.readFile("c:/js_stu/04require.js",'utf8' ,(error,docx) =>{

    if (error==null){
        console.log(docx);
    }else{

        console.log(error)
    }
});
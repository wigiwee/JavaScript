const fs = require('fs');
// sync call
//fs.writeFileSync("./test.txt", "Hello world");

//Async call
//fs.writeFile("./test.txt", "Hello World" , (err)=>{});



//const result = fs.readFileSync("./test.txt", "utf-8")
//console.log(result);

fs.readFile("./test.txt","utf-8", (err , result) => {
    if (err){
        console.log("Error" , err);
    } else{
        console.log(result);
    }

})

fs.appendFileSync("./test.txt" , "\nHey There,"); //apends to file

fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt"); // deleted the file

//console.log(fs.statSync("./test.txt"));
//console.log(fs.statSync("./test.txt").isFile);
//fs.mkdirSync("./Directory");
//fs.mkdirSync("./multipleDirectory/a/b/c" , {recursive : true});









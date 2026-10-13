const path = require("path");
const fs = require("fs/promises");

const getData = async (index) =>{
    const pathlink = path.join(__dirname,"..","..","data.json");
    try{
        let cur = await fs.readFile(pathlink,"utf-8");
        cur = JSON.parse(cur);
        if(cur.length == 0) throw err;
        return cur[index];
    }
    catch(err){
        console.log(err.message);

    }
}

module.exports = getData;
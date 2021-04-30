const fs = require('fs');
const {v4 : uuid} = require('uuid');
const allowExtension = ["jpg" , "png", "jpeg"];

const deleteTemp = (file) => fs.unlink(file, e => console.log(e));
const saveFile = ({mimetype, size, path}, extension, destFolder = `./public/images`) => {
    try{
    const [type,ext] = mimetype.split("/");
    if(!extension.includes(ext)){
        throw new Error("Formato incorrecto");
    }
    const uid = uuid();
    const fileName = `${uid}.${ext}`;
    const fileNameOut = `${destFolder}/${fileName}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    deleteTemp(path);
    return fileName;
    }
    catch(e){
        console.error(e);
        deleteTemp(path);
    }
}

const imgFile = (file) => saveFile(file,allowExtension);
module.exports = {imgFile};
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
var Photos = []

fs.readFile('./js/RawPhotos.json', function (err, data) {
    if (err) {
        throw err
    }
    data = JSON.parse(data + "")
    console.log(data)



    for (let index = 0; index < data.length; index++) {
        let ele = data[index];
        var name = ele.split("/")
        name = name[name.length - 1]
        const file = fs.createWriteStream("./photos/" + name);
        console.log("./photos/"+name)
        Photos[Photos.length] = name
        
        // const file = fs.createWriteStream("file.jpg");
        const request = http.get(data[index].replace("https", "http"), function (response) {
            response.pipe(file);

            // after download completed close filestream
            file.on("finish", () => {
                file.close();
                console.log("Download Completed");
            });
        });
       
    }
});
setTimeout(() => {
    console.log(Photos)
    fs.writeFile('./photos.json', JSON.stringify(Photos), function (err) {
        if (err) throw err;
        console.log('Saved!');
      }); 
}, 5000);
// const file = fs.createWriteStream("file.jpg");
// const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
//    response.pipe(file);

//    // after download completed close filestream
//    file.on("finish", () => {
//        file.close();
//        console.log("Download Completed");
//    });
// });
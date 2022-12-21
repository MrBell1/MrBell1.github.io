// const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
var Photos = []

// fs.readFile('./js/RawPhotos.json', function (err, data) {
//     if (err) {
//         throw err
//     }
//     data = JSON.parse(data + "")
//     console.log(data)



//     for (let index = 0; index < data.length; index++) {
//         let ele = data[index];
//         var name = ele.split("/")
//         name = name[name.length - 1]
//         const file = fs.createWriteStream("./photos/" + name);
//         console.log("./photos/"+name)
//         Photos[Photos.length] = name

//         // const file = fs.createWriteStream("file.jpg");
//         const request = http.get(data[index].replace("https", "http"), function (response) {
//             response.pipe(file);

//             // after download completed close filestream
//             file.on("finish", () => {
//                 file.close();
//                 console.log("Download Completed");
//             });
//         });

//     }
// });
// setTimeout(() => {
//     console.log(Photos)
//     fs.writeFile('./photos.json', JSON.stringify(Photos), function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       }); 
// }, 5000);
// // const file = fs.createWriteStream("file.jpg");
// // const request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
// //    response.pipe(file);

// //    // after download completed close filestream
// //    file.on("finish", () => {
// //        file.close();
// //        console.log("Download Completed");
// //    });
// // });
const Downloader = require("nodejs-file-downloader");

(async () => {
    //Wrapping the code with an async function, just for the sake of example.

    const downloader = new Downloader({
        url: "https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg", //If the file name already exists, a new file with the name 200MB1.zip is created.
        directory: "./downloads", //This folder will be created, if it doesn't exist.
    });
    try {
        const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.

        console.log("All done");
    } catch (error) {
        //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
        //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
        console.log("Download failed", error);
    }


    fs.readFile('./js/RawPhotos.json', async function (err, data) {
        if (err) {
            throw err
        }
        data = JSON.parse(data + "")
        console.log(data)
        for (let index = 0; index < data.length; index++) {
            const downloader = new Downloader({
                url: data[index], //If the file name already exists, a new file with the name 200MB1.zip is created.
                directory: "./downloads", //This folder will be created, if it doesn't exist.
            });
            try {
                const { filePath, downloadStatus } = await downloader.download(); //Downloader.download() resolves with some useful properties.
        
                console.log("All done");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                console.log("Download failed", error);
            }
        

        }

    })


})();
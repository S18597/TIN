let FS = require('fs');
let directory = process.argv[2]

FS.watch(directory, (eventType, fileName) => {
    if (eventType == 'change'){
        console.log("Filename: " + fileName + ". Event type: " + eventType + ".");
        FS.readFile(directory + fileName, (error, data) => {
            if(error) throw error;
            console.log(data);
        })
    }
})
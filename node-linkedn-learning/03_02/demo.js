var fs = requie("fs");

fs.readdir("/Users", (err, data) => {
    console.log(data);
})
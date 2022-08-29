const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

fs.cp(path.resolve(__dirname, "src", "templates"), path.resolve(__dirname, "dist", "templates"), { recursive: true }, (err, cp) => {
    if (!err) {
        exec("tsc", () => {
            console.log("Built successfully!");
        })
    }
})
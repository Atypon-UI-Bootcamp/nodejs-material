import AtyponFileSystem from "./utils/file-system";


AtyponFileSystem.getTemplate('index').then(template => {
    const data = template.replace("{title}", "Something is going on here");

    AtyponFileSystem.writeToTemplate("index", data);
})
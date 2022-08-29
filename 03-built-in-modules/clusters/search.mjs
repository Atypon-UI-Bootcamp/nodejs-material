import { readFile } from "fs/promises"


export default async function search(title) {
    const jsonFile = await readFile(`./data.json`);
    const { data } = JSON.parse(jsonFile);
    const result = data.children.filter(item => item?.data?.title.includes(title));
    return result;
}
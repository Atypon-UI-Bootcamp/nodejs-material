import FS from "fs/promises";
import Path from "path";

export default new class AtyponFileSystem {

    resolvePath(...path: string[]): string {
        return Path.resolve(__dirname, '..', ...path);
    }

    templatePath(name: string): string {
        return this.resolvePath('..', 'public', 'templates', `${name}.html`);
    }

    async getTemplate(name: string): Promise<string> {
        return await FS.readFile(this.templatePath(name), 'utf-8');
    }

    async writeToTemplate(name: string, data: string) {
        const publicTemplateDir = this.resolvePath('public', 'templates');
        try {
            await FS.mkdir(publicTemplateDir, { recursive: true });
        } catch (error) {

        }
        return await FS.writeFile(this.resolvePath(publicTemplateDir, `${name}.html`), data, 'utf-8');
    }
}


import { WebPlugin } from '@capacitor/core';
export class ExampleWeb extends WebPlugin {
    async echo(options) {
        return { plist: options.plist, key: options.key, value: "" };
    }
}
//# sourceMappingURL=web.js.map
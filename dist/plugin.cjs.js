'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const Example = core.registerPlugin('Example', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.ExampleWeb()),
});

class ExampleWeb extends core.WebPlugin {
    async echo(options) {
        return { plist: options.plist, key: options.key, value: "" };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ExampleWeb: ExampleWeb
});

exports.Example = Example;
//# sourceMappingURL=plugin.cjs.js.map

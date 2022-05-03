var capacitorExample = (function (exports, core) {
    'use strict';

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

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map

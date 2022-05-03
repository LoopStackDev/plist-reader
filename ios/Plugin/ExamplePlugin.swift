import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ExamplePlugin)
public class ExamplePlugin: CAPPlugin {
    private let implementation = Example()

    @objc func echo(_ call: CAPPluginCall) {
        let plist = call.getString("plist") ?? ""
        let key = call.getString("key") ?? ""

        var config: [String: Any]?

        if let infoPlistPath = Bundle.main.url(forResource: plist, withExtension: "plist") {
            do {
                let infoPlistData = try Data(contentsOf: infoPlistPath)

                if let dict = try PropertyListSerialization.propertyList(from: infoPlistData, options: [], format: nil) as? [String: Any] {
                    config = dict
                }
            } catch {
                print(error)
            }
        }

        call.resolve(["plist": plist, "key": key, "value": config?[key]])
    }
}

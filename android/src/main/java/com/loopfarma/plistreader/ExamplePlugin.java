package com.loopfarma.plistreader;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Example")
public class ExamplePlugin extends Plugin {

    private Example implementation = new Example();

    @PluginMethod
    public void echo(PluginCall call) {
        String key = call.getString("key");

        int resId = this.getContext().getResources().getIdentifier(key, "string", this.getContext().getPackageName());
        String value = this.getContext().getString(resId);

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}

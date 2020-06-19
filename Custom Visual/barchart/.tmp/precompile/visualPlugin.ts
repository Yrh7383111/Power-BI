import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var barchartF49F164B65044A8CBFF2E959A8C2AC79: IVisualPlugin = {
    name: 'barchartF49F164B65044A8CBFF2E959A8C2AC79',
    displayName: 'Barchart',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["barchartF49F164B65044A8CBFF2E959A8C2AC79"] = barchartF49F164B65044A8CBFF2E959A8C2AC79;
}

export default barchartF49F164B65044A8CBFF2E959A8C2AC79;
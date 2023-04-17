var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JSONExport = /** @class */ (function () {
    function JSONExport() {
    }
    JSONExport.prototype["export"] = function () {
        return "JSON exported data";
    };
    return JSONExport;
}());
var XMLExport = /** @class */ (function () {
    function XMLExport() {
    }
    XMLExport.prototype.getInfo = function () {
        return "Export of XML data";
    };
    return XMLExport;
}());
var ExportAdapter = /** @class */ (function (_super) {
    __extends(ExportAdapter, _super);
    function ExportAdapter(exporter) {
        var _this = _super.call(this) || this;
        _this.XMLexport = exporter;
        return _this;
    }
    ExportAdapter.prototype["export"] = function () {
        var xmlResult = this.XMLexport.getInfo();
        return "JSON Export of restaurants and bars: " + xmlResult;
    };
    return ExportAdapter;
}(JSONExport));
// Implementación
function main(exported) {
    console.log(exported["export"]());
}
var json = new JSONExport();
main(json);
var xml = new XMLExport();
// Main no va a funcionar
var adapter = new ExportAdapter(xml);
main(adapter);
class JSONExport {
    public export() : string {
        return "JSON exported data"
    }
}

class XMLExport {
    public getInfo() : string {
        return "Export of XML data"
    }
}

class ExportAdapter extends JSONExport {
    private XMLexport: XMLExport

    constructor(exporter: XMLExport) {
        super()
        this.XMLexport = exporter
    }

    public export() : string {
        const xmlResult = this.XMLexport.getInfo();
        return "JSON Export of restaurants and bars: " + xmlResult
    }
}


// Implementación
function main(exported: JSONExport) {
    console.log(exported.export());
}

const json = new JSONExport();
main(json);

const xml = new XMLExport();
// Main no va a funcionar
const adapter = new ExportAdapter(xml);
main(adapter);

// RESULT OUTPUT:
// ---> JSON exported data
// ---> JSON Export of restaurants and bars: Export of XML data
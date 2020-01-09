(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "getting-started.md",
                title: "Getting started",
                url: "/opendoc-guide/getting-started.html",
                escapedPath: "getting-started.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: 
["Opendoc Guide","",["getting-started.md","import-files.md","contribute.md"]]
            },
            
        {
                name: "import-files.md",
                title: "Import your files",
                url: "/opendoc-guide/import-files.html",
                escapedPath: "import-files.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: 
["Opendoc Guide","",["getting-started.md","import-files.md","contribute.md"]]
            },
            
        {
                name: "index.md",
                title: "Introduction",
                url: "/opendoc-guide/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: 
["Opendoc Guide","",["getting-started.md","import-files.md","contribute.md"]]
            },
            
        
        
        {
                name: "contribute.md",
                title: "Contribute",
                url: "/opendoc-guide/contribute.html",
                escapedPath: "contribute.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: 
["Opendoc Guide","",["getting-started.md","import-files.md","contribute.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()
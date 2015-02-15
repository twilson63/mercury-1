'use strict';

var path = require('path');
var fs = require('fs');

var docsPath = path.join(__dirname, '..', 'docs', 'modules');
var modulesPath = path.join(__dirname, '..', 'node_modules');
var moduleReadmes = {
    'geval': path.join(modulesPath, 'geval', 'README.md'),
    'dom-delegator': path.join(modulesPath, 'dom-delegator', 'README.md'),
    'value-event': path.join(modulesPath, 'value-event', 'README.md'),
    'observ-array': path.join(modulesPath, 'observ-array', 'README.md'),
    'observ-varhash': path.join(modulesPath, 'observ-varhash', 'Readme.md'),
    'observ-struct': path.join(modulesPath, 'observ-struct', 'README.md'),
    'observ': path.join(modulesPath, 'observ', 'README.md'),
    'virtual-dom': path.join(modulesPath, 'virtual-dom', 'README.md'),
    'vtree': path.join(modulesPath, 'virtual-dom', 'vtree', 'README.md'),
    'vdom': path.join(modulesPath, 'virtual-dom', 'vdom', 'README.md'),
    'virtual-hyperscript': path.join(modulesPath, 'virtual-dom',
        'virtual-hyperscript', 'README.md'),
    'vdom-thunk': path.join(modulesPath, 'vdom-thunk', 'README.md'),
    'main-loop': path.join(modulesPath, 'main-loop', 'README.md')
};

Object.keys(moduleReadmes).forEach(saveModuleDoc);

function saveModuleDoc(moduleName) {
    var moduleReadmePath = moduleReadmes[moduleName];
    var moduleDocPath = path.join(docsPath, moduleName + '.md');

    var docFile = fs.createWriteStream(moduleDocPath);
    docFile.write('Auto generated from ' + moduleName + ' package.\n\n',
        function writeModuleDocFile() {
            var moduleReadmeFile = fs.createReadStream(moduleReadmePath);
            moduleReadmeFile.pipe(docFile);
        }
    );
}

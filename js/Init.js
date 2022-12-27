window.urlParams = window.urlParams || {};

window.MAX_REQUEST_SIZE = window.MAX_REQUEST_SIZE  || 10485760;
window.MAX_AREA = window.MAX_AREA || 15000 * 15000;

window.EXPORT_URL = 'http://localhost/mxgraph-php/examples/deployment.php';
window.SAVE_URL = 'http://localhost/mxgraph-php/examples/deployment.php';
window.OPEN_URL = window.OPEN_URL || '/open';
window.RESOURCES_PATH = window.RESOURCES_PATH || '/org-editor/resources';
window.RESOURCE_BASE = window.RESOURCE_BASE || window.RESOURCES_PATH + '/grapheditor';
window.STENCIL_PATH = window.STENCIL_PATH || '/org-editor/stencils';
window.IMAGE_PATH = window.IMAGE_PATH || '/org-editor/images';
window.STYLE_PATH = window.STYLE_PATH || '/org-editor/styles';
window.CSS_PATH = window.CSS_PATH || '/org-editor/styles';
window.OPEN_FORM = window.OPEN_FORM || 'open.html';

// Sets the base path, the UI language via URL param and configures the
// supported languages to avoid 404s. The loading of all core language
// resources is disabled as all required resources are in grapheditor.
// properties. Note that in this example the loading of two resource
// files (the special bundle and the default bundle) is disabled to
// save a GET request. This requires that all resources be present in
// each properties file since only one file is loaded.
window.mxBasePath = window.mxBasePath || '/org-editor/';
window.mxLanguage = window.mxLanguage || urlParams['lang'];
window.mxLanguages = window.mxLanguages || ['de', 'se'];

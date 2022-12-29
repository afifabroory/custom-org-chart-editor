/*
 * Modified version of the mxgraph GraphEditor. 
 * 2022, Muhammad Afif Abroory (https://github.com/afifabroory/org-chart-editor2)
 */  
window.urlParams = window.urlParams || {};

window.MAX_REQUEST_SIZE = window.MAX_REQUEST_SIZE  || 10485760;
window.MAX_AREA = window.MAX_AREA || 15000 * 15000;

window.EXPORT_URL = '';
window.SAVE_URL = '';
window.OPEN_URL = window.OPEN_URL || '';
window.RESOURCES_PATH = window.RESOURCES_PATH || '/org-editor/resources';
window.RESOURCE_BASE = window.RESOURCE_BASE || window.RESOURCES_PATH + '/grapheditor';
window.STENCIL_PATH = window.STENCIL_PATH || '/org-editor/stencils';
window.IMAGE_PATH = window.IMAGE_PATH || '/org-editor/images';
window.STYLE_PATH = window.STYLE_PATH || '/org-editor/styles';
window.CSS_PATH = window.CSS_PATH || '/org-editor/styles';
window.OPEN_FORM = window.OPEN_FORM || '';

window.mxBasePath = window.mxBasePath || '/org-editor/';
window.mxLanguage = window.mxLanguage || urlParams['lang'];
window.mxLanguages = window.mxLanguages || [];
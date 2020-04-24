const hostname = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}/` : 'http://localhost/';
const submissionApiPath = `${hostname}api/v0/submission/`;
const dataDictionaryTemplatePath = `${hostname}api/v0/submission/template/`;

// Commonjs style export, so can load from nodejs into data/gqlSetup
module.exports = {
  submissionApiPath: submissionApiPath,
  dataDictionaryTemplatePath: dataDictionaryTemplatePath,
  mockStore: true,
  dev: true
};

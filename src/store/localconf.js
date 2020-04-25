const hostname = typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.hostname}/` : 'http://localhost/';
const dataDictionaryTemplatePath = `default.json`;
const submissionApiPath = `${hostname}api/v0/submission/`;

// Commonjs style export, so can load from nodejs into data/gqlSetup
module.exports = {
  dataDictionaryTemplatePath: dataDictionaryTemplatePath,
  submissionApiPath: submissionApiPath,
  mockStore: true,
  dev: true
};

const dataDictionaryTemplatePath = "data/default.json";
const dictionaryApiPath = "data/";

// Commonjs style export, so can load from nodejs into data/gqlSetup
module.exports = {
  dataDictionaryTemplatePath: dataDictionaryTemplatePath,
  dictionaryApiPath: dictionaryApiPath,
  mockStore: false,
  dev: false
};

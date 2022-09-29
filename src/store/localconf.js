// Development
// const dataDictionaryTemplatePath = "data/";
// const dictionaryApiPath = "data/";

// Production
const dataDictionaryTemplatePath = "https://biominer.3steps.cn/data-model/";
const dictionaryApiPath = "https://biominer.3steps.cn/data-model/"

// Commonjs style export, so can load from nodejs into data/gqlSetup
module.exports = {
  dataDictionaryTemplatePath: dataDictionaryTemplatePath,
  dictionaryApiPath: dictionaryApiPath,
  mockStore: false,
  dev: false
};

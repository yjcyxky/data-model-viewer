// Development
// const dataDictionaryTemplatePath = "data/";
// const dictionaryApiPath = "data/";

// Production
const dataDictionaryTemplatePath = "http://service.3steps.cn/attachments/data-model/";
const dictionaryApiPath = "http://service.3steps.cn/attachments/data-model/";

// Commonjs style export, so can load from nodejs into data/gqlSetup
module.exports = {
  dataDictionaryTemplatePath: dataDictionaryTemplatePath,
  dictionaryApiPath: dictionaryApiPath,
  mockStore: false,
  dev: false
};

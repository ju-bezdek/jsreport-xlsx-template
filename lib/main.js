const XlsxTemplate = require("xlsx-template")

module.exports = function (reporter, definition) {  

  reporter.extensionsManager.recipes.push({
    name: "xlsx-template",
    execute: (req, response) => {

      if (!req.template["xlsx-template"]  && !req.template["xlsx-template"].templateAsset)
      throw reporter.createError(`xlsx-template recipe requires req.template.xlsx-template.templateAsset to be set`, {
        statusCode: 400
      })

      let templateAssetContent =req.template["xlsx-template"].templateAsset.content;
      
      let template = new XlsxTemplate(templateAssetContent);
      let i;
      for (i = 1; i < template.sheets.length+1; i++)
      {
        template.substitute(i, req.data);
      }
      
      let result = template.generate({type: 'nodebuffer', compression: "DEFLATE"});
      response.content =result;
      response.meta.fileExtension = 'xlsx'
      response.meta.contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    }
  })
}

var fs = require('fs');
var _ = require('underscore');

module.exports = {
  
  readFile: function(path) { 
    fs.readFile(path, 'utf-8', function(err, result) {
      var apiDoc = JSON.parse(result);
    
      var markdown = parseResources(apiDoc);
      
      var fileName = 'api.md';
    
      fs.writeFile(fileName, markdown, function(err) {
        if (err) {
          console.log("Unable to save markdown file: " + err);
        } else { 
          console.log("Markdown file successfully generated: " + fileName);
        }
      });
    });
  }

};

function parseResources(apiDoc) {
  var resourceList = _.map(apiDoc.resources, function(resource) {
    var model = apiDoc.models[resource.model];
    var md = [];
    
    md.push(model.description);
    
    md.push("##Fields");
    
    md.push(fieldHeaders());
    
    md.push(headerSeparator());
    
    _.forEach(model.fields, function(field) { 
      
      var fieldLine = "| " + field.name + " | " +
                      field.type + " | " +
                      (field.required || false) + " | " +
                      isFieldMultiValued(field.type) + " | " +
                      (field.default || "None") + " | " +
                      (field.description || "") + " |";
      
       md.push(fieldLine);
    });
    
    
    return _.reduce(md, function(memo, row) { return memo + row + "\n"; }, "");
  });
  
  return "#Resources\n" + _.reduce(resourceList, function(memo, row) { return memo + row + "\n" });
}

function isFieldMultiValued(str)  { 
  return str.indexOf("[") == 0;
}

function headerSeparator() { 
  return "| --- | --- | --- | --- | --- | --- |";
}

function fieldHeaders() { 
  return "| Name | Type | Required? | Multi Valued? | Default | Description |";
}
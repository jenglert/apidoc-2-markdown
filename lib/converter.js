var fs = require('fs');
var _ = require('underscore');

module.exports = {
  
  readFile: function(path, target) { 
    fs.readFile(path, 'utf-8', function(err, result) {
      var apiDoc = JSON.parse(result);
    
      var markdown = parseResources(apiDoc);
      
      fs.writeFile(target, markdown, function(err) {
        if (err) {
          console.log("Unable to save markdown file: " + err);
        } else { 
          console.log("Markdown file successfully generated: " + target);
        }
      });
    });
  }

};

function parseResources(apiDoc) {
  var resourceList = _.map(apiDoc.resources, function(resource) {
    var model = apiDoc.models[resource.model];
    var md = [];
    
    md.push("##" + resource.model)

    md.push(model.description);
    
    md.push("###Fields");
    
    md.push(createTableHeader(['Name', 'Type', 'Required?', 'Multi Valued?', 'Default', 'Description']));
    
    _.each(model.fields, function(field) { 
       md.push(fieldToTableRow(field));
    });
    
    md.push('###Operations');

    _.each(resource.operations, function(operation) { 

      md.push('####' + (operation.path || ('/' + resource.model)));

      md.push('####Parameters');

      md.push(createTableHeader(['Name', 'Type', 'Required?', 'Multi Valued?', 'Default', 'Description']));
      
      _.each(operation.parameters, function(parameter) { 
        md.push(fieldToTableRow(parameter)); 
      });

      md.push('####Responses');

      _.each(_.keys(operation.responses), function(responseCode) { 

        md.push(createTableHeader(['Code', 'Result']));

        md.push("| " + responseCode + " | " + operation.responses[responseCode].type + " |");
        
      });
    });

    return _.reduce(md, function(memo, row) { return memo + row + "\n"; }, "");
  });
  
  return "#Resources\n" + _.reduce(resourceList, function(memo, row) { return memo + row + "\n" });
}

function fieldToTableRow(field) { 
  return "| " + field.name + " | " +
         field.type + " | " +
         b2yn(field.required) + " | " +
         b2yn(isFieldMultiValued(field.type))+ " | " +
         (field.default || "-") + " | " +
         (field.description || "") + " |";
}

function b2yn(b) { 
  if (b) { return "Yes"; } else { return "No";} 
}

function isFieldMultiValued(str)  { 
  return str.indexOf("[") == 0;
}

function createTableHeader(columns) {
  var namesSection = _.reduce(columns, function(memo, column) {
    return memo + column + ' | ';
  }, '| ');

  var spacerSection = _.reduce(columns, function(memo, column) {
    return memo + ' --- ' + ' | ';
  }, '| ');

  return namesSection + '\n' + spacerSection
}

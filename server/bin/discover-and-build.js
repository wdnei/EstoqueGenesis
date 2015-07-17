var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var ds = app.dataSources.mySQL;



ds.discoverModelDefinitions({views: true, limit: 20}, function(err, models) {
  if (err) throw err;

    console.log(models);

  //  ds.disconnect();
  });

  ds.discoverAndBuildModels('caixa', {schema: 'loopback_test'},
  function(err, models) {
    if (err) throw err;

    console.log(models.Caixa);
    ds.disconnect();
  });

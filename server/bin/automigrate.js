var path = require('path');
var app = require(path.resolve(__dirname, '../server'));


var dataSource = app.dataSources.sqlite;


dataSource.automigrate( function(err) {
  if (err) throw err;

  console.log('Models migrated');
  dataSource.disconnect();
});
// dataSource.automigrate('AccessToken', function(err) {
//   if (err) throw err;
//
//   console.log('AccessToken model migrated');
//   //dataSource.disconnect();
// });
// dataSource.automigrate('ACL', function(err) {
//   if (err) throw err;
//
//   console.log('ACL model migrated');
//   //dataSource.disconnect();
// });
// dataSource.automigrate('RoleMapping', function(err) {
//   if (err) throw err;
//
//   console.log('RoleMapping model migrated');
//   //dataSource.disconnect();
// });
// dataSource.automigrate('Role', function(err) {
//   if (err) throw err;
//
//   console.log('Role model migrated');
//   dataSource.disconnect();
// });
//
// dataSource.automigrate('Caixa', function(err) {
//   if (err) throw err;
//
//   console.log('Caxa model migrated');
// //  dataSource.disconnect();
// });
//
// dataSource.automigrate('Estoque', function(err) {
//   if (err) throw err;
//
//   console.log('Estoque model migrated');
// //  dataSource.disconnect();
// });
//
// dataSource.automigrate('Entrada', function(err) {
//   if (err) throw err;
//
//   console.log('Entrada model migrated');
// //  dataSource.disconnect();
// });
//
// dataSource.automigrate('Saida', function(err) {
//   if (err) throw err;
//
//   console.log('Saida model migrated');
//   dataSource.disconnect();
// });

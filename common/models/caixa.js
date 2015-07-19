module.exports = function(Caixa) {
//   //var Entrada = Caixa.app.models.Entrada;
//   //var Saida=Caixa.app.models.Saida;
//
//
//
//   Caixa.addVenda = function(msg, cb) {
//
//     cb(null, {id:0,nome:"111"});
//   }
//
//   Caixa.remoteMethod(
//     'addVenda',
//     {
//       accepts: { arg: 'Caixa', type: 'object',required:true, http: { source: 'body' } },
//       returns: {arg: 'Caixa', type: 'object'}
//     }
//   );
//
//
//   Caixa.beforeRemote('create', function(ctx, unused, next) {
//     console.log();
//     var Estoque=Caixa.app.models.Estoque;
//
//
//
//     console.log(ctx.args);
//     if(ctx.args.tipo=="compra") {
//       console.log(ctx);
//
//       next();
//     } else {
//       next(new Error('must be logged in to update'))
//     }
//   });
//
//
//   Caixa.afterRemote('create', function(ctx, user, next) {
//   console.log('user has been saved', user);
//   next();
// });

};

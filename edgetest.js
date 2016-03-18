      var edge = require('edge');
      
      var helloWorld = edge.func('cs',`
          async (input) => { \
              return ".NET Welcomes " + input.ToString(); \
          }
      `);
      helloWorld('JavaScript', function(error, result) {
        if(error) throw error;
        console.log(result);
      });

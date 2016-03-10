import {edge} from 'edge';

export class EdgeTest
{
  myInput = 'TypeScript'
  myResult = '';
  var helloWorld = edge.func(function () {
      /*async (input) => { return ".NET Welcomes " + input.ToString()}*/
    });
    
  submit() {
    helloWorld(myInput, function(error, result) {
      if(error) throw error;
      myResult = result;
    }
  }
}

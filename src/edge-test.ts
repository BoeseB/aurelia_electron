var remote = require('remote');
export class EdgeTest
{
  
  private edge = remote.require('electron-edge')
  myInput = 'TypeScript';
  myResult = '';
  private helloWorld = this.edge.func(    
    `async (input) => { return ".NET Welcomes " + input.ToString();}`
  );
    
  submit() {
    this.helloWorld(this.myInput, function(error, result) {
      if(error) throw error;
      this.myResult = result;
    });
  }
}

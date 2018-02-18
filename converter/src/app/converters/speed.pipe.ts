import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(input: any,from:any,to:any): any {
    
    //alert(value+" "+(this.tempConv(value,from,to)));
    return this.speedConv(input,from,to);
  }
  public output;

  public selVal;

  public speed;

  public value;
  

  speedConv(input:any,from:any,to:any):any{
    this.output=input;
    //m/s to others
    if(from=="m/s" && to=="m/s"){
      this.output=input;
    }
    else if(from=="m/s" && to=="Km/s"){
      this.output=(input*0.001);
    }
    else if(from=="m/s" && to=="m/hr"){
      this.output=(input*3600);
    }
    else if(from=="m/s" && to=="Km/hr"){
      this.output=input*3.6;
    }
    else if(from=="m/s" && to=="mile/hr"){
      this.output=(input*2.2369362921);
    }

    //Km/s to others
    if(from=="Km/s" && to=="Km/s"){
      this.output=input;
    }
    else if(from=="Km/s" && to=="m/s"){
      this.output=(input*1000);
    }
    else if(from=="Km/s" && to=="m/hr"){
      this.output=(input*3600000);
    }
    else if(from=="Km/s" && to=="Km/hr"){
      this.output=input*3600;
    }
    else if(from=="Km/s" && to=="mile/hr"){
      this.output=(input*2236.9362921);
    }

    //m/hr to others
    if(from=="m/hr" && to=="m/hr"){
      this.output=input;
    }
    else if(from=="m/hr" && to=="m/s"){
      this.output=(input*0.0002777778);
    }
    else if(from=="m/hr" && to=="Km/hr"){
      this.output=(input*0.001);
    }
    else if(from=="m/hr" && to=="Km/s"){
      this.output=input*2.777777777E-7;
    }
    else if(from=="m/hr" && to=="mile/hr"){
      this.output=(input*0.0006213712);
    }

    //Km/hr to others
    if(from=="Km/hr" && to=="Km/hr"){
      this.output=input;
    }
    else if(from=="Km/hr" && to=="m/s"){
      this.output=(input*0.2777777778);
    }
    else if(from=="Km/hr" && to=="m/hr"){
      this.output=(input*1000);
    }
    else if(from=="Km/hr" && to=="Km/s"){
      this.output=input*0.0002777778;
    }
    else if(from=="Km/hr" && to=="mile/hr"){
      this.output=(input*0.6213711922);
    }

    //mile/hr to others
    if(from=="mile/hr" && to=="mile/hr"){
      this.output=input;
    }
    else if(from=="mile/hr" && to=="m/s"){
      this.output=(input*0.44704);
    }
    else if(from=="mile/hr" && to=="m/hr"){
      this.output=(input*1609.344);
    }
    else if(from=="mile/hr" && to=="Km/s"){
      this.output=input*0.00044704;
    }
    else if(from=="mile/hr" && to=="Km/hr"){
      this.output=(input*1.609344);
    }

    //else case
    else if(from=="--select--" || to=="--select--"){
      
      this.output="";
    }

    //alert(this.val);
    if(!isNaN(this.output)){
      return this.output;
    }
    else{
      return "-";
    }

  }

}
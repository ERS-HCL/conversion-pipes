import { AppComponent }  from '../app.component';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'length'
})

export class LengthPipe implements PipeTransform {

  transform(value: any,from:any,to:any): any {
    
    //alert(value+" "+(this.tempConv(value,from,to)));
    return this.lengthConv(value,from,to);
  }

  public output;

  public selVal;

  public length;

  public value;
  

  lengthConv(input:any,from:any,to:any):any{
    this.output=input;
    
    //Kilometers to others
    if(from=="Kilometer" && to=="Kilometer"){
      this.output=input;
    }
    else if(from=="Kilometer" && to=="Meter"){
      this.output=(input*1000);
    }
    else if(from=="Kilometer" && to=="Centimeter"){
      this.output=(input*100000);
    }
    else if(from=="Kilometer" && to=="Millimeter"){
      this.output=(input*Math.pow(10,6));
    }
    else if(from=="Kilometer" && to=="Micrometer"){
      this.output=(input*Math.pow(10,9));
    }
    else if(from=="Kilometer" && to=="Nanometer"){
      this.output=(input*Math.pow(10,12));
    }
    else if(from=="Kilometer" && to=="Mile"){
      this.output=(input*0.621371);
    }
    else if(from=="Kilometer" && to=="Yard"){
      this.output=(input*1093.61);
    }
    else if(from=="Kilometer" && to=="Foot"){
      this.output=(input*3280.84);
    }
    else if(from=="Kilometer" && to=="Inch"){
      this.output=(input*39370.1);
    }

    //Meter to others
    if(from=="Meter" && to=="Meter"){
      this.output=input;
    }
    else if(from=="Meter" && to=="Kilometer"){
      this.output=(input*0.001);
    }
    else if(from=="Meter" && to=="Centimeter"){
      this.output=(input*100);
    }
    else if(from=="Meter" && to=="Millimeter"){
      this.output=(input*1000);
    }
    else if(from=="Meter" && to=="Micrometer"){
      this.output=(input*1e+6);
    }
    else if(from=="Meter" && to=="Nanometer"){
      this.output=(input*1e+9);
    }
    else if(from=="Meter" && to=="Mile"){
      this.output=(input*0.000621371);
    }
    else if(from=="Meter" && to=="Yard"){
      this.output=(input*1.09361);
    }
    else if(from=="Meter" && to=="Foot"){
      this.output=(input*3.28084);
    }
    else if(from=="Meter" && to=="Inch"){
      this.output=(input*39.3701);
    }

    //Centimeter to others
    if(from=="Centimeter" && to=="Centimeter"){
      this.output=input;
    }
    else if(from=="Centimeter" && to=="Kilometer"){
      this.output=(input*1e-5);
    }
    else if(from=="Centimeter" && to=="Meter"){
      this.output=(input*0.01);
    }
    else if(from=="Centimeter" && to=="Millimeter"){
      this.output=(input*10);
    }
    else if(from=="Centimeter" && to=="Micrometer"){
      this.output=(input*10000);
    }
    else if(from=="Centimeter" && to=="Nanometer"){
      this.output=(input*1e+7);
    }
    else if(from=="Centimeter" && to=="Mile"){
      this.output=(input*6.2137e-6);
    }
    else if(from=="Centimeter" && to=="Yard"){
      this.output=(input*0.0109361);
    }
    else if(from=="Centimeter" && to=="Foot"){
      this.output=(input*0.0328084);
    }
    else if(from=="Centimeter" && to=="Inch"){
      this.output=(input*0.393701);
    }

    //Millimeter to others
    if(from=="Millimeter" && to=="Millimeter"){
      this.output=input;
    }
    else if(from=="Millimeter" && to=="Kilometer"){
      this.output=(input*1e-6);
    }
    else if(from=="Millimeter" && to=="Meter"){
      this.output=(input*0.001);
    }
    else if(from=="Millimeter" && to=="Centimeter"){
      this.output=(input*0.1);
    }
    else if(from=="Millimeter" && to=="Micrometer"){
      this.output=(input*1000);
    }
    else if(from=="Millimeter" && to=="Nanometer"){
      this.output=(input*1e+6);
    }
    else if(from=="Millimeter" && to=="Mile"){
      this.output=(input*6.2137e-7);
    }
    else if(from=="Millimeter" && to=="Yard"){
      this.output=(input*0.00109361);
    }
    else if(from=="Millimeter" && to=="Foot"){
      this.output=(input*0.00328084);
    }
    else if(from=="Millimeter" && to=="Inch"){
      this.output=(input*0.0393701);
    }

    //Micrometer to others
    if(from=="Micrometer" && to=="Micrometer"){
      this.output=input;
    }
    else if(from=="Micrometer" && to=="Kilometer"){
      this.output=(input*1e-9);
    }
    else if(from=="Micrometer" && to=="Meter"){
      this.output=(input*1e-6);
    }
    else if(from=="Micrometer" && to=="Centimeter"){
      this.output=(input*1e-4);
    }
    else if(from=="Micrometer" && to=="Millimeter"){
      this.output=(input*0.001);
    }
    else if(from=="Micrometer" && to=="Nanometer"){
      this.output=(input*1000);
    }
    else if(from=="Micrometer" && to=="Mile"){
      this.output=(input*6.2137e-10);
    }
    else if(from=="Micrometer" && to=="Yard"){
      this.output=(input*1.0936e-6);
    }
    else if(from=="Micrometer" && to=="Foot"){
      this.output=(input*3.2808e-6);
    }
    else if(from=="Micrometer" && to=="Inch"){
      this.output=(input*3.937e-5);
    }

    //Nanometer to others
    if(from=="Nanometer" && to=="Nanometer"){
      this.output=input;
    }
    else if(from=="Nanometer" && to=="Kilometer"){
      this.output=(input*1e-12);
    }
    else if(from=="Nanometer" && to=="Meter"){
      this.output=(input*1e-9);
    }
    else if(from=="Nanometer" && to=="Centimeter"){
      this.output=(input*1e-7);
    }
    else if(from=="Nanometer" && to=="Millimeter"){
      this.output=(input*1e-6);
    }
    else if(from=="Nanometer" && to=="Micrometer"){
      this.output=(input*0.001);
    }
    else if(from=="Nanometer" && to=="Mile"){
      this.output=(input*6.2137e-13);
    }
    else if(from=="Nanometer" && to=="Yard"){
      this.output=(input*1.0936e-9);
    }
    else if(from=="Nanometer" && to=="Foot"){
      this.output=(input*3.2808e-9);
    }
    else if(from=="Nanometer" && to=="Inch"){
      this.output=(input*3.937e-8);
    }

    //Mile to others
    if(from=="Mile" && to=="Mile"){
      this.output=input;
    }
    else if(from=="Mile" && to=="Kilometer"){
      this.output=(input*1.60934);
    }
    else if(from=="Mile" && to=="Meter"){
      this.output=(input*1609.34);
    }
    else if(from=="Mile" && to=="Centimeter"){
      this.output=(input*160934);
    }
    else if(from=="Mile" && to=="Millimeter"){
      this.output=(input*1.609e+6);
    }
    else if(from=="Mile" && to=="Micrometer"){
      this.output=(input*1.609e+9);
    }
    else if(from=="Mile" && to=="Nanometer"){
      this.output=(input*1.609e+12);
    }
    else if(from=="Mile" && to=="Yard"){
      this.output=(input*1760);
    }
    else if(from=="Mile" && to=="Foot"){
      this.output=(input*5280);
    }
    else if(from=="Mile" && to=="Inch"){
      this.output=(input*63360);
    }

    //Yard to others
    if(from=="Yard" && to=="Yard"){
      this.output=input;
    }
    else if(from=="Yard" && to=="Kilometer"){
      this.output=(input*0.0009144);
    }
    else if(from=="Yard" && to=="Meter"){
      this.output=(input*0.9144);
    }
    else if(from=="Yard" && to=="Centimeter"){
      this.output=(input*91.44);
    }
    else if(from=="Yard" && to=="Millimeter"){
      this.output=(input*914.4);
    }
    else if(from=="Yard" && to=="Micrometer"){
      this.output=(input*914400);
    }
    else if(from=="Yard" && to=="Nanometer"){
      this.output=(input*9.144e+8);
    }
    else if(from=="Yard" && to=="Mile"){
      this.output=(input*0.000568182);
    }
    else if(from=="Yard" && to=="Foot"){
      this.output=(input*3);
    }
    else if(from=="Yard" && to=="Inch"){
      this.output=(input*36);
    }

    //Foot to others
    if(from=="Foot" && to=="Foot"){
      this.output=input;
    }
    else if(from=="Foot" && to=="Kilometer"){
      this.output=(input*0.0003048);
    }
    else if(from=="Foot" && to=="Meter"){
      this.output=(input*0.3048);
    }
    else if(from=="Foot" && to=="Centimeter"){
      this.output=(input*30.48);
    }
    else if(from=="Foot" && to=="Millimeter"){
      this.output=(input*304.8);
    }
    else if(from=="Foot" && to=="Micrometer"){
      this.output=(input*304800);
    }
    else if(from=="Foot" && to=="Nanometer"){
      this.output=(input*3.048e+8);
    }
    else if(from=="Foot" && to=="Mile"){
      this.output=(input*0.000189394);
    }
    else if(from=="Foot" && to=="Yard"){
      this.output=(input*0.333333);
    }
    else if(from=="Foot" && to=="Inch"){
      this.output=(input*12);
    }

    //Inch to others
    if(from=="Inch" && to=="Inch"){
      this.output=input;
    }
    else if(from=="Inch" && to=="Kilometer"){
      this.output=(input*2.54e-5);
    }
    else if(from=="Inch" && to=="Meter"){
      this.output=(input*0.0254);
    }
    else if(from=="Inch" && to=="Centimeter"){
      this.output=(input*2.54);
    }
    else if(from=="Inch" && to=="Millimeter"){
      this.output=(input*25.4);
    }
    else if(from=="Inch" && to=="Micrometer"){
      this.output=(input*25400);
    }
    else if(from=="Inch" && to=="Nanometer"){
      this.output=(input*2.54e+7);
    }
    else if(from=="Inch" && to=="Mile"){
      this.output=(input*1.5783e-5);
    }
    else if(from=="Inch" && to=="Yard"){
      this.output=(input*0.0277778);
    }
    else if(from=="Inch" && to=="Foot"){
      this.output=(input*0.0833333);
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
      return "";
    }
    
  }

  
  
  

}

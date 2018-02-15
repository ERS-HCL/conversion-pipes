import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: any,from:any,to:any): any {
    
    //alert(value+" "+(this.tempConv(value,from,to)));
    return this.weightConv(value,from,to);
  }

  public output;

  public selVal;

  public weight;

  public value;
  

  weightConv(input:any,from:any,to:any):any{
    this.output=input;
    //Kg to others
    if(from=="Kilogram" && to=="Kilogram"){
      this.output=input;
    }
    else if(from=="Kilogram" && to=="Gram"){
      this.output=(input*1000);
    }
    else if(from=="Kilogram" && to=="Milligram"){
      this.output=(input*(Math.pow(10,6)));
    }
    else if(from=="Kilogram" && to=="Microgram"){
      this.output=input*(Math.pow(10,9));
    }
    else if(from=="Kilogram" && to=="Stone"){
      this.output=(input*0.157473);
    }
    else if(from=="Kilogram" && to=="Pound"){
      this.output=(input*2.20462);
    }
    else if(from=="Kilogram" && to=="Ounce"){
      this.output=(input*35.274);
    }
    //Gram to others
     if(from=="Gram" && to=="Gram"){
      this.output=input;
    }
    else if(from=="Gram" && to=="Kilogram"){
      this.output=(input*0.001);
    }
    else if(from=="Gram" && to=="Milligram"){
      this.output=(input*1000);
    }
    else if(from=="Gram" && to=="Microgram"){
      this.output=input*(Math.pow(10,6));
    }
    else if(from=="Gram" && to=="Stone"){
      this.output=(input*0.000157);
    }
    else if(from=="Gram" && to=="Pound"){
      this.output=(input*0.00220);
    }
    else if(from=="Gram" && to=="Ounce"){
      this.output=(input*0.035274);
    }

    //Milligram to others
    if(from=="Milligram" && to=="Milligram"){
      this.output=input;
    }
    else if(from=="Milligram" && to=="Kilogram"){
      this.output=(input*(Math.pow(10,-6)));
    }
    else if(from=="Milligram" && to=="Gram"){
      this.output=(input*0.001);
    }
    else if(from=="Milligram" && to=="Microgram"){
      this.output=(input*1000);
    }
    else if(from=="Milligram" && to=="Stone"){
      this.output=(input*1.5747e-7);
    }
    else if(from=="Milligram" && to=="Pound"){
      this.output=(input*2.2046e-6);
    }
    else if(from=="Milligram" && to=="Ounce"){
      this.output=(input*3.5274e-5);
    }

    //Microgram to others
    if(from=="Microgram" && to=="Microgram"){
      this.output=input;
    }
    else if(from=="Microgram" && to=="Kilogram"){
      this.output=(input*1e-9);
    }
    else if(from=="Microgram" && to=="Gram"){
      this.output=(input*1e-6);
    }
    else if(from=="Microgram" && to=="Milligram"){
      this.output=(input*0.001);
    }
    else if(from=="Microgram" && to=="Stone"){
      this.output=(input*1.5747e-10);
    }
    else if(from=="Microgram" && to=="Pound"){
      this.output=(input*2.2046e-9);
    }
    else if(from=="Microgram" && to=="Ounce"){
      this.output=(input*3.5274e-8);
    }

    //Stone to others
    if(from=="Stone" && to=="Stone"){
      this.output=input;
    }
    else if(from=="Stone" && to=="Kilogram"){
      this.output=(input*6.35029);
    }
    else if(from=="Stone" && to=="Gram"){
      this.output=(input*6350.29);
    }
    else if(from=="Stone" && to=="Milligram"){
      this.output=(input*6.35e+6);
    }
    else if(from=="Stone" && to=="Microgram"){
      this.output=(input*6.35e+9);
    }
    else if(from=="Stone" && to=="Pound"){
      this.output=(input*14);
    }
    else if(from=="Stone" && to=="Ounce"){
      this.output=(input*224);
    }

    //Pound to others
    if(from=="Pound" && to=="Pound"){
      this.output=input;
    }
    else if(from=="Pound" && to=="Kilogram"){
      this.output=(input*0.453592);
    }
    else if(from=="Pound" && to=="Gram"){
      this.output=(input*453.592);
    }
    else if(from=="Pound" && to=="Milligram"){
      this.output=(input*453592);
    }
    else if(from=="Pound" && to=="Microgram"){
      this.output=(input*4.536e+8);
    }
    else if(from=="Pound" && to=="Stone"){
      this.output=(input*0.0714286);
    }
    else if(from=="Pound" && to=="Ounce"){
      this.output=(input*16);
    }

    //Ounce to others
    if(from=="Ounce" && to=="Ounce"){
      this.output=input;
    }
    else if(from=="Ounce" && to=="Kilogram"){
      this.output=(input*0.0283495);
    }
    else if(from=="Ounce" && to=="Gram"){
      this.output=(input*28.3495);
    }
    else if(from=="Ounce" && to=="Milligram"){
      this.output=(input*28349.5);
    }
    else if(from=="Ounce" && to=="Microgram"){
      this.output=(input*2.835e+7);
    }
    else if(from=="Ounce" && to=="Stone"){
      this.output=(input*0.00446429);
    }
    else if(from=="Ounce" && to=="Pounce"){
      this.output=(input*0.0625);
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
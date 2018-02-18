
import { AppComponent }  from '../app.component';
import { Pipe, PipeTransform ,Output,EventEmitter} from '@angular/core';
@Pipe({
  name: 'temp'
})

export class TempPipe implements PipeTransform {
  
 

  transform(value: any,from:any,to:any): any {
   
    // if(value=='' || value==0){
    //   alert(this.convInput);
    // value=this.convInput;
    // }
    //alert(value+" "+(this.tempConv(value,from,to)));
    
    return this.tempConv(value,from,to);
  }

  public val;

  public selVal;

  public temp;

  public value;
  

  tempConv(value:any,from:any,to:any):any{
    //alert(value)
  
    //alert(from+" "+to);
    this.value=value;

    if(from=="Kelvin" && to=="Kelvin"){
      //alert(value);
      this.val=value;
      //alert(this.val);
    }

    else if(from=="Kelvin" && to=="Celsius"){
      //alert("abc")
      this.val=(value-273.15);
     // alert(this.val);
    }

    else if(from=="Kelvin" && to=="Fahrenheit"){

      this.val=((9/5)*(value-273)+32);

    }

    else if(from=="Celsius" && to=="Celsius"){

      this.val=value;

    }

    else if(from=="Celsius" && to=="Kelvin"){

      this.val=(value-(-273.15));

    }

    else if(from=="Celsius" && to=="Fahrenheit"){

      this.val=((9/5)*(value)+32);

    }

    else if(from=="Fahrenheit" && to=="Fahrenheit"){

      this.val=value;

    }

    else if(from=="Fahrenheit" && to=="Kelvin"){

      this.val=((5/9)*(value-32)+273);

    }

    else if(from=="Fahrenheit" && to=="Celsius"){

      this.val=((5/9)*(value-32));

    }

    else if(from=="--select--" || to=="--select--"){
    this.temp="";

    this.val="";
    }
    //alert(this.val);
    if(!isNaN(this.val)){
      return this.val;
    }
    else{
      return "-";
    }
    
  }

  
  
  

}
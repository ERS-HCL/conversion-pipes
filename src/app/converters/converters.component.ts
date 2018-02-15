
import { Component, OnInit } from '@angular/core';
import { TempPipe } from './temp.pipe';
import { LengthPipe } from './length.pipe';
import { WeightPipe } from './weight.pipe';
import { SpeedPipe } from './speed.pipe';
@Component({
  selector: 'app-converters',
  templateUrl: './converters.component.html',
  styleUrls: ['./converters.component.css']
})
export class ConvertersComponent implements OnInit {
     constructor() { }

    ngOnInit() {
    }
  title = 'Converters!';
  convs=["--select--","Temparature Converter","Length Converter","Weight Converter","Speed Converter"];
  degrees=["--select--","Kelvin","Celsius","Fahrenheit"];
  lengths=["--select--","Kilometer","Meter","Centimeter","Millimeter","Micrometer","Nanometer","Mile","Yard","Foot","Inch"];
  speeds=["--select--","m/s","Km/s","m/hr","Km/hr","mile/hr"];
  weights=["--select--","Kilogram","Gram","Milligram","Microgram","Stone","Pound","Ounce"];

  public temp;
  public length;
  public speed;
  public weight;
  tempChange(fromId,from,to){
    let temp1=new TempPipe(); 
  
    temp1.tempConv(fromId,from,to);
    if(from=="--select--" || to=="--select--"){
    this.temp=0;

    }
  }

  lengthChange(lengthId,from,to){
    
    let length=new LengthPipe(); 
  
    length.lengthConv(lengthId,from,to);
    if(from=="--select--" || to=="--select--"){
    this.length="";

    }
  }
  weightChange(weightId,from,to){
    let weight=new WeightPipe(); 
  
    weight.weightConv(weightId,from,to);
    if(from=="--select--" || to=="--select--"){
    this.weight="";

    }
  }
  speedChange(speedId,from,to){
    let speed=new SpeedPipe(); 
  
    speed.speedConv(speedId,from,to);
    if(from=="--select--" || to=="--select--"){
    this.speed="";

    }
  }

  tConv=false;
  sConv=false;
  wConv=false;
  lConv=false;

  convChange(conv){
   /*  
    if(conv=="Temparature Converter"){
      this.change=true;
      //alert(this.change);
    }
    else if(conv=="Length Converter"){
      this.change=true;
      //alert(this.change);
    }
    if(conv=="Weight Converter"){
      this.change=true;
      //alert(this.change);
    }
    if(conv=="Speed Converter"){
      this.change=true;
      //alert(this.change);
    } */
    //alert(conv.target.value);
    switch(conv.target.value) { 
      case "Temparature Converter":
        //alert("t"); 
          this.tConv=true;
      this.sConv=false;
      this.wConv=false;
      this.lConv=false;
          break; 
       
      case "Length Converter":  
          //statements; 
          this.tConv=false;
      this.sConv=false;
      this.wConv=false;
      this.lConv=true;
          break; 
      
      case "Speed Converter": 
          //statements; 
          this.tConv=false;
      this.sConv=true;
      this.wConv=false;
      this.lConv=false;
          break; 
      
      case "Weight Converter":  
          //statements;
          this.tConv=false;
      this.sConv=false;
      this.wConv=true;
      this.lConv=false; 
          break; 
      
   
    } 
  }

  
 }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
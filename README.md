# Converters
In this, pipes are used to convert from one unit to another unit. For each converter, I have created one pipe. The pipes are temp pipe, speed pipe, weight pipe and length pipe. This is used to convert the physical quantities like temparature, speed, weight, length  from one unit to another unit. For Example incase of length we can convert from meter to kilometer,centimeter, millimeter and miles etc. The conversion logic is written in pipes. For ex, temparature conversion(kelvin to celsius, celsius to fahrenhiet and etc) logic written in temp pipe.  
## Different types of conversions(pipes) involved in this component
- Temparature 
- Speed
- Weight
- Length
## Using the complete angular project

Download the src folder and install the required packages and run the application.

### Installing

```
> npm install
```

### Run server

```
> ng serve
``` 

## How it works 
Initially user needs to select the converter type

<p><img src="/images/Screenshot (11).png"></p>

After selection of converter type a div will display on the screen as mentioned below.

<p><img src="/images/Screenshot (12).png"></p>
Then user needs to select the type of units as shown below.
<p><img src="/images/Screenshot (13).png"><img src="/images/Screenshot (15).png"></p>

Then user needs to give the input value.
<p><img src="/images/Screenshot (16).png"></p>

Then if users want to know in other type of conversion, they can change the conversion type 
<p><img src="/images/Screenshot (17).png"></p>

### For creating converters
Developed each converter as a pipe by using Custom pipes concept. Used transform method for creating custom pipes.
### Eg: 
```
transform(value: any,from:any,to:any): any {  
  return this.tempConv(value,from,to);
}
```
  'tempConv' is a method which is having the entire logic belongs to the converter.
### Used custom pipes
Used custom pipes are time, length, speed, weight for converting the input value. The logic required for conversion have written in custom pipes user defined methods.
## Input
Inputs for the component is selecting two dropdowns and numerical input. 

And give the numeric value in the text box then only it will process and returns the value to the output box.
## Output
Output of this component is user expected converted numerical value.

**To preview the demo of this Component please [Click here](https://stackblitz.com/edit/angular-uoz1z7-jwyrrg?embed=1&file=src/app/converters/converters.component.html&hideNavigation=1&view=preview)**

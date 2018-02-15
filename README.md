# Converters
Converters is a simple component developed by using Angular. This is used to convert physical quantities(temparature, speed, weight, length) from one unit to another unit. For Example incase of length we can convert from meter to kilometer,centimeter, millimeter and miles etc. 
## Different types of physical quantities involved in this component
- Temparature 
- Speed
- Weight
- Length
## Using the complete angular project

Download the src folder and install the required packages and run the application. All the required material components are imported to the project.

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

After selection of converter type that div will appear on the sceen.

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
## Intput
Inputs for the component is selecting two dropdowns and numerical input. 

And give the numeric value in the text box then only it will process and returns the value to the output box.
## Output
Output of this component is user expected converted numerical value.

**To preview the demo of this Component please click here**: [Click here](https://angular-uoz1z7-oebdrm.stackblitz.io)

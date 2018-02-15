# Converters
Converters is a simple component developed by using Angular. This is used to convert physical quantities(temparature, speed, weight, length) from one unit to another unit. For Example incase of length we can convert from meter to kilometer,centimeter, millimeter and miles etc. 
## Different types of physical quantities involved in this component
- Temparature 
- Speed
- Weight
- Length
## How it works 
Initially user needs to select the converter type

<p><img src="/images/Screenshot (11).png"></p>

After selection of converter type the related
### For creating converters
Developed each converter as a pipe by using Custom pipes concept. Used transform method for creating custom pipes.
### Eg: transform(value: any,from:any,to:any): any {  return this.tempConv(value,from,to);}
  'tempConv' is a method which is having the entire logic belongs to the converter.
### Used custom pipes
Used custom pipes are time, length, speed, weight for converting the input value. The logic required for conversion have written in custom pipes user defined methods.
## Intput
Inputs for the component User need to choose the type conversion they want. 
Then only the subtypes will appear in the dropdown.
Need to select the dropdown of 'From' which do you want to converting unit type and 'To' dropdown for the unit which you wanted to convert.
And give the numeric value in the text box then only it will process and returns the value to the output box.
## Output
when user has given the inputs converter will convert that input to the user selected unit type and appends the output to the output box.
## Test URL
https://angular-uoz1z7-oebdrm.stackblitz.io

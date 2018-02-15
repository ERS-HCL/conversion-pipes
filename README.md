# Conversions
Based on given selected units and input, it converts into user expected units. 
### Converter in Angular4 
It is a units converters component. In this component Temparature Converter, Length Converter, Speed Converter, Weight Converters are there. 
Users can convert from one unit to required unit based on selected unit.
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

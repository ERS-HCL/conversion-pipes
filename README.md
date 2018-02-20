
# Conversion-pipes

Conversion pipes are used to convert from one unit to another unit. For each converter, I have created one pipe. The pipes are temp pipe, speed pipe, weight pipe and length pipe. This is used to convert the physical quantities like temparature, speed, weight, length  from one unit to another unit. For Example incase of length we can convert from meter to kilometer,centimeter, millimeter and miles etc. The conversion logic is written in pipes. For ex, temparature conversion(kelvin to celsius, celsius to fahrenhiet and etc) logic written in temp pipe.

## How To Use
- meter | length: "Meter":"Centimeter"
- Kmph | speed: "Km/hr":"m/s"
- Kelvin | temp: "Kelvin":"Celsius"
- Kilogram | weight: "Kilogram":"Gram"
  
<table><tr><th>Pipe Name</th><th>Convert From(unit)</th><th>Convert To(units)</th><th>Description</th><th>Example</th></tr>
  <tr><td>legth Pipe</td><td>meters</td><td>Kilometer<br>Centimeter<br>Millimeter<br>Micrometer<br>Nanometer<br>Mile<br>Yard<br>Foot<br>Inch</td><td>'length pipe' converts from meters to all other units, Kilometers to the remaining units and all other units to remaining units.</td><td>Example For Inputs are:<br>Meter:1,10,0.1,..<br>Kilometer:1,0.5,50,..<br>and etc</td></tr>
  <tr><td>speed Pipe</td><td>Meter/sec</td><td>Km/sec<br>meter/hour<br>Km/hour<br>mile/hour</td><td>'speed pipe' converts the input values from meter/sec to all other units like km/s,m.hr,km/hr,mile/hr and also from Kilometer/sec to all other units and etc. </td><td>Examples are:<br>Any digits or float values for all units like 1, 10, 0.5,...</td></tr>
  <tr><td>temp pipe</td><td>Kelvin</td><td>Celsius<br>Fahrenheit</td><td>'temp pipe' converts from Kelvin to Celsius and Fahrenheit and Celsius to Kelvin, Fahrenheit and Fahrenheit to Kelvin,Celsius.</td><td>Examples are:<br>Any digits or float values for all units like 1, 10, 0.5,...</td></tr>
  <tr><td>weight pipe</td><td>Kilogram</td><td>Gram<br>Milligram<br>Microgram<br>Stone<br>Pound<br>Ounce</td><td>'weight pipe' converts from Kilogram to all mentioned units and Gram to all other units and all other units to remaining units.</td><td>Examples are:<br>Any digits or float values for all units like 1, 10, 0.5,...</td></tr>
</table>


  ## Output Format: 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/Screenshot (13).png">

**To preview the demo of this Component please [Click here](https://stackblitz.com/edit/angular-uoz1z7-ls8t7m?embed=1&file=src/app/converters/converters.component.html&hideNavigation=1&view=preview)**

## Using the complete angular project

Download the converter folder and install the required packages and run the application.


### Installing

```
> npm install
```

### Run server

```
> ng serve
``` 


## Input
Inputs for the component is numerical value. 
## Output
Output of this component is user required converted numerical value in that corresponding units.


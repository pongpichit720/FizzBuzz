# FizzBuzz web application

A web application developed in NodeJS that takes in a collection of values. The
application should do the following for each value in the collection:
- If the value is a multiple of 3 then output the word “Fizz”
- If the value is a multiple of 5 then output the word “Buzz”
- If the value is divisible by both 3 and 5 then output the word “FizzBuzz”
- At the end of the run the program should display each division that was performed

### Sample
###### input:
```
[1, 3, 5 , , 15, A, 23]
```
###### output:
```
Divided 1 by 3
Divided 1 by 5
Fizz
Buzz
Invalid Item
FizzBuzz
Invalid Item
Divided 23 by 3
Divided 23 by 5
```

### Installation
###### install the application:
```
npm install
```
###### start the application:
```
npm start
```

### Usage sample
###### GET request:
```
curl --globoff "http://localhost:5000/?input[0]=1&input[1]=3&input[2]=5&input[3]=&input[4]=15&input[5]=A&input[6]=23"
```
###### POST request:
```
curl -X POST -H "Content-Type: application/json" -d "{\"input\":[1,3,5,null,15,\"A\",23]}" http://localhost:5000
```
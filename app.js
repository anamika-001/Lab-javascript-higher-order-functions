//#1 Array Slice

var items = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];

function slice_food(items,x,y);
{

var modifitem   = items.slice(x,y);
console.log(modifiitem);

}
console.log(slice_food(food,1,3));


//#2: Array Splice
const city= ["delhi", "chennai", "haryana", "Bangalore"];
city.splice(2,0,"lucknow","gorakpur");
console.log(city);

//#3: Filter
const numberArray= [12,324,213,4,2,3,45,4234];
 const isEven = () => {
 	return numberArray.(number =>{
 		return number%2==0;
 	}); 
 }
 console.log(isEven());
 
//#5: Map
 const arr = [11, 34, 20, 5, 53, 16];
 function fndsqr(arr){
  var newarray =arr.map(myFunction()) ;
  }
function myFunction(num) {
  return num*num;
}
  
 //#6: Reduce
 var arr = [2, 3, 5, 10]
 function multiply(arr){
   }
 function main(total, num){
  return total * num;
 }



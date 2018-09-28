var _=module.exports={}

/*
_.head([1, 2, 3]);
// => 1
 
_.head([]);
// => undefined
*/

_.head = function (array){
    if(array.length>=1) return array[0]
}
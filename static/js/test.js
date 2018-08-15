//数组去重
// let unique = function(arr) {
//   let hashTable = {};
//   let data = [];
//   for(let i=0,l=arr.length;i<l;i++) {
//     if(!hashTable[arr[i]]) {//利用对象的key唯一性
//       hashTable[arr[i]] = true;
//       data.push(arr[i]);
//     }
//   }
//   console.log(hashTable);//
//   return data
//
// }
// let arr=[1,2,3,1,2,6,4,7,4,7];
// console.log(unique(arr));

//es6去重
// let arr=[1,2,3,1,2,6,4,7,4,7];
// let arr1=Array.from(new Set(arr));//Set返回的是一个对象，需要Array.from来转换为数组
// console.log(arr1);

 //冒泡排序
// let arr1=[2,5,44,2,1];
// let bubble=function(arr){
//   for(let i=0;i<arr.length-1;i++){//外层循环控制比较的轮数
//     for(let j=0;j<arr.length-i-1;j++){//内层循环相邻比较，每组比较都把大的放后面
//       if(arr[j]>arr[j+1]){
//         let temp=arr[j];
//         arr[j]=arr[j+1];
//         arr[j+1]=temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubble(arr1));

// function quickSort(arr){
//             //如果数组<=1,则直接返回
//             if(arr.length<=1){return arr;}
//             var pivotIndex=Math.floor(arr.length/2);
//             //找基准，并把基准从原数组删除
//             var pivot=arr.splice(pivotIndex,1)[0];
//             //定义左右数组
//             var left=[];
//             var right=[];
//
//             //比基准小的放在left，比基准大的放在right
//             for(var i=0;i<arr.length;i++){
//                 if(arr[i]<=pivot){
//                     left.push(arr[i]);
//                 }
//                 else{
//                     right.push(arr[i]);
//                 }
//             }
//             //递归
//             return quickSort(left).concat([pivot],quickSort(right));
//         }
//         let arr2=[1,2,3,2,6,7,3,8,4,7]
//         console.log(quickSort(arr2));
//快速排序
// function quick(arr){
//   if(arr.length<=1){return arr}
//   let pivotindex=Math.floor(arr.length/2);
//   let pivot=arr.splice(pivotindex,1)[0];//splice()返回的是由被删除的元素组成的一个数组
//   let left=[];
//   let right=[];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]<pivot){
//       left.push(arr[i]);
//     }
//     else{
//       right.push(arr[i]);
//     }
//   }
//   return quick(left).concat([pivot],quick(right));
// }
// let arr2=[6,4,2,55,6,7,8,2];
// console.log(quick(arr2));

// 百度招聘信息

try{
  if(window.console&&window.console.log)
    {
         console.log("一张网页，要经历怎样的过程，才能抵达用户面前？\n一位新人，要经历怎样的成长，才能站在技术之巅？\n探寻这里的秘密；\n体验这里的挑战；\n成为这里的主人；\n我，可以影响世界。--百度\n");
         console.log("真挚脸%c pick me","color:red");
         console.log("真挚脸%c pick me","color:red");
         console.log("真挚脸%c pick me","color:red");}
}
catch(e){
};

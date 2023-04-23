'use strict'

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,
//     isBudgetEnough: function(){
//        let square =  this.shops.reduce((acc, item)=>{
//             let arrRoom = Object.values(item);
//             let value = arrRoom[0]*arrRoom[1]* this.height;
//             return acc += value;
//         }, 0)
//         let count = square * this.moneyPer1m3;
//         this.budget > count ? console.log('Бюджета достаточно') : console.log('Бюджета недостаточно');
//         return count;
//     }
// }

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'zenua', 'olga', 'polina'];
function sortStudentsByGroups(arr) {
    const arrTeam = [];
arr.sort();
console.dir(arr);
    let team = [];
    let i;
    for(i = 0; i < arr.length; i++){
        if(team.length < 3){
            team.push(arr[i]);
            if( i  === arr.length - 1 && team.length === 3){
                arrTeam.push(team);
            }
        }
        else{
            // eslint-disable-next-line no-debugger
            debugger;
         arrTeam.push(team);
            team = [];
            i--;
        }
    }
console.dir(team);
if( team.length >0 && team.length < 3){
arrTeam.push(`Оставшиеся студенты: ${team.join(', ')}`)
}
return arrTeam;
}
console.dir(sortStudentsByGroups(students));

// let size = 8;
// let block = '#';
// let space = " ";

// for (let i = 1; i <= size; i++){
//     let line = '';

//     for (let j = 1; j <=size; j++){
//         if (i%2){
//             if(j%2){
//                 line += space;
//             } else { line += block }
//         } else {
//             if (j%2){
//                 line += block;
//             } else { line += space }
//         }
//     }

//     console.log(line);
// }

let size = 8;
let board = " ";

for (let i = 1; i <= size; i++){
    for (let j = 1; j <=size; j++){
        if ((i + j) % 2 === 0) {
            board += " ";
        } else { board += "#"}
    }
    board += "\n";
}

console.log(board);
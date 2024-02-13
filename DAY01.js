/*
문제 ) 문자열 str이 주어질 때 , str을 출력하는 코드를 작성해 보세요. 
조건 )1 ≤ str의 길이 ≤ 1,000,000
    str에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.   
*/
/*
문제 풀이) 입력 -> A -> 처음입력했던 값이 되어야 함
 */

// readline을 사용해서 푸는 문제임
const readline = require('readline');
//createInterface을 사용해서 입력과 출력을 할 수 있는 rl 선언
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []; //여기에 입력값을 담음

// 라인마다 읽음 + 입력이 더이상 없으면 출력
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});


 
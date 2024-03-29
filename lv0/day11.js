/*머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요. */

function solution(box, n) {
    const rkfh = Math.floor((box[0])/n) //가로
    const tpfh = Math.floor((box[1])/n) //세로
    const shvdl = Math.floor((box[2])/n) //높이
    
    return rkfh * tpfh * shvdl;
}
// 다른 분의 풀이 나는 가로 세로 높이로 다 나눠서 했는데 한번에 해도 상관없었따
function solution(box, n) {
    let [width, length, height] = box;

    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

/*정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 
최댓값을 return하도록 solution 함수를 완성해주세요. */
function solution(numbers) {
    var answer = numbers.sort((a,b)=> b-a);
    
    
    return answer[0] * answer[1];
}

/*약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 
n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요. */
function solution(n) {
    let answer = 0;
      for(let i = 4; i<=n; i++){
         if(i % 2 === 0 || i % 3 === 0){
             answer +=1 ;   
         }
      }
    return answer; 
}

/* i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 
정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.*/
function solution(n) {
    var answer = 1;
    let fac = 1;

    while (fac <= n){
        fac *= answer;
        answer ++;
    }
    return answer -2;
}
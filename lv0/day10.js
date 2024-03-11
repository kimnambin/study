/*사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 
사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 
좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 
solution 함수를 완성해주세요. */
function solution(dot) {
    if(dot[0] > 0 && dot[1] > 0){
        return 1;
    }else if (dot[0] < 0 && dot[1] > 0){
        return 2;
    }else if(dot[0] < 0 && dot[1] < 0){
        return 3;
    }else{
        return 4;
    }
}

/*정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 
return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 
다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]] */

function solution(num_list , n) {
    var answer = [];

    while (num_list.length){
        answer.push(num_list.splice(0,n));
    }
    return answer;
}

/*머쓱이는 친구들과 동그랗게 서서 공 던지기 게임을 하고 있습니다. 공은 1번부터 던지며 오른쪽으로 한 명을 건너뛰고 그다음 사람에게만 던질 수 있습니다. 친구들의 번호가 들어있는 정수 배열 numbers와 정수 K가 주어질 때, 
k번째로 공을 던지는 사람의 번호는 무엇인지 return 하도록 solution 함수를 완성해보세요. */

function solution(numbers, k) {
    return numbers[(2 * (k-1)) % numbers.length];
}

/* k가  numbers의 길이보다 짧을 때는 구했는데  [1, 2, 3, 4, 5, 6]	5 이런식으로 
배열을 한바퀴(?) 도는 경우는 못구하고 있었는데  % numbers.length 을 이용하면 손쉽게 
해결 할 수 있다는 것을 알게 되었다. */


/*정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 
한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요. */

function solution(numbers ,direction) {
    if (direction === "right"){
        const last = numbers.pop();
        numbers.unshift(last);
    }else{
        const first = numbers.shift();
        numbers.push(first);
    }
    return numbers;
}

// 0 1 2 -> 2 0 1  0이랑 1은 +1 2는  -2 라이트는 - 레프트는 + 
// shift , unshift , pop을 처음 써본 문제였따
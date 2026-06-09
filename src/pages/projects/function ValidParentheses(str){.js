function ValidParentheses(str){
     const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for(let i =0; i<str.length; i++){

        if (
            str[i] === '(' ||
            str[i] === '{' ||
            str[i] === '['
        ) {
            stack.push(str[i]);
        } else {

            if (stack.pop() !== pairs[str[i]]) {
                return false;
            }

        }
    }

    return stack.length === 0;
}
       


function reverseWords (str) {
    let arr = str.split(" ");
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
       newArr.push(arr[i])


    }

    return newArr.join(" ");
}

function intersection(arr1, arr2) {

    const set1 = new Set(arr1);
    const result = new Set();

    for(let i = 0; i < arr2.length; i++) {

        if(set1.has(arr2[i])) {
            result.add(arr2[i]);
        }

    }

    return [...result];
}


function maxConsec(arr){
    let count = 0;
    let prevC = 0;
    let finalC =0

    for(let i=0; i<arr.length; i++){
        if(arr[i]===1){
            count+=1;
        }
        else {
           count = 0;
        }

        finalC = Math.max(finalC, count);



    }

    return finalC
}





function peakEl (arr) {
    if(arr[0]>arr[1]) return 0;
    if(arr[arr.length-1]>arr[arr.length-2]) return arr.length-1;
    for(let i=1; i<arr.length-1; i++){
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
            return i
        }
        
    }
}


function reverse_polish_notation(expr) {
    //vars
    const q = [];

    //loop
    for(let i = 0; i < expr.length; i ++) {
        //if element is number, push to q
        //else if element is op, pop 2 off q and evaluate, push answer to q

        let el = expr[i];

        if (el === '-' || el === '+' || el === '*' || el === '/') {
            let n1 = q.pop(); let n2 = q.pop();
            let ans;
            switch(el) {
                case '-': ans = n2 - n1; break;
                case '+': ans = n2 + n1; break;
                case '/': ans = n2 / n1; break;
                case '*': ans = n2 * n1; break;
            }
            q.push(ans);
        } else {
            q.push(el);
        }
    }
    return q[0];
}
  

console.log(reverse_polish_notation([1, 2, 3, '+', 2, '*', '-']))



// [1, 2, 3, '+', 2, '*', '-']

// [1]
// [1,2]
// [1,2,3]
// [1,2,3,'+'] // operator = pop 3 off queue and evaluate
// 2+3 = 5;
// [1,5] //put result onto queue
// [1,5,2]
// [1,5,2,'*']; // operator = pop 3 off queue and evaluate
// 5*2 = 10;
// [1,10,'-']// operator = pop 3 off queue and evaluate
// 1-10 = -9;


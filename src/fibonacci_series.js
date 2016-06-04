'use strict';

function fibonacci_series(n) {

    var fibonacci=[];
    fibonacci[0]=0;

    for(var i=0;i<n;i++)
    {
        var item=fibonacciNumber(i+1,fibonacci);
        fibonacci.push(item);
    }

    return fibonacci;
}

function fibonacciNumber(n,fibonacci){

    if(n == 1 || n == 2){

        return 1;
    }

    return fibonacci[n-1] +fibonacci[n-2];
}

module.exports = fibonacci_series;

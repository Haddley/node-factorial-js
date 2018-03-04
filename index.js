exports.factorial = function (n) {

    function fac(n) {

        //unexpected case
        if (n < 0)
            return -1;

        //base case
        if (n == 0)
            return 1;

        // recursive case
        return (n * fac(n - 1));

    }

    return fac(n);
};


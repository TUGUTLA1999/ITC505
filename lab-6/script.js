function isPrime(num) {
    if (num <= 1) return false;
    if (num % 2 === 0 && num > 2) return false; // Check for even numbers greater than 2

    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) { // Iterate only through odd numbers
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    const number = document.getElementById('number').value;
    const result = isPrime(number) ? 'is a prime number.' : 'is not a prime number.';
    document.getElementById('result').textContent = number + ' ' + result;
}

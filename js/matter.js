// masala 1
const onlyPositive = (numbers) =>
    numbers.filter((n) => (typeof n !== "number") % 2 === 0);

// console.log(onlyPositive([1, 2, 3, 4, 5, true, false]));

// masala 1
const tenth = (number) => number.toString()[number.toString().length - 2];

// console.log(tenth(1324564));

// masala 3
const binary = (num) => (num === 1 ? true : num === 0 ? false : null);

// console.log(binary(0));
// console.log(binary(1));
// console.log(binary(7));

// masala 4
const card = (cardN, isHidden) => {
    if (isHidden) return `${cardN.slice(0, 4)} **** **** **${cardN.slice(-2)}`;

    return cardN;
};

// console.log(card("1234 5678 9012 3456", true));
// console.log(card("1234 5678 9012 3456", false));

// masala 5
const checkPassword = (password) => {
    if (password.toString().length >= 8) {
        // har va raqam borligini tekshirish
        if (/[a-z]/.test(password) && /[0-9]/.test(password)) return true;

        return false;
    } else {
        return false;
    }
};

// console.log(checkPassword("12345678ds"));

// masala 6
const camelCase = (text) =>
    text
        .split("-")
        .map((word, i) =>
            i !== 0 ? word[0].toUpperCase() + word.slice(1) : word,
        )
        .join("");

// console.log(camelCase("hello-world"));

// masala 7
const bigAndSmall = (str) => {
    const numbers = str.split(" ");

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return `${min} ${max}`;
};

// console.log(bigAndSmall("1 2 3 4 5"));

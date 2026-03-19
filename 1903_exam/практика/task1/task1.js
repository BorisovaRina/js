function safeToNumber(str) {
    const num = Number(str);
    return isNaN(num) ? null : num;
}

const output = document.getElementById('output');
output.textContent = `safeToNumber("123") → ${safeToNumber("123")}
safeToNumber("abc") → ${safeToNumber("abc")}
safeToNumber("12.34") → ${safeToNumber("12.34")}
safeToNumber("") → ${safeToNumber("")}
`;

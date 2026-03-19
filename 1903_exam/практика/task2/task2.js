function toBoolean(value) {
    return Boolean(value);
}

const output = document.getElementById('output');
output.textContent = `toBoolean(0) → ${toBoolean(0)}
toBoolean("0") → ${toBoolean("0")}
toBoolean("") → ${toBoolean("")}
toBoolean([]) → ${toBoolean([])}
toBoolean(null) → ${toBoolean(null)}
`;

export const CalculatorOperations = (op: string, prev: number, next: number) => {
    switch (op) {
        case '/': return prev / next;
        case '*': return prev * next;
        case '+': return prev + next;
        case '-': return prev - next;
        default:
        case '=': return next;
    }
}
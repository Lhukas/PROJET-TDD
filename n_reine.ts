export function Partie1(n: number): string[][] {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error("Entrée non valide : n doit être un entier positif.");
    }

    const solutions: string[][] = [];
    const board: number[] = [];

    const backtrack = (row: number) => {
        if (row === n) {
            const solution = board.map(col => {
                let rowStr = "";
                for (let j = 0; j < n; j++) {
                    rowStr += (j === col ? "#" : "O");
                }
                return rowStr;
            });
            solutions.push(solution);
            return;
        }


        for (let col = 0; col < n; col++) {
            let valid = true;
            for (let i = 0; i < row; i++) {
                if (board[i] === col || Math.abs(board[i] - col) === row - i) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                board[row] = col;
                backtrack(row + 1);
            }
        }
    };

    backtrack(0);
    return solutions;
}


export function Partie2(): string[][] {

    return [];
}
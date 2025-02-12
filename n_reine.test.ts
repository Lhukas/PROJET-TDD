import { solveNQueens } from './n_reine';

describe('Tests de base', () => {
    test('dummy test', () => {
        expect(true).toBe(true);
    });
});

describe('Validation des entrées', () => {
    test('doit lancer une erreur pour une chaîne de caractères', () => {
        expect(() => solveNQueens("4" as any)).toThrow("Entrée non valide : n doit être un entier positif.");
    });

    test('doit lancer une erreur pour un nombre non entier', () => {
        expect(() => solveNQueens(4.5)).toThrow("Entrée non valide : n doit être un entier positif.");
    });

    test('doit lancer une erreur pour n = 0 et n < 0', () => {
        expect(() => solveNQueens(0)).toThrow("Entrée non valide : n doit être un entier positif.");
        expect(() => solveNQueens(-1)).toThrow("Entrée non valide : n doit être un entier positif.");
    });
});

describe('Cas simples', () => {
    test('pour n = 1, doit retourner [["#"]]', () => {
        const result = solveNQueens(1);
        expect(result).toEqual([["#"]]);
    });

    test('pour n = 2, doit retourner []', () => {
        const result = solveNQueens(2);
        expect(result).toEqual([]);
    });

    test('pour n = 3, doit retourner []', () => {
        const result = solveNQueens(3);
        expect(result).toEqual([]);
    });


});





//npm test

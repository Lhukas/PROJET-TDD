import { solveNQueens } from './n_reine';

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


describe('Tests de base', () => {
    test('dummy test', () => {
        expect(true).toBe(true);
    });
});


//npm test

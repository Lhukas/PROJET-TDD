import { solveNQueens } from './n_reine';

describe('Validation des entrées', () => {
    test('doit lancer une erreur pour une chaîne de caractères', () => {
        expect(() => solveNQueens("4" as any)).toThrow("Entrée non valide : n doit être un entier positif.");
    });
});

// On peut conserver le test dummy si souhaité
describe('Tests de base', () => {
    test('dummy test', () => {
        expect(true).toBe(true);
    });
});


//npm test

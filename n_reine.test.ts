import { Partie1 } from './n_reine';


describe('Partie 1', () => {
    
describe('Tests de base', () => {
    test('dummy test ', () => {
        expect(true).toBe(true);
    });
});

describe('Validation des entrées', () => {
    test('doit lancer une erreur pour une chaîne de caractères', () => {
        expect(() => Partie1("4" as any)).toThrow("Entrée non valide : n doit être un entier positif.");
    });

    test('doit lancer une erreur pour un nombre non entier', () => {
        expect(() => Partie1(4.5)).toThrow("Entrée non valide : n doit être un entier positif.");
    });

    test('doit lancer une erreur pour n = 0 et n < 0', () => {
        expect(() => Partie1(0)).toThrow("Entrée non valide : n doit être un entier positif.");
        expect(() => Partie1(-1)).toThrow("Entrée non valide : n doit être un entier positif.");
    });
});

describe('Cas simples', () => {
    test('pour n = 1, doit retourner [["#"]]', () => {
        const result = Partie1(1);
        expect(result).toEqual([["#"]]);
    });

    test('pour n = 2, doit retourner []', () => {
        const result = Partie1(2);
        expect(result).toEqual([]);
    });

    test('pour n = 3, doit retourner []', () => {
        const result = Partie1(3);
        expect(result).toEqual([]);
    });

    test('pour n = 4, doit retourner exactement 2 solutions', () => {
        const solutions = Partie1(4);
        expect(solutions.length).toBe(2);
    });

    test('chaque solution doit être une grille 4x4 avec une reine par ligne', () => {
        const solutions = Partie1(4);
        solutions.forEach(solution => {
            expect(solution.length).toBe(4);
            solution.forEach(row => {
                expect(row.length).toBe(4);
                expect((row.split('').filter(c => c === '#')).length).toBe(1);
            });
        });
    });


});
});



describe('Partie 2', () => {

    describe('Tests de base', () => {
        test('dummy test ', () => {
            expect(true).toBe(true);
        });
    });

});

//npm test

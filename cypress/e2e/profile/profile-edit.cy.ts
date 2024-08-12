let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    after(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
    });
    it('И редактирует его', () => {
        const newFirstname = 'firstname';
        const newLastname = 'lastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});

export {};

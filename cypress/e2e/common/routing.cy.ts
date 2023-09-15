import { selectByTestId } from "../../helpers/selectByTestId";

describe('routing', () => {

  describe("пользователь не авторизован", () => {
    it('Попытка перейти на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId("MainPage")).should('exist');
    })

    it('попытка открыть несуществующий маршрут', () => {
      cy.visit('/itgjigtijgt');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    })
  })

  describe("пользователь авторизован", () => {
    beforeEach(() => {
      cy.login('admin', '123');
    })

    it('переход на страницу пользователя', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('переход на страницу списка статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    })
  })

})
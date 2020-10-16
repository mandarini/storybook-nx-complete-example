describe('ui-react: UiReact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uireact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-react!');
    });
});

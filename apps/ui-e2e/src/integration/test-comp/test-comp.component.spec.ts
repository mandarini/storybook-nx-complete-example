describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcompcomponent--primary'));

  it('should render the component', () => {
    cy.get('storybook-angular-example-test-comp').should('exist');
  });
});

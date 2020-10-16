describe('another-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testanothercomponent--primary'));

  it('should render the component', () => {
    cy.get('storybook-angular-example-test-another').should('exist');
  });
});

/// <reference types="Cypress" />

describe('Testing the Apartment for Rent page', () => {
  beforeEach(() => {
    //I saw this in the read me file and added it.
    cy.server({ force404: true })
      .route('POST', /login/, 'fixture:login-anonymous')
      .route(/taxonomy/, 'fixture:taxonomy')
      .route(/context/, 'fixture:context/property-for-sale')
      .route(/seo/, 'fixture:seo/property-for-sale/residential-apartment')
      .route(/keywords/, [])
      // don’t mock algolia:
      // .route('POST', /algolia.*objects/, 'fixture:algolia/objects');
      //This is the fixture used for this test
      .route(/dpv/, 'fixture:dpv/apartment-for-rent');

    cy.fixture('/dpv/apartment-for-rent').as('ar');
    cy.get('@ar').then(ar => {
      //visit this url before each of our test
      cy.visit(ar.data.relative_url);
    });
  });

  it('Agent Details', () => {
    cy.get('@ar').then(ar => {
      cy.getByFnId('agent-logo')
        .should('have.css', 'background-image')
        .and('be.eq', 'url("' + ar.data.agent_logo + '")');
      cy.getByFnId('agent-logo')
        .parent()
        .should('have.attr', 'href')
        .and('be.eq', '/search/RP/?real_estate_agent=' + ar.data.real_estate_agent_id);
      cy.getByFnId('agent-heading')
        .invoke('text')
        .should('be.eq', ar.data.listed_by_display_en);
      cy.getByFnId('agent-name')
        .invoke('text')
        .should('be.eq', ar.data.agent_name);
      cy.getByFnId('agent-name')
        .should('have.attr', 'href')
        .and('be.eq', '/search/RP/?real_estate_agent=' + ar.data.real_estate_agent_id);
      cy.getByFnId('rera-permit-heading').should('contain', 'Rera Permit Number:');
      cy.getByFnId('rera-permit-no')
        .invoke('text')
        .should('be.eq', ar.data.rera_permit_number);
      cy.getByFnId('agent-number-btn').then(x => {
        expect(x).to.have.text('Show Phone Number');
        x.click();
      });
      cy.getByFnId('agent-number')
        .invoke('text')
        .should('be.eq', ar.data.phone_number);
      cy.getByFnId('send-reply')
        .invoke('text')
        .should('be.eq', 'Send Reply');
      cy.contains('Reply to ad').should('be.visible');
    });
  });
  it('Agent Listing Window', () => {
    cy.get('@ar').then(ar => {
    cy.getByFnId('agent-name').click();
    cy.location('href').should('contain', '/search/RP/?real_estate_agent=' + ar.data.real_estate_agent_id);
  });
});

});

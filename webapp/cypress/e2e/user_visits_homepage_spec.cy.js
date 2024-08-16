describe("User visits Homepage", () => {
  it("and see a list of exams", () => {
    cy.visit("http://localhost:1234");

    cy.get("#exams-section").should("contain", "AIWH8Y");
    cy.get("#exams-section").should("contain", "Antônio Rebouças");
    cy.get("#exams-section").should("contain", "Dra. Isabelly Rêgo");
    cy.get("#exams-section").should("contain", "ácido úrico");
    cy.get("#exams-section").should("contain", "t4-livre");
    cy.get("#exams-section").should("contain", "tsh");
    cy.get("#exams-section").should("contain", "eletrólitos");
    cy.get("#exams-section").should("contain", "tgp");
    cy.get("#exams-section").should("contain", "tgo");

    cy.get("#exams-section").should("contain", "TYO7AX");
    cy.get("#exams-section").should("contain", "Emilly Batista Neto");
    cy.get("#exams-section").should("contain", "Félix Garcês");
    cy.get("#exams-section").should("contain", "Félix Garcês");
    cy.get("#exams-section").should("contain", "ácido úrico");
  });
});

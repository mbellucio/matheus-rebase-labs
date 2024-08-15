describe("User see detailed exams", () => {
  it("from the homepage after inserting a valid token", () => {
    cy.visit("http://localhost:1234");

    cy.get("#search-input").type("AIWH8Y");
    cy.contains("Procurar").click();

    cy.get("#detailed-exams-section").should("contain", "Resultado dos exames - #AIWH8Y");
    cy.get("#detailed-exams-section").should("contain", "Nome: Antônio Rebouças");
    cy.get("#detailed-exams-section").should("contain", "CPF: 071.488.453-78");
    cy.get("#detailed-exams-section").should("contain", "CPF: 071.488.453-78");
    cy.get("#detailed-exams-section").should("contain", "Médico: Dra. Isabelly Rêgo");
    cy.get("#detailed-exams-section").should("contain", "CRM: B0002W2RBG/SP");

    cy.get("#detailed-exams-section").should("contain", "hemácias");
    cy.get("#detailed-exams-section").should("contain", "Intervalo do resultado: 45-52");
    cy.get("#detailed-exams-section").should("contain", "Resultado: 6");
    cy.get("#detailed-exams-section").should("contain", "ácido úrico");
    cy.get("#detailed-exams-section").should("contain", "Intervalo do resultado: 15-61");
    cy.get("#detailed-exams-section").should("contain", "Resultado: 43");
  });
});

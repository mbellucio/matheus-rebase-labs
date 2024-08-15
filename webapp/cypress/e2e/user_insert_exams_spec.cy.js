describe("User insert new exams", () => {
  it("from insert exams page and receives success feedback", () => {
    cy.visit("http://localhost:1234");

    cy.contains("Inserir Exames").click();
    cy.get('input[type="file"]').attachFile("data.csv");
    cy.contains("Enviar").click();

    cy.get("#insert-success-section").should("contain", "Sucesso!");
  });

  it("and see the changes being reflected on exams list", () => {
    cy.visit("http://localhost:1234");

    cy.contains("Inserir Exames").click();
    cy.get('input[type="file"]').attachFile("data.csv");
    cy.contains("Enviar").click();
    cy.contains("Todos os Exames").click();
    cy.get("#refresh-button").click();

    cy.get("#exams-section").should("contain", "TESTING");
    cy.get("#exams-section").should("contain", "Matheus Bellucio");
    cy.get("#exams-section").should("contain", "PC Farias");
    cy.get("#exams-section").should("contain", "Raio-x do tórax");
  });
});

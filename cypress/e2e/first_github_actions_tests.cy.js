describe("Cypress Github Action Demo", () => {
  it("Open pmtool and fill username", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.get("#username").should("have.value", "admin");
  });

  it("Pmtool Login Title Exist", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("h3.form-title").should("exist");
  });
});

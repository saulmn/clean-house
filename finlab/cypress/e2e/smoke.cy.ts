import { faker } from "@faker-js/faker";

describe("smoke tests", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      fullName: "John Doe",
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    };
    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visitAndCheck("/");
    cy.findByRole("link", { name: /login/i }).click();
    cy.findByRole("link", { name: /register here/i }).click();

    cy.get('[data-testid="full-name"]').type(loginForm.fullName);
    cy.get('[data-testid="email"]').type(loginForm.email);
    cy.get('[data-testid="password"]').type(loginForm.password);

    cy.findByRole("button", { name: /create account/i }).click();

    cy.findByRole("heading", { name: /welcome back, john doe 👏🏻/i });
  });
});

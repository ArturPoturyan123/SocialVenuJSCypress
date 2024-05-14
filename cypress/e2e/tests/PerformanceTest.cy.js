import PerformacePage from "../../pages/PerformancePage";

const performacePage = new PerformacePage();

describe("Dashboard", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Verify the functionality of clicking the Videos statistic block", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.StatisticBlockVideosBtn();
    cy.get("#chart-topbar-title").should("have.text", "Videos");
  });

  it("Verify the functionality of clicking the Shares statistic block", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.StatisticBlockSharesBtn();
    cy.get("#chart-topbar-title").should("have.text", "Shares");
  });

  it("Verify the functionality of clicking the Views statistic block", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.StatisticBlockViewsBtn();
    cy.get("#chart-topbar-title").should("have.text", "Views");
  });

  it("Verify the functionality of clicking the Clicks statistic block", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.StatisticBlockClicksBtn();
    cy.get("#chart-topbar-title").should("have.text", "Clicks");
  });

  it("Verify the functionality of clicking the Creators statistic block", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.StatisticBlockCreatorsBtn();
    cy.get("#chart-topbar-title").should("have.text", "Creators");
  });

  it("Verify the functionality of opening Calendar", () => {
    performacePage.visit();
    cy.wait(2000);
    performacePage.ClickCalendarButton();
    cy.get("#since_beginning-date-range-button").should("be.visible");
    
  });
});

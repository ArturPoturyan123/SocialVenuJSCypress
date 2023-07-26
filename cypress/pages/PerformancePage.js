import { BasePage } from "./BasePage";

class PerformacePage extends BasePage {
  topBarTitle = "#chart-topbar-title";
  statisticBlockVideos = "#statistic-block-Videos";
  statisticBlockShares = "#statistic-block-Shares";
  statisticBlockCreators = "#statistic-block-Creators";
  calendarButton = "div > svg[data-testid='CalendarTodayIcon']";

  visit() {
    cy.visit("dashboard/creators");
  }

  getTitleText() {
    cy.get(this.topBarTitle).text();
  }

  StatisticBlockVideosBtn() {
    cy.get(this.statisticBlockVideos).should("be.visible").click();
  }

  StatisticBlockSharesBtn() {
    cy.get(this.statisticBlockShares).should("be.visible").click();
  }

  StatisticBlockViewsBtn() {
    cy.contains("Views").click({ force: true });
  }

  StatisticBlockClicksBtn() {
    cy.contains("Clicks").click({ force: true });
  }

  StatisticBlockCreatorsBtn() {
    cy.get(this.statisticBlockCreators).should("be.visible").click();
  }

  ClickCalendarButton() {
    cy.get(this.calendarButton).click({ force: true });
  }
}

export default PerformacePage;

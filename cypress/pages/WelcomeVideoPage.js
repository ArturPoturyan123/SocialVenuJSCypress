import { BasePage } from "./BasePage";
class WelcomeVideoPage extends BasePage {
  welcomeVideoTitle = "Welcome Video";

  getUrl() {
    return super.getUrl("");
  }
}
export default WelcomeVideoPage;

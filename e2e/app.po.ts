import { browser, by, element } from "protractor";

export class Page {

  public static navigateTo(destination) {
    return browser.get(destination);
  }

  public static getTitle() {
    return browser.getTitle();
  }

  public static getHomeTitleText() {
    return element(by.tagName("page-home"))
           .element(by.tagName("ion-title"))
           .element(by.tagName("h3"))
           .getText();
  }
}

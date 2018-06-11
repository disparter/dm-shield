import { browser, by, element } from "protractor";

export class Page {

  public navigateTo(destination) {
    return browser.get(destination);
  }

  public getTitle() {
    return browser.getTitle();
  }

  public getHomeTitleText() {
    return element(by.tagName("page-home"))
           .element(by.tagName("ion-title"))
           .element(by.tagName("h3"))
           .getText();
  }
}

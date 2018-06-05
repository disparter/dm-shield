import { Page } from "./app.po";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/");
    });

    it("should have a title saying DM's Shield", () => {
      page.getHomeTitleText().then((title) => {
        expect(title).toEqual("DM's Shield");
      });
    });
  });
});

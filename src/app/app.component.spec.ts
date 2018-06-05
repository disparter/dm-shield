import { async, TestBed } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";

import {
  PlatformMock,
  SplashScreenMock,
  StatusBarMock,
} from "../../test-config/mocks-ionic";

import { HttpClient } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "./app.module";

describe("MyApp Component", () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp),
        TranslateModule.forRoot({
          loader: {
            deps: [HttpClient],
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
          },
        }),
      ],
      providers: [
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: Platform, useClass: PlatformMock },
      ],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it("should have two pages", () => {
    expect(component.pages.length).toBe(2);
  });

});
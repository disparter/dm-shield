import { async, TestBed } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";

import { IonicStorageModule } from "@ionic/storage";

import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";

import {
  PlatformMock,
  SplashScreenMock,
  StatusBarMock,
} from "../../test-config/mocks-ionic";

import { BrowserModule } from "@angular/platform-browser";

import { HttpClient, HttpClientModule, HttpHandler  } from "@angular/common/http";

import { NgHttpLoaderModule } from "ng-http-loader/ng-http-loader.module";

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { createTranslateLoader } from "./app.module";

import {RequestProvider} from "../providers/request/request.provider";


describe("MyApp Component", () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        BrowserModule,
        HttpClientModule,
        NgHttpLoaderModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
          driverOrder: ["indexeddb", "sqlite", "websql"],
          name: "__mydb",
        }),
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
        HttpClient,
        HttpClientModule,
        HttpHandler,
        Storage,
        RequestProvider,
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

  it("should have 12 pages", () => {
    expect(component.pages.length).toBe(12);
  });

});

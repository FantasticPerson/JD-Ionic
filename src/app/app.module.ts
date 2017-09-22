import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RootPageComponent } from './root-page/root-page.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { ModRecommendComponent } from './mod-recommend/mod-recommend.component';
import { ModItemComponent } from './mod-recommend/mod-item/mod-item.component';
import { ModAddComponent } from './mod-add/mod-add.component';
import { EventBusService } from './server/event-bus.service';
import { NumberPickerComponent } from './number-picker/number-picker.component';
import { ModEditComponent } from './mod-edit/mod-edit.component';
import { ModAddressComponent } from './mod-address/mod-address.component';
// import { ModCountComponent } from './mod-count/mod-count.component'

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RootPageComponent,
    UserCenterComponent,
    ModRecommendComponent,
    ModItemComponent,
    ModAddComponent,
    NumberPickerComponent,
    ModEditComponent,
    ModAddressComponent,
    // ModCountComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RootPageComponent
  ],
  providers: [
    EventBusService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

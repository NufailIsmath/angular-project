import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';




import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddBookComponent } from './addItem/add-book/add-book.component';
import { AddDVDComponent } from './addItem/add-dvd/add-dvd.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RemoveItemComponent } from './remove-item/remove-item.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { BorrowItemComponent } from './borrow-item/borrow-item.component';
import { from } from 'rxjs';
import { ServerService } from './server.service';
import { DisplayItemComponent } from './display-item/display-item.component';
import { ReturnItemComponent } from './return-item/return-item.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';


const routes:Routes=[
  {path:"",component:NavBarComponent},
  {path:"AddItem",component:AddItemComponent},
  {path:"removeItem",component:RemoveItemComponent},
  {path:"Home",component:HomeComponent},
  {path:"displayItem",component:DisplayItemComponent},
  {path:"borrowItem",component:BorrowItemComponent},
  {path:"returnItem",component:ReturnItemComponent},
  {path:"generateReport",component:GenerateReportComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    AddBookComponent,
    AddDVDComponent,
    NavBarComponent,
    RemoveItemComponent,
    HomeComponent,
    BorrowItemComponent,
    DisplayItemComponent,
    ReturnItemComponent,
    GenerateReportComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
 
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";

export const routes: Routes = [{ component: HomeComponent, path: "" }, {component: ContactComponent, path: "contact"}];

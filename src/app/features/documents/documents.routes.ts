import { Routes } from "@angular/router";
import { DocumentGeneration } from "./pages/document-generation/document-generation";

export const DOCUMENTS_ROUTES: Routes = [
    {path: '', component: DocumentGeneration},
    {path: ':id', component: DocumentGeneration}
]
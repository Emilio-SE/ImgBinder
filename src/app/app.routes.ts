import { Routes } from '@angular/router';
import { HISTORY_ROUTES } from './features/history/history.routes';
import { DOCUMENTS_ROUTES } from './features/documents/documents.routes';

export const routes: Routes = [
    {
        path: 'document',
        children: DOCUMENTS_ROUTES
    },
    {
        path: 'history',
        children: HISTORY_ROUTES
    },
    {
        path: '**',
        redirectTo: 'document'
    }
];

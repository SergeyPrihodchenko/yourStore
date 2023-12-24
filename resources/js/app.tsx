import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import {StoreProvider} from "@/App/providers/StoreProvider/ui/StoreProvider";
import AppThemeProvider from "@/App/providers/ThemeProvider/ui/AppThemeProvider";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <StoreProvider>
                <AppThemeProvider>
                    <App {...props} />
                </AppThemeProvider>

            </StoreProvider>

        );
    },
    progress: {
        color: '#4B5563',
    },
});

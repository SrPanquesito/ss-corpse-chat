import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import './main.css'

import { SettingsProvider } from './providers/settings';
import RouterConfig from './RouterConfig';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <RouterProvider router={RouterConfig} />
    </SettingsProvider>
  </React.StrictMode>,
)

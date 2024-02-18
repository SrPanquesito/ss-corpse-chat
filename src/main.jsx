import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import './index.css'

import { MainConfigurationProvider } from './providers/MainConfigurationProvider';
import RouterConfig from './RouterConfig';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainConfigurationProvider>
      <RouterProvider router={RouterConfig} />
    </MainConfigurationProvider>
  </React.StrictMode>,
)

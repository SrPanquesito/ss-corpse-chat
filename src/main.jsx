import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from 'react-router-dom';
import './index.css'

import RouterConfig from './RouterConfig';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={RouterConfig} />
  </React.StrictMode>,
)

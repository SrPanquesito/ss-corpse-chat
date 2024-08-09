import { useEffect } from 'react';
import {
    Outlet
  } from 'react-router-dom';
import { useSettings, useDispatchSettings } from 'providers/settings';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { AbsoluteProvider } from 'providers/absolute';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
};

const MainLayout = () => {
    const settings = useSettings();
    const dispatchSettings = useDispatchSettings();
  
    useEffect(() => {
      dispatchSettings({type: 'darkmode/status'});
    }, [settings.darkmode]);
  
    return (
        <main className={'h-screen ' + (settings.darkmode ? 'dark' : '')}>
          <AbsoluteProvider>
            <AlertProvider template={AlertTemplate} {...options}>
              <Outlet />
            </AlertProvider>
          </AbsoluteProvider>
        </main>
    )
}

export default MainLayout;
import { useEffect } from 'react';
import {
    Outlet
  } from 'react-router-dom';
import { useSettings, useDispatchSettings } from 'providers/settings';
import ButtonDarkmode from 'components/ButtonDarkmode';
import MainAuthLayout from './public/auth/MainAuthLayout';
import { AuthProvider } from 'providers/auth';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

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
          <header className="fixed top-3 right-3 z-50">
            <ButtonDarkmode />
          </header>
          <AlertProvider template={AlertTemplate} {...options}>
            <AuthProvider>
              <MainAuthLayout>
                <Outlet />
              </MainAuthLayout>
            </AuthProvider>
          </AlertProvider>
        </main>
    )
}

export default MainLayout;
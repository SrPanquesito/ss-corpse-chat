import { useEffect } from 'react';
import {
    Outlet
  } from "react-router-dom";
import { useSettings, useDispatchSettings } from '../providers/SettingsProvider';
import ButtonDarkmode from '../components/shared/ButtonDarkmode';
import AuthLayout from './public/AuthLayout';

const MainLayout = () => {
    const settings = useSettings();
    const dispatchSettings = useDispatchSettings();
  
    useEffect(() => {
      dispatchSettings({type: 'darkmode/status'});
    }, [settings.darkmode]);
  
    return (
        <main className={`h-screen ` + (settings.darkmode ? "dark" : "")}>
          <header className="fixed top-3 right-3 z-50">
            <ButtonDarkmode />
          </header>
          <AuthLayout>
            <Outlet />
          </AuthLayout>
        </main>
    )
}

export default MainLayout;
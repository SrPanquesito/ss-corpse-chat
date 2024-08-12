import {jest, describe, expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedPublicRoute from 'middlewares/ProtectedPublicRoute';
import { authStatusFromCookies } from 'providers/auth/AuthActions';
import { ROUTES } from 'utils/constants';

// Mock the authStatusFromCookies function
jest.unstable_mockModule('providers/auth/AuthActions', () => ({
  authStatusFromCookies: jest.fn(),
}));

describe('ProtectedPublicRoute', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should navigate to chat route if authenticated', () => {
    // Mock the return value of authStatusFromCookies to indicate the user is authenticated
    authStatusFromCookies.mockReturnValue({ isAuthenticated: true });

    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProtectedPublicRoute />} />
          <Route path={ROUTES.CHAT_ROUTE} element={<div>Chat Route</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the navigation to the chat route occurred
    expect(container.innerHTML).toContain('Chat Route');
  });

  test.skip('should render Outlet if not authenticated', () => {
    // Mock the return value of authStatusFromCookies to indicate the user is not authenticated
    authStatusFromCookies.mockReturnValue({ isAuthenticated: false });

    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<ProtectedPublicRoute />} />
          <Route path="/" element={<div>Public Route</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the Outlet component is rendered
    expect(container.innerHTML).toContain('Public Route');
  });
});
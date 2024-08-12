import { jest, expect } from '@jest/globals';
import { render, fireEvent } from '@testing-library/react';
import ButtonDarkmode from 'components/ButtonDarkmode';
import { useSettings, useDispatchSettings } from 'providers/settings';

// Mock the hooks
jest.unstable_mockModule('providers/settings', () => ({
  useSettings: jest.fn(),
  useDispatchSettings: jest.fn(),
}));

describe('ButtonDarkmode', () => {
  let mockDispatchSettings;

  beforeEach(() => {
    mockDispatchSettings = jest.fn();
    useDispatchSettings.mockReturnValue(mockDispatchSettings);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    useSettings.mockReturnValue({ darkmode: false });

    const { getByRole } = render(<ButtonDarkmode />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('toggles dark mode on click', () => {
    useSettings.mockReturnValue({ darkmode: false });

    const { getByRole } = render(<ButtonDarkmode />);
    const button = getByRole('button');

    // Simulate button click
    fireEvent.click(button);

    // Check if dispatchSettings was called with the correct action
    expect(mockDispatchSettings).toHaveBeenCalledWith({ type: 'darkmode/enable' });

    // Update the mock to return dark mode enabled
    useSettings.mockReturnValue({ darkmode: true });

    // Simulate button click again
    fireEvent.click(button);

    // Check if dispatchSettings was called with the correct action
    expect(mockDispatchSettings).toHaveBeenCalledWith({ type: 'darkmode/disable' });
  });
});
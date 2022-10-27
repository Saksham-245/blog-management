import { render } from '@testing-library/react';
import DashboardNavbar from './dashboard-navbar';
describe('DashboardNavbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardNavbar />);
    expect(baseElement).toBeTruthy();
  });
});

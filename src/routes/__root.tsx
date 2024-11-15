import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="bg-grey-100">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

export const rootRoute = () => {};

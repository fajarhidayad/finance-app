import { createFileRoute, Outlet } from '@tanstack/react-router';
import Logo from '../components/Logo';

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <nav className="bg-grey-900 text-center py-6 lg:hidden">
        <Logo />
      </nav>
      <aside className="p-5 w-[560px] hidden lg:block">
        <div className="bg-grey-900 rounded-xl p-10 h-full flex flex-col">
          <Logo />
          <div className="mt-auto text-white">
            <h2 className="text-1 mb-6">
              Keep track of your money and save for your future
            </h2>
            <p className="text-4">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </aside>
      <main className="flex-1 flex items-center justify-center px-4 lg:px-0">
        <Outlet />
      </main>
    </div>
  );
}

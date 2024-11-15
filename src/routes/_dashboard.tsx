import {
  createFileRoute,
  Link,
  linkOptions,
  Outlet,
} from '@tanstack/react-router';
import { twMerge } from 'tailwind-merge';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Logo from '../components/Logo';
import clsx from 'clsx';

export const Route = createFileRoute('/_dashboard')({
  component: RouteComponent,
});

const sidebarLinks = [
  linkOptions({
    label: 'Overview',
    to: '/overview',
    icon: 'ph:house-fill',
  }),
  linkOptions({
    label: 'Transactions',
    to: '/transactions',
    icon: 'ph:arrows-down-up',
  }),
  linkOptions({
    label: 'Budgets',
    to: '/budgets',
    icon: 'ph:chart-donut-fill',
  }),
  linkOptions({
    label: 'Pots',
    to: '/pots',
    icon: 'ph:tip-jar-fill',
  }),
  linkOptions({
    label: 'Recurring Bills',
    to: '/recurring-bills',
    icon: 'ph:receipt-fill',
  }),
];

function Sidebar() {
  const [active, setActive] = useState(true);

  return (
    <aside
      className="bg-grey-900 rounded-r-xl flex flex-col pb-10 transition-all duration-300"
      style={{
        width: active ? '300px' : '100px',
      }}
    >
      <header className="px-8 py-10">
        {/* {active ? <Logo /> : <h1 className="text-1 text-white">sf</h1>} */}
      </header>
      <div className="pt-6 pr-6 w-full space-y-1">
        {sidebarLinks.map((item) => (
          <Link
            to={item.to}
            className={twMerge(
              'text-3 py-4 px-8 rounded-r-xl w-full flex items-center space-x-5'
            )}
            activeProps={{
              className: 'text-grey-900 bg-beige-100',
            }}
            inactiveProps={{
              className: 'text-grey-300',
            }}
          >
            <Icon icon={item.icon} className="size-5 shrink-0" />
            <span
              className={clsx('shrink-0 transition-all delay-200', {
                'opacity-100': active,
                'opacity-0 hidden': !active,
              })}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
      <button
        onClick={() => setActive((evt) => !evt)}
        className="px-8 py-4 mt-auto flex items-center space-x-5 text-3 text-grey-300"
      >
        <Icon
          icon="ph:arrow-fat-lines-left-fill"
          className={'text-grey-300 size-5 transition-all shrink-0'}
          style={{
            rotate: active ? '0deg' : '180deg',
          }}
        />
        <span
          className={clsx('shrink-0', {
            'opacity-100': active,
            'opacity-0 hidden': !active,
          })}
        >
          Minimize Menu
        </span>
      </button>
    </aside>
  );
}

function RouteComponent() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
}

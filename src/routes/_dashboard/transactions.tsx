import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/transactions')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /_dashboard/transactions!';
}

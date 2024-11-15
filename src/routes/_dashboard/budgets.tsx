import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/budgets')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /_dashboard/budgets!';
}

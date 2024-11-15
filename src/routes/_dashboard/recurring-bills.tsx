import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_dashboard/recurring-bills')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /_dashboard/recurring-bills!';
}

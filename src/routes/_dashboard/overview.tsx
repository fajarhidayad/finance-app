import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /_dashboard/!'
}

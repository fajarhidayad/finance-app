import { createFileRoute, Link } from '@tanstack/react-router';
import Button from '../../components/button';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow p-8 text-grey-900 max-w-[527px] w-full"
    >
      <h2 className="font-bold text-3xl mb-8">Login</h2>
      <label htmlFor="email" className="text-grey-500 space-y-1 mb-4 block">
        <span className="text-5-bold">Email</span>
        <input
          type="email"
          name="email"
          id="email"
          className="rounded-lg border border-beige-500 px-5 py-3 w-full"
        />
      </label>
      <label htmlFor="password" className="text-grey-500 space-y-1 mb-8 block">
        <span className="text-5-bold">Password</span>
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-lg border border-beige-500 px-5 py-3 w-full"
        />
      </label>
      <Button className="w-full mb-8">Login</Button>
      <p className="text-center text-4 text-grey-500">
        Need to create an account?{' '}
        <Link
          to="/register"
          className="text-grey-900 text-4-bold hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}

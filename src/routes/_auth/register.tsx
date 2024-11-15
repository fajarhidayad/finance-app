import { createFileRoute, Link } from '@tanstack/react-router';
import Button from '../../components/button';

export const Route = createFileRoute('/_auth/register')({
  component: RouteComponent,
});

function RouteComponent() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl shadow py-6 px-5 lg:px-8 lg:py-8 text-grey-900 max-w-[527px] w-full"
    >
      <h2 className="font-bold text-3xl mb-8">Sign Up</h2>
      <label htmlFor="name" className="text-grey-500 space-y-1 mb-4 block">
        <span className="text-5-bold">Name</span>
        <input
          type="text"
          name="name"
          id="name"
          className="rounded-lg border border-beige-500 px-5 py-3 w-full"
        />
      </label>
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
        <span className="text-end text-5 block">
          Passwords must be at least 8 characters
        </span>
      </label>
      <Button className="w-full mb-8">Create Account</Button>

      <p className="text-center text-4 text-grey-500">
        Already have an account?{' '}
        <Link to="/login" className="text-grey-900 text-4-bold hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
}

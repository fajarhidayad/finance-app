import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destroy' | 'outlined';
}

export default function Button(props: ButtonProps) {
  const variant = props.variant ?? 'primary';

  return (
    <button
      className={twMerge(
        clsx(
          'p-4 rounded-xl font-bold text-sm leading-[150%] transition-all duration-200',
          {
            'bg-grey-900 text-white hover:bg-grey-500': variant === 'primary',
            'bg-beige-100 text-grey-900 hover:bg-white border border-transparent hover:border-beige-500':
              variant === 'secondary',
            'bg-red text-white hover:bg-red/80': variant === 'destroy',
            'text-grey-900 border border-beige-500 hover:bg-beige-500':
              variant === 'outlined',
          },
          props.className
        )
      )}
    >
      {props.children}
    </button>
  );
}

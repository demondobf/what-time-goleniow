'use client';

import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="rounded-xl border-2 border-black py-2 px-4 text-xl focus-visible:bg-black focus-visible:text-white enabled:hover:bg-black enabled:hover:text-white disabled:border-neutral-400 disabled:text-neutral-400"
      {...props}
    >
      {children}
    </button>
  );
};

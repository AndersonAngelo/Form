import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps {
  name: string;
  label?: string;
  type: string;
  error: any;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, name, error, type, ...rest }, ref) => {
  return (
    <div className="h-20 flex flex-col gap-1 py-2 text-black">
      {!!label && <label htmlFor={name}>{label}</label>}
      <input 
        className="px-1" 
        id={name}
        name={name}
        type={type}
        ref={ref}
        {...rest}
      />
      { error?.message && (
        <p className='text-red-600 text-xs'>{error.message}</p>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase);

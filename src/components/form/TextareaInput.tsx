import React from 'react';
import { Textarea } from '../ui/textarea';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '../ui/form';

interface InputProps {
  form: any;
  placeholder: string;
  name: string;
  label: string;
  description?: string;
  border?: boolean;
  white?: boolean;
  className?: string;
}
const TextareaInput = ({
  form,
  placeholder,
  name,
  label,
  description,
  border,
  white,
  className
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`!mt-5 ${className}`}>
          <FormLabel
            htmlFor={name}
            className="text-light-600 dark:text-light-700 text-base font-light"
          >
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              className={`${
                white ? 'bg-white' : 'bg-light-850'
              } dark:bg-light-400 text-primaryGreen dark:text-light-850 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-light-800 placeholder:dark:text-light-600 placeholder:font-light ${
                border ? 'border-2' : ''
              } dark:border-2 dark:border-dark-400 min-h-[100px] overflow-auto`}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-500 font-light text-sm" />
          {description && (
            <FormDescription className="text-light-700 dark:text-light-700 font-light mt-5">
              {description}
            </FormDescription>
          )}
        </FormItem>
      )}
    />
  );
};

export default TextareaInput;

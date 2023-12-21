import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

interface InputProps {
  form: any;
  placeholder: string;
  name: string;
  label?: string;
  icon?: string;
  type?: string;
  description?: string;
  border?: boolean;
  white?: boolean;
  className?: string;
}
const TextInput = ({
  form,
  placeholder,
  name,
  label,
  icon,
  type = "text",
  description,
  border,
  white,
  className,
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`!mt-5 ${className}`}>
          <FormLabel htmlFor={name} className="text-base font-light">
            {label}
          </FormLabel>
          <FormControl>
            <div
              className={`px-2 py-0.5 rounded ${
                white ? " bg-white" : "bg-gray-200"
              }  ${border ? "border-2 border-green-200" : ""} `}
            >
              <div className="flex items-center justify-between">
                {icon && (
                  <Image
                    src={icon}
                    height={16}
                    width={16}
                    alt="search"
                    className="ml-4 invert dark:invert-0"
                  />
                )}

                <Input
                  type={type}
                  className={`${
                    white ? "bg-white" : "bg-gray-200"
                  }  text-primary border-none shadow-none outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:font-light`}
                  placeholder={placeholder}
                  {...field}
                />
              </div>
            </div>
          </FormControl>
          <FormMessage className="text-red-500 font-light text-sm" />
          {description && (
            <FormDescription className="text-gray-700 font-light mt-5">
              {description}
            </FormDescription>
          )}
        </FormItem>
      )}
    />
  );
};

export default TextInput;

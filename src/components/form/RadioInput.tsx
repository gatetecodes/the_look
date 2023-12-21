import React from 'react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '../ui/form';

interface RadioInputProps {
  form: any;
  options?: string[];
  name: string;
  label: string;
  optionsAsObject?: boolean;
  optionsObject?: { name: string; description: string }[];
}

const RadioInput = ({
  form,
  options,
  name,
  label,
  optionsAsObject,
  optionsObject
}: RadioInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="!mt-2 !lg:mt-5">
          <FormLabel
            htmlFor="type"
            className={`text-light-600 dark:text-light-700 ${
              optionsAsObject ? 'text-base lg:text-xl' : 'text-base'
            } font-light`}
          >
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={
                !optionsAsObject
                  ? 'w-full grid grid-cols-2 flex-wrap md:flex items-center justify-start gap-2 lg:gap-5'
                  : 'flex flex-col gap-2'
              }
            >
              {!optionsAsObject &&
                options?.map((option) => (
                  <FormItem
                    key={option}
                    className="bg-white dark:bg-dark-400 px-8 py-4 border-2 dark:border-light-400 rounded-lg flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem
                        value={option}
                        className="text-primaryGreen dark:text-beige border-2 border-primaryGreen dark:border-beige"
                      />
                    </FormControl>
                    <FormLabel
                      htmlFor={option}
                      className="text-primaryGreen dark:text-beige !mt-0"
                    >
                      {option}
                    </FormLabel>
                  </FormItem>
                ))}
              {optionsAsObject &&
                optionsObject?.map((option) => (
                  <div key={option.name} className="max-w-[70%]">
                    <FormItem className="flex items-center gap-2 ">
                      <FormControl className="">
                        <RadioGroupItem
                          value={option.name}
                          className="text-primaryGreen dark:text-beige border-2 border-primaryGreen dark:border-beige whitespace-nowrap"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor={option.name}
                        className="text-primaryGreen dark:text-beige text-base lg:text-lg !mt-0 whitespace-nowrap"
                      >
                        {option.name}
                      </FormLabel>
                    </FormItem>
                    <FormDescription className="text-light-700 text-sm font-light md:mb-5 ml-6">
                      {option.description}
                    </FormDescription>
                  </div>
                ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="text-red-500 font-light text-sm" />
        </FormItem>
      )}
    />
  );
};

export default RadioInput;

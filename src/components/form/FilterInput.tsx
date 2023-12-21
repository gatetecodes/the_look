'use client';

import * as React from 'react';
import { Check, ChevronDown, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { SelectOption } from './SelectInput';

interface FilterInputProps {
  options: SelectOption[];
  white?: boolean;
  border?: boolean;
  placeholder?: string;
  commandPlaceholder?: string;
}
export const FilterInput = ({
  options,
  white,
  border,
  placeholder,
  commandPlaceholder
}: FilterInputProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className={`w-full px-2 py-1 rounded-lg ${
          white ? ' bg-light-900' : 'bg-light-850'
        } dark:bg-light-400 ${
          border ? 'border-2' : ''
        } dark:border-2 dark:border-dark-400`}
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full md:w-[50%] lg:w-[300px] !h-[52px] pl-3 text-left flex items-center justify-between !text-light-600 dark:text-light-700 font-light ${
            !value && 'text-muted-foreground'
          }`}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-white dark:bg-light-400 border-none max-h-[300px] overflow-auto">
        <Command>
          <CommandInput
            placeholder={commandPlaceholder}
            className="font-light text-light-500 dark:text-light-800"
          />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.label}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
                className="font-light text-light-500 dark:text-light-800"
              >
                <Check
                  className={`mr-2 h-4 w-4 ${
                    option.value === value ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

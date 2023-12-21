"use client";
import React from "react";
import {
  FormLabel,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
export interface SelectOption {
  value: string;
  label: string;
}
interface SelectInputProps {
  form: any;
  options: SelectOption[];
  name: string;
  label?: string;
  placeholder: string;
  commandPlaceholder?: string;
  white?: boolean;
  border?: boolean;
}
const SelectInput = ({
  form,
  options,
  name,
  label,
  placeholder,
  commandPlaceholder,
  white,
  border,
}: SelectInputProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="!mt-5">
          <FormLabel className="text-gray-600 text-base font-light">
            {label}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
              asChild
              className={`px-2 py-1 rounded-lg ${
                white ? " bg-white" : "bg-gray-100"
              }  ${border ? "border-2 border-green-200" : ""} `}
            >
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={`w-full !h-12 pl-3 text-left flex items-center justify-between !text-gray-600 font-light rounded ${
                    !field.value && "text-muted-foreground"
                  }`}
                >
                  {field.value
                    ? options.find((option) => option.value === field.value)
                        ?.label
                    : placeholder}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="bg-white border-none max-h-[300px] overflow-auto">
              <Command>
                <CommandInput
                  placeholder={commandPlaceholder ?? "Type to search..."}
                  className="font-light text-gray-500"
                />
                <CommandEmpty>No option found.</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      className="font-light text-gray-500"
                      value={option.label}
                      key={option.value}
                      onSelect={() => {
                        form.setValue(name, option.value);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${
                          option.value === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          {form.formState.errors[name] && (
            <FormMessage className="text-red-500 font-light text-sm" />
          )}
        </FormItem>
      )}
    />
  );
};

export default SelectInput;

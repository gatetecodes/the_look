import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';

interface DateInputProps {
  name: string;
  label: string;
  form: any;
  white?: boolean;
  border?: boolean;
}

const DateInput = ({ form, name, label, white, border }: DateInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className="!mt-5 flex flex-col">
          <FormLabel
            htmlFor={name}
            className="text-light-600 dark:text-light-700 text-base font-light"
          >
            {label}
          </FormLabel>
          <Popover>
            <PopoverTrigger
              asChild
              className={`px-2 py-1 rounded-lg ${
                white ? ' bg-light-900' : 'bg-light-850'
              } dark:bg-light-400 ${
                border ? 'border-2' : ''
              } dark:border-2 dark:border-dark-400`}
            >
              <FormControl>
                <Button
                  variant={'outline'}
                  className={`w-[300px] pl-3 text-left dark:text-light-800 font-normal ${
                    !field.value && 'text-muted-foreground'
                  }`}
                >
                  {field.value ? (
                    field.value.toLocaleDateString()
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white dark:bg-dark-400 text-light-600 border-2 dark:border-light-500 dark:text-light-800">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date < new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </FormItem>
      )}
    />
  );
};
export default DateInput;

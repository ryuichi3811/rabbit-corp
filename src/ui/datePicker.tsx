'use client';

import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import * as React from 'react';

import { Calendar, Popover, PopoverContent, PopoverTrigger } from '@/ui/';
import { cn } from '@/utils';

export function DateInput({
  text,
  id,
  name,
}: {
  text: string;
  id: string;
  name: string;
}) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'mb-4 mt-2 flex h-10 w-60 rounded-md border border-slate-500 bg-background bg-white text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="m-2 h-5 w-5" />
          <input
            id={id}
            name={name}
            className="h-full w-full border-none bg-transparent pl-3 pr-10 hover:cursor-pointer"
            style={{ outline: 'none' }}
            readOnly
            value={date ? format(date, 'yyyy-MM-dd') : ''}
            placeholder={text}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          id={id}
        />
      </PopoverContent>
    </Popover>
  );
}

export function DatePicker(props: { text: string; id: string; name: string }) {
  return <DateInput {...props} />;
}

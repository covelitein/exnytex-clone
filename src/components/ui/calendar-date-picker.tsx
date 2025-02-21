"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { format, isValid } from "date-fns";
import { CalendarIcon } from "lucide-react";

interface DatePickerProps {
  value?: Date; // Controlled value
  onChange?: (date: Date | undefined) => void; // Change handler
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [open, setOpen] = React.useState(false);

  // Sync internal state with external value
  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
    if (onChange) {
      onChange(selectedDate); // Notify parent component
    }
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full py-6 bg-transparent hover:bg-transparent border-2 border-main-green/60 justify-start text-left font-normal text-white/60 hover:text-white/60",
            !date && "text-white/60 hover:text-white/60"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date && isValid(date) ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" className="w-auto p-0 bg-main-black" align="start">
        <div className="border-main-green p-0">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            selected={date}
            onSelect={handleDateSelect}
            fromYear={1900}
            toYear={new Date().getFullYear()}
            disabled={(d) => d > new Date()} // Prevent selecting future dates
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

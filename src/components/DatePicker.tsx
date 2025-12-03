  import * as React from "react"
  import { ChevronDownIcon } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Calendar } from "@/components/ui/calendar"
  import { Label } from "@/components/ui/label"
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover" 
  import { CalendarIcon } from "lucide-react"


  interface Calendar24Props {
    label?: string; 
    value?: Date | null;
    onChange?: (date: Date | null) => void;
  }

  export function Calendar24({ 
    label = "Select Date", 
    value,
    onChange, 
  }: Calendar24Props) {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="p-3 space-y-3 ">
          <div className="flex flex-col gap-1">
            
        <div className="flex flex-col gap-1 font-medium font-['Inter'] leading-4">
          <Label htmlFor="date-picker" >
            {label}
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date-picker"
                className="w-[320px] h-10 justify-between font-normal"
              >
                <div className="flex items-center gap-2 text-gray-500">
                <CalendarIcon className="h-4 w-4 " />
                <span>{value ? value.toLocaleDateString() : "DD/MM/YYYY"}</span>
                </div>
              
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto overflow-hidden p-0 bg-white " align="end">
              <Calendar
                mode="single"
                selected={value ?? undefined}
                captionLayout="dropdown"
                onSelect={(date) => {
                  onChange?.(date ?? null);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      
      </div>
      </div>
    )
  }


export function DatePicker({
  label,
  value,
  onChange,
}: {
  label?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}) {
  return <Calendar24 label={label} value={value} onChange={onChange} />;
}
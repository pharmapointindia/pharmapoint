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


export function Calendar24() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
<<<<<<< HEAD
    <div className="p-3 space-y-3 ">
        <div className="flex flex-col gap-1">
          
      <div className="flex flex-col gap-1 font-medium font-['Inter'] leading-4">
        <Label htmlFor="date-picker" >
=======
    <div className="p-3 space-y-3">
        <div className="flex flex-col gap-2">
          
      <div className="flex flex-col gap-3">
        <Label htmlFor="date-picker" className="pr-1">
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
          Select Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker"
<<<<<<< HEAD
              className="w-[340px] h-[40px] justify-between font-normal"
            >
              <div className="flex items-center gap-2 text-gray-500">
              <CalendarIcon className="h-4 w-4 " />
=======
              className="w-90 justify-between font-normal"
            >
              <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-gray-500" />
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
              <span>{date ? date.toLocaleDateString() : "DD/MM/YY"}</span>
              </div>
            
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    
    </div>
    </div>
  )
}


export function DatePicker() {
  return <Calendar24 />
}
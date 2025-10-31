import React from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"

type DropdownProps = {
  label?: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  width?: string 
}

const CommonDropdown: React.FC<DropdownProps> = ({
  label = "Select",
  options,
  value,
  onChange,
  width = "w-90",
}) => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string>(value || "")

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange?.(option)
    setOpen(false)
  }

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-left block text-sm font-medium">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={`${width} justify-between font-normal`}
          >
            {selected || "Select option"}
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button> 
        </PopoverTrigger>
        <PopoverContent className={`${width} p-0`} align="start">
          <div className="flex flex-col divide-y">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className={`text-left px-3 py-2 hover:bg-gray-100 ${
                  selected === option ? "bg-gray-50 font-medium" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default CommonDropdown

import React from "react"
import {
<<<<<<< HEAD
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
=======
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"

type DropdownProps = {
  label?: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  width?: string 
<<<<<<< HEAD
  height?: string
=======
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
}

const CommonDropdown: React.FC<DropdownProps> = ({
  label = "Select",
  options,
  value,
  onChange,
<<<<<<< HEAD
  width = "w-[340px]",
  height = "h-[40px]",

=======
  width = "w-90",
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
}) => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string>(value || "")

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange?.(option)
    setOpen(false)
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-1 font-medium font-['Inter'] leading-4">
      {label && <label className="text-left block text-sm ">{label}</label>}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={`${width} ${height} justify-between font-inter`}
          >
            {selected || "Select Location"}
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className={`${width}`} align="start">
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => handleSelect(option)}
              className={`${selected === option ? "bg-grey" : ""} cursor-pointer`}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
=======
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
>>>>>>> 8e7b042f66a07c126dec7830e336c5ced468bf78
    </div>
  )
}

export default CommonDropdown

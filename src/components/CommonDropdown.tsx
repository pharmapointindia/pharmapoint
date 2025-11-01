import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"

type DropdownProps = {
  label?: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  width?: string 
  height?: string
}

const CommonDropdown: React.FC<DropdownProps> = ({
  label = "Select",
  options,
  value,
  onChange,
  width = "w-[340px]",
  height = "h-[40px]",

}) => {
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string>(value || "")

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange?.(option)
    setOpen(false)
  }

  return (
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
    </div>
  )
}

export default CommonDropdown

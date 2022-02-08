import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from './Poppover';


export function Cart(){
  return (
    <div>
    <Popover>
      <div>
        <PopoverTrigger style={{backgroundColor:'red'}}>Veja</PopoverTrigger>
      </div>
      <PopoverContent>cor</PopoverContent>
    </Popover>
    </div>
  )
}
import { Button, Label, RangeSlider, TextInput } from 'flowbite-react';

function RangeSliderComp() {
    return (
         <div>
        <div className="mb-1 block">
          <Label htmlFor="range" value="Price  Range" />
        </div>
        <RangeSlider id="range" />
        <div className='flex items-center gap-3'>
             <div>
        <div className="mb-2 block">
          <Label htmlFor="min" value="Min" />
        </div>
        <TextInput id="min" type="number" sizing="sm"  placeholder='0' />
      </div>
             <div>
        <div className="mb-2 block">
          <Label htmlFor="max" value="Max" />
        </div>
        <TextInput id="max" type="number" sizing="sm"  placeholder='999999'/>
      </div>
        </div>
        <Button type="submit" className='mt-3 w-full bg-white text-blue-500'>Apply</Button>
        
      </div>
    )
}

export default RangeSliderComp

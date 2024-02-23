import { Label, Radio } from 'flowbite-react';
function RadioComp() {
    return (
        <fieldset className='flex  flex-col gap-4'>
            <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any" defaultChecked />
        <Label htmlFor="any">Any</Label>
      </div>
            <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Refurbished"  />
        <Label htmlFor="any">Refurbished</Label>
      </div>
            <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Brand new" />
        <Label htmlFor="any">Brand new</Label>
      </div>
            <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any" />
        <Label htmlFor="any">Old Items</Label>
      </div>


            
        </fieldset>
    )
}

export default RadioComp

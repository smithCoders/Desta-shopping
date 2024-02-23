import { Sidebar,Checkbox, Label, Radio, Rating } from 'flowbite-react';
import {Link} from "react-router-dom"
import RangeSliderComp from './RangeSlider';

function SidebarComp() {
    return (
        <div className='w-[240px] fixed top-0 h-[60vh] mt-[180px]  '>
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse  label="Category">
            <Sidebar.Item href="#">Mobile accessory</Sidebar.Item>
            <Sidebar.Item href="#">Electronics</Sidebar.Item>
            <Sidebar.Item href="#">Smartphones </Sidebar.Item>
            <Sidebar.Item href="#">Modern tech</Sidebar.Item>
            <Link>see all</Link>
            
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      {/* item-2 */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Collapse label='Brands'>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
               

            </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      {/* item-2 */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Collapse label='Features'>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
                <Sidebar.Item>
                     <div className='flex items-center gap-2'>
                    <Checkbox id='samsung'/>
                    <Label htmlFor='samsung'>Samsung</Label> </div>
                </Sidebar.Item>
               

            </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      {/* slider */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <RangeSliderComp/>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      {/* radio */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Collapse label='conditions'>
                <Sidebar.Item>
                    <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any" defaultChecked />
        <Label htmlFor="any">Any</Label>
      </div>
                </Sidebar.Item>
                <Sidebar.Item>
                    <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">New</Label>
      </div>
                </Sidebar.Item>
                <Sidebar.Item>
                    <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">Old</Label>
      </div>
                </Sidebar.Item>
                <Sidebar.Item>
                    <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">Any</Label>
      </div>
                </Sidebar.Item>

            </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
      {/* rating */}
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Sidebar.Collapse label='Ratings'>
                <Sidebar.Item>
                         <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">
             <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star  />
    </Rating>
        </Label>
      </div></Sidebar.Item>
                {/* 4-rate */}
                <Sidebar.Item>
                        <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">
             <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false}  />
    </Rating>
        </Label>
      </div>
                </Sidebar.Item>
                    
                {/* 3-rate */}
                <Sidebar.Item>
                     <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">
             <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false}  />
    </Rating>
        </Label>
      </div>
                </Sidebar.Item>
                <Sidebar.Item>
                      <div className="flex items-center gap-2">
        <Radio id="new" name="condition" value="Any"  />
        <Label htmlFor="any">
             <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
      <Rating.Star filled={false} />
      <Rating.Star filled={false}  />
    </Rating>
        </Label>
      </div>
                </Sidebar.Item>
                    
                    
            </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
            
        </div>
    )
}

export default SidebarComp

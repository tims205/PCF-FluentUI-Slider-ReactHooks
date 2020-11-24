import * as React from 'react';
import {Slider} from 'office-ui-fabric-react/lib/Slider';


export interface IMySliderHooksProps {
    sliderValue: number;
    sliderOnChange: (value?:number) => void;
}


export function MySliderHooks(props: IMySliderHooksProps) {
    const [sliderValue, setSliderValue] = React.useState(props.sliderValue);
    const sliderOnChange = (value:number) =>  {
        setSliderValue(value);
        props.sliderOnChange(value);
    }

    return (
        <div>
            <Slider
                label="Slider using React Hooks"
                min={1}
                max={10}
                value={sliderValue}
                onChange={sliderOnChange}
            />
        </div>
    )
};


import React from 'react';
import RMGButton from './RMGButton';
import RMGText from './RMGText';
import RMGInput from './RMGInput';
import RMGImage from './RMGImage';
import RMGHeader from './RMGHeader';
import './AllRMGComponents.css'

interface AllRMGComponentsProps {}

const AllRMGComponents: React.FC<AllRMGComponentsProps> = ({ }) => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", event.target.value);
    };

    return (
        <div>
            <RMGHeader text={'header'} />
            <RMGText text="Hello, world!" color="blue" size="large" />
            <RMGInput value="" onChange={handleInputChange} placeholder="Enter text" type="text" /><br/>
            <RMGImage src="example.jpg" alt="Example" width={200} height={200} /><br/>
            <RMGButton title="Click me" onClick={handleClick} />

        </div>
    );
};

export default AllRMGComponents;

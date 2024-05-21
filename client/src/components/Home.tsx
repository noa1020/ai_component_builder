import React, { useState } from 'react';
import RMGButton from './RMGButton';
import AllRMGComponents from './AllRMGComponents';
import RMGHeader from './RMGHeader';

const Home: React.FC = () => {
  const [showExamples, setShowExamples] = useState(false);

  const toggleExamples = () => {
    setShowExamples(prevState => !prevState);
  };

  return (
    <div>
      <RMGHeader text={'Welcome to My Component'} />
      <RMGButton title={showExamples ? "Hide Examples" : "Show Examples"} onClick={toggleExamples} />
      {showExamples && <AllRMGComponents />}
    </div>
  );
};

export default Home;

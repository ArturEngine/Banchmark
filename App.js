import React, {useEffect} from 'react';

import {StyleSheetList} from './StyleSheetList';
import {StyledComponentList} from './StyledComponentList';

export default function App() {
  const [isRended, setRended] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRended(!isRended);
      console.log('Updated');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const TEMP_ARRAY = Array(3000)
    .fill()
    .map((item, index) => {
      return {id: index.toString(), title: index.toString()};
    });

  return (
    <>
      <StyleSheetList data={TEMP_ARRAY} />
      <StyledComponentList data={TEMP_ARRAY} />
    </>
  );
}

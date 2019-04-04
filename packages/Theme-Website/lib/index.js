import React from 'react';
import stylesheet from './css/main.css';
import tachyons from './css/tachyons-mybit.css';

const ThemeWebsite = () => (<>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <style dangerouslySetInnerHTML={{ __html: tachyons }} />
</>);

export default ThemeWebsite;
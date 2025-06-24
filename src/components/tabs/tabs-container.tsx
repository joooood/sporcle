import { useState, useEffect } from 'preact/hooks';
import type { __Tab__ } from '../../types/tab';

type __TabsContainerProps__ {
    tabs: __Tab__[]
}

function TabsContainer({tabs}: __TabsContainerProps__) {
    const [ selected, setSelected ] = useState<__Tab__>(tabs[0]);

    return (
        <div className="tabs-container">
            <TabsMenu selected={selected} onSelect={setSelected}/>
            
        </div>
    )
}

export {TabsContainer };
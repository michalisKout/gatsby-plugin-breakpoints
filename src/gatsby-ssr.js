// eslint-disable-next-line no-unused-vars
import React from 'react';

import { defaultQueries } from './constants';
import { BreakpointProvider } from './BreakpointProvider';

export const wrapRootElement = ({ element }, { queries = null }) => {
    return (
        <BreakpointProvider
            queries={queries !== null ? queries : defaultQueries}
        >
            {element}
        </BreakpointProvider>
    );
};

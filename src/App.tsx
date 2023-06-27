import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExpDataFetchWithState } from "./examples/data-fetching/ExpDataFetchWithState";
import { ExpDataFetchWithReducer } from "./examples/data-fetching/ExpDataFetchWithReducer";
import { ExpDataFetchWithUseMutation } from "./examples/data-fetching/ExpDataFetchWithUseMutation";
import { ExpDataFetchWithCustomHook } from "./examples/data-fetching/ExpDataFetchWithCustomHook";
import { ExpOwnLibrary } from "./examples/design-system/ExpOwnLibrary";

function App() {
    return <>
        <Routes>
            <Route path="/ui-library" element={<ExpOwnLibrary/>}/>
            <Route path="/state" element={<ExpDataFetchWithState/>}/>
            <Route path="/custom-hook" element={<ExpDataFetchWithCustomHook/>}/>
            <Route path="/reducer" element={<ExpDataFetchWithReducer/>}/>
            <Route path="/use-mutation" element={<ExpDataFetchWithUseMutation/>}/>
        </Routes>
    </>
}

export default App;

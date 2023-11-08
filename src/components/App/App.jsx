import React, { Suspense } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import LoadingState from '../LoadingState';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                <Suspense fallback={<LoadingState />}>
                    <PropertyListing />
                </Suspense>
            </main>
        </div>
    );
};

export default App;

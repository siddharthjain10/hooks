import React, { useState } from 'react';
import './App.css';
import HooksCounter from './components/hooksCounter'
import HooksCounterTwo from './components/hooksCounterTwo';
import HooksCounterObject from './components/hooksCounterObject';
import HooksCounterArray from './components/hooksCounterArray';
import ClassSideEffect from './components/classSideEffect';
import HooksCounterEffect from './components/hooksCounterEffect';
import HookMouse from './components/hookMouse';
import MouseContainer from './components/mouseContainer';
import IntervalClassCounter from './components/intervalClassCounter';
import IntervalHookCounter from './components/intervalHookCounter';
import DataFetching from './components/dataFetching';
import UseReducerCounter from './components/useReducerCounter';
import UseReducerComplexCounter from './components/useReducerComplexCounter';
import UseReducerMultiple from './components/useReducerMultiple';
import Context from './components/context/context';
import UseReducerDataFetching from './components/useReducerDataFetching';
import ParentComponent from './components/callback/parentComponent';


function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <UseReducerDataFetching /> */}
      {/* <Context /> */}
      {/* <UseReducerMultiple /> */}
      {/* <UseReducerComplexCounter /> */}
      {/* <UseReducerCounter /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HooksCounterEffect /> */}
    </div>
  );
}

export default App;

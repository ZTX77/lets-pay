import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import RowComponent from './components/RowComponent';

function appReducer(state, action) {
  switch (action.type) {
    case 'userInput': {
        return {
            ...state,
            [action.fieldName]: action.value
        };
    }
    default:
      return state;
  }
}

const initialState = {
  aValue:0,
  bValue:0,
  cValue:0,
  dValue:0,
  eValue:0,
  aSpecial:0,
  bSpecial:0,
  cSpecial:0,
  dSpecial:0,
  eSpecial:0
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const {aValue, aSpecial, bValue, bSpecial, cValue, cSpecial, dValue, dSpecial, eValue, eSpecial} = state;
  const [aTotal, setATotal] = useState(0);
  const [bTotal, setBTotal] = useState(0);
  const [cTotal, setCTotal] = useState(0);
  const [dTotal, setDTotal] = useState(0);
  const [eTotal, setETotal] = useState(0);
  const [finalSum, setFinalSum] = useState(0);

  // const [userInput, setUserInput]= useReducer((state, newState) => ({...state, ...newState}),

  const finalValue = (value, specialValue) => {
      return ((value - (specialValue * -1)) / 3).toFixed(2);
  };

  // const handleChange = e => {
  //   const name = e.target.name;
  //   const newValue = e.target.value;
  //   setUserInput({[name]: newValue});
  // };

    useEffect (() => {
        setATotal(finalValue(aValue, aSpecial));
        setBTotal(finalValue(bValue, bSpecial));
        setCTotal(finalValue(cValue, cSpecial));
        setDTotal(finalValue(dValue, dSpecial));
        setETotal(finalValue(eValue, eSpecial));
        setFinalSum(Number(aTotal)+ Number(bTotal)+Number(cTotal)+Number(dTotal)+Number(eTotal));
    }, [aValue, aSpecial, bValue, bSpecial, aTotal, bTotal, cTotal, finalSum, cValue, cSpecial, dValue, dSpecial, eValue, eSpecial, dTotal, eTotal]);

    return (
    <div className='App'>
        <div className='componentContainer'>
            <RowComponent labelText='Net'
                          name='aValue'
                          nameSpecial='aSpecial'
                          value={aValue}
                          onChange={e => dispatch({type:'userInput', fieldName:'aValue', value: Number(e.currentTarget.value)})}
                          specialValue={aSpecial}
                          onChangeSpecial={e => dispatch({type:'userInput', fieldName:'aSpecial', value: e.currentTarget.value})}
                          finalAmount = {aTotal}
            />
            <RowComponent labelText='Villany'
                          name='bValue'
                          nameSpecial='bSpecial'
                          value={bValue}
                          onChange={e => dispatch({type:'userInput', fieldName:'bValue', value: Number(e.currentTarget.value)})}
                          specialValue={bSpecial}
                          onChangeSpecial={e => dispatch({type:'userInput', fieldName:'bSpecial', value: e.currentTarget.value})}
                          finalAmount = {bTotal}
            />
            <RowComponent labelText='Gáz'
                          name='cValue'
                          nameSpecial='cSpecial'
                          value={cValue}
                          onChange={e => dispatch({type:'userInput', fieldName:'cValue', value: Number(e.currentTarget.value)})}
                          specialValue={cSpecial}
                          onChangeSpecial={e => dispatch({type:'userInput', fieldName:'cSpecial', value: e.currentTarget.value})}
                          finalAmount = {cTotal}
            />
            <RowComponent labelText='Közköltség'
                          name='dValue'
                          nameSpecial='dSpecial'
                          value={dValue}
                          onChange={e => dispatch({type:'userInput', fieldName:'dValue', value: Number(e.currentTarget.value)})}
                          specialValue={dSpecial}
                          onChangeSpecial={e => dispatch({type:'userInput', fieldName:'dSpecial', value: e.currentTarget.value})}
                          finalAmount = {dTotal}
            />
            <RowComponent labelText='Közös'
                          name='eValue'
                          nameSpecial='eSpecial'
                          value={eValue}
                          onChange={e => dispatch({type:'userInput', fieldName:'eValue', value: Number(e.currentTarget.value)})}
                          specialValue={eSpecial}
                          onChangeSpecial={e => dispatch({type:'userInput', fieldName:'eSpecial', value: e.currentTarget.value})}
                          finalAmount = {eTotal}
            />
        </div>
            <div className='totalToPay'>
                Total: {finalSum.toFixed(2)}
            </div>
    </div>
  );
};

export default App;

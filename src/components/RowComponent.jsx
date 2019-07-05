import React from 'react';

const RowComponent = (props) => {
    const handleFocus = (e) => e.target.select();
    const {labelText,name, nameSpecial, value, onChange, onChangeSpecial, specialValue, finalAmount} = props;
    return (
      <div className='rowComponentContainer'>
        <label>
            {labelText}
        </label>
          <input id='totalValueInput' name ={name}  type='number' min='0' step='0.01' pattern="[0-9]" value={value} onChange={onChange} onFocus={handleFocus}/>
          <span id='divider'>/3</span>
          <input id='specialValueInput' name={nameSpecial} type='number' value = {specialValue} onChange={onChangeSpecial} onFocus={handleFocus}/>
          <span id='finalAmount'>{finalAmount}</span>
      </div>
    );
};
export default RowComponent;
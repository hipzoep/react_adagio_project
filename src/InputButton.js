import React from 'react';

const InputButton = (props) => {
  return (
    <div
      ref={props.refer}
      className='mb10'
    >
      <input
        type='text'
        className='input description mr5 v-top'
        style={{ width: '300px' }}
        placeholder='스낵바 메세지'
        onChange={props.onChange}
        value={props.value}
      />
      <button
        className='btn btn-key'
        onClick={props.onClick}
      >
        스낵바아아아
      </button>
    </div>
  );
};

export default InputButton;

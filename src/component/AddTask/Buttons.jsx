import React from 'react'

export default function Buttons({handleSetLevel, hardInput,mediumInput,easyInput  }) {
  return (
    <div className="levels-buttons mt-3 d-flex justify-content-around">
      <button
        onClick={ handleSetLevel }
        type='button' className="hard btn btn-danger">
        hard
        <input ref={hardInput} value="hard" className="form-check-input" type="radio" name='level' />
      </button>
      <button onClick={handleSetLevel} type='button' className="medium btn btn-success">medium
        <input ref={mediumInput} value="medium" id='medium-input' className="form-check-input" type="radio" name='level' />
      </button> 
      <button onClick={handleSetLevel} type='button' className="easy btn btn-warning text-light" >easy
        <input ref={easyInput} value="easy" className="form-check-input" type="radio" name='level' />
      </button>
    </div>
  )
}

import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from "styled-components";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Style = styled.div`
    font-size: 40px;

    .btn {
        font-size: 60px;
        border: 0;
        background-color: transparent;
         color: #61dafb;
        padding: 10px;
    }`;

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <Style>
      <div>{count}</div>
        <button className='btn'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <AiFillPlusCircle />
        </button>
        <button className='btn'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <AiFillMinusCircle />
        </button>
        </Style>
    </div>
  )
}
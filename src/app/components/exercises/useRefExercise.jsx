import React, { useRef } from 'react'
import CollapseWrapper from '../common/collapse'

const UseRefExercise = () => {
  const elementRef = useRef()
  const textRef = useRef()
  const handleClickParams = () => {
    elementRef.current.style.height = '150px'
    elementRef.current.style.width = '80px'
    textRef.current.innerText = 'text'
  }
  return (
    <CollapseWrapper title='Упражнение'>
      <p className='mt-3'>
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={elementRef}
        className='bg-warning d-flex flex-row justify-content-center align-items-center rounded'
        style={{
          height: 40,
          width: 60,
          color: 'white'
        }}
      >
        <small ref={textRef}>Блок</small>
      </div>
      <button className='btn btn-light' onClick={handleClickParams}>
        Изменить ширину и высоту объекта
      </button>
    </CollapseWrapper>
  )
}

export default UseRefExercise

import React from 'react'

export default function B1() {
    return (
        <div className='form'>
            <div className='form__left'>
                <div className='form__img'>2
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fsky%2F&psig=AOvVaw3MOlgBrxBzdE5nn7LtW0px&ust=1716954680662000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIC-9eG4r4YDFQAAAAAdAAAAABAE  ' alt='' />
                </div>  
            </div>
            <div className='form__right'>
                <div className='form__name'>
                    <input type='text' placeholder='Enter your name' />
                </div>
                <div className='form__password'>
                    <input type='text' placeholder='Enter your password'></input>
                </div>
                <div className='form__button'>
                    <button type='submit'>CLick</button>
                </div>
            </div>
        </div>
    )
}

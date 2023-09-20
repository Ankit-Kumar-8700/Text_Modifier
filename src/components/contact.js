import React from 'react'

export default function Contact(props) {
  let color=props.mode==="Black"?"White":"Black";
  let colorLight=props.mode==="Black"?"#383737":"white";
  let colorDark=props.mode==="Black"?"White":"Black";
  return (
    <div>
      <h3 style={{color:color}}>Contact Me</h3>
      <h5 style={{color:color}}>Thanks for giving your precious time to my website</h5>
<div className="container my-3">
      <ul className="list-group">
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}><strong>About Me</strong></li>
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}>Ankit Kumar</li>
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}>Studying in IIITDM Kurnool</li>
  <li className="list-group-item" style={{color:colorDark,backgroundColor:colorLight}}>B.Tech, CSE</li>
</ul>
</div>
      
<div className="container my-3" style={{color:color}}>
  <h4>Feel free to contact me...</h4>
  <p>Also, if you have any other text formatting idea, we will definitely consider and love to add it in this website</p>
<form action="mailto:ankitkumarrockingstar@gmail.com" method="get" encType="text/plain">
      <div>
        <label htmlFor="name">Name:
          <input type="text" className="my-1 mx-1" name="name" id="name" style={{color:colorDark,backgroundColor:colorLight}}/>
        </label>
      </div>
      <div>
        <label htmlFor="email">Email:
          <input type="text" name="email" className="my-1 mx-1" id="email" style={{color:colorDark,backgroundColor:colorLight}} />
        </label>
      </div>
      <div>
        <label htmlFor="comments">Comments:
          <input type="text" className="my-1 mx-1" name="comments" id="comments" style={{color:colorDark,backgroundColor:colorLight}} />
        </label>
      </div>
      <div className='my-1'>
        <input className='mx-1' style={{color:colorDark,backgroundColor:colorLight}} type="submit"/>
        <input className='mx-1' style={{color:colorDark,backgroundColor:colorLight}} type="reset"/>
      </div>
    </form>
</div>
      </div>
  )
}

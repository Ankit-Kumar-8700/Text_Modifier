import React from 'react'

export default function AboutItem(props) {
  let colorLight=props.mode==="Black"?"#383737":"white";
  let colorDark=props.mode==="Black"?"White":"Black";
  return (
    <div class="accordion-item">
    <h2 class="accordion-header" id={`flush-heading${props.id}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${props.id}`} aria-expanded="false" aria-controls={`flush-collapse${props.id}`} style={{color:colorDark,backgroundColor:colorLight}}>
        <strong>
        {props.buttonName}
        </strong>
      </button>
    </h2>
    <div id={`flush-collapse${props.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${props.id}`} data-bs-parent="#accordionFlushExample">
      <div class="accordion-body" style={{color:colorDark,backgroundColor:colorLight}}>{props.desc}</div>
    </div>
  </div>
  )
}

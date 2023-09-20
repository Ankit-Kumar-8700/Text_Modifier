import React from "react";
import AboutItem from "./aboutItem";

export default function About(props) {
  let color=props.mode==="Black"?"White":"Black";
  return (
    <div className="container my-4">
      <h3 style={{color:color}}>
        This website is created to help convert text in required formats using
        various functions.
      </h3>
      <h4 style={{color:color}}>Go ahead and give it a shot!!</h4>
      <h5 style={{color:color}}>Functions of each button is described below..</h5>
      <div class="accordion accordion-flush" mode={props.mode} id="accordionFlushExample">
        <AboutItem buttonName="Upper Case" desc="Converts all the text entered in textbox in capital alphabets. abc
              changes to ABC" mode={props.mode} id="One"/>
        <AboutItem buttonName="Lower Case" desc="Converts all the text entered in textbox in small alphabets. ABC
              changes to abc" mode={props.mode} id="Two"/>
        <AboutItem buttonName="Invert Case" desc="Converts all the capital text to small letters, and small letters to capital letters. Abc changes to aBC" mode={props.mode} id="Three"/>
        <AboutItem buttonName="Capitalize Case" desc="Converts first character of each word entered in textbox to capital alphabets. abc changes to Abc" mode={props.mode} id="Four"/>
        <AboutItem buttonName="Remove extra spaces" desc="Removes all the unnecessary spaces." mode={props.mode} id="Five"/>
        <AboutItem buttonName="Remove line breaks" desc="Brings whole text entered in multiple lines to a single line." mode={props.mode} id="Six"/>
        <AboutItem buttonName="Replace" desc="Replaces all occurences of specified string to required string." mode={props.mode} id="Seven"/>
        <AboutItem buttonName="Reverse" desc="Multiple string reversing operations are available. Basically, it reads the string backwards." mode={props.mode} id="Eight"/>
        <AboutItem buttonName="Sort" desc="Sorts the text alphabetically. Two options are available, just try them.." mode={props.mode} id="Nine"/>
        <AboutItem buttonName="Counting" desc="Also keeps a record of number of characters, words and lines at each moment." mode={props.mode} id="Ten"/>
      </div>
    </div>
  );
}

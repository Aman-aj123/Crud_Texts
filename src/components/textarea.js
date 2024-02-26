import React, { useState } from 'react'

const Textarea = (props) => {
     const [value, setValue] = useState("");


     const handleChange = (element) => {
          setValue(element.target.value);
     };


     const handleUppercase = () => {
          const upperCaseValue = value.toUpperCase();
          setValue(upperCaseValue);

          props.alertFunction("Converted to Uppercase", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     };

     const handleLowercase = () => {
          const lowerCaseValue = value.toLowerCase();
          setValue(lowerCaseValue);

          props.alertFunction("Converted to Lowercase", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     };

     const handleCapitalize = () => {
          const capitalizeValue = value.split(" ");
          let finalValue = "";
          capitalizeValue.forEach(words => {
               finalValue += `${words.charAt(0).toUpperCase()}${words.slice(1)} `;
          });
          setValue(finalValue);

          props.alertFunction("Capitalized first letter", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     };

     const handleReverse = () => {
          const reversedWord = value.split(" ");

          let finalChar = "";
          const finalReversedWord = reversedWord.map(element => {

               const capitailizeChar = `${element.split("").reverse().join("").charAt(0).toUpperCase()}${element.split("").reverse().join("").slice(1)} `;

               finalChar += `${capitailizeChar.toLowerCase().charAt(0).toUpperCase()}${capitailizeChar.slice(1).toLowerCase()} `

          }).join("")
          setValue(finalChar);

          props.alertFunction("Reveresed words", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     };

     const handleExtraSpaces = () => {
          const removeExtraSpaces = value.replace(/\s+/g, ' ');
          setValue(removeExtraSpaces);

          props.alertFunction("Extra spaces removed..", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     }

     const handleCopy = () => {
          const textArea = document.querySelector(".textarea");
          textArea.select();

          navigator.clipboard.writeText(value);

          props.alertFunction("Text copied to clipboard", "success")
          setTimeout(() => {
               props.alertFunction("", "")
          }, 2000)
     }

     const { setColor } = props;

     return (


          <>
               <div className="container mt-5">
                    <div>
                         <h3 className={`text-${setColor.color}`}>{props.title}</h3>
                         <textarea onChange={handleChange} value={value} className="py-2 textarea px-2" cols="60" rows="8"></textarea>
                    </div>
                    <div className="buttons container">
                         <button className="btn btn-primary" onClick={handleUppercase}>Uppercase</button>
                         <button className="btn btn-primary mx-1" onClick={handleLowercase}>Lowercase</button>
                         <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
                         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove white space</button>
                         <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse</button>
                         <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to clipboard</button>
                         <h4 className={`my-2 text-${setColor.color}`}>{value.split(' ').filter((element) => { return element !== "" }).length} words with {value.length} characters</h4>
                    </div>
               </div>
          </>
     )
}

export default Textarea
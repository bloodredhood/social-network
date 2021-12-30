import React from "react"
import "./FormsControls.css"

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error 
  return (
    <div className={hasError ? "formControl error" : "formControl"}>
      <div>
        <textarea {...input} {...props} />
      </div>
      { hasError && <span>{"some error"}</span> }
    </div>
  )
}
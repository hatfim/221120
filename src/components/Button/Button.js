import React from "react"
import styles from "./Button.scss";

const Button = props => {
  const Component = props.to ? Link : props.href ? 'a' : 'button'
  const type = Component === 'button' ? props.type || 'button' : undefined

  return (
    <Component {...props} type={type} className={styles.btn}>
      {props.children}
      {props.target === '_blank'}
    </Component>
  )
}

export default Button

const Button = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}) => {
  return <button className={`btn btn-${version}`} disabled={isDisabled}>{children}</button>
}

export default Button

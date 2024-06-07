const Header = ({ text, bgColor, textColor }) => {
    const HeaderStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
      
    <header style={HeaderStyles}>
      <div className="container" >
              <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header

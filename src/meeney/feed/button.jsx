const PurpleButton = ({buttonText, textSize, padding}) =>{
    return(
        <div className="button" style={
            {
                background: '#490057',
                padding: padding || '5px 12px',
                borderRadius: '16px',
                color: 'white',
                textAlign: 'center',
                fontSize: textSize
            }
        }>
            <span style={{
                margin: 'auto'
            }}>
                {
                    buttonText
                }
            </span>
            
        </div>
    )
}
export default PurpleButton
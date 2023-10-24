const Notification = ({ message }) => {
    if (message === null) {
      return null
    }

    if (message[0] === 'I') {
        return (
            <div className='errorMessage'>
                {message}
            </div>
        )
    }
  
    return (
      <div className='message'>
        {message}
      </div>
    )
  }

  export default Notification
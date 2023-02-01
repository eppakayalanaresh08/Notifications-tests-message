const Notification = props => {
    const {nameNotification,classColor,imageName}=props
    return (
        <div className={`container-message ${classColor}`}>
           <img className="image-bg" src={imageName}/>
           <p className="message">{nameNotification} Message</p>
      </div>
    )
}

const element = (
  <div className="bg-container">
      <h1 className="heading">Notification</h1>
      <div class="container-notification">
      <Notification nameNotification="Information" classColor="Information-bg" imageName="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification nameNotification="Success" classColor="Success-bg" imageName="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
      <Notification nameNotification="Warning" classColor="Warning-bg" imageName="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
      <Notification nameNotification="Error" classColor="Error-bg" imageName="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
     </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))

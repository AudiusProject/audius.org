$(document).ready(function() {

  var $staker = $('#mc-embedded-staker-form');
  $staker.submit(function(e) {
      if (e) e.preventDefault()
      register($staker)
  })

})

function register($form) {
  let successField = $($form).parent().find("#mce-success-response")
  let errorField = $($form).parent().find("#mce-error-response")
  let inputField = $($form).parent().find("input.email")
  const email = inputField.val()
  inputField.val('')

  fetch(`https://api.audius.co/send-email/staker`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then((response) => response.json())
  .then((response) => {
    const [result] = response
    if (result.status === 'sent') {
      onSuccess()
    } else {
      onFailure()
    }
  })
  .catch((err) => {
    onFailure()
  })
}


function onSuccess() {
  const notificationContainer = document.createElement("div"); 
  notificationContainer.className = "notification-bar"
  const notificationContent = document.createElement("div"); 
  notificationContent.className = "content"
  notificationContent.innerHTML = "Email Sent! We’ll get back with you shortly.";
  notificationContainer.appendChild(notificationContent)

  document.body.appendChild(notificationContainer);
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, 3000)
}

function onFailure() {
  const notificationContainer = document.createElement("div"); 
  notificationContainer.className = "notification-bar"
  const notificationContent = document.createElement("div"); 
  notificationContent.className = "content"
  notificationContent.innerHTML = "Sorry, we were unable to send your email. Please try again.";
  notificationContainer.appendChild(notificationContent)

  document.body.appendChild(notificationContainer);
  setTimeout(() => {
    document.body.removeChild(notificationContainer);
  }, 3000)
}


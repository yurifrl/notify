const send = doc => prop => {
  const notification = doc.createElement('div')

  const body = doc.createElement('p')
  body.innerText = prop.body

  const header = doc.createElement('p')
  header.innerText = prop.header

  notification.appendChild(header)
  notification.appendChild(body)

  notification.style.position = 'absolute'
  notification.style.zIndex = '101'
  notification.style.top = 0
  notification.style.left = 0
  notification.style.right = 0
  notification.style.background = '#fde073'
  notification.style.textAlign = 'center'
  notification.style.lineHeight = '2.5'
  notification.style.overflow = 'hidden'
  // -webkit-box-shadow: 0 0 5px black;
  // -moz-box-shadow:    0 0 5px black;
  notification.style.boxShadow = '0 0 5px black';

  closeNote = note => el => {
    note.style.display = 'none';
  }

  notification.addEventListener("click", closeNote(notification))

  return () => {
    doc.body.appendChild(notification)
  }
}

const Notify = {
  send: send(document),
}

window.onload = function() {
  const btn = document.createElement('button')
  btn.innerText = 'Action'

  btn.addEventListener("click", Notify.send({
    header: 'Header Example',
    body: 'Body Example',
    kind: 'info',
  }))

  document.body.appendChild(btn)
}

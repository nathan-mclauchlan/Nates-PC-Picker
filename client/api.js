import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget (widget) {
  console.log('I am the Client')
  return request
    .post(widgetUrl)
    .send(widget)
}

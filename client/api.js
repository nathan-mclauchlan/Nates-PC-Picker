import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidgets (data) {
  return request
    .post(widgetUrl)
    .send(data)
}

export function delWidget (id) {
  return request
    .delete(widgetUrl + id)
    .then(res => res.body)
}

export function updateWidget (id, data) {
  return request
  .patch(widgetUrl + id)
  .send(data)
}
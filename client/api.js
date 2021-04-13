import request from 'superagent'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets () {
  return request
    .get(widgetUrl)
    .then(response => response.body)
}

export function addWidget ({ name, mfg, price, inStock }) {
  return request
    .post(widgetUrl)
    .send({ name, mfg, price: parseInt(price), inStock: parseInt(inStock) })
    .then(response => response.body)
}

export function deleteWidget (id) {
  return request
    .delete(widgetUrl + id)
    .then(response => response.body)
}

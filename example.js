const request = require('superagent')

request
  .get('http://localhost:3000/api/v1/widgets')
  .then(res => {
    console.log(res.body)
    // console.log(res.text)
  })

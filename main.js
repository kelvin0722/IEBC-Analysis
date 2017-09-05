var request = require('xhr-request')

var jsonfile = require('jsonfile')
// test url
const url = 'https://public.rts.iebc.or.ke/jsons/round1/results/Kenya_Elections_Presidential%2F1%2F1030%2F1030158/info.json'
var file = 'data.json'
var  county = []
var constituency = []
var ward = []
var polling_center = []
var polling_station = []
request(url, {
 json: true
}, function (err, data) {
 if (err) throw err
 
 // the JSON result 
 jsonfile.writeFile(file, data, function (err) {
    console.error(err)
  })
})
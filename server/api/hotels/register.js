const Joi = require('koa-joi-router').Joi
const Hotel = require('../../models/Hotel')

module.exports = {
  method: 'post',
  path: '/register',
  validate: {
    type: 'json'
  },
  handler: function *() {
    const { checkIn, checkOut, menuImage, wifiPassword, googleMaps, roomsAvailable, weather, places } = this.request.body

    const hotel = yield Hotel.create({checkIn, checkOut, menuImage, wifiPassword, googleMaps, roomsAvailable, weather, places})

    this.body = {
      hotel: hotel
    }
  }
}
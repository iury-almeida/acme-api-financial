'use strict';

const paidBillRoutes = require('../core/paidBill/paidBillRoutes');
const receivedBillRoutes = require('../core/receivedBill/receivedBillRoutes');

module.exports = (app) => {
    paidBillRoutes(app);
    receivedBillRoutes(app);
}
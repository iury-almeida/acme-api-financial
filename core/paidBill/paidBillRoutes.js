'use strict';

const paidBillController = require('./paidBillController');

module.exports = (app) => {
    app.post('/paid-bill', paidBillController.create);
    app.put('/paid-bill/:id', paidBillController.update);
    app.get('/paid-bill', paidBillController.select);
    app.get('/paid-bill-total', paidBillController.selectTotalSpend);
    app.get('/paid-bill/:id', paidBillController.selectById);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
}
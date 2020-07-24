'use strict';

const receivedBillController = require('./receivedBillController');

module.exports = (app) => {
    app.post('/received-bill', receivedBillController.create);
    app.put('/received-bill/:id', receivedBillController.update);
    app.get('/received-bill', receivedBillController.select);
    app.get('/received-bill-total', receivedBillController.selectTotalSpend);
    app.get('/received-bill/:id', receivedBillController.selectById);
    app.get('/ping', (req, res) => {
        res.send(new Date());
    });
}
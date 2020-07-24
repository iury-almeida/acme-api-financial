'use strict';

const repository = require('./receivedBillRepository');

module.exports = {
    create,
    update,
    select,
    selectTotalSpend,
    selectById
}

async function create(params) {
    try {
        let result = await repository.create(params);
        return {
            result: result,
            message: "Received bill created"
        };
    } catch (error) {
        return error;
    }
}

async function update(params) {
    try {
        let result = await repository.update(params);
        return {
            result: result,
            message: "Received bill updated"
        };
    } catch (error) {
        return error;
    }
}

async function select(params) {
    try {
        let result = await repository.select();
        return {
            result: result,
            message: "Received bills found"
        };
    } catch (error) {
        return error;
    }
}

async function selectTotalSpend(params) {
    try {
        let result = await repository.selectTotalSpend(params);
        return {
            result: result,
            message: "Received bill total found"
        };
    } catch (error) {
        return error;
    }
}

async function selectById(params) {
    try {
        let result = await repository.selectById(params);
        return {
            result: result,
            message: "Received bill found"
        };
    } catch (error) {
        return error;
    }
}


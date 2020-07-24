'use strict';

const db = require('../../config/database');

module.exports = {
    create,
    update,
    select,
    selectTotalSpend,
    selectById
}

async function create(params) {

    try {

        let result = await db.query(`
            INSERT INTO financial.receivedBill(
                name, 
                value,
                date,
                occurredat
            )
            VALUES(
                '${params.name}',
                ${params.value}, 
                '${params.date}',
                (to_timestamp(${Date.now()} / 1000))
            )
            RETURNING id;
        `);

        return result.rows[0];
    } catch (error) {
        return error;
    }
}

async function update(params) {
    try {

        await db.query(`
            UPDATE financial.receivedBill
            SET
                name = '${params.name}',
                date = '${params.date}'
            WHERE id = ${params.id};    
        `);

        return params.id;
    
    } catch (error) {
        return error;
    }
}

async function select(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                rb.id,
                rb.name,
                rb.value,
                rb.date,
                rb.occurredat
            FROM financial.receivedbill rb
            ORDER BY id asc
        `
        );

        return result.rows;
    } catch (error) {
        return error;
    }
}

async function selectTotalSpend(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                SUM(value) AS total
            FROM financial.receivedbill 
        `
        );

        return result.rows[0];
    } catch (error) {
        return error;
    }
}

async function selectById(params) {
    try {
        let result = await db.query(
            `
            SELECT 
                rb.id,
                rb.name,
                rb.value,
                rb.date,
                rb.occurredat
            FROM financial.receivedBill rb
            WHERE rb.id = ${params.id}
        `
        );

        return result.rows[0];
    } catch (error) {
        return error;
    }
}
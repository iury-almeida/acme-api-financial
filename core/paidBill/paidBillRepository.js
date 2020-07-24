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
            INSERT INTO financial.paidBill(
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
            UPDATE financial.paidBill
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
                pb.id,
                pb.name,
                pb.value,
                pb.date,
                pb.occurredat
            FROM financial.paidbill pb
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
            FROM financial.paidbill 
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
                pb.id,
                pb.name,
                pb.value,
                pb.date,
                pb.occurredat
            FROM financial.paidBill pb
            WHERE pb.id = ${params.id}
        `
        );

        return result.rows[0];
    } catch (error) {
        return error;
    }
}
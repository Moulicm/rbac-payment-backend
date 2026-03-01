// src/modules/payments/payment.controller.js

const create = async (req, res) => {
    res.status(201).json({ message: "Payment created (stub)" });
};

const getMy = async (req, res) => {
    res.status(200).json({ message: "Your payments (stub)" });
};

const getAll = async (req, res) => {
    res.status(200).json({ message: "All payments (stub)" });
};

// Now these variables actually exist to be exported!
module.exports = { 
    create, 
    getMy, 
    getAll 
};
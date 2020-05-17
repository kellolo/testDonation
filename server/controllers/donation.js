let donation = require('../models/donation.js');

module.exports = {
    async send(req, res) {
        try {
            await donation.create({
                amount: req.body.amount,
                currency: req.body.currency
            })
            res.json({ok: true});
        }
        catch {
            res.sendStatus(500)
        }
    }
}
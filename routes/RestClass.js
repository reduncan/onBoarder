const db = require("../models");

class RestfulAPI {
    constructor(resource, app, model) {
        this.resource = resource;
        this.app = app;
        this.model = model;
    }

    find() {
        this.app.get(`/${this.resource}`, (req, res) => {
            this.model.findAll({})
                .then(function (data) {
                    res.json(data);
                }).catch(function (err) {
                    res.json(err);
                });
        });
    };

    create() {
        this.app.post(`/${this.resource}`, (req, res) => {
            this.model.create(req.body)
                .then(function (data) {
                    res.json(data);
                })
                .catch(function (err) {
                    res.json(err);
                });
        });
    };

    delete(identifier) {
        this.app.delete(`/${this.resource}/:${identifier}`, (req, res) => {
            this.model.destroy({
                where: {
                    id: req.params[identifier]
                }
            }).then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            });
        });
    };

    update(identifier) {
        this.app.put(`/${this.resource}/:${identifier}`, (req, res) => {
            this.model.update(req.body, {
                    where: {
                        id: req.params[identifier]
                    }
                }).then(function (data) {
                    res.json(data);
                }).catch(function (err) {
                    res.json(err);
                });
        }
        )
    };
};

module.exports = RestfulAPI;
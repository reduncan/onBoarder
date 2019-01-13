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
            // switch (this.resource) {
            //     case 'preEmployees':
            //         this.model.create({
            //             first_name: req.body.first_name,
            //             last_name: req.body.last_name,
            //             email: req.body.email,
            //             hire_date: req.body.hire_date,
            //             requiredDocs: req.body.requiredDocs
            //         }).then(function (data) {
            //             res.json(data);
            //         }).catch(function (err) {
            //             res.json(err);
            //         });
            //         break;
            //     case 'employees':
            //         this.model.create({
            //             user_name: req.body.user_name,
            //             password: req.body.password,
            //             first_name: req.body.first_name,
            //             last_name: req.body.last_name,
            //             primary_phone_number: req.body.primary_phone_number,
            //             secondary_phone_number: req.body.secondary_phone_number,
            //             email: req.body.email,
            //             street: req.body.street,
            //             street2: req.body.street2,
            //             city: req.body.city,
            //             state: req.body.state,
            //             zip_code: req.body.zip_code,
            //             office: req.body.office,
            //             dob: req.body.dob,
            //             ss_number: req.body.ss_number,
            //             hire_date: req.body.hire_date,
            //             activated_date: req.body.activated_date,
            //             requiredDocs: req.body.requiredDocs,
            //             ec_first_name: req.body.ec_first_name,
            //             ec_last_name: req.body.ec_last_name,
            //             ec_email: req.body.ec_email,
            //             ec_phone_number: req.body.ec_phone_number
            //         }).then(function (data) {
            //             res.json(data);
            //         }).catch(function (err) {
            //             res.json(err);
            //         });
            //         break;
            //     case 'documents':
            //         this.model.create({
            //             name: req.body.name,
            //             path: req.body.path
            //         }).then(function (data) {
            //             res.json(data);
            //         }).catch(function (err) {
            //             res.json(err);
            //         });
            //         break;
            // }
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
            switch (this.resource) {
                case 'preEmployees':
                    this.model.findOneAndUpdate({
                        [identifier]: req.body[identifier]
                    },
                        {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            hire_date: req.body.hire_date,
                            requiredDocs: req.body.requiredDocs
                        }).then(function (data) {
                            res.json(data);
                        }).catch(function (err) {
                            res.json(err);
                        });
                    break;
                case 'employees':
                    this.model.findOneAndUpdate({
                        [identifier]: req.body[identifier]
                    },
                        {
                            user_name: req.body.user_name,
                            password: req.body.password,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            primary_phone_number: req.body.primary_phone_number,
                            secondary_phone_number: req.body.secondary_phone_number,
                            email: req.body.email,
                            street: req.body.street,
                            street2: req.body.street2,
                            city: req.body.city,
                            state: req.body.state,
                            zip_code: req.body.zip_code,
                            office: req.body.office,
                            dob: req.body.dob,
                            ss_number: req.body.ss_number,
                            hire_date: req.body.hire_date,
                            activated_date: req.body.activated_date,
                            requiredDocs: req.body.requiredDocs,
                            ec_first_name: req.body.ec_first_name,
                            ec_last_name: req.body.ec_last_name,
                            ec_email: req.body.ec_email,
                            ec_phone_number: req.body.ec_phone_number
                        }).then(function (data) {
                            res.json(data);
                        }).catch(function (err) {
                            res.json(err);
                        });
                    break;
                case 'documents':
                    this.model.findOneAndUpdate({
                        [identifier]: req.body[identifier]
                    },
                        {
                            name: req.body.name,
                            path: req.body.path
                        }).then(function (data) {
                            res.json(data);
                        }).catch(function (err) {
                            res.json(err);
                        });
                    break;
            }
        });
    };
};

module.exports = RestfulAPI;
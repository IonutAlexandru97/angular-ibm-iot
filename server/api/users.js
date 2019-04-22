const config = require('../database/config');
const bcrypt = require('jsonwebtoken')
import Helper from '../general/helpers';
import uuidv4 from 'uuidv4';

const UsersApi = {

    async getAll(request, response) {
        var selectQuery = 'SELECT * FROM users';
        config.pool.query(selectQuery, (err, results) => {
            if (err) {
                throw err
            }
            response.status(200).json(results.rows)
        })
    },

    async getById(request, response) {
        const id = request.params.id;
        var getUserByIdQuery = 'SELECT * FROM users WHERE id = $1';
        config.pool.query(getUserByIdQuery, [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    },

    profile(request, response){
        if(!request.user){
            response.status(401).json({
                "message" : "UnauthorizedError: private profile"
              });
        }else{
            const user = request.user.id
            config.pool.query('SELECT * from users where id = $1', [user], (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).json(results.rows);
            })
        }
    },

    async create(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send({ 'message': 'Some values are missing' })
        }
        if (!Helper.isValidEmail(req.body.email)) {
            return res.status(400).send({ 'message': 'Please enter a valid email adress' })
        }
        const hashPassword = Helper.hashPassword(req.body.password);

        const createQuerry = `INSERT INTO
    users(id, username, first_name, last_name, email, password)
    VALUES($1, $2, $3, $4, $5, $6)
    returning *`;

        const values = [
            uuidv4(),
            req.body.username,
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            hashPassword
        ];

        try {
            const { rows } = await config.pool.query(createQuerry, values);
            const token = Helper.generateToken(rows[0].id);
            return res.status(201).send({ token });
        } catch (error) {
            if (error.routine === '_bt_check_unique') {
                return res.status(400).send({ 'message': 'User with that EMAIL already exists!' })
            }
            return res.status(400).send(error);
        }
    },

    async login(req, res) {
        if(!req.body.email || !req.body.password){
            return res.status(400).send({'message': 'Please enter a valid email adress'});
        }
        const loginQuery = 'SELECT * FROM users WHERE email = $1';
        try{
            const { rows } = await config.pool.query(loginQuery, [req.body.email]);
            if(!rows[0]){
                return res.status(400).send({'message': 'The credentials that you provided are incorrect'});
            }
            if(!Helper.comparePassword(rows[0].password, req.body.password)){
                return res.status(400).send({'message': 'The credentials that you provided are incorrect'});
            }
            const token = Helper.generateToken(rows[0].id);
            return res.status(200).send({ token });
        }catch(error){
            return res.status(400).send(error)
        }
    }
}

export default UsersApi;
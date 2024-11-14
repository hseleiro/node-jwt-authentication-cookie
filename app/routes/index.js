import Auth from './auth.js';
import {Verify, VerifyRole} from "../middleware/verify.js";

const Router = (server) => {

    // app
    server.get('/app', (req, res) => {
        try {
            res.status(200).json({
                status: 'success',
                data: [],
                message: 'Welcome to our API homepage',
            });
        } catch (err) {
            res.status(500).json({
                status: 'error',
                message: "Internal Server Error"
            })
        }
    })

    // admin
    server.get("/app/admin", Verify, VerifyRole, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the Admin portal!",
        });
    });

    // user
    server.get("/app/user", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the your Dashboard!",
        });
    });

    server.get("/app/dashboard", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the your Dashboard!",
        });
    });

    // register and login
    server.use('/app/auth', Auth);
};
export default Router;
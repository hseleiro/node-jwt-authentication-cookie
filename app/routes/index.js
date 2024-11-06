import Auth from './auth.js';
import {Verify, VerifyRole} from "../middleware/verify.js";

const Router = (server) => {

    server.get("/app/admin", Verify, VerifyRole, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the Admin portal!",
        });
    });

    server.get("/app/user", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the your Dashboard!",
        });
    });

    server.use('/app/auth', Auth);

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
};
export default Router;
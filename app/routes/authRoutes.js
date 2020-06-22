const { verifySignUp } = require("../middleware");
const controller = require("../controllers/authController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRoleExisted
        ],
        controller.signup
    );

    app.post(
        "/api/auth/createAdmin/",
        controller.createAdmin
    )

    app.post("/api/auth/signin", controller.signin);

    app.put("/api/auth/update/:username", controller.changePassword);

    app.get("/api/auth/user/:username", controller.findUser);

        app.get("/api/auth/user", controller.findAll)


};

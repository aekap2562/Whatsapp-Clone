import * as Controller from "../app/controllers";
import * as Validation from "../utility/validations";

const applyRoutes = (app) => {

    app.get('/', (req, res)=>
     res.send(`API is running`)
    );

    //create-user
    app.post('/user', Validation.validateCreateUser, Controller.createUser);

    //login
    app.post('/login', Validation.validateLogin, Controller.loginUser);

    //search-user
    app.get('/search-user', Validation.validateSearchUser, Controller.searchUser);

    //channel
    app.post('/channel', Validation.validateAddChannel, Controller.createChannel);

    //channel-list
    app.get('/channel-list', Validation.validateChannels, Controller.getChannels);

    //send-message
    app.post('/message', Validation.validateAddMessage, Controller.sendMessage);
};

export default applyRoutes;
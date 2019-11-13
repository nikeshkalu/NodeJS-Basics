module.exports = (app) => {
    const student = require('../controllers/controller.student')
    app.get('/student', student.list);
    app.get('/student', student.create);
    app.get('/student', student.update);
    app.get('/student', student.delete);
}
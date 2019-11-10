exports.list = (request, response) => {
    response.status(500).json({
        status: "success",
        message: "Listing all the users here..."
    })
}
exports.create = (request, response) => {
    response.status(500).json({
        status: "success",
        message: "Creating all the users here..."
    })
}

exports.update = (request, response) => {
    response.status(500).json({
        status: "success",
        message: "Updating  all the users here..."
    })
}

exports.delete = (request, response) => {
    response.status(500).json({
        status: "success",
        message: "Deleting all the users here..."
    })
}
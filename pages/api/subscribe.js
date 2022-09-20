export default (req, res) => {
    const {email} = req.query;
    console.log(email)

    if (!email) {
        return res.status(400).json({error: 'Email is required'})
    }

    //What do we want to send to CK?

    //Ship it

    //Return any error from CK

    //Success
}
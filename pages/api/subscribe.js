export default async (req, res) => {
    const {email} = req.query;
    console.log(email)

    if (!email) {
        return res.status(400).json({error: 'Email is required'})
    }

    try {
        const FORM_ID = process.env.CONVERTKIT_FORM_ID;
        const API_KEY = process.env.CONVERTKIT_API_KEY;
        const API_URL = process.env.CONVERTKIT_API_URL;

        //What do we want to send to CK?
        const data = { email, api_key: API_KEY };
        
        //Ship it
        const response = await fetch(`${API_URL}forms/${FORM_ID}/subscribe`, {
            body: JSON.stringify(data),
            headers: {"Content-Type" : "application/json"},
            method: "POST"
        });

        
        //Return any error from CK
        if (response.status >= 400) {
            return res.status(400).json({error: "Ocurrió un error. Tu correo electrónico no ha quedado registrado."})
        }

        
            //Success
        return res.status(201).json({ error: ''})
    } catch (error) {
        return res.status(500).json({error: error.message || error.toString() })
    }

    
}
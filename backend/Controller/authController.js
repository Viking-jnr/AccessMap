const jwt = require('jsonwebtoken');

const mockData = [
    {id: 1, role: 'PWD User', email: 'user@test.com' ,password: '1234'},
    {id: 2, role: 'Service Provider', email: 'provider@test.com' ,password: '1234'},
    {id: 3, role: 'Government Official', email: 'government@test.com' ,password: '1234'},
    {id: 4, role: 'Admin', email: 'admin@test.com' ,password: '1234'},
]

const generateToken = (user) => {
    return jwt.sign({id: user.id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});
}


exports.login =(req, res) => {
    const { role, email, password } = req.body;

    //Find the user by email
    const user = mockData.find(u => u.email === email);

    //Validate user existence and password
    if (!user || (user.password !== password || user.role !== role)){
        return res.status(401).json({message: 'Invalid email or password'});
    }

    //Generate JWT token
    const token = generateToken(user);

    //Respond with the token and user info
    res.json({ token, user });
}

import { connectDb } from '../../helper/db';
import { admin } from '../../modals/admins';
import { NextResponse, NextRequest } from 'next/server';
const jwt = require('jsonwebtoken');
export async function POST(request, response) {
    connectDb();
    const { email, password } = await request.json();
    var user = await admin.findOne().limit(1);
    try {
        if (user == null) {
            var saveAdmin = await new admin({
                name: "admin",
                email: "admin@gmail.com",
                password: "0987654321"
            })
            saveAdmin.save();
        } else {
            var user = await admin.findOne({ email });
            if (user.email == email && user.password == password) {
                const userData = { id: user._id, username: user.name, email: user.email };
                try {
                    const token = jwt.sign(userData, 'uesersall', { expiresIn: '1h' });
                    // Set token in cookies
                    return NextResponse.json({ "success": "Login Succesfully", "token": token }, {
                        status: 200
                    });
                } catch (error) {
                    console.error('Error signing token:', error.message);
                }


                // res.status(200).json({ message: 'Logged in successfully' });

              
            } else {
                return NextResponse.json({ "error": "Check Creadintials again!" }, {
                    status: 203
                });
            }
        }
    } catch (error) {
        return NextResponse.json({ "error": error.message }, {
            status: 403
        });
    }

}

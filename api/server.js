import sgMail from '@sendgrid/mail';
import cron from 'node-cron';


// Store last attempt time globally
let lastAttemptTime = null;
let emailAttempts = 0;


// Define maximum number of attempts allowed
const maxAttempts = -1;

// Define window duration (in milliseconds)
const windowDuration = .3 * 60 * 1000; // 30 minutes

// Function to calculate remaining time
const calculateRemainingTime = () => {
    if (lastAttemptTime) {
        const currentTime = Date.now();
        const elapsedTime = currentTime - lastAttemptTime;
        const remainingTime = Math.max(0, windowDuration - elapsedTime);
        return remainingTime;
    } else {
        return 0; // Initial value if no attempts have been made yet
    }
};

// Schedule task to update remaining time periodically
cron.schedule('*/1 * * * *', () => { // Runs every minute
    const remainingTime = calculateRemainingTime();
    console.log(`Remaining time: ${remainingTime} milliseconds`);
});

console.log('setup ready');

export default async function handler(req, res) {
    if (req.method === 'POST') {
    try {
        const {service, type, name, email, phone, message } = req.body;

        
        const api_key = service;
        
        console.log(api_key, 'here');
        
        // Setup SendGrid API Key
        sgMail.setApiKey(api_key);

        // Check if sending email is allowed based on remaining time
        const remainingTime = calculateRemainingTime();
        if (remainingTime > 0 && emailAttempts >= maxAttempts) {
            const hours = Math.floor(remainingTime / (60 * 60 * 1000));
            const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
            return res.status(429).json({
                message: `You have reached the maximum email limit. Please try again in ${hours}h ${minutes}m ${seconds}s.`,
                remainingTime: {
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                }
            });        }

        // Update email attempts counter
        if(emailAttempts <= maxAttempts)
            {emailAttempts++}
               else{emailAttempts = 0}


        // Update last attempt time
        lastAttemptTime = Date.now();
        let newType = ''
        if(type === '' || type === undefined){
            newType = 'New Message'
        }else {
            newType = type;
        }

        // Construct email message
        const msg = {
            to: 'iannsmif@gmail.com',
            from: 'iannsmif@gmail.com',
            subject: `${newType === 'New Message' ? `📨 ${name}` :
             service === `${newType} Customer Service` ? `👷‍♂️ ${name}` :
              `💰💲 ${name}` }`,
            text: 'Someone sent you a message.',
            html: `<html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border-radius: 10px;
                        padding: 20px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333333;
                        text-align: center;
                    }
                    p {
                        color: #555555;
                        margin-bottom: 15px;
                    }
                    .message {
                        background-color: #f9f9f9;
                        padding: 15px;
                        border-radius: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>${newType === 'New Message' ? newType :
                     service === `${newType} Customer Service` ? `${newType} Customer Service Request` :
                      `${newType} Job Available 💵` }
                    </h1>
                    <div class="message">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                </div>
            </body>
            </html>`
        };

        // Send email using SendGrid
        await sgMail.send(msg);

        // Respond to the client
        res.status(200).send('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
}
}


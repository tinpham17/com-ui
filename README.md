# com-ui

COMUI is a tiny React UI library.

Preview here: https://com-ui-tinpham.vercel.app/

## How to run dev

`npm install`

`npm run dev`

Open http://localhost:5173/

## Notification System Design for a social network website

### Here is my basic design diagram:

![Notification System Design](./Notification%20System%20Design.png)

### Explaination

**Consumers**

Users can use the social Web App or Mobile App. They can also receive notifications through Mail boxes.

User actions (like, leave comment, post new content) are sent to Handler (scaled instances) for processing.

**Handler**

Receive user requests, prepare corresponding messages and push them into the Messaging Queue.

Retrieve from Messaging Queue messages ready to send back to users, forward them to Notification Delivery.

**Notification Delivery**

Mostly third party services or protocols for sending mobile Push requests, SMS or emails.

They can be Apple Push Notification Service (APNS), Twilio for sending SMS and phone calls, SendGrid for emails.

**Notification Service**

Process messages from the Messaging Queue or directly sent from Handler.

Update and store changes into Notification Database.

Prepare notification messages and queue them in the Messaging Queue

**Notification Database**

This can be SQL or MongoDB. Scaled as replica set or kind of Master slave cluster if nessesary.

**Operators/Publishers**

The social platform managers or auto bots can send notifications to users by directly working with Notifcation Service or through Admin Handler.


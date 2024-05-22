export const bookingConfirmationClientSubject = `Thank you for booking with mybookr.io`;
export const bookingConfirmationClientTemplate = `
# Dear XXXNAMEXXX,

Thank you for your booking with MyBookr.io!

## This is what you booked:

XXXLISTINGXXX

XXXLISTINGADDRESSXXX

## Here are your booking details:

XXXDATAXXX

You can soon expect a confirmation email from the host, that your booking was successful. The payment will be taken from your credit card or bank account as soon the host confirms your booking.

Warm regards,<br/>
The mybookr.io Team

XXXFOOTERXXX
`;

export const bookingConfirmationOwnerSubject = `New booking`;
export const bookingConfirmationOwnerTemplate = `
# New booking for XXXLISTINGXXX

*YAY!*

## Customer Booking Data:

XXXDATAXXX

Please confirm!

@todo for mybookr: Actually add confirmation link! We will add this very soon! Stay tuned!
`;

export const footerTemplate = `
<footer>

**E** info@mybookr.io<br/>
**T** +62 82 147 4567 42

**[mybookr.io](https://mybookr.io/)** | Enhancing Holiday Booking for Owners and Travelers
</footer>`;

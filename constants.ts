// In a real deployment, import the local file or upload the attached logo to a bucket.
// Using a placeholder that represents the visual description or the user can replace this string.
export const LOGO_URL = "https://images.unsplash.com/photo-1516937941348-c09639cd42c1?auto=format&fit=crop&q=80&w=200&h=200"; 

export const QR_CODE_URL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=sms:+15550199321&color=000000&bgcolor=FFFFFF";

export const DEMO_MESSAGES = [
  {
    sender: 'user',
    text: 'Need a quote for the Johnson HVAC install. 4 ton unit, new ductwork.',
    delay: 500
  },
  {
    sender: 'agent',
    text: 'Got it. What’s your markup on materials and estimated labor hours?',
    delay: 1500
  },
  {
    sender: 'user',
    text: '20% materials. 12 hours labor at $85/hr.',
    delay: 3500
  },
  {
    sender: 'agent',
    text: 'Quote #4021 generated: $4,250.00 total. PDF sent to your email. Should I send it to the client?',
    delay: 5500
  },
  {
    sender: 'user',
    text: 'Yes, send it.',
    delay: 7500
  }
];
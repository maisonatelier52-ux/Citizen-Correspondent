import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { comment, name, email, website, recipient } = await request.json();

    // Validate required fields
    if (!comment || !name || !email || !recipient) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In a real implementation, you would use an email service like:
    // - Resend
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - etc.

    // For now, we'll just log the data (in a real app, you'd send the actual email)
    console.log('Comment received:', {
      comment,
      name,
      email,
      website,
      recipient,
      timestamp: new Date().toISOString()
    });

    // For now, just log the data (in a real app, you'd send the actual email)
    console.log('Sending email to:', recipient);
    console.log('Comment data:', { name, email, website, comment });

    // Simulate successful email sending
    // In a real implementation, replace this with actual email sending code
    // Example with a service like Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: recipient,
      subject: `New Comment from ${name}`,
      html: `
        <h2>New Comment Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <hr />
        <p><strong>Comment:</strong></p>
        <p>${comment}</p>
      `,
    });
    */

    // Add CORS headers
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    return new Response(
      JSON.stringify({ success: true, message: 'Comment sent successfully' }),
      { status: 200, headers }
    );
  } catch (error) {
    console.error('Error sending comment:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send comment' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
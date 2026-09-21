import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, plan_name, status, rejection_reason } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    let subject = '';
    let htmlContent = '';

    if (status === 'APPROVED') {
      subject = `Your Vedika for "${plan_name}" is Live! 🎉`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #22c55e;">Payment Approved!</h2>
          <p>Great news! We have successfully received and verified your payment for the <strong>${plan_name}</strong>.</p>
          <p>Your beautiful digital invitation is now Live. You can share it with your family and friends!</p>
          <br/>
          <p>Thank you for choosing Vedika.</p>
        </div>
      `;
    } else if (status === 'REJECTED') {
      subject = `Action Required: Issue with your Vedika Order`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ef4444;">Payment Verification Failed</h2>
          <p>Unfortunately, we could not verify your payment for the <strong>${plan_name}</strong>.</p>
          <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; padding: 10px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Reason:</strong> ${rejection_reason || 'Could not verify UTR'}</p>
          </div>
          <p>Please log in to your account and try submitting the payment details again from your cart.</p>
          <br/>
          <p>If you think this is a mistake, please reply to this email.</p>
          <p>Thank you.</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [email],
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

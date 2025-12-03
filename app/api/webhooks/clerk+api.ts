import { Webhook } from 'svix';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response('Missing CLERK_WEBHOOK_SECRET', { status: 500 });
  }

  // Get headers
  const svix_id = request.headers.get('svix-id');
  const svix_timestamp = request.headers.get('svix-timestamp');
  const svix_signature = request.headers.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing svix headers', { status: 400 });
  }

  // Get body
  const payload = await request.text();

  // Verify webhook
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: any;

  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Webhook verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  // Handle the event
  const eventType = evt.type;
  const userData = evt.data;

  try {
    switch (eventType) {
      case 'user.created':
        await supabaseAdmin.from('users').insert({
          id: userData.id,
          email: userData.email_addresses[0]?.email_address,
          first_name: userData.first_name,
          last_name: userData.last_name,
          image_url: userData.image_url,
        });
        break;

      case 'user.updated':
        await supabaseAdmin
          .from('users')
          .update({
            email: userData.email_addresses[0]?.email_address,
            first_name: userData.first_name,
            last_name: userData.last_name,
            image_url: userData.image_url,
          })
          .eq('id', userData.id);
        break;

      case 'user.deleted':
        if (userData.id) {
          await supabaseAdmin.from('users').delete().eq('id', userData.id);
        }
        break;

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

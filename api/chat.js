const SYSTEM_PROMPT = `You are the helpful portfolio assistant for abdelrahman basuonii, a full stack developer. Answer visitors clearly and briefly in the language they use. Explain Abdelrahman's services, projects, skills, and availability using only the context below. Do not invent prices, clients, employment, or contact details. When a visitor wants to work together, direct them to abdelrahmanbasuonii@gmail.com.

Portfolio context:
- Abdelrahman builds thoughtful full stack digital products with React, JavaScript, APIs, dashboards, commerce experiences, and product-minded UX.
- Featured demos: a precision calculator, a Northstar goods e-commerce storefront with filters and cart behavior, and a Signal analytics dashboard.
- Contact: abdelrahmanbasuonii@gmail.com
- LinkedIn: https://www.linkedin.com/in/abdelrahman-basuonii-16a011267/
- GitHub: https://github.com/AbdelrahmanBasuonii`;

const fallbackReply = (message) => {
  const text = message.toLowerCase();
  if (text.includes('contact') || text.includes('تواصل') || text.includes('email') || text.includes('ايميل')) {
    return 'يمكنك التواصل مع عبدالرحمن مباشرة عبر abdelrahmanbasuonii@gmail.com.';
  }
  if (text.includes('project') || text.includes('مشروع') || text.includes('work') || text.includes('عمل')) {
    return 'يمكنك تجربة الحاسبة، متجر Northstar، ولوحة Signal من قسم Project Lab. عبدالرحمن يبني منتجات Full Stack باستخدام React وواجهات API ولوحات البيانات.';
  }
  if (text.includes('skill') || text.includes('مهار')) {
    return 'عبدالرحمن متخصص في React وJavaScript وبناء الـ APIs ولوحات البيانات وتجارب التجارة الإلكترونية وتصميم المنتجات.';
  }
  return 'أهلًا بك. أنا المساعد الذكي لبروفايل عبدالرحمن. اسألني عن المشاريع أو المهارات أو طريقة التواصل معه.';
};

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = request.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return response.status(400).json({ error: 'A messages array is required' });
  }

  const safeMessages = messages
    .filter((message) => message && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string')
    .slice(-12);
  const latestMessage = safeMessages.at(-1)?.content || '';

  if (!process.env.OPENAI_API_KEY) {
    return response.status(200).json({ reply: fallbackReply(latestMessage), fallback: true });
  }

  try {
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        temperature: 0.5,
        max_tokens: 350,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...safeMessages],
      }),
    });
    const data = await openAIResponse.json();
    if (!openAIResponse.ok) return response.status(502).json({ error: data.error?.message || 'AI service unavailable' });
    return response.status(200).json({ reply: data.choices?.[0]?.message?.content || fallbackReply(latestMessage) });
  } catch (error) {
    return response.status(500).json({ error: 'Unable to reach the assistant', detail: error.message });
  }
}

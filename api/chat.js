const SYSTEM_PROMPT = `You are the helpful portfolio assistant for abdelrahman basuonii, a full stack developer. Answer visitors clearly, naturally, and briefly in the language they use. Be proactive: ask one useful follow-up question when a visitor describes a project, and guide them toward the most relevant portfolio page or contact method. Explain Abdelrahman's services, projects, skills, and availability using only the context below. Do not invent prices, clients, employment, or contact details. Share the phone number only when the visitor explicitly asks for a phone number, telephone, mobile, واتساب, or رقم التليفون. When a visitor wants to work together, direct them to the email and offer the phone number only if requested.

Portfolio context:
- Abdelrahman builds thoughtful full stack digital products with React, JavaScript, APIs, dashboards, commerce experiences, and product-minded UX.
- Featured demos: a precision calculator, a Northstar goods e-commerce storefront with filters and cart behavior, and a Signal analytics dashboard.
- He can help with portfolio websites, responsive frontend interfaces, backend APIs, dashboards, e-commerce flows, and product improvements.
- Contact: abdelrahmanbasuonii@gmail.com
- Phone (share only when explicitly requested): 0158325905
- LinkedIn: https://www.linkedin.com/in/abdelrahman-basuonii-16a011267/
- GitHub: https://github.com/AbdelrahmanBasuonii`;

const fallbackReply = (message) => {
  const text = message.toLowerCase();
  const asksForPhone = text.includes('phone') || text.includes('telephone') || text.includes('mobile') || text.includes('whatsapp') || text.includes('تليفون') || text.includes('تلفون') || text.includes('موبايل') || text.includes('واتساب') || text.includes('رقم');
  const asksAboutServices = text.includes('service') || text.includes('website') || text.includes('build') || text.includes('خدمة') || text.includes('موقع') || text.includes('تعمل') || text.includes('تبني');
  if (asksForPhone) {
    return text.match(/[a-z]/i) ? 'You can reach Abdelrahman by phone at 0158325905.' : 'تقدر تتواصل مع عبدالرحمن على رقم التليفون: 0158325905.';
  }
  if (text.includes('contact') || text.includes('تواصل') || text.includes('email') || text.includes('ايميل')) {
    return text.match(/[a-z]/i) ? 'You can contact Abdelrahman at abdelrahmanbasuonii@gmail.com. Tell me a little about what you want to build.' : 'يمكنك التواصل مع عبدالرحمن عبر abdelrahmanbasuonii@gmail.com. احكي لي قليلًا عن المشروع الذي تريد بناءه.';
  }
  if (text.includes('project') || text.includes('مشروع') || text.includes('work') || text.includes('عمل')) {
    return 'يمكنك تجربة الحاسبة، متجر Northstar، ولوحة Signal من قسم Project Lab. عبدالرحمن يبني منتجات Full Stack باستخدام React وواجهات API ولوحات البيانات.';
  }
  if (text.includes('skill') || text.includes('مهار')) {
    return 'عبدالرحمن متخصص في React وJavaScript وبناء الـ APIs ولوحات البيانات وتجارب التجارة الإلكترونية وتصميم المنتجات.';
  }
  if (asksAboutServices) {
    return 'أقدر أساعدك في مواقع البورتفوليو، واجهات React، الـ APIs، لوحات البيانات، والمتاجر الإلكترونية. ما نوع المشروع الذي تريد بناءه؟';
  }
  return 'أهلًا بك. أنا المساعد الذكي لبروفايل عبدالرحمن. اسألني عن المشاريع أو المهارات أو الخدمات أو طريقة التواصل معه.';
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

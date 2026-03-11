import { PERSONAL_INFO, EXPERIENCE, EDUCATION, SKILLS } from '../constants';

const SYSTEM_INSTRUCTION = `You are an AI assistant for Asish Sharma's personal portfolio website.
Your role is to answer questions about Asish's professional background, skills, and experience based STRICTLY on the following context.
Be professional, concise, and helpful. Adopt a tone that matches a high-end SaaS founder (confident, articulate, precise).

Context:
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Location: ${PERSONAL_INFO.location}
About: ${PERSONAL_INFO.about}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description || ''}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.institution} (${e.period})`).join('\n')}

Skills:
${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

Contact:
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

If asked about something not in this resume, politely state that you only have access to his professional portfolio information.`;

const HUGGINGFACE_MODELS = [
  "microsoft/Phi-3-mini-4k-instruct",
  "HuggingFaceH4/zephyr-7b-beta",
];

export const generateResponse = async (userMessage: string): Promise<string> => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  
  // If no API key, provide helpful guidance
  if (!apiKey) {
    return `I'd love to help! To enable the AI assistant, please add your free Hugging Face API token. Get one at https://huggingface.co/settings/tokens - it takes 30 seconds. In the meantime, feel free to check out ${PERSONAL_INFO.name}'s work in the portfolio or reach out directly at ${PERSONAL_INFO.email}.`;
  }

  try {
    // Use Hugging Face Inference API
    const model = HUGGINGFACE_MODELS[0];
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` },
        method: "POST",
        body: JSON.stringify({
          inputs: `${SYSTEM_INSTRUCTION}\n\nUser: ${userMessage}\nAssistant:`,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.7,
            top_p: 0.95,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.[0] || "API request failed");
    }

    const result = await response.json();
    
    // Extract text from response
    let text = "";
    if (Array.isArray(result)) {
      text = result[0]?.generated_text || "";
    } else if (result.generated_text) {
      text = result.generated_text;
    }

    // Clean up the response (remove the system instruction and user message from output)
    text = text.replace(/^.*Assistant:/, "").trim();
    
    return text || "I encountered an issue processing your question. Please try again.";
  } catch (error) {
    console.error("AI Service Error:", error);
    return `I'm having trouble connecting to the AI service right now. Feel free to reach out to ${PERSONAL_INFO.name} directly at ${PERSONAL_INFO.email} or check out the portfolio for more information.`;
  }
};

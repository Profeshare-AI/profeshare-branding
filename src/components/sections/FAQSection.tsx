import Section from "../Section";
import SectionChip from "../SectionChip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why a verified ecosystem?",
    answer: "To reduce fake or distracting activity so professionals can focus on real work and real opportunities."
  },
  {
    question: "What does 'natural language and context' mean here?",
    answer: "You can search and express intent in plain language. Results adapt to your profile and goals."
  },
  {
    question: "How long is the survey?",
    answer: "About 5 minutes."
  },
  {
    question: "Who gets early access?",
    answer: "Survey participants who fit early cohorts and contribute to a balanced network mix."
  },
  {
    question: "How is my data handled?",
    answer: "Your responses are used for product research and early access administration. You can request removal at any time."
  },
  {
    question: "Can my organisation try Recruiter Studio?",
    answer: "Yes. Complete the recruiter survey and request beta seats."
  }
];

const FAQSection = () => {
  return (
    <Section background="accent">
      <div className="text-center mb-12">
        <SectionChip>Support</SectionChip>
        <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
          Have Questions? We Have Answers.
        </h2>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-md bg-glass-bg/10 border border-glass-border/20 rounded-2xl p-6 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 font-instrument text-lg text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 font-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
import { ContactForm } from './contact-form';

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline">Contact Us</h1>
          <p className="text-muted-foreground mt-3 md:mt-4 text-base md:text-lg">
            Have a question, feedback, or want to get involved? We'd love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import { Rocket, Shield, Heart, CheckCircle, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';

const features = [
  {
    icon: <Shield className='text-primary' size={32} />,
    title: 'Safe Environment',
    description: 'Tips to create a cat-friendly and safe home.',
  },
  {
    icon: <Heart className='text-primary' size={32} />,
    title: 'Healthy Diet',
    description: 'Nutritional advice for every stage of your cat’s life.',
  },
  {
    icon: <CheckCircle className='text-primary' size={32} />,
    title: 'Routine Care',
    description: 'Guidance on grooming, litter, and daily routines.',
  },
];

const testimonials = [
  {
    name: 'Samantha Lee',
    image: '/avatar1.png',
    feedback:
      "This site helped me feel confident as a first-time cat owner. My kitty is happier and healthier than ever!",
  },
  {
    name: 'David Kim',
    image: '/avatar2.png',
    feedback:
      "The feeding guide was a game changer. I finally understand what's best for my cat at each age.",
  },
];

const faqs = [
  {
    question: 'How often should I feed my cat?',
    answer:
      'Adult cats typically eat twice a day. Kittens may require more frequent meals. Always provide fresh water.',
  },
  {
    question: 'What vaccinations does my cat need?',
    answer:
      "Core vaccines include FVRCP and rabies. Consult your vet for the ideal schedule based on your cat's lifestyle.",
  },
  {
    question: 'How do I groom my cat?',
    answer:
      'Brush your cat regularly, trim their nails monthly, and check ears for dirt or signs of infection.',
  },
];

function LandingPage() {
  return (
    <main className='font-sans bg-white min-h-screen'>
      {/* Hero */}
      <section className='py-16 bg-gradient-to-b from-blue-50 to-white'>
        <div className='container mx-auto px-4 flex flex-col items-center text-center gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className='mb-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full'>
              <Rocket size={16} className='mr-2' />
              Welcome to CatCare
            </Badge>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Simple Cat Care for Happy, Healthy Cats
            </h1>
            <p className='text-lg md:text-xl text-gray-600 mb-8'>
              Your trusted resource for easy-to-follow tips on feeding, health, grooming, and loving your feline friend.
            </p>
            <Button size='lg' className='px-8 py-4 text-lg'>
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-3xl font-semibold text-center mb-12'>
              Why Choose CatCare?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {features.map((feature, idx) => (
                <Card key={idx} className='h-full shadow hover:shadow-lg transition'>
                  <CardHeader className='flex flex-col items-center'>
                    {feature.icon}
                    <CardTitle className='mt-4 text-xl'>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-gray-600 text-center'>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alert / Tip */}
      <section>
        <div className='container mx-auto px-4'>
          <Alert className='mb-12 bg-blue-50 border-blue-200'>
            <Shield className='h-5 w-5 text-blue-500' />
            <AlertTitle className='font-semibold'>Cat Tip!</AlertTitle>
            <AlertDescription>
              Always provide fresh water and a safe, cozy resting space for your cat.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-3xl font-semibold text-center mb-12'>
              What Cat Owners Say
            </h2>
            <div className='flex flex-col md:flex-row justify-center gap-8'>
              {testimonials.map((t, idx) => (
                <Card key={idx} className='flex-1 p-6 shadow'>
                  <div className='flex items-center gap-4 mb-4'>
                    <Avatar>
                      <AvatarImage src={t.image} alt={`${t.name}'s avatar`} />
                      <AvatarFallback>
                        <Users size={20} />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className='font-medium'>{t.name}</span>
                    </div>
                  </div>
                  <p className='text-gray-700 italic mb-2'>"{t.feedback}"</p>
                  <div className='flex items-center gap-1 text-green-600 mt-2'>
                    <CheckCircle size={16} />
                    <span className='text-sm'>Verified Cat Owner</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-3xl font-semibold text-center mb-8'>Frequently Asked Questions</h2>
            <Accordion type='single' collapsible>
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className='text-lg font-medium'>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className='text-gray-600'>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact / Newsletter */}
      <section className='py-20 bg-blue-50'>
        <div className='container mx-auto px-4 max-w-xl'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className='text-3xl font-semibold text-center mb-6'>
              Stay Connected
            </h2>
            <p className='text-center text-gray-600 mb-8'>
              Subscribe to our newsletter for the latest cat care tips and updates.
            </p>
            <Form>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <FormField name='email'>
                  <FormItem className='w-full'>
                    <FormLabel className='sr-only'>Email</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='Your email address' required />
                    </FormControl>
                  </FormItem>
                </FormField>
                <Button type='submit' size='lg' className='w-full md:w-auto'>
                  <Mail size={18} className='mr-2' />
                  Subscribe
                </Button>
              </div>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 bg-white border-t mt-8'>
        <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <Heart className='text-pink-500' size={20} />
            <span className='font-semibold'>CatCare</span>
          </div>
          <div className='text-gray-500 text-sm'>
            &copy; {new Date().getFullYear()} CatCare. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
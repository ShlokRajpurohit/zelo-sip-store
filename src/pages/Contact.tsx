import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-light/20 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl text-primary mb-6">Get In Touch</h1>
          <p className="text-premium max-w-2xl mx-auto">
            Have questions about our products or need support? We'd love to hear from you. 
            Our team is here to help you on your health journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="shadow-premium">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-primary">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-primary">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-primary">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your question or feedback..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">support@enerzelo.com</p>
                      <p className="text-muted-foreground text-sm">info@enerzelo.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-fresh-green/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-fresh-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri, 9AM-6PM IST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Health Street<br />
                        Wellness District<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cranberry/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-cranberry" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Quick Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="#" className="block p-3 rounded-lg hover:bg-accent/10 transition-colors">
                      <h4 className="font-medium text-primary text-sm">Order Support</h4>
                      <p className="text-xs text-muted-foreground">Track orders, returns, and refunds</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-accent/10 transition-colors">
                      <h4 className="font-medium text-primary text-sm">Product Information</h4>
                      <p className="text-xs text-muted-foreground">Ingredients, nutrition, and allergens</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-accent/10 transition-colors">
                      <h4 className="font-medium text-primary text-sm">Zelo Club & SIP</h4>
                      <p className="text-xs text-muted-foreground">Membership and subscription help</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-accent/10 transition-colors">
                      <h4 className="font-medium text-primary text-sm">Wholesale Inquiries</h4>
                      <p className="text-xs text-muted-foreground">Bulk orders and partnerships</p>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-12 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="aspect-[16/9] bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-primary mb-2">Visit Our Store</h3>
              <p className="text-muted-foreground">
                Interactive map will be displayed here<br />
                showing our location and directions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Follow Us</h2>
          <p className="text-muted-foreground mb-8">
            Stay connected for health tips, recipes, and exclusive offers
          </p>
          <div className="flex justify-center gap-6">
            {[
              { name: 'Instagram', color: 'from-pink-500 to-purple-600' },
              { name: 'Facebook', color: 'from-blue-600 to-blue-500' },
              { name: 'Twitter', color: 'from-sky-500 to-blue-400' },
              { name: 'YouTube', color: 'from-red-600 to-red-500' }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-transform duration-200`}
              >
                <span className="text-sm font-semibold">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
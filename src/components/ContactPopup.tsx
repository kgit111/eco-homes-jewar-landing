
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Info } from "lucide-react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactPopup = ({ isOpen, onClose, title = "Get in Touch" }: ContactPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. Our team will contact you shortly. Note: To save data to Google Sheets, connect Supabase integration.",
        duration: 6000,
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      onClose();
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
          <DialogDescription>
            Fill in the form below and our team will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        {/* Google Sheets Integration Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium text-blue-900">Google Sheets Integration Available</p>
              <p className="text-blue-700 mt-1">
                To automatically save form data to Google Sheets, connect your Supabase integration using the green button in the top right.
              </p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <Input
              id="popup-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
            />
          </div>
          
          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
            <Input
              id="popup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
            />
          </div>
          
          <div>
            <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <Input
              id="popup-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
            />
          </div>
          
          <div>
            <label htmlFor="popup-message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <Textarea
              id="popup-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={3}
              className="transition-all duration-300 focus:scale-[1.02] focus:shadow-md"
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-3">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="transition-all duration-200 hover:scale-105"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-eco hover:bg-eco-dark text-white transition-all duration-200 hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : "Submit Inquiry"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;

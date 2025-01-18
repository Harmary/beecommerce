import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    acceptPolicy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendToTelegram = async (text: string) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      console.error('Telegram bot token not found');
      return;
    }

    // Get your chat ID by sending a message to your bot and accessing https://api.telegram.org/bot<YourBOTToken>/getUpdates
    const TELEGRAM_CHAT_ID = "-1001234567890"; // Replace with your chat ID
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: text,
          parse_mode: 'HTML'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message to Telegram');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      toast.error(t("Please accept the privacy policy"));
      return;
    }

    setIsSubmitting(true);

    try {
      // Format message for Telegram
      const telegramMessage = `
<b>New Contact Form Submission</b>
<b>Name:</b> ${formData.name}
<b>Email:</b> ${formData.email}
<b>Message:</b> ${formData.message}
      `.trim();

      // Send to Telegram
      await sendToTelegram(telegramMessage);

      // Open email client as before
      const mailtoLink = `mailto:info@beecommercecorp.ru?subject=${encodeURIComponent(
        "Contact Form Submission"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      
      toast.success(t("Message sent successfully!"));
      setFormData({ name: "", email: "", message: "", acceptPolicy: false });
    } catch (error) {
      toast.error(t("Failed to send message. Please try again."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          placeholder={t("name")}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          autoComplete="name"
          className="focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          autoComplete="email"
          className="focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Textarea
          placeholder={t("message")}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="min-h-[100px] focus:ring-2 focus:ring-primary focus:border-primary"
          disabled={isSubmitting}
        />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="privacy"
          checked={formData.acceptPolicy}
          onCheckedChange={(checked) => 
            setFormData({ ...formData, acceptPolicy: checked as boolean })
          }
          required
          disabled={isSubmitting}
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          {t("I agree to the")}{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            {t("privacy policy")}
          </a>
        </label>
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("Sending...") : t("submit")}
      </Button>
    </form>
  );
}
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptPolicy) {
      toast.error(t("Please accept the privacy policy"));
      return;
    }

    const mailtoLink = `mailto:info@beecommercecorp.ru?subject=${encodeURIComponent(
      "Contact Form Submission"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    toast.success(t("Opening email client..."));
    setFormData({ name: "", email: "", message: "", acceptPolicy: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <Input
          placeholder={t("name")}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder={t("email")}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <Textarea
          placeholder={t("message")}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          className="min-h-[100px] focus:ring-2 focus:ring-primary focus:border-primary"
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
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          {t("I agree to the")}{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            {t("privacy policy")}
          </a>
        </label>
      </div>
      <Button type="submit" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
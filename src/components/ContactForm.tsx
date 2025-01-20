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
    acceptPolicy: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.meta.env.VITE_API}./send-message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success(t("Message sent successfully!"));
        setFormData({ name: "", email: "", message: "", acceptPolicy: false });
      } else {
        toast.error(t("Failed to send message"));
      }
    } catch (error) {
      toast.error(t("An error occurred"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4 max-w-md mx-auto'>
      <div>
        <Input
          placeholder={t("name")}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          autoComplete='name'
        />
      </div>
      <div>
        <Input
          type='email'
          placeholder={t("email")}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          autoComplete='email'
        />
      </div>
      <div>
        <Textarea
          placeholder={t("message")}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className='min-h-[100px]'
        />
      </div>
      <div className='flex items-center space-x-2'>
        <Checkbox
          id='privacy'
          checked={formData.acceptPolicy}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, acceptPolicy: checked as boolean })
          }
          required
        />
        <label htmlFor='privacy' className='text-sm text-gray-600'>
          {t("I agree to the")}{" "}
          <a href='/privacy-policy' className='text-primary hover:underline'>
            {t("privacy policy")}
          </a>
        </label>
      </div>
      <Button type='submit' className='w-full'>
        {t("submit")}
      </Button>
    </form>
  );
}

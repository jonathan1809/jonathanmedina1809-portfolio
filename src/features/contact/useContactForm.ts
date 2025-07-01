import { useState, useCallback } from "react";
import { ContactService, ContactFormData } from "@/services/contact";

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await ContactService.sendMessage(formData);

        if (response.success) {
          setSuccess(true);
          // Reset form on success
          setFormData({
            name: "",
            email: "",
            message: "",
            honeypot: "",
          });
        } else {
          setError(response.error || "Failed to send message");
        }
      } catch {
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      message: "",
      honeypot: "",
    });
    setError(null);
    setSuccess(false);
  }, []);

  return {
    formData,
    loading,
    error,
    success,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

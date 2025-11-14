import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte fülle alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    // In production, this would send to a backend
    toast({
      title: "Anfrage gesendet",
      description: "Wir melden uns innerhalb von 24 Stunden bei dir.",
    });

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding px-6 lg:px-12 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-foreground">Projekt anfragen</h2>
          <p className="text-xl text-muted-foreground">
            Erzähl uns von deinem Projekt. Wir melden uns innerhalb von 24 Stunden an Werktagen.
          </p>
        </div>

        <div className="glass-card-strong p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-black/50 border-border/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 dark:bg-black/50 border-border/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Unternehmen / Marke
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-white/50 dark:bg-black/50 border-border/50"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Nachricht *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-white/50 dark:bg-black/50 border-border/50 resize-none"
                placeholder="Beschreibe kurz dein Projekt: Welche Art von Content brauchst du? Für welche Kanäle? Gibt es einen Zeitrahmen?"
              />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">
              Anfrage senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useState } from "react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/utils/cn";
import { contactInfo, profile } from "@/data/portfolio";

const EMPTY_FORM = { name: "", email: "", message: "" };

/** Validated client-side so obvious mistakes never cost an EmailJS credit. */
const validate = ({ name, email, message }) => {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
    errors.email = "Enter a valid email address.";
  if (message.trim().length < 10)
    errors.message = "Tell me a little more — at least 10 characters.";
  return errors;
};

const FIELD_CLASSES =
  "w-full rounded-xl border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-subtle-foreground focus:border-primary sm:text-base";

export const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const updateField = (field) => (event) => {
    setFormData((previous) => ({ ...previous, [field]: event.target.value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot: bots fill hidden inputs, humans never see this one. Pretend it
    // succeeded so the bot does not learn it was caught.
    if (event.target.company?.value) {
      setStatus({ type: "success", message: "Message sent. Thanks!" });
      setFormData(EMPTY_FORM);
      return;
    }

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Fix the highlighted fields and send again.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "The contact form is not configured yet. Email me directly instead."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Message sent. I'll reply within a day or two.",
      });
      setFormData(EMPTY_FORM);
    } catch (error) {
      console.error("EmailJS request failed:", error);
      setStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          `Sending failed. You can email me at ${profile.email}.`,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28 md:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-56 w-56 rounded-full bg-primary/[0.06] blur-[110px] sm:h-80 sm:w-80" />
        <div className="absolute bottom-1/4 right-1/4 h-44 w-44 rounded-full bg-highlight/[0.05] blur-[110px] sm:h-64 sm:w-64" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build"
          accent="something great."
          description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          {/* ------------------------------------------------------- The form */}
          <Reveal
            delay={150}
            className="rounded-2xl glass p-6 sm:rounded-3xl sm:p-8"
          >
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={updateField("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(
                    FIELD_CLASSES,
                    errors.name ? "border-red-500/60" : "border-border"
                  )}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={updateField("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(
                    FIELD_CLASSES,
                    errors.email ? "border-red-500/60" : "border-border"
                  )}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="What are you building?"
                  value={formData.message}
                  onChange={updateField("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(
                    FIELD_CLASSES,
                    "resize-none",
                    errors.message ? "border-red-500/60" : "border-border"
                  )}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Honeypot — hidden from people and from assistive tech. */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" tabIndex={-1} />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                isLoading={isSending}
              >
                {isSending ? "Sending…" : "Send message"}
                {!isSending && <Send className="h-5 w-5" aria-hidden="true" />}
              </Button>

              <div aria-live="polite" aria-atomic="true">
                {status.type && (
                  <div
                    className={cn(
                      "flex items-start gap-3 rounded-xl border p-4",
                      status.type === "success"
                        ? "border-green-500/25 bg-green-500/10 text-green-300"
                        : "border-red-500/25 bg-red-500/10 text-red-300"
                    )}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                    <p className="text-sm">{status.message}</p>
                  </div>
                )}
              </div>
            </form>
          </Reveal>

          {/* ------------------------------------------------ Direct channels */}
          <div className="space-y-6">
            <Reveal delay={220} className="rounded-2xl glass p-6 sm:rounded-3xl sm:p-8">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                Direct channels
              </h3>
              <ul className="mt-5 space-y-1">
                {contactInfo.map((item) => {
                  const Row = item.href ? "a" : "div";
                  return (
                    <li key={item.label}>
                      <Row
                        {...(item.href ? { href: item.href } : {})}
                        className={cn(
                          "group flex items-center gap-4 rounded-xl p-3 transition-colors",
                          item.href && "hover:bg-surface"
                        )}
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <item.icon
                            className="h-4 w-4 text-primary"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-subtle-foreground">
                            {item.label}
                          </span>
                          <span className="block break-all text-sm font-medium">
                            {item.value}
                          </span>
                        </span>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal
              delay={300}
              className="rounded-2xl border-primary/25 glass p-6 sm:rounded-3xl sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-green-500" />
                <span className="text-sm font-medium">Currently available</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I'm open to full-time roles and freelance MERN work. Fastest way
                to reach me is email — I read everything.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

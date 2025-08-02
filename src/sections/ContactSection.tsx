import { HomeSectionProps } from "./HomeSection";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection({ id }: HomeSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Thay thế bằng thông tin EmailJS của bạn
      await emailjs.send(
        "service_v66src1", // Service ID từ EmailJS
        "template_auvmcvw", // Template ID từ EmailJS
        templateParams,
        "ZHT17WyxoQ1oGGXG-" // Public Key từ EmailJS
      );

      setSubmitStatus("success");
      e.currentTarget.reset(); // Reset form
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="flex items-center justify-center bg-black dark:bg-white p-10 rounded-xl">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white dark:text-black mb-4">Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 mx-auto">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white dark:text-black mb-2">
                  Full Name
                </label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-black dark:bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400" placeholder="Enter your full name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white dark:text-black mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-black dark:bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400" placeholder="Enter your email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white dark:text-black mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 bg-black dark:bg-white border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white dark:text-black placeholder-gray-500 dark:placeholder-gray-400 resize-none" placeholder="Enter your message..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="group bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-8 py-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white w-full font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5 transition-transform rotate-90 duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 rounded-lg">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Message sent successfully!
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-lg">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

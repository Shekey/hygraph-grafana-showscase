import { Mail, MapPin, Phone } from "lucide-react";
import type { GetPageQuery } from "@/types/hygraph-generated";
import ContactForm from "./ContactForm";

type ContactSectionData = Extract<
  GetPageQuery["pages"][0]["sections"][0],
  { __typename?: "ContactSection" }
>;

interface ContactSectionProps {
  section: ContactSectionData;
}

export default function ContactSection({ section }: ContactSectionProps) {
  const {
    offices,
    topics,
    nameLabel,
    namePlaceholder,
    emailLabel,
    emailPlaceholder,
    topicLabel,
    topicPlaceholder,
    messageLabel,
    messagePlaceholder,
    submitLabel,
    successHeadline,
    successBody,
  } = section;

  return (
    <section className="border-b border-primary">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Form */}
        <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-primary">
          <ContactForm
            topics={topics ?? []}
            nameLabel={nameLabel ?? "Name"}
            namePlaceholder={namePlaceholder ?? ""}
            emailLabel={emailLabel ?? "Email"}
            emailPlaceholder={emailPlaceholder ?? ""}
            topicLabel={topicLabel ?? "Topic"}
            topicPlaceholder={topicPlaceholder ?? ""}
            messageLabel={messageLabel ?? "Message"}
            messagePlaceholder={messagePlaceholder ?? ""}
            submitLabel={submitLabel ?? "Send message"}
            successHeadline={successHeadline ?? "Message received"}
            successBody={successBody ?? ""}
          />
        </div>

        {/* Offices */}
        <div className="lg:col-span-5">
          {offices.map((office, i) => (
            <div
              key={office.id}
              className={`p-8 md:p-12 lg:p-16 ${i < offices.length - 1 ? "border-b border-primary" : ""}`}
            >
              <p
                className="uppercase tracking-[0.2em] text-muted mb-1"
                style={{ fontSize: "0.65rem", fontWeight: 700 }}
              >
                {office.role}
              </p>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                }}
              >
                {office.city}
                <span className="text-accent">.</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={15}
                    className="text-accent mt-0.5 shrink-0"
                    strokeWidth={1.5}
                  />
                  <p
                    className="text-muted"
                    style={{ lineHeight: 1.7, whiteSpace: "pre-line" }}
                  >
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail
                    size={15}
                    className="text-accent shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    size={15}
                    className="text-accent shrink-0"
                    strokeWidth={1.5}
                  />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

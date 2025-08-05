// @ts-nocheck
'use client';

import React, { useRef } from 'react';

export default function LandingPage() {
  const contactDialogRef = useRef<HTMLDialogElement>(null);
  const quoteDialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <l-container>
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h1 className="txt-page-title" style={{ marginBottom: '20px' }}>
            Precision Manufacturing On Demand
          </h1>
          <p
            style={{
              fontSize: '1.2em',
              marginBottom: '30px',
              maxWidth: '600px',
              margin: '0 auto 30px',
            }}
          >
            Transform your designs into reality with our advanced manufacturing
            capabilities. From rapid prototyping to production runs, we deliver
            quality parts when you need them.
          </p>
          <div
            className="flex flex-wrap gap-3"
            style={{ justifyContent: 'center', marginBottom: '40px' }}
          >
            <button
              kind="primary"
              scale="large"
              onClick={() => quoteDialogRef.current?.showModal()}
            >
              Get Instant Quote
            </button>
            <button kind="primary-outline" scale="large">
              <l-icon name="play"></l-icon>
              Watch Demo
            </button>
          </div>

          {/* Key Stats */}
          <div
            className="flex flex-wrap gap-6"
            style={{ justifyContent: 'center', marginTop: '50px' }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  color: 'var(--l-color-primary)',
                }}
              >
                10,000+
              </div>
              <div>Parts Manufactured</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  color: 'var(--l-color-primary)',
                }}
              >
                2-5 Days
              </div>
              <div>Average Lead Time</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  color: 'var(--l-color-primary)',
                }}
              >
                99.5%
              </div>
              <div>Quality Rating</div>
            </div>
          </div>
        </div>
      </l-container>

      {/* Services Section */}
      <l-container
        style={{
          backgroundColor: 'var(--l-color-neutral-5)',
          padding: '60px 20px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          Manufacturing Services
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          <l-panel>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <l-icon
                name="cog"
                style={{ fontSize: '3em', marginBottom: '20px' }}
              ></l-icon>
              <h3>CNC Machining</h3>
              <p>
                Precision machining for complex geometries with tight
                tolerances. Materials include aluminum, steel, titanium, and
                plastics.
              </p>
              <div style={{ marginTop: '20px' }}>
                <l-chip kind="primary">±0.001" Tolerance</l-chip>
                <l-chip kind="primary">50+ Materials</l-chip>
              </div>
            </div>
          </l-panel>

          <l-panel>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <l-icon
                name="cube"
                style={{ fontSize: '3em', marginBottom: '20px' }}
              ></l-icon>
              <h3>3D Printing</h3>
              <p>
                Rapid prototyping and low-volume production using advanced
                additive manufacturing technologies.
              </p>
              <div style={{ marginTop: '20px' }}>
                <l-chip kind="success">SLA/SLS/FDM</l-chip>
                <l-chip kind="success">Same Day</l-chip>
              </div>
            </div>
          </l-panel>

          <l-panel>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <l-icon
                name="lightning-bolt"
                style={{ fontSize: '3em', marginBottom: '20px' }}
              ></l-icon>
              <h3>Sheet Metal</h3>
              <p>
                Laser cutting, bending, and forming services for sheet metal
                parts with excellent surface finishes.
              </p>
              <div style={{ marginTop: '20px' }}>
                <l-chip kind="warning">Laser Cutting</l-chip>
                <l-chip kind="warning">CNC Bending</l-chip>
              </div>
            </div>
          </l-panel>

          <l-panel>
            <div style={{ padding: '30px', textAlign: 'center' }}>
              <l-icon
                name="beaker"
                style={{ fontSize: '3em', marginBottom: '20px' }}
              ></l-icon>
              <h3>Injection Molding</h3>
              <p>
                High-volume plastic part production with custom tooling and
                material selection expertise.
              </p>
              <div style={{ marginTop: '20px' }}>
                <l-chip kind="purple">Custom Tooling</l-chip>
                <l-chip kind="purple">Volume Production</l-chip>
              </div>
            </div>
          </l-panel>
        </div>
      </l-container>

      {/* Process Section */}
      <l-container style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          How It Works
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--l-color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2em',
                margin: '0 auto 20px',
              }}
            >
              1
            </div>
            <h3>Upload Design</h3>
            <p>
              Upload your CAD files or drawings. Our system provides instant
              feedback on manufacturability and pricing.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--l-color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2em',
                margin: '0 auto 20px',
              }}
            >
              2
            </div>
            <h3>Review Quote</h3>
            <p>
              Get instant pricing and lead times. Our engineers review complex
              parts and provide optimization suggestions.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--l-color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2em',
                margin: '0 auto 20px',
              }}
            >
              3
            </div>
            <h3>Production</h3>
            <p>
              Your parts enter production immediately. Track progress in
              real-time through our customer portal.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'var(--l-color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2em',
                margin: '0 auto 20px',
              }}
            >
              4
            </div>
            <h3>Quality & Delivery</h3>
            <p>
              Rigorous quality inspection and fast, tracked shipping to get your
              parts delivered on time.
            </p>
          </div>
        </div>
      </l-container>

      {/* Capabilities Section */}
      <l-container
        style={{
          backgroundColor: 'var(--l-color-neutral-5)',
          padding: '60px 20px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          Manufacturing Capabilities
        </h2>

        <l-tabs role="tablist" style={{ marginBottom: '30px' }}>
          <button role="tab" aria-selected="true">
            Materials
          </button>
          <button role="tab">Tolerances</button>
          <button role="tab">Finishes</button>
          <button role="tab">Certifications</button>
        </l-tabs>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          <div>
            <h4>Metals</h4>
            <div className="flex flex-wrap gap-2">
              <l-chip>Aluminum 6061</l-chip>
              <l-chip>Stainless Steel 316</l-chip>
              <l-chip>Titanium Ti-6Al-4V</l-chip>
              <l-chip>Brass C360</l-chip>
            </div>
          </div>

          <div>
            <h4>Plastics</h4>
            <div className="flex flex-wrap gap-2">
              <l-chip kind="primary">ABS</l-chip>
              <l-chip kind="primary">Nylon 6/6</l-chip>
              <l-chip kind="primary">PEEK</l-chip>
              <l-chip kind="primary">Polycarbonate</l-chip>
            </div>
          </div>

          <div>
            <h4>Advanced Materials</h4>
            <div className="flex flex-wrap gap-2">
              <l-chip kind="purple">Carbon Fiber</l-chip>
              <l-chip kind="purple">Inconel 718</l-chip>
              <l-chip kind="purple">Hastelloy X</l-chip>
            </div>
          </div>
        </div>
      </l-container>

      {/* Testimonials Section */}
      <l-container style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          What Our Customers Say
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
          }}
        >
          <l-panel>
            <div style={{ padding: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--l-color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginRight: '15px',
                  }}
                >
                  JD
                </div>
                <div>
                  <strong>John Davis</strong>
                  <div
                    style={{
                      fontSize: '0.9em',
                      color: 'var(--l-color-neutral-60)',
                    }}
                  >
                    Lead Engineer, AeroTech Industries
                  </div>
                </div>
              </div>
              <blockquote>
                "The quality and speed of delivery exceeded our expectations.
                The parts fit perfectly and the surface finish was outstanding.
                This partnership has been crucial for our prototyping timeline."
              </blockquote>
              <div style={{ marginTop: '15px' }}>
                <l-badge kind="success">Verified Customer</l-badge>
              </div>
            </div>
          </l-panel>

          <l-panel>
            <div style={{ padding: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--l-color-success)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginRight: '15px',
                  }}
                >
                  SM
                </div>
                <div>
                  <strong>Sarah Martinez</strong>
                  <div
                    style={{
                      fontSize: '0.9em',
                      color: 'var(--l-color-neutral-60)',
                    }}
                  >
                    Product Manager, MedDevice Corp
                  </div>
                </div>
              </div>
              <blockquote>
                "Working with this team has streamlined our entire product
                development process. The instant quoting system and real-time
                updates give us the agility we need in a competitive market."
              </blockquote>
              <div style={{ marginTop: '15px' }}>
                <l-badge kind="success">Verified Customer</l-badge>
              </div>
            </div>
          </l-panel>

          <l-panel>
            <div style={{ padding: '30px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--l-color-warning)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginRight: '15px',
                  }}
                >
                  RC
                </div>
                <div>
                  <strong>Robert Chen</strong>
                  <div
                    style={{
                      fontSize: '0.9em',
                      color: 'var(--l-color-neutral-60)',
                    }}
                  >
                    Founder, RoboTech Innovations
                  </div>
                </div>
              </div>
              <blockquote>
                "As a startup, we needed a manufacturing partner who could scale
                with us. From single prototypes to production runs, they've
                supported our growth every step of the way."
              </blockquote>
              <div style={{ marginTop: '15px' }}>
                <l-badge kind="success">Verified Customer</l-badge>
              </div>
            </div>
          </l-panel>
        </div>
      </l-container>

      {/* Industries Section */}
      <l-container
        style={{
          backgroundColor: 'var(--l-color-neutral-5)',
          padding: '60px 20px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
          Industries We Serve
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <l-icon
              name="airplane"
              style={{ fontSize: '3em', marginBottom: '15px' }}
            ></l-icon>
            <h4>Aerospace</h4>
            <p>
              AS9100 certified manufacturing for critical aerospace components
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <l-icon
              name="heart"
              style={{ fontSize: '3em', marginBottom: '15px' }}
            ></l-icon>
            <h4>Medical</h4>
            <p>
              ISO 13485 compliant production for medical devices and equipment
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <l-icon
              name="car"
              style={{ fontSize: '3em', marginBottom: '15px' }}
            ></l-icon>
            <h4>Automotive</h4>
            <p>IATF 16949 certified manufacturing for automotive components</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <l-icon
              name="cpu-chip"
              style={{ fontSize: '3em', marginBottom: '15px' }}
            ></l-icon>
            <h4>Electronics</h4>
            <p>Precision components for consumer and industrial electronics</p>
          </div>
        </div>
      </l-container>

      {/* CTA Section */}
      <l-container style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '20px' }}>Ready to Start Manufacturing?</h2>
        <p
          style={{
            fontSize: '1.1em',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px',
          }}
        >
          Join thousands of engineers and designers who trust us with their most
          critical projects. Upload your files today and experience the future
          of on-demand manufacturing.
        </p>

        <div
          className="flex flex-wrap gap-3"
          style={{ justifyContent: 'center', marginBottom: '40px' }}
        >
          <button
            kind="primary"
            scale="large"
            onClick={() => quoteDialogRef.current?.showModal()}
          >
            <l-icon name="upload"></l-icon>
            Get Started Now
          </button>
          <button
            kind="neutral"
            scale="large"
            onClick={() => contactDialogRef.current?.showModal()}
          >
            <l-icon name="chat-bubble-left"></l-icon>
            Talk to an Engineer
          </button>
        </div>

        <l-alert kind="primary">
          <strong>New Customer Offer:</strong> Get 15% off your first order. Use
          code WELCOME15 at checkout.
        </l-alert>
      </l-container>

      {/* Quote Dialog */}
      <dialog ref={quoteDialogRef}>
        <button
          slot="close"
          aria-label="Close dialog"
          onClick={() => quoteDialogRef.current?.close()}
        ></button>

        <h3 style={{ marginBottom: '20px' }}>Get Your Instant Quote</h3>

        <form className="flex flex-col gap-4">
          <fieldset>
            <label htmlFor="quote-name">Name</label>
            <input id="quote-name" type="text" required />
          </fieldset>

          <fieldset>
            <label htmlFor="quote-email">Email</label>
            <input id="quote-email" type="email" required />
          </fieldset>

          <fieldset>
            <label htmlFor="quote-company">Company</label>
            <input id="quote-company" type="text" />
          </fieldset>

          <fieldset>
            <label htmlFor="quote-files">Upload CAD Files</label>
            <l-fileupload>
              <label htmlFor="quote-files">
                Drag and drop your files or click to browse
              </label>
              <input
                id="quote-files"
                type="file"
                multiple
                accept=".step,.stp,.iges,.igs,.dwg,.pdf"
              />
            </l-fileupload>
          </fieldset>

          <fieldset>
            <label htmlFor="quote-notes">Project Details</label>
            <textarea
              id="quote-notes"
              rows={4}
              placeholder="Quantity, material preferences, timeline, etc."
            />
          </fieldset>

          <div className="flex gap-2" style={{ justifyContent: 'flex-end' }}>
            <button
              type="button"
              kind="neutral"
              onClick={() => quoteDialogRef.current?.close()}
            >
              Cancel
            </button>
            <button type="submit" kind="primary">
              Submit for Quote
            </button>
          </div>
        </form>
      </dialog>

      {/* Contact Dialog */}
      <dialog ref={contactDialogRef}>
        <button
          slot="close"
          aria-label="Close dialog"
          onClick={() => contactDialogRef.current?.close()}
        ></button>

        <h3 style={{ marginBottom: '20px' }}>Contact Our Engineering Team</h3>

        <form className="flex flex-col gap-4">
          <fieldset>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" type="text" required />
          </fieldset>

          <fieldset>
            <label htmlFor="contact-email">Email</label>
            <input id="contact-email" type="email" required />
          </fieldset>

          <fieldset>
            <label htmlFor="contact-phone">Phone</label>
            <input id="contact-phone" type="tel" />
          </fieldset>

          <fieldset>
            <label htmlFor="contact-subject">Subject</label>
            <select id="contact-subject">
              <option value="general">General Inquiry</option>
              <option value="quote">Request Quote</option>
              <option value="technical">Technical Support</option>
              <option value="partnership">Partnership Opportunity</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell us about your project or question..."
              required
            />
          </fieldset>

          <div className="flex gap-2" style={{ justifyContent: 'flex-end' }}>
            <button
              type="button"
              kind="neutral"
              onClick={() => contactDialogRef.current?.close()}
            >
              Cancel
            </button>
            <button type="submit" kind="primary">
              Send Message
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

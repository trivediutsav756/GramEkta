import React from 'react';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';

const PrivacyPolicy = () => {
  const effectiveDate = "May 2, 2026";
  const orgName = "Gram Ekta Foundation";

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", pb: 10 }}>
      {/* ── BANNER SECTION ── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "200px", sm: "300px" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
          alt="Privacy Policy Banner"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.5)",
          }}
        />
        <Box sx={{ position: "relative", zIndex: 10, textAlign: "center", px: 4 }}>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 900,
              fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              textShadow: "0 4px 12px rgba(0,0,0,0.3)",
              mb: 1,
            }}
          >
            Privacy Policy
          </Typography>
          <Box sx={{ height: 4, width: 60, bgcolor: "#f5b000", mx: "auto", borderRadius: 2 }} />
        </Box>
      </Box>

      {/* ── CONTENT SECTION ── */}
      <Container maxWidth="md" sx={{ mt: -6, position: "relative", zIndex: 20 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 4, md: 8 },
            borderRadius: "24px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
          }}
        >
          <Box sx={{ mb: 6 }}>
            <Typography variant="body2" sx={{ color: "text.secondary", fontWeight: "bold", mb: 1 }}>
              Effective Date: {effectiveDate}
            </Typography>
            <Typography variant="h5" sx={{ color: "#17745f", fontWeight: 800 }}>
              {orgName}
            </Typography>
          </Box>

          <Divider sx={{ mb: 6 }} />

          <Box className="space-y-10">
            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>1. Introduction</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                {orgName} (“we”, “our”, “us”) is committed to protecting the privacy of our donors, volunteers, and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website.
              </Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8, mt: 2 }}>
                By using our website, you agree to the terms of this Privacy Policy.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>2. Information We Collect</Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#17745f" }}>a) Personal Information</Typography>
                <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                  When you fill out forms on our website, we may collect:
                </Typography>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Mobile Number</li>
                  <li>City / Location</li>
                  <li>PAN Number (for tax purposes, if provided)</li>
                </ul>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#17745f" }}>b) Donation Information</Typography>
                <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                  When you make a donation and submit details:
                </Typography>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Donation Amount</li>
                  <li>Payment Mode (UPI / Bank Transfer)</li>
                  <li>Transaction ID / Reference Number</li>
                  <li>Payment Date</li>
                  <li>Uploaded Payment Receipt (image/PDF)</li>
                </ul>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#17745f" }}>c) Volunteer Information</Typography>
                <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                  When you apply as a volunteer:
                </Typography>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Personal details (name, contact info, location)</li>
                  <li>Skills, interests, and availability</li>
                  <li>Any additional information you provide</li>
                </ul>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#17745f" }}>d) Technical Information</Typography>
                <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                  We may automatically collect:
                </Typography>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited on our website</li>
                </ul>
              </Box>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>3. How We Use Your Information</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                We use the collected information to:
              </Typography>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Process and verify donations</li>
                <li>Contact you regarding your donation or volunteer application</li>
                <li>Send donation receipts and confirmations</li>
                <li>Maintain internal records</li>
                <li>Improve our website and services</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>4. Donation Verification</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                Since donations are made via bank transfer or UPI, we collect transaction details and payment proof to:
              </Typography>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Verify your donation</li>
                <li>Prevent fraud or duplicate entries</li>
                <li>Maintain transparency in our records</li>
              </ul>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>5. Sharing of Information</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                We do <strong>not sell, rent, or trade</strong> your personal information.
              </Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8, mt: 2 }}>
                We may share your information only:
              </Typography>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>With authorized internal team members</li>
                <li>When required by law or government authorities</li>
                <li>With trusted service providers (e.g., email services), if necessary</li>
              </ul>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>6. Data Security</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                We take appropriate security measures to protect your personal data from unauthorized access, misuse, or disclosure.
              </Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8, mt: 2 }}>
                However, no method of online transmission is 100% secure, and we cannot guarantee absolute security.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>7. Cookies</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>8. Your Rights</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                You have the right to:
              </Typography>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of incorrect data</li>
                <li>Request deletion of your data (subject to legal obligations)</li>
              </ul>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8, mt: 2 }}>
                To make such requests, please contact us using the details below.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>9. Third-Party Links</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>10. Children’s Privacy</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                We do not knowingly collect personal information from children without parental consent.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>11. Updates to This Policy</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </Typography>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>12. Contact Us</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                If you have any questions or concerns about this Privacy Policy, you can contact us:
              </Typography>
              <Box sx={{ mt: 3, p: 3, bgcolor: "gray.50", borderRadius: 3, border: "1px dashed #cbd5e1" }}>
                <Typography variant="body1" sx={{ color: "#111827", mb: 1 }}><strong>Email:</strong> gramektafoundation@gmail.com</Typography>
                <Typography variant="body1" sx={{ color: "#111827", mb: 1 }}><strong>Phone:</strong> +91 9172605333</Typography>
                <Typography variant="body1" sx={{ color: "#111827" }}><strong>Address:</strong> Gat. No. 710, At.Post. Kasar Amboli, Ambarvet, Mulshi, Pune-412115</Typography>
              </Box>
            </section>

            <section>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: "#111827" }}>13. Consent</Typography>
              <Typography variant="body1" sx={{ color: "#4b5563", lineHeight: 1.8 }}>
                By using our website and submitting your information, you consent to this Privacy Policy.
              </Typography>
            </section>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

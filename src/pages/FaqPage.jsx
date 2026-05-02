import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    CircularProgress,
    Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://gramekta.pythonanywhere.com";

export default function FaqPage() {
    const [expanded, setExpanded] = useState(0);
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${API_BASE}/faqs/`);
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                const faqArray = data?.data || (Array.isArray(data) ? data : []);
                setFaqs(faqArray);
            } catch (err) {
                console.error("Failed to fetch FAQs:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchFaqs();
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : -1);
    };

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", bgcolor: "#f9fafb" }}>
                <CircularProgress sx={{ color: "#17745f" }} />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", bgcolor: "#f9fafb", flexDirection: "column", gap: 2 }}>
                <Typography color="error">Failed to load FAQs. Please try again later.</Typography>
                <Typography variant="caption" color="text.secondary">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh" }}>
            {/* ── BANNER SECTION ── */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "250px", sm: "350px", md: "450px" },
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
                    alt="FAQ Banner"
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.6)",
                    }}
                />
                <Box sx={{ relative: "z-10", textAlign: "center", px: 4 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "white",
                            fontWeight: 900,
                            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                            textShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            mb: 2,
                        }}
                    >
                        FAQ
                    </Typography>
                    <Box sx={{ height: 4, width: 80, bgcolor: "#f5b000", mx: "auto", borderRadius: 2 }} />
                </Box>
            </Box>

            {/* ── CONTENT SECTION ── */}
            <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
                <Box sx={{ textAlign: "center", mb: 8 }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mb: 2 }}>
                        <Box sx={{ height: 2, width: 40, bgcolor: "#17745f" }} />
                        <Typography
                            sx={{ color: "#17745f", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em" }}
                        >
                            Get Answers
                        </Typography>
                        <Box sx={{ height: 2, width: 40, bgcolor: "#17745f" }} />
                    </Box>
                    <Typography
                        variant="h3"
                        sx={{ color: "#111827", fontWeight: 800, fontSize: { xs: "2rem", md: "2.75rem" } }}
                    >
                        Frequently Asked Questions
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {faqs.map((item, index) => (
                        <Accordion
                            key={item.id || index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            sx={{
                                boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                                border: "1px solid #e5e7eb",
                                borderRadius: "16px !important",
                                overflow: "hidden",
                                "&:before": { display: "none" },
                                transition: "all 0.3s ease",
                                "&.Mui-expanded": {
                                    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                                    borderColor: "#17745f",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "#17745f", fontSize: "1.75rem" }} />}
                                sx={{
                                    px: { xs: 3, sm: 4 },
                                    py: 1.5,
                                    "&.Mui-expanded": { bgcolor: "rgba(23, 116, 95, 0.02)" },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 800,
                                        color: "#111827",
                                        fontSize: { xs: "1rem", sm: "1.1rem" },
                                    }}
                                >
                                    {item.questions}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: { xs: 3, sm: 4 }, pb: 4, pt: 0, bgcolor: "rgba(23, 116, 95, 0.02)" }}>
                                <Box sx={{ pt: 2, borderTop: "1px solid rgba(0,0,0,0.05)" }}>
                                    <Typography
                                        variant="body1"
                                        sx={{ color: "#4b5563", lineHeight: 1.8, fontSize: "1rem" }}
                                    >
                                        {item.answer}
                                    </Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

                {/* ── STILL HAVE QUESTIONS ── */}
                <Box
                    sx={{
                        mt: 10,
                        p: { xs: 4, md: 6 },
                        bgcolor: "#17745f",
                        borderRadius: "24px",
                        textAlign: "center",
                        color: "white",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Box sx={{ position: "absolute", top: -20, left: -20, w: 100, h: 100, bgcolor: "white", opacity: 0.05, borderRadius: "50%" }} />
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Still Have Questions?</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.8)", mb: 4, maxWidth: "500px", mx: "auto" }}>
                        Can’t find the answer you’re looking for?
                        Contact us and our team will get back to you shortly.
                    </Typography>
                    <Box
                        component="a"
                        href="/contact"
                        sx={{
                            display: "inline-block",
                            px: 6,
                            py: 2,
                            bgcolor: "#f5b000",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "full",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                            "&:hover": { bgcolor: "#e0a100", transform: "scale(1.05)" },
                        }}
                    >
                        Contact Us
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
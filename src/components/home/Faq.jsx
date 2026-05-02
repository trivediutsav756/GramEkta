import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
 
const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://gramekta.pythonanywhere.com";
 
export default function FAQSection() {
  const [expanded, setExpanded] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
 
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE}/faqs/`);
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        // API returns { data: [...] }
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
          bgcolor: "#f9fafb",
        }}
      >
        <CircularProgress sx={{ color: "#1a7a5e" }} />
      </Box>
    );
  }
 
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
          bgcolor: "#f9fafb",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography color="error">Failed to load FAQs. Please try again later.</Typography>
        <Typography variant="caption" color="text.secondary">
          {error}
        </Typography>
      </Box>
    );
  }
 
  if (!faqs.length) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
          bgcolor: "#f9fafb",
        }}
      >
        <Typography color="text.secondary">No FAQs available at the moment.</Typography>
      </Box>
    );
  }
 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        width: "100%",
        bgcolor: "#f9fafb",
        fontFamily: "'Nunito', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ── LEFT: Photo column ── */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", lg: "44%" },
          flexShrink: 0,
          overflow: "hidden",
          minHeight: { xs: 280, sm: 360, lg: 560 },
          transition: "none",
          "& *": { transition: "none !important" },
        }}
      >
        {/* Main background photo */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d"
          alt="Children"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "none",
            transition: "none",
          }}
          onError={(e) => (e.target.style.display = "none")}
        />
        {/* Fallback gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom right, #b45309, #78350f, #064e3b)",
            zIndex: -1,
            transition: "none",
          }}
        />
 
        {/* Colored hands icon */}
        <Box
          sx={{
            position: "absolute",
            right: 10,
            top: "38%",
            zIndex: 10,
            display: { xs: "none", sm: "block" },
          }}
        >
          <svg width="72" height="62" viewBox="0 0 72 62">
            <path d="M20 40 Q14 30 16 18 Q18 8 26 10 Q30 11 31 16 L32 35Z" fill="#f0a500" />
            <path d="M16 38 Q8 32 10 22 Q12 14 19 16 L22 38Z" fill="#f0a500" opacity="0.7" />
            <path d="M36 42 Q32 30 35 18 Q37 10 44 12 Q48 14 47 20 L46 40Z" fill="#e8e0d0" />
            <path d="M50 44 Q48 32 52 20 Q55 12 62 14 Q66 16 65 24 L62 44Z" fill="#2a7a2a" />
            <ellipse cx="36" cy="48" rx="24" ry="10" fill="#c8a050" opacity="0.4" />
          </svg>
        </Box>
 
        {/* White wave (mobile/tablet) */}
        {!isLg && (
          <Box
            component="svg"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              pointerEvents: "none",
              transition: "none",
            }}
            viewBox="0 0 400 40"
            preserveAspectRatio="none"
          >
            <path d="M0 40 Q100 0 200 20 Q300 40 400 10 L400 40Z" fill="white" />
          </Box>
        )}
 
        {/* Inset grayscale photo */}
        <Box
          sx={{
            position: "absolute",
            bottom: 32,
            right: { xs: 16, lg: -16 },
            zIndex: 20,
            width: { xs: 128, sm: 160, lg: 170 },
            height: { xs: 144, sm: 176, lg: 180 },
            borderRadius: 4,
            overflow: "hidden",
            border: "4px solid white",
            boxShadow: 8,
            transition: "none",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Child"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(100%)",
              transition: "none",
            }}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.backgroundColor = "#888";
            }}
          />
        </Box>
      </Box>
 
      {/* ── RIGHT: FAQ column (dynamic data) ── */}
      <Box
        sx={{
          flex: 1,
          px: { xs: 3, sm: 5, lg: 7 },
          py: { xs: 5, lg: 6 },
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
          <Typography
            variant="body2"
            sx={{ color: "#eab308", fontStyle: "italic", fontWeight: "bold" }}
          >
            Frequently Asked Questions
          </Typography>
          <Box sx={{ height: 2, width: 44, bgcolor: "#eab308", borderRadius: 1 }} />
        </Box>
 
        <Typography
          variant="h4"
          sx={{
            color: "#111827",
            fontWeight: 800,
            mb: { xs: 4, sm: 5 },
            fontSize: { xs: "1.5rem", sm: "1.875rem" },
            lineHeight: 1.3,
            pr: { xs: 4, sm: 0 },
          }}
        >
          Have Any Questions For Us?
        </Typography>
 
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {faqs.map((item, index) => (
            <Accordion
              key={item.id || index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                boxShadow: "none",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                "&:before": { display: "none" },
                bgcolor: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#0f766e" }} />}
                sx={{
                  px: { xs: 2, sm: 2.5 },
                  py: 1,
                  "& .MuiAccordionSummary-content": { my: 1.5 },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    color: "#111827",
                    fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                    pr: 2,
                  }}
                >
                  {item.questions}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: { xs: 2, sm: 2.5 }, pb: 2 }}>
                <Typography variant="body2" sx={{ color: "#9ca3af", lineHeight: 1.6 }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
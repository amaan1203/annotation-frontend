import React from "react";
import { useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../auth/auth";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";


const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f6f9fc 0%, #e8f0fe 100%)",
    padding: "2rem",
    fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
  },
  card: {
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
    padding: "2.5rem",
    maxWidth: "700px",
    width: "100%",
    color: "#2d3748",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "1.5rem",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "1.8rem",
  },
  section: {
    marginBottom: "1.8rem",
  },
  sectionTitle: {
    color: "#2b6cb0",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  sectionText: {
    color: "#4a5568",
    fontSize: "0.95rem",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "0.5rem",
    marginLeft: "1.5rem",
    color: "#4a5568",
    fontSize: "0.95rem",
  },
  link: {
    color: "#4299e1",
    textDecoration: "none",
    fontWeight: "600",
  },
  linkHover: {
    textDecoration: "underline",
  },
  footer: {
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#718096",
    borderTop: "1px solid #e2e8f0",
    paddingTop: "1rem",
    marginTop: "2rem",
  },
};

function SupportUs() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Support Us</h2>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Who We Are</h3>
          <p style={styles.sectionText}>
            We are a group of open-source developers and researchers dedicated to
            building annotation tools that help accelerate research and AI
            development. Our goal is to make data labeling accessible, efficient,
            and reliable for everyone.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Us</h3>
          <p style={styles.sectionText}>
            Have feedback, questions, or suggestions? Reach out to us via:
          </p>
          <ul style={styles.list}>
            <li>
              <strong>Email:</strong> support@meetthehorizon.org
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/meetthehorizon"
                style={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                meetthehorizon
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <a
                href="https://twitter.com/meetthehorizon"
                style={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                @meetthehorizon
              </a>
            </li>
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Browser Compatibility</h3>
          <p style={styles.sectionText}>
            Our platform performs best on the latest versions of these browsers:
          </p>
          <ul style={styles.list}>
            <li>Google Chrome (v90+)</li>
            <li>Mozilla Firefox (v88+)</li>
            <li>Microsoft Edge (v90+)</li>
            <li>Safari (v14+)</li>
          </ul>
          <p style={{ ...styles.sectionText, marginTop: "0.5rem", fontSize: "0.85rem" }}>
            For the best experience, make sure JavaScript and cookies are enabled.
          </p>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>How You Can Support</h3>
          <p style={styles.sectionText}>
            You can support our work and help us grow by:
          </p>
          <ul style={styles.list}>
            <li>
              ⭐ Starring our repositories on{" "}
              <a
                href="https://github.com/meetthehorizon"
                style={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>🧩 Contributing new features or fixing bugs</li>
            <li>💬 Sharing feedback and improvement ideas</li>
            <li>📢 Spreading the word about our platform</li>
          </ul>
        </div>

        <div style={styles.footer}>
          <p>
            © {new Date().getFullYear()} MeetTheHorizon — All Rights Reserved
          </p>
          <p>
            <Link to="/" style={styles.link}>
              Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportUs;

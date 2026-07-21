"use client";

import { useState, useEffect } from "react";

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<"know" | "closest" | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showNoSkip, setShowNoSkip] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  // Check if intro has been shown in the current session
  useEffect(() => {
    const isShown = sessionStorage.getItem("intro_shown");
    if (isShown) {
      onComplete();
    } else {
      setIsVisible(true);
    }
  }, [onComplete]);

  // Restart fade-in animation whenever slide changes
  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [currentSlide]);

  // Keyboard navigation support
  useEffect(() => {
    if (!isVisible || isExiting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleSkip();
      } else if (e.key === "Enter" || e.key === " ") {
        // Prevent default spacebar scrolling
        e.preventDefault();

        if (currentSlide === 2) {
          // Slide 3 requires a choice, don't auto-advance
          return;
        }

        if (currentSlide === 4) {
          handleFinish();
        } else {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, isVisible, isExiting]);

  useEffect(() => {
    if (!showNoSkip) return;
    const timer = setTimeout(() => {
      setShowNoSkip(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showNoSkip, shakeKey]);

  if (!isVisible) return null;

  const handleNext = () => {
    if (currentSlide < 4) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handleChoice = (choice: "know" | "closest") => {
    setSelectedChoice(choice);
    // Smooth transition to next slide
    setTimeout(() => {
      setCurrentSlide(3);
    }, 400);
  };

  const handleSkip = () => {
    setShowNoSkip(true);
    setShakeKey((prev) => prev + 1);
  };

  const handleFinish = () => {
    setIsExiting(true);
    sessionStorage.setItem("intro_shown", "true");
    setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 800);
  };

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 0:
        return (
          <>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
              Hi there, it’s nice to see you!
            </h1>
            <button className="intro-btn" onClick={handleNext}>
              Continue <span style={{ transition: "transform 0.2s" }}>→</span>
            </button>
          </>
        );
      case 1:
        return (
          <>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
              What brings you here today?
            </h1>
            <button className="intro-btn" onClick={handleNext}>
              Continue <span>→</span>
            </button>
          </>
        );
      case 2:
        return (
          <>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 4.5vw, 2.25rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.25 }}>
              Would you like to simply get to know me, or connect a little deeper?
            </h1>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <button
                className={`intro-btn-secondary ${selectedChoice === "know" ? "selected" : ""}`}
                onClick={() => handleChoice("know")}
              >
                🔍 Just vibing
              </button>
              <button
                className={`intro-btn-secondary ${selectedChoice === "closest" ? "selected" : ""}`}
                onClick={() => handleChoice("closest")}
              >
                ✨ Let’s get closer
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
              Thank you for stopping by 🤍
            </h1>
            <p style={{ fontSize: "16px", color: "var(--text2)", maxWidth: "440px", marginBottom: "2rem", lineHeight: 1.6 }}>
              {selectedChoice === "closest"
                ? "I truly appreciate your interest. Hit me up anytime — I’d love to stay in touch."
                : "No pressure, just chill & explore. Hope you like what you see!"}
            </p>
            <button className="intro-btn" onClick={handleNext}>
              Continue <span>→</span>
            </button>
          </>
        );
      case 4:
        return (
          <>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "var(--text)", marginBottom: "1rem", lineHeight: 1.2 }}>
              Wishing you a day filled with light, calm, and little moments of joy. Let's begin ✨
            </h1>
            <button className="intro-btn" onClick={handleFinish} style={{ padding: "14px 36px", fontSize: "15px" }}>
              🚀 Enter Workspace
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`intro-backdrop ${isExiting ? "exiting" : ""}`}>
      {/* Skip Button */}
      <button
        key={shakeKey}
        onClick={handleSkip}
        className={showNoSkip ? "intro-shake" : ""}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          background: showNoSkip ? "var(--bg3)" : "transparent",
          border: showNoSkip ? "1px solid var(--border)" : "none",
          color: showNoSkip ? "var(--text)" : "var(--text3)",
          fontSize: "13px",
          fontWeight: 500,
          cursor: "pointer",
          padding: "8px 16px",
          borderRadius: "8px",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          if (!showNoSkip) {
            e.currentTarget.style.color = "var(--text)";
            e.currentTarget.style.background = "var(--bg3)";
          }
        }}
        onMouseLeave={(e) => {
          if (!showNoSkip) {
            e.currentTarget.style.color = "var(--text3)";
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        {showNoSkip ? "sorry, no skipping 😅 this part matters" : "Skip Intro"}
      </button>

      {/* Main Slide Card */}
      <div
        key={animateKey}
        className="intro-card intro-animate-fade"
      >
        {renderSlideContent()}

        {/* Progress Dots */}
        <div className="intro-progress-container">
          {[0, 1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className={`intro-progress-dot ${currentSlide === idx ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

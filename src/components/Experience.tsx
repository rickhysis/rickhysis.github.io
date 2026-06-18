import { experienceData, type Experience, type MiniProject } from "@/data/experience";
import React from "react";

const MiniProject: React.FC<{ project: MiniProject }> = ({ project }) => {
    return (
        <div className="mini-project">
            <img src={project.image} alt={project.title} />
        </div>
    );
};

const ExperienceItem: React.FC<{ item: Experience }> = ({ item }) => {
    return (
        <div className="exp-item">
            <div className="exp-header">
                <h2>{item.company}</h2>
                <span className="exp-date">{item.date}</span>
            </div>

            <p className="exp-desc">{item.description}</p>

            {item.projects && (
                <div className="exp-projects">
                    {item.projects.map((p) => (
                        <MiniProject key={p.id} project={p} />
                    ))}
                </div>
            )}
        </div>
    );
};

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="exp-section">
            <div className="exp-container">
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.5rem" }}>Experience</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--text)", marginBottom: "1.5rem" }}>Latest Projects</h2>
                <div className="exp-list">
                    {experienceData.map((item) => (
                        <ExperienceItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
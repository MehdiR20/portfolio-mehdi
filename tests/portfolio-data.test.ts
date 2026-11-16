import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  experience,
  marquee,
  nav,
  projects,
  site,
  skillGroups,
} from "@/data/portfolio";
import { techIconRegistry } from "@/components/shared/TechIcon";

const publicPath = (p: string) => join(process.cwd(), "public", p.replace(/^\//, ""));

describe("portfolio data", () => {
  it("links to a CV file that exists", () => {
    expect(existsSync(publicPath(site.resumePath))).toBe(true);
  });

  it("uses unique ids for projects and experience", () => {
    const projectIds = projects.map((p) => p.id);
    const experienceIds = experience.map((e) => e.id);
    expect(new Set(projectIds).size).toBe(projectIds.length);
    expect(new Set(experienceIds).size).toBe(experienceIds.length);
  });

  it("references project images that exist", () => {
    for (const project of projects.filter((p) => p.image)) {
      expect(existsSync(publicPath(project.image!)), project.id).toBe(true);
    }
  });

  it("only uses absolute https links for live demos and code", () => {
    for (const project of projects) {
      for (const url of [project.live, project.github].filter(Boolean)) {
        expect(url, project.id).toMatch(/^https:\/\//);
      }
    }
  });

  it("points every nav item at a section anchor", () => {
    for (const item of nav) expect(item.href).toMatch(/^#[a-z-]+$/);
  });
});

describe("skills toolbox", () => {
  const allSkills = [...skillGroups.flatMap((g) => g.items), ...marquee];

  it("has an icon for every skill and marquee item", () => {
    const missing = allSkills.filter((skill) => !(skill in techIconRegistry));
    expect(missing).toEqual([]);
  });

  it("does not list a skill twice in the same group", () => {
    for (const group of skillGroups) {
      expect(new Set(group.items).size, group.title).toBe(group.items.length);
    }
  });
});

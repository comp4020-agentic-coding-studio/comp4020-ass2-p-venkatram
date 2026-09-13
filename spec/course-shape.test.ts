import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course shape", () => {
  it("gives every week 1-12 exactly one session and one lecture", () => {
    for (const type of ["sessions", "lectures"] as const) {
      const weeks = nodesOfType(type)
        .map((node) => node.meta?.week)
        .sort((a, b) => Number(a) - Number(b));
      expect(weeks, `${type} weeks`).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    }
  });

  it("sums assessment weights to exactly 100", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, node) => sum + Number(node.meta?.weight ?? 0),
      0,
    );
    expect(total).toBe(100);
  });

  it("gives at least one lecture a real slide deck", () => {
    const withSlides = nodesOfType("lectures").filter(
      (node) => typeof node.meta?.slides === "string" && /^\/decks\/[a-z0-9-]+\/$/.test(node.meta.slides as string),
    );
    expect(withSlides.length).toBeGreaterThanOrEqual(1);
  });
});

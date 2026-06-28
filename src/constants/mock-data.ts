import { Subject } from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS301",
    name: "Data Structures and Algorithms",
    department: "CS",
    description:
      "Covers fundamental data structures (arrays, trees, graphs, hash tables) and algorithm design techniques including sorting, searching, and dynamic programming.",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description:
      "Continuation of Calculus I, covering integral calculus, techniques of integration, sequences, series, and an introduction to multivariable calculus.",
    createdAt: "2024-01-01",
  },
  {
    id: 3,
    code: "ENG102",
    name: "Technical Writing",
    department: "English",
    description:
      "Develops skills in writing clear, concise technical documents including reports, proposals, and documentation for professional and academic audiences.",
    createdAt: "2024-01-01",
  },
]

# Data Structures & Algorithms — VisuAlgo Self-Assessment

Checkpoint — explore [VisuAlgo](https://visualgo.net/) and report on my familiarity with the data structures and sorting algorithms presented there.

## About the Task

The goal of this checkpoint is to:

1. Explore the interactive visualizations on [visualgo.net](https://visualgo.net/).
2. Test and try each data structure and sorting algorithm.
3. Identify the ones I am not yet fully comfortable with and explain why.

---

## Part 1 — Sorting Algorithms

VisuAlgo's [Sorting module](https://visualgo.net/en/sorting) covers the following algorithms:

| Algorithm | Familiarity | Notes |
|---|---|---|
| Bubble Sort | ✅ Comfortable | Simple comparison/swap logic. |
| Selection Sort | ✅ Comfortable | Repeatedly pick the smallest element. |
| Insertion Sort | ✅ Comfortable | Implemented it in a previous checkpoint. |
| Merge Sort | ⚠️ Partially | I understand the divide-and-conquer idea but still get confused when implementing the merge step recursively. |
| Quick Sort | ⚠️ Partially | I get the pivot concept, but the partitioning logic and worst-case cases are still fuzzy. |
| Randomized Quick Sort | ❌ Not yet | New to me — I need to understand why randomizing the pivot helps avoid worst-case O(n²). |
| Counting Sort | ❌ Not yet | Non-comparison sort. I don't yet see clearly when to use it vs. comparison-based sorts. |
| Radix Sort | ❌ Not yet | I haven't studied digit-by-digit sorting yet. |

---

## Part 2 — Data Structures

### Familiar with

- **Array** — fundamental, used daily.
- **Linked List** — I understand singly/doubly linked lists and basic operations.
- **Stack / Queue** — comfortable with push/pop and enqueue/dequeue.
- **Hash Table** — I use hash maps regularly, but the internals (collisions, probing) are still not 100% clear to me.

### Not yet mastered

| Data Structure | Why I'm not yet comfortable |
|---|---|
| **Binary Heap** | I understand the concept of a priority queue but haven't practiced heap operations (heapify, insert, extract-min) by hand. |
| **Binary Search Tree / AVL** | Basic BST insertion is fine; self-balancing (rotations in AVL) is still confusing. |
| **Graph Structures** | I can draw graphs but I haven't implemented adjacency lists/matrices in real projects yet. |
| **Union-Find (Disjoint Set)** | New concept for me. Path compression and union by rank need more practice. |
| **Fenwick Tree (BIT)** | Completely new — I've never used it. |
| **Segment Tree** | New — range queries/updates concept is unclear. |
| **Suffix Tree / Suffix Array** | String-matching structures I haven't studied. |

---

## Part 3 — Advanced Algorithms

These are the modules I consider **out of scope for now**, but good to know they exist:

- **Graph Traversal (BFS / DFS)** — I know the idea but haven't implemented them.
- **Minimum Spanning Tree (Prim / Kruskal)** — theoretical understanding only.
- **Single-Source Shortest Path (Dijkstra, Bellman-Ford)** — new to me.
- **Cycle Finding (Floyd's tortoise-and-hare)** — unfamiliar.
- **Network Flow / Graph Matching / Min Vertex Cover / Steiner Tree / TSP** — advanced topics I haven't touched.
- **Convex Hull / Geometry / NP-complete Reductions** — out of my current scope.

---

## Why I'm Not Yet Mastering These

The main reasons I haven't mastered the topics above:

- **Lack of hands-on practice** — I've seen some of them in theory but haven't implemented them from scratch.
- **They go beyond what my projects require today** — as a full-stack developer, I mostly work with arrays, objects, and hash maps. Trees and graphs rarely come up in my day-to-day work.
- **Math-heavy topics** (network flow, NP-complete reductions, computational geometry) need dedicated study time.
- **I'm at the beginning of the DSA journey** in this GoMyCode program, so advanced structures will come step by step.

---

## Next Steps

To improve, I plan to:

1. Revisit Merge Sort and Quick Sort and implement them in JavaScript.
2. Practice heap, BST, and basic graph traversal on VisuAlgo's training mode.
3. Solve coding problems that use these structures (e.g., LeetCode easy/medium).
4. Come back to advanced structures (segment tree, union-find) once the basics are solid.

---

## Author

Nour-Eddine Nafzaoui

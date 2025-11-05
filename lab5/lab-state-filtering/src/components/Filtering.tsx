import { useMemo, useState } from "react";
import styles from "./Filtering.module.css";

type Student = { name: string; age: number; year: number };
type SortField = "name" | "age" | "year";

const STUDENTS: Student[] = [
  { name: "Jacob",     age: 21, year: 2 },
  { name: "Jan",       age: 20, year: 1 },
  { name: "Joris",     age: 22, year: 3 },
  { name: "Joris",     age: 22, year: 3 },
  { name: "Korneel",   age: 23, year: 4 },
  { name: "Mathias",   age: 22, year: 3 },
  { name: "Muhammad",  age: 20, year: 1 },
  { name: "Perneel",   age: 22, year: 3 },
  { name: "Piet",      age: 21, year: 2 },
];

export default function Filtering() {
  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField]   = useState<SortField>("name");

  const filteredAndSorted = useMemo(() => {
    const q = searchText.trim().toLowerCase();

    const filtered = q
      ? STUDENTS.filter(s => s.name.toLowerCase().includes(q))
      : STUDENTS.slice();

    return filtered.sort((a, b) => {
      const A = a[sortField];
      const B = b[sortField];
      if (typeof A === "string" && typeof B === "string") {
        return A.localeCompare(B, undefined, { sensitivity: "base" });
      }
      return (A as number) - (B as number);
    });
  }, [searchText, sortField]);

  return (
    <div className={styles.wrap}>
      <label className={styles.search}>
        <span>Search:</span>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="type a name…"
        />
      </label>

      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => setSortField("name")} className={sortField === "name" ? styles.active : ""}>Name</th>
            <th onClick={() => setSortField("age")}  className={sortField === "age"  ? styles.active : ""}>Age</th>
            <th onClick={() => setSortField("year")} className={sortField === "year" ? styles.active : ""}>Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSorted.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

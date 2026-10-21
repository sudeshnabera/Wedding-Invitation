
import "./WeddingDivider.css";

export default function WeddingDivider({
  variant = "lotus",
  tone = "gold",
}) {
  return (
    <div
      className={`wedding-divider divider-${variant} tone-${tone}`}
      aria-hidden="true"
    >
      <span className="divider-line" />

      <svg
        className="divider-ornament"
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant === "lotus" && (
          <g
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M50 39 C34 33 29 21 30 12 C41 17 48 26 50 39Z" />
            <path d="M50 39 C66 33 71 21 70 12 C59 17 52 26 50 39Z" />
            <path d="M50 39 C40 29 40 18 50 8 C60 18 60 29 50 39Z" />
            <path d="M32 39 Q50 45 68 39" />
            <path d="M22 39 Q28 33 34 39 Q28 45 22 39Z" />
            <path d="M78 39 Q72 33 66 39 Q72 45 78 39Z" />
          </g>
        )}

        {variant === "filigree" && (
          <g
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          >
            <path d="M50 25 L58 17 L50 9 L42 17 Z" />
            <path d="M50 41 L56 35 L50 29 L44 35 Z" />
            <path d="M39 25 C27 9 18 37 38 34" />
            <path d="M61 25 C73 9 82 37 62 34" />
            <circle cx="50" cy="25" r="2" />
          </g>
        )}

        {variant === "seal" && (
          <g
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          >
            <circle cx="50" cy="25" r="19" />
            <circle cx="50" cy="25" r="14" />
            <path d="M50 12 C41 20 43 27 50 32 C57 27 59 20 50 12Z" />
            <path d="M34 25 Q42 20 44 25 Q42 30 34 25Z" />
            <path d="M66 25 Q58 20 56 25 Q58 30 66 25Z" />
          </g>
        )}

        {variant === "shankha" && (
          <g
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M25 28 C20 15 33 10 43 18 L50 27 L39 36 C33 40 27 35 25 28Z" />
            <path d="M32 20 Q36 25 32 31" />
            <path d="M38 19 Q43 25 38 34" />
            <path d="M75 28 C80 15 67 10 57 18 L50 27 L61 36 C67 40 73 35 75 28Z" />
            <path d="M68 20 Q64 25 68 31" />
            <path d="M62 19 Q57 25 62 34" />
          </g>
        )}
      </svg>

      <span className="divider-line" />
    </div>
  );
}

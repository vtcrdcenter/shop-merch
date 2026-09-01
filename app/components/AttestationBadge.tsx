export type AttestationStatus =
  | "verified"
  | "pending"
  | "not-available";

export type AttestationData = {
  status: AttestationStatus;

  organization?: string;

  code?: string;

  date?: string;

  label?: string;
};

type AttestationBadgeProps = {
  attestation: AttestationData;

  compact?: boolean;

  className?: string;
};

function getStatusLabel(
  status: AttestationStatus,
) {
  switch (status) {
    case "verified":
      return "Đã bảo chứng";

    case "pending":
      return "Đang thẩm định";

    case "not-available":
    default:
      return "Chưa có bảo chứng";
  }
}

export default function AttestationBadge({
  attestation,
  compact = false,
  className = "",
}: AttestationBadgeProps) {
  const statusLabel =
    attestation.label ??
    getStatusLabel(attestation.status);

  return (
    <div
      className={[
        "attestation-badge",
        `attestation-badge--${attestation.status}`,
        compact
          ? "attestation-badge--compact"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="attestation-badge__mark"
        aria-hidden="true"
      >
        {attestation.status === "verified"
          ? "✓"
          : attestation.status === "pending"
            ? "…"
            : "—"}
      </div>

      <div className="attestation-badge__content">
        <span className="attestation-badge__label">
          {statusLabel}
        </span>

        {!compact &&
          attestation.organization && (
            <span className="attestation-badge__organization">
              {attestation.organization}
            </span>
          )}

        {!compact &&
          (attestation.code ||
            attestation.date) && (
            <span className="attestation-badge__meta">
              {attestation.code && (
                <>
                  Mã: {attestation.code}
                </>
              )}

              {attestation.code &&
                attestation.date && (
                  <span aria-hidden="true">
                    {" "}
                    ·{" "}
                  </span>
                )}

              {attestation.date && (
                <>
                  {attestation.date}
                </>
              )}
            </span>
          )}
      </div>
    </div>
  );
}

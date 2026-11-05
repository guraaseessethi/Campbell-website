import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Campbell's British Tearoom, Barrie, Ontario";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const font = await readFile(path.join(process.cwd(), "node_modules/@fontsource/gloock/files/gloock-latin-400-normal.woff"));
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", background: "#F6EFE2", color: "#3A2A1F", padding: 72 }}>
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#213F80" }}>Barrie, Ontario</div>
        <div style={{ fontSize: 112, lineHeight: 1, letterSpacing: -3, fontFamily: "Gloock" }}>Campbell&apos;s British Tearoom</div>
        <div style={{ fontSize: 32, color: "#9E2246" }}>Afternoon tea, breakfast and lunch on Burton Ave</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Gloock", data: font, style: "normal", weight: 400 }] },
  );
}

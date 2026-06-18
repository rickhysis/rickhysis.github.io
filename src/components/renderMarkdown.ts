export function renderMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2 style="font-size:18px;font-weight:600;color:var(--text);margin:1.5rem 0 0.5rem">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size:15px;font-weight:600;color:var(--text);margin:1.25rem 0 0.4rem">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text);font-weight:600">$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code style="font-family:monospace;font-size:13px;background:var(--bg3);padding:2px 6px;border-radius:4px;color:var(--accent)">$1</code>')
    .replace(/!\[([^\]]*?)\]\((.+?)\)/g, '<img src="$2" alt="$1" style="max-width:100%;height:auto;border-radius:8px;margin:1.5rem 0;display:block" />')
    .replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
      `<pre style="background:var(--bg2);border-radius:8px;padding:1rem;overflow-x:auto;margin:1rem 0;border:0.5px solid var(--border);font-size:13px;line-height:1.6"><code style="font-family:monospace;color:var(--text2)">${code.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
    )
    .replace(/\n\n/g, '</p><p style="margin-bottom:1rem;color:var(--text2);line-height:1.85">')
    .replace(/^(?!<[h|p|pre])(.+)$/gm, (line) => line ? line : "")
    .replace(/^(.)/m, '<p style="margin-bottom:1rem;color:var(--text2);line-height:1.85">$1')
    + "</p>";
}

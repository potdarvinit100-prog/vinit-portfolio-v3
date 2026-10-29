import { useEffect, useRef, useState } from "react";
import { Sparkles, X, Send, Bot, User, Eye } from "lucide-react";
import { knowledgeBase, profile } from "../data";

interface Msg {
  role: "bot" | "user";
  text: string;
}

const STOP = new Set([
  "the", "a", "an", "is", "are", "what", "who", "how", "does", "do", "did",
  "can", "could", "would", "should", "i", "me", "my", "you", "your", "he",
  "his", "him", "it", "its", "and", "or", "of", "in", "on", "at", "to",
  "for", "with", "about", "tell", "know", "want", "like", "has", "have",
  "been", "was", "were", "be", "by", "as", "from", "that", "this",
]);

function tokenize(q: string): string[] {
  return q
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 2 && !STOP.has(t));
}

/* Retrieval: score KB chunks by keyword overlap, return top 2 */
function retrieve(query: string) {
  const tokens = tokenize(query);
  const scored = knowledgeBase.map((chunk) => {
    let score = 0;
    for (const t of tokens) {
      for (const kw of chunk.keywords) {
        if (kw.includes(t) || t.includes(kw)) score += kw === t ? 3 : 1;
      }
      if (chunk.text.toLowerCase().includes(t)) score += 0.5;
    }
    return { chunk, score };
  });
  scored.sort((a, b) => b.score - a.score);
  return scored.filter((s) => s.score > 0).slice(0, 2);
}

/* Generation: compose an answer from retrieved chunks */
function generate(query: string): string {
  const hits = retrieve(query);
  if (hits.length === 0) {
    return "I can tell you about Vinit's projects (LegacyShift AI, BugSense, HMPV detection, Voxa), his skills, experience, education, achievements, availability, or how to contact him — what would you like to know?";
  }
  const [best, second] = hits;
  let answer = best.chunk.text;
  if (second && second.score >= best.score * 0.6 && second.chunk.id !== best.chunk.id) {
    answer += " " + second.chunk.text;
  }
  void query;
  return answer;
}

const SUGGESTIONS = [
  "What are his best projects?",
  "What is his experience?",
  "How do I contact him?",
  "What are his skills?",
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hey! I'm Vinit's Friend — ask me anything about Vinit: his projects, skills, experience, or how to reach him.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const streamRef = useRef<number | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  useEffect(() => {
    return () => {
      if (streamRef.current) window.clearInterval(streamRef.current);
    };
  }, []);

  const send = (raw?: string) => {
    const q = (raw ?? input).trim();
    if (!q || typing) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setTyping(true);
    // simulate retrieval + streaming generation
    setTimeout(() => {
      const full = generate(q);
      let i = 0;
      setMsgs((m) => [...m, { role: "bot", text: "" }]);
      streamRef.current = window.setInterval(() => {
        i += 3;
        const slice = full.slice(0, i);
        setMsgs((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "bot", text: slice };
          return copy;
        });
        if (i >= full.length) {
          if (streamRef.current) window.clearInterval(streamRef.current);
          setTyping(false);
        }
      }, 18);
    }, 450);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with Vinit's Friend"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-ink flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(139,123,255,0.7)] hover:scale-105 transition-transform"
      >
        {open ? <X size={22} /> : <Sparkles size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[480px] max-h-[70vh] glass border border-line rounded-2xl flex flex-col overflow-hidden shadow-2xl">
          <div className="px-5 py-4 border-b border-line flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
              <Bot size={18} className="text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-display font-semibold text-sm">Vinit's Friend</p>
              <p className="text-xs text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent2 inline-block" />
                Ask me anything about Vinit
              </p>
            </div>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium border border-line rounded-full px-3 py-1.5 text-muted hover:border-accent hover:text-fg transition-colors"
            >
              <Eye size={13} /> View CV
            </a>
          </div>

          <div className="flex-1 overflow-y-auto chat-scroll px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot size={14} className="text-accent" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-accent text-ink"
                      : "bg-panel border border-line text-muted"
                  }`}
                >
                  {m.text}
                  {m.role === "user" && <User size={0} className="hidden" />}
                </div>
              </div>
            ))}
            {typing && msgs[msgs.length - 1]?.role !== "bot" && (
              <div className="flex gap-2">
                <div className="bg-panel border border-line rounded-2xl px-4 py-2.5 text-sm text-muted">
                  thinking…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {msgs.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs border border-line rounded-full px-3 py-1.5 text-muted hover:border-accent hover:text-fg transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-line flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask about Vinit…"
              className="flex-1 bg-ink border border-line rounded-full px-4 py-2.5 text-sm outline-none focus:border-accent placeholder:text-muted/60"
            />
            <button
              onClick={() => send()}
              aria-label="Send"
              className="w-10 h-10 rounded-full bg-accent text-ink flex items-center justify-center shrink-0 hover:opacity-90"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

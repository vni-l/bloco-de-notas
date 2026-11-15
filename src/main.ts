const titleInput = document.querySelector<HTMLInputElement>("#note-title");
const noteBody = document.querySelector<HTMLTextAreaElement>("#note-body");
const wordCount = document.querySelector<HTMLElement>("#word-count");
const breadcrumbTitle = document.querySelector<HTMLElement>("#breadcrumb-title");
const newNoteButton = document.querySelector<HTMLButtonElement>("#new-note");

function updateEditorStatus(): void {
  if (!titleInput || !noteBody || !wordCount || !breadcrumbTitle) return;

  const title = titleInput.value.trim();
  const content = noteBody.value;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const wordLabel = words === 1 ? "palavra" : "palavras";

  breadcrumbTitle.textContent = title || "Nova nota";
  wordCount.textContent = `${words} ${wordLabel} · ${content.length} caracteres`;
}

titleInput?.addEventListener("input", updateEditorStatus);
noteBody?.addEventListener("input", updateEditorStatus);

newNoteButton?.addEventListener("click", () => {
  if (!titleInput || !noteBody) return;

  titleInput.value = "";
  noteBody.value = "";
  updateEditorStatus();
  titleInput.focus();
});

updateEditorStatus();

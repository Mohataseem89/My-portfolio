import styles from './OpenSourceStyles.module.css';

const contributions = [
  {
    repo: "ubuntu/ubuntu-project-docs",
    pr: "#644",
    title: "Fix broken Jenkins link in Squid SRU exception page",
    description: "Corrected a broken documentation link in the Ubuntu project docs, improving developer onboarding experience.",
    link: "https://github.com/ubuntu/ubuntu-project-docs/pull/644",
    tags: ["Documentation", "Ubuntu"],
  },
  {
    repo: "tesseract-ocr/tesseract",
    pr: "#4509",
    title: "Remove outdated docker-compose.yml",
    description: "Removed a stale docker-compose.yml file that was no longer maintained and causing confusion for contributors.",
    link: "https://github.com/tesseract-ocr/tesseract/pull/4509",
    tags: ["Docker", "Cleanup"],
  },
  {
    repo: "getsentry/sentry-javascript",
    pr: "#18492",
    title: "Fix install-bun.js version check and improve upgrade feedback",
    description: "Fixed a version detection bug in the Bun installer script and improved user-facing upgrade messages.",
    link: "https://github.com/getsentry/sentry-javascript/pull/18492",
    tags: ["JavaScript", "Tooling", "Sentry"],
  },
  {
    repo: "numpy/numpy",
    pr: "#30317",
    title: "BLD: Update descriptions of build options in meson.options",
    description: "Improved clarity of build option descriptions in NumPy's Meson build system for better contributor experience.",
    link: "https://github.com/numpy/numpy/pull/30317",
    tags: ["Python", "Build System", "NumPy"],
  },
  {
    repo: "supabase/supabase",
    pr: "#34143",
    title: "Update DEVELOPERS.md",
    description: "Improved the developer setup documentation to reflect current tooling and contribution workflows.",
    link: "https://github.com/supabase/supabase/pull/34143",
    tags: ["Documentation", "Supabase"],
  },
  {
    repo: "ianstormtaylor/slate",
    pr: "#5818",
    title: "Update scrubber.md",
    description: "Updated documentation for Slate's scrubber utility with accurate API details and usage examples.",
    link: "https://github.com/ianstormtaylor/slate/pull/5818",
    tags: ["Documentation", "Slate"],
  },
];

function OpenSource() {
  return (
    <section id="opensource" className={styles.container}>
      <p className={styles.label}>Open Source</p>
      <p className={styles.intro}>
        Merged pull requests across production codebases — NumPy, Sentry, Supabase, Tesseract, and more.
      </p>

      <div className={styles.list}>
        {contributions.map((c, i) => (
          <div key={i} className={styles.entry}>
            <div className={styles.entryHeader}>
              <div className={styles.meta}>
                <span className={styles.repo}>{c.repo}</span>
                <span className={styles.pr}>{c.pr}</span>
                <span className={styles.merged}>merged</span>
              </div>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className={styles.prLink}>
                View PR ↗
              </a>
            </div>
            <p className={styles.title}>{c.title}</p>
            <p className={styles.desc}>{c.description}</p>
            <div className={styles.tags}>
              {c.tags.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      
        href="https://github.com/pulls/authored?q=is%3Apr+author%3A%40me+state%3Amerged+archived%3Afalse+sort%3Aupdated-desc"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.viewAll}
      >
        View all merged PRs ↗
      </a>
    </section>
  );
}

export default OpenSource;

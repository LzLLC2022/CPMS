# CTAF CPMS Sitemap

This document outlines the directory and routing structure of the CTAF CPMS Next.js application.

```text
/ (Home / Landing Page)
├── login (Login Page)
├── terms (Terms and Conditions)
├── privacy (Privacy Policy)
├── classification (Classification Page - Secretariat only)
├── proposal (Proposal Main)
│   ├── registration (Proposal Registration Form)
│   └── status (Proposal Status Check)
├── proposal-list 
│   ├── regional-director (Proposal List for Regional Directors)
│   └── secretariat (Proposal List for the Secretariat)
└── notice (Notice & News Hub)
    ├── notices (Official Notices List)
    │   └── [id] (Notice Detail View)
    └── news (News List)
        └── [id] (News Detail View)
```

---

*Note: This sitemap represents the current state of the application as defined by the `src/app` directory.*

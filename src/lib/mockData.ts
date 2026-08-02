export interface NoticeItem {
  id: string;
  title: string;
  author: string;
  date: string;
  views: number;
  content: string;
}

export const mockNotices: NoticeItem[] = [
  {
    id: "n1",
    title: "[Important] 2026 CTAF Global Project Submission Guidelines",
    author: "Secretariat",
    date: "2026-08-01",
    views: 145,
    content: "Please read the updated submission guidelines for the 2026 Climate Technology Accelerator Fund projects. Ensure all required documents are attached before final submission.",
  },
  {
    id: "n2",
    title: "System Maintenance Schedule (Aug 15th)",
    author: "IT Support",
    date: "2026-07-28",
    views: 89,
    content: "The CPMS portal will undergo scheduled maintenance on August 15th, 2026 from 02:00 AM to 06:00 AM (KST). Submission features will be temporarily unavailable.",
  },
  {
    id: "n3",
    title: "Updated Evaluation Criteria for Renewable Energy Proposals",
    author: "Secretariat",
    date: "2026-07-20",
    views: 210,
    content: "We have updated the evaluation criteria for the Renewable Energy track. Please review the updated rubric in the resources section.",
  },
];

export const mockNews: NoticeItem[] = [
  {
    id: "news1",
    title: "CTAF Reaches KRW 21 Billion Commitment Milestone",
    author: "Admin",
    date: "2026-08-02",
    views: 56,
    content: "The Climate Technology Accelerator Fund (CTAF) has successfully secured its KRW 21 billion commitment to support high-impact climate solutions over the next seven years.",
  },
  {
    id: "news2",
    title: "GGGI and MSIT Announce Joint Initiative Launch",
    author: "Admin",
    date: "2026-07-25",
    views: 120,
    content: "The Global Green Growth Institute (GGGI) and Korea’s Ministry of Science and ICT (MSIT) officially launched the CTAF program in Seoul today.",
  },
  {
    id: "news3",
    title: "Three New Global Demonstration Projects Approved",
    author: "Admin",
    date: "2026-07-15",
    views: 340,
    content: "We are excited to announce that three new international demonstration projects in Southeast Asia have been approved for Q3 funding.",
  },
];

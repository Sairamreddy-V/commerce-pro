import { 
  BookOpen, 
  FileSpreadsheet, 
  Calculator, 
  FileCheck, 
  Receipt, 
  MessageSquare 
} from 'lucide-react';

export const courses = [
  {
    icon: FileSpreadsheet,
    title: "Accounting Packages",
    description: "Master Tally ERP, QuickBooks, and SAP FI basics"
  },
  {
    icon: Calculator,
    title: "Book Keeping",
    description: "Learn monthly, semi-annual, and annual book closing"
  },
  {
    icon: Receipt,
    title: "Payroll & Returns",
    description: "Handle ESI, PF, PT, TDS filing processes"
  },
  {
    icon: FileCheck,
    title: "Tax Returns",
    description: "File TDS returns and Income Tax Returns (ITR 1-7)"
  },
  {
    icon: BookOpen,
    title: "Tax Audit",
    description: "Understand various types of tax audit reports"
  },
  {
    icon: MessageSquare,
    title: "Soft Skills",
    description: "Corporate communication and interview preparation"
  }
] as const;
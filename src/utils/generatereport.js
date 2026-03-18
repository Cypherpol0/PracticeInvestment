import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";

export function generatePDFReport(data) {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Investment Report", 10, 10);

    doc.setFontSize(12);
    doc.text(`Initial Investment: $${data.initialInvestment.toFixed(2)}`, 10, 30);
    doc.text(`Annual Investment: $${data.annualInvestment.toFixed(2)}`, 10, 40);
    doc.text(`Expected Return: ${data.expectedReturn.toFixed(2)}%`, 10, 50);
    doc.text(`Years Invested: ${data.yearsInvested}`, 10, 60);

    let yOffset = 80;
    const pageHeight = doc.internal.pageSize.height;
} 
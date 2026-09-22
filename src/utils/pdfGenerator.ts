import { jsPDF } from 'jspdf';
import { SERVICE_CATEGORIES } from '../data/servicesData';
import { Language } from '../types';

export interface GeneratePdfOptions {
  customerMobile?: string;
  lang?: Language;
}

export const generateServicesPdf = (options: GeneratePdfOptions = {}): jsPDF => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297mm
  let y = 14;

  // 1. Header Banner (Deep Navy Blue #0F274A)
  doc.setFillColor(15, 39, 74);
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Decorative Golden Saffron Stripe
  doc.setFillColor(234, 88, 12);
  doc.rect(0, 38, pageWidth, 2.5, 'F');

  // Brand Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text('SUCCESS COMPUTECH', pageWidth / 2, y, { align: 'center' });

  y += 6;
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(254, 215, 170); // Warm amber
  doc.text('GOVERNMENT DIGITAL SERVICES • DOCUMENTATION • ONLINE APPLICATIONS', pageWidth / 2, y, { align: 'center' });

  y += 5;
  doc.setFontSize(8);
  doc.setTextColor(226, 232, 240);
  doc.text('Opp. New Bus Stand / Main Road, Tiruppur - 641602 | WhatsApp & Call: +91 73731 88844', pageWidth / 2, y, { align: 'center' });

  y += 4.5;
  doc.setFontSize(7.5);
  doc.setTextColor(147, 197, 253);
  doc.text('Office Hours: 9:00 AM - 9:00 PM (Open All 7 Days) | 100% WhatsApp Remote Processing Available', pageWidth / 2, y, { align: 'center' });

  y = 46;

  // Customer reference if provided
  if (options.customerMobile) {
    doc.setFillColor(241, 245, 249);
    doc.roundedRect(12, y, pageWidth - 24, 7, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    doc.text(`Official Service Brochure prepared for WhatsApp: +91 ${options.customerMobile}`, 16, y + 4.8);
    doc.setFont('helvetica', 'normal');
    doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, pageWidth - 16, y + 4.8, { align: 'right' });
    y += 11;
  } else {
    y += 2;
  }

  // Section Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 39, 74);
  doc.text('OFFICIAL SERVICES CATALOGUE & DOCUMENT CHECKLIST', 12, y);

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(12, y + 2, pageWidth - 12, y + 2);
  y += 6;

  // Render Services by Category
  SERVICE_CATEGORIES.forEach((category) => {
    // Check for page overflow
    if (y > pageHeight - 35) {
      doc.addPage();
      y = 15;
      // mini header on subsequent pages
      doc.setFillColor(15, 39, 74);
      doc.rect(0, 0, pageWidth, 12, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(255, 255, 255);
      doc.text('SUCCESS COMPUTECH - SERVICES CATALOGUE (WhatsApp: +91 73731 88844)', pageWidth / 2, 8, { align: 'center' });
      y = 18;
    }

    // Category Header Box
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(12, y, pageWidth - 24, 6, 1, 1, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(194, 65, 12); // Orange dark
    doc.text(category.title_en.toUpperCase(), 15, y + 4.2);

    y += 8;

    category.services.forEach((srv) => {
      // Check for page overflow
      if (y > pageHeight - 28) {
        doc.addPage();
        y = 18;
        doc.setFillColor(15, 39, 74);
        doc.rect(0, 0, pageWidth, 12, 'F');
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.text('SUCCESS COMPUTECH - SERVICES CATALOGUE (WhatsApp: +91 73731 88844)', pageWidth / 2, 8, { align: 'center' });
        y = 20;
      }

      // Service Title & Processing Time
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text(`• ${srv.name_en}`, 14, y);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(71, 85, 105);
      doc.text(`[Time: ${srv.processingTime_en}]`, pageWidth - 14, y, { align: 'right' });

      y += 3.8;

      // Sub-services / description
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      const descLines = doc.splitTextToSize(`Services: ${srv.subServices_en.slice(0, 4).join(', ')}`, pageWidth - 32);
      doc.text(descLines, 18, y);
      y += descLines.length * 3.2;

      // Documents Required
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.8);
      doc.setTextColor(16, 185, 129); // Green
      const docsText = `Docs: ${srv.requiredDocuments_en.slice(0, 3).join(' | ')}`;
      const docLines = doc.splitTextToSize(docsText, pageWidth - 32);
      doc.text(docLines, 18, y);
      y += docLines.length * 3.2 + 2;
    });

    y += 2;
  });

  // Footer on current / last page
  const footerY = pageHeight - 14;
  doc.setFillColor(15, 39, 74);
  doc.rect(0, footerY, pageWidth, 14, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(255, 255, 255);
  doc.text('For Instant Service & Status: WhatsApp / Call +91 73731 88844', 12, footerY + 5.5);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.5);
  doc.setTextColor(203, 213, 225);
  doc.text('Visit: Opp. New Bus Stand, Tiruppur | Open 7 Days 9:00 AM - 9:00 PM', 12, footerY + 10);
  doc.text('Success Computech - Trusted Digital Partner', pageWidth - 12, footerY + 8, { align: 'right' });

  return doc;
};

export const downloadServicesPdf = (customerMobile?: string): void => {
  const doc = generateServicesPdf({ customerMobile });
  const filename = customerMobile
    ? `Success_Computech_Services_${customerMobile}.pdf`
    : 'Success_Computech_Services_List.pdf';
  doc.save(filename);
};

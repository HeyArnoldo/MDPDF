import React from 'react'
import html2pdf from 'html2pdf.js'
import { Button } from '@/components/ui/button' // Asegúrate de tener configurado shadcn/ui

function ExportPDF() {
  const handleExportPDF = () => {
    const element = document.getElementById('preview')
    if (element) {
      html2pdf()
        .set({
          margin: 0.5,
          filename: 'documento.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(element)
        .save()
    }
  }

  return (
    <Button onClick={handleExportPDF} className="mt-4">
      Descargar PDF
    </Button>
  )
}

export default ExportPDF

import PyPDF2
import sys

def extract_pdf_text(pdf_path):
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page_num in range(len(pdf_reader.pages)):
                page = pdf_reader.pages[page_num]
                text += page.extract_text()
            return text
    except Exception as e:
        print(f"Error: {str(e)}")
        return None

if __name__ == "__main__":
    pdf_file = "COMM-Website-Restructure-RFP-7-10-25.pdf"
    extracted_text = extract_pdf_text(pdf_file)
    
    if extracted_text:
        output_file = pdf_file.replace('.pdf', '.txt')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(extracted_text)
        print(f"Text extracted successfully to {output_file}")
    else:
        print("Failed to extract text from PDF")